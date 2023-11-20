package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Sell;

public interface SellRepository extends MongoRepository<Sell,String>{

}
