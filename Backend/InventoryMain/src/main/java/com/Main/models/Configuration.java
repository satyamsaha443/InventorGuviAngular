package com.Main.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Configuration implements Serializable {
    /**
     * 
     */
	private static final long serialVersionUID = 6288598345366900275L;
    
    @Id
    private String id;
    
    private String name;
    private String email;
    private String address;
    private String language;
    private String currency;

    public Configuration() {
        // TODO Auto-generated constructor stub
    }

    public Configuration(String name, String email, String address, String language, String currency) {
        super();
        this.name = name;
        this.email = email;
        this.address = address;
        this.language = language;
        this.currency = currency;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }


}
