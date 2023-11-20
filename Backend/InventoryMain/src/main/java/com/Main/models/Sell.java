package com.Main.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "inv_sell")
public class Sell implements Serializable {
    
	 private static final long serialVersionUID = -4497992680923909136L;

	    @Id
	    private String id; // MongoDB typically uses String for ID

	    @DBRef
	    private Client customer; // Reference to Client object

	    private String sale_date;
	    private String sale_status;
	    private String sale_invoiceNo;

	    public Sell() {
	        // Default constructor
	    }

	    public Sell(Client customer, String sale_date, String sale_status, String sale_invoiceNo) {
	        this.customer = customer;
	        this.sale_date = sale_date;
	        this.sale_status = sale_status;
	        this.sale_invoiceNo = sale_invoiceNo;
	    }

	    // Getters and setters

	    public String getId() {
	        return id;
	    }

	    public void setId(String id) {
	        this.id = id;
	    }

	    public Client getCustomer() {
	        return customer;
	    }

	    public void setCustomer(Client customer) {
	        this.customer = customer;
	    }

	    public String getSale_date() {
	        return sale_date;
	    }

	    public void setSale_date(String sale_date) {
	        this.sale_date = sale_date;
	    }

	    public String getSale_status() {
	        return sale_status;
	    }

	    public void setSale_status(String sale_status) {
	        this.sale_status = sale_status;
	    }

	    public String getSale_invoiceNo() {
	        return sale_invoiceNo;
	    }

	    public void setSale_invoiceNo(String sale_invoiceNo) {
	        this.sale_invoiceNo = sale_invoiceNo;
	    }

}