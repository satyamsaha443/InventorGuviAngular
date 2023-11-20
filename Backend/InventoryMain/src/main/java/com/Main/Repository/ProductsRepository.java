package com.Main.Repository;

import com.Main.models.Products;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductsRepository extends MongoRepository<Products, String> {
    // Custom query methods can be added here
}
