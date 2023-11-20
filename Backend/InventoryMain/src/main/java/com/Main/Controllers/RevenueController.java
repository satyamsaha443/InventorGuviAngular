package com.Main.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.Main.Repository.ClientRepository;
import com.Main.Services.RevenueService;
import com.Main.models.Client;
import com.Main.models.Revenue;
import com.Main.models.Sell;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/revenues")
public class RevenueController {

    @Autowired
    private RevenueService revenueService;
    
    @Autowired
    ClientRepository clientRepository;

    @GetMapping("/all")
    public List<Revenue> getAllRevenues() {
        return revenueService.getAllRevenues();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Revenue> getRevenueById(@PathVariable String id) {
        return revenueService.getRevenueById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<?> createSellWithClient(@Validated @RequestBody Revenue revenue, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        Client clientFromSell = revenue.getCustomer(); // Get the client object from the sell
        if (clientFromSell != null) {
            // Create a new client object from the data in the Sell object
            // Assuming these methods exist in your Client class
            Client client = new Client(clientFromSell.getCustomer_name(), clientFromSell.getCustomer_phone(),
                                       clientFromSell.getCustomer_address(), clientFromSell.getCustomer_email(),
                                       clientFromSell.getStatus_id(), clientFromSell.getCustomer_description());

            // Save the new client object to the database
            client = clientRepository.save(client);

            // Associate the new client object with the sell object
            revenue.setCustomer(client);
        }

        // Save the new sell object to the database
        Revenue newRevenue = revenueService.saveOrUpdate(revenue);
        return new ResponseEntity<>(newRevenue, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Revenue> updateRevenue(@PathVariable String id, @RequestBody Revenue revenue) {
        return revenueService.getRevenueById(id)
                .map(storedRevenue -> ResponseEntity.ok(revenueService.updateRevenue(id, revenue)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRevenue(@PathVariable String id) {
        if (revenueService.getRevenueById(id).isPresent()) {
            revenueService.deleteRevenue(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

