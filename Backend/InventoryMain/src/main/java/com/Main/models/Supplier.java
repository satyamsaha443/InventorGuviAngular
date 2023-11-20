package com.Main.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document(collection = "inv_supplier")
public class Supplier {
    @Id
    String id;
    String supplier_name;
    String supplier_phone;
    String supplier_email;
    String supplier_company;
    String supplier_address;
    String status_id;
    String supplier_description;

    @DBRef
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Buy> buys = new HashSet<Buy>();

    @DBRef
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Products> products = new HashSet<Products>();

    @DBRef
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Expense> expenses = new HashSet<Expense>();

    public Supplier() {
        // TODO Auto-generated constructor stub
    }

    public Supplier(String supplier_name, String supplier_phone, String supplier_email, String supplier_company,
            String supplier_address, String status_id, String supplier_description) {
        super();
        this.supplier_name = supplier_name;
        this.supplier_phone = supplier_phone;
        this.supplier_email = supplier_email;
        this.supplier_company = supplier_company;
        this.supplier_address = supplier_address;
        this.status_id = status_id;
        this.supplier_description = supplier_description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSupplier_name() {
        return supplier_name;
    }

    public void setSupplier_name(String supplier_name) {
        this.supplier_name = supplier_name;
    }

    public String getSupplier_phone() {
        return supplier_phone;
    }

    public void setSupplier_phone(String supplier_phone) {
        this.supplier_phone = supplier_phone;
    }

    public String getSupplier_email() {
        return supplier_email;
    }

    public void setSupplier_email(String supplier_email) {
        this.supplier_email = supplier_email;
    }

    public String getSupplier_company() {
        return supplier_company;
    }

    public void setSupplier_company(String supplier_company) {
        this.supplier_company = supplier_company;
    }

    public String getSupplier_address() {
        return supplier_address;
    }

    public void setSupplier_address(String supplier_address) {
        this.supplier_address = supplier_address;
    }

    public String getStatus_id() {
        return status_id;
    }

    public void setStatus_id(String status_id) {
        this.status_id = status_id;
    }

    public String getSupplier_description() {
        return supplier_description;
    }

    public void setSupplier_description(String supplier_description) {
        this.supplier_description = supplier_description;
    }

    public Set<Buy> getBuys() {
        return buys;
    }

    public void setBuys(Set<Buy> buys) {
        this.buys = buys;
    }

    public Set<Products> getProducts() {
        return products;
    }

    public void setProducts(Set<Products> products) {
        this.products = products;
    }

    public Set<Expense> getExpenses() {
        return expenses;
    }

    public void setExpenses(Set<Expense> expenses) {
        this.expenses = expenses;
    }

}