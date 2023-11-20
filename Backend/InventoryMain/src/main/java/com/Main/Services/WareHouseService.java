package com.Main.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.WareHouseRepository;
import com.Main.models.WareHouse;

import java.util.List;
import java.util.Optional;


@Service
public class WareHouseService {

    @Autowired
    private WareHouseRepository wareHouseRepository;

    public List<WareHouse> getAllWareHouses() {
        return wareHouseRepository.findAll();
    }

    public Optional<WareHouse> getWareHouseById(String id) {
        return wareHouseRepository.findById(id);
    }

    public WareHouse createWareHouse(WareHouse wareHouse) {
        return wareHouseRepository.save(wareHouse);
    }

    public WareHouse updateWareHouse(String id, WareHouse wareHouse) {
        wareHouse.setId(id);
        return wareHouseRepository.save(wareHouse);
    }

    public void deleteWareHouse(String id) {
        wareHouseRepository.deleteById(id);
    }

    // Additional business logic and methods can be added here
}