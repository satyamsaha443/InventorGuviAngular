package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Expense;

public interface ExpenseRepository extends MongoRepository<Expense, String>{

}
