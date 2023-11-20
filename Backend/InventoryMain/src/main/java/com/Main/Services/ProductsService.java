package com.Main.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.ProductsRepository;
import com.Main.models.Products;

import java.util.List;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> findAll() {
        return productsRepository.findAll();
    }

    public Products findById(String id) {
        return productsRepository.findById(id).orElse(null);
    }

    public Products save(Products product) {
        return productsRepository.save(product);
    }

    public void deleteById(String id) {
        productsRepository.deleteById(id);
    }

    // Additional business logic methods can be added here
}
