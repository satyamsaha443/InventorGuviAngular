package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Supplier;



public interface SupplierRepository extends MongoRepository<Supplier, String>{

}
