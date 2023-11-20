package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Configuration;

public interface ConfigurationRepository extends MongoRepository<Configuration, String> {

}
