package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String>{

}
