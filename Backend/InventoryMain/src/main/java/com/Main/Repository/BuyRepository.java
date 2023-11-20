package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Buy;

public interface BuyRepository extends MongoRepository<Buy, String> {

}
