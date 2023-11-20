package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Category;

public interface CategoryRepository extends MongoRepository<Category, String>{

}
