package com.Main.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("inv_client")
public class Client {
//	private static final long serialVersionUID = -874579554809953800L;

    @Id
    private String id; // MongoDB uses String for ID
    private String customer_name;
    private String customer_phone;
    private String customer_address;
    private String customer_email;
    private String status_id;
    private String customer_description;

    @DBRef
    private Set<Sell> sells = new HashSet<>();

    // Assuming Revenue is another entity that needs to be converted for MongoDB
    @DBRef
    private Set<Revenue> employees = new HashSet<>();

    public Client() {
        // Default constructor
    }

    public Client(String customer_name, String customer_phone, String customer_address, 
                  String customer_email, String status_id, String customer_description) {
        this.customer_name = customer_name;
        this.customer_phone = customer_phone;
        this.customer_address = customer_address;
        this.customer_email = customer_email;
        this.status_id = status_id;
        this.customer_description = customer_description;
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_phone() {
		return customer_phone;
	}

	public void setCustomer_phone(String customer_phone) {
		this.customer_phone = customer_phone;
	}

	public String getCustomer_address() {
		return customer_address;
	}

	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}

	public String getCustomer_email() {
		return customer_email;
	}

	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String status_id) {
		this.status_id = status_id;
	}

	public String getCustomer_description() {
		return customer_description;
	}

	public void setCustomer_description(String customer_description) {
		this.customer_description = customer_description;
	}

	public Set<Sell> getSells() {
		return sells;
	}

	public void setSells(Set<Sell> sells) {
		this.sells = sells;
	}

	public Set<Revenue> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Revenue> employees) {
		this.employees = employees;
	}
    

}
