package com.Main.Repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    public User findByName(String name);
}