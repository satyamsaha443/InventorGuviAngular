package com.Main.Controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Main.Repository.CategoryRepository;
import com.Main.Repository.ProductsRepository;
import com.Main.Repository.SupplierRepository;
import com.Main.Services.ProductsService;
import com.Main.models.Category;
import com.Main.models.Products;
import com.Main.models.Supplier;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;
    
    @Autowired
    ProductsRepository productRepository;
    
    @Autowired
    CategoryRepository categoryRepository;
    
    @Autowired
    SupplierRepository supplierRepository;

    @GetMapping("/all")
    public List<Products> getAllProducts() {
        return productsService.findAll();
    }

    @GetMapping("/{id}")
    public Products getProductById(@PathVariable String id) {
        return productsService.findById(id);
    }

//    @PostMapping("/create")
//    public Products createProduct(@RequestBody Products product) {
//        return productsService.save(product);
//    }
    
    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestBody Products product) {
        // Save the product
        Products savedProduct = productRepository.save(product);

        // Update the category
//        Category category = product.getCategory_id();
//        if (category != null) {
//            category.getProducts().add(savedProduct);
//            categoryRepository.save(category);
//        }

        // Update the supplier
        Supplier supplier = product.getSupplier_id();
        if (supplier != null) {
            supplier.getProducts().add(savedProduct);
            supplierRepository.save(supplier);
        }

        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
    
    
    
    
    
    

    @PutMapping("/{id}")
    public Products updateProduct(@PathVariable String id, @RequestBody Products product) {
        product.setId(id);
        return productsService.save(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable String id) {
        productsService.deleteById(id);
    }

    // Additional RESTful endpoints can be added here
}