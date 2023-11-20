package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Income;

public interface IncomeRepository extends MongoRepository<Income, String> {

}
