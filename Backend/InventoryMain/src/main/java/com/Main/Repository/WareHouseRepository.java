package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.WareHouse;

public interface WareHouseRepository extends MongoRepository<WareHouse, String> {

}
