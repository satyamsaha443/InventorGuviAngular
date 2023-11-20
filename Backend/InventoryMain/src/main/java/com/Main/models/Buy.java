package com.Main.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDate;

@Document(collection = "inv_buy")
public class Buy implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 105253940174394025L;

    @Id
    String id;

    @DBRef(lazy = true)
    Supplier supplier;

    @DBRef(lazy = true)
    Products product;

    LocalDate purchase_date;
    String purchase_invoiceNo;
    String purchase_status;

    public Buy() {
    }

    public Buy(Supplier supplier, Products product, LocalDate purchase_date, String purchase_invoiceNo, String purchase_status) {
        this.supplier = supplier;
        this.product = product;
        this.purchase_date = purchase_date;
        this.purchase_invoiceNo = purchase_invoiceNo;
        this.purchase_status = purchase_status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public LocalDate getPurchase_date() {
        return purchase_date;
    }

    public void setPurchase_date(LocalDate purchase_date) {
        this.purchase_date = purchase_date;
    }

    public String getPurchase_invoiceNo() {
        return purchase_invoiceNo;
    }

    public void setPurchase_invoiceNo(String purchase_invoiceNo) {
        this.purchase_invoiceNo = purchase_invoiceNo;
    }

    public String getPurchase_status() {
        return purchase_status;
    }

    public void setPurchase_status(String purchase_status) {
        this.purchase_status = purchase_status;
    }
}