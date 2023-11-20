package com.Main.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Main.Services.WareHouseService;
import com.Main.models.WareHouse;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/warehouses")
public class WareHouseController {

    @Autowired
    private WareHouseService wareHouseService;

    @GetMapping("/all")
    public List<WareHouse> getAllWareHouses() {
        return wareHouseService.getAllWareHouses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<WareHouse> getWareHouseById(@PathVariable String id) {
        return wareHouseService.getWareHouseById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public WareHouse createWareHouse(@RequestBody WareHouse wareHouse) {
        return wareHouseService.createWareHouse(wareHouse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WareHouse> updateWareHouse(@PathVariable String id, @RequestBody WareHouse wareHouse) {
        return wareHouseService.getWareHouseById(id)
                .map(storedWareHouse -> ResponseEntity.ok(wareHouseService.updateWareHouse(id, wareHouse)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteWareHouse(@PathVariable String id) {
        if (wareHouseService.getWareHouseById(id).isPresent()) {
            wareHouseService.deleteWareHouse(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}
