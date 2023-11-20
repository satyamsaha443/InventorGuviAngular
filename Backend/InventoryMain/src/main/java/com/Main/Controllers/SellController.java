package com.Main.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.Main.Repository.ClientRepository;
import com.Main.Services.SellService;
import com.Main.models.Client;
import com.Main.models.Sell;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/sells")
public class SellController {

    @Autowired
    private SellService sellService;
    
    @Autowired 
    private ClientRepository clientRepository;

//    @GetMapping("/all")
//    public List<Sell> getAllSells() {
//        return sellService.getAllSells();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Sell> getSellById(@PathVariable String id) {
//        return sellService.getSellById(id)
//                .map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @PostMapping("/create")
//    public Sell createSell(@RequestBody Sell sell) {
//        return sellService.createSell(sell);
//    }
    
    @PostMapping("/create")
    public ResponseEntity<?> createSellWithClient(@Validated @RequestBody Sell sell, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Client clientFromSell = sell.getCustomer(); // Get the client object from the sell
        if (clientFromSell != null) {
            // Create a new client object from the data in the Sell object
            // Assuming these methods exist in your Client class
            Client client = new Client(clientFromSell.getCustomer_name(), clientFromSell.getCustomer_phone(),
                                       clientFromSell.getCustomer_address(), clientFromSell.getCustomer_email(),
                                       clientFromSell.getStatus_id(), clientFromSell.getCustomer_description());

            // Save the new client object to the database
            client = clientRepository.save(client);

            // Associate the new client object with the sell object
            sell.setCustomer(client);
        }

        // Save the new sell object to the database
        Sell newSell = sellService.saveOrUpdate(sell);
        return new ResponseEntity<>(newSell, HttpStatus.CREATED);
    }

    @GetMapping("/all") // Simplified path
    public ResponseEntity<Iterable<Sell>> getAllSells() {
        Iterable<Sell> sells = sellService.findAll();
        return new ResponseEntity<>(sells, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sell> updateSell(@PathVariable String id, @RequestBody Sell sell) {
        return sellService.getSellById(id)
                .map(storedSell -> ResponseEntity.ok(sellService.updateSell(id, sell)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSell(@PathVariable String id) {
        if (sellService.getSellById(id).isPresent()) {
            sellService.deleteSell(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}
