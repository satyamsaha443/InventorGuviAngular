package com.Main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@CrossOrigin("http://localhost:4200")
@ComponentScan(basePackages = {"com.Main.*"})
public class InventoryMainApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryMainApplication.class, args);
	}

}
