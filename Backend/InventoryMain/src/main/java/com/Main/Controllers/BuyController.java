package com.Main.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Main.Services.BuyService;
import com.Main.models.Buy;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/buys")
public class BuyController {

    @Autowired
    private BuyService buyService;

    @PostMapping("/create")
    public ResponseEntity<Buy> createBuy(@RequestBody Buy buy) {
        return ResponseEntity.ok(buyService.createBuy(buy));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Buy>> getAllBuys() {
    	System.out.println("Testing Buying ");
        return ResponseEntity.ok(buyService.getAllBuys());
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Buy> getBuyById(@PathVariable String id) {
//        return buyService.getBuyById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Buy> updateBuy(@PathVariable String id, @RequestBody Buy buyDetails) {
    	System.out.println("hello");
        return ResponseEntity.ok(buyService.updateBuy(id, buyDetails));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBuy(@PathVariable String id) {
        buyService.deleteBuy(id);
    }
}
