package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Revenue;

public interface RevenueRepository extends MongoRepository<Revenue, String> {

}
