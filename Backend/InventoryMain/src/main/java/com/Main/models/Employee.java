package com.Main.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "inv_employee")
public class Employee {

    @Id
    String id;
    String employee_fname;
    String employee_email;
    String employee_phone;
    String employee_address;
    String status_id;

    public Employee() {
        // TODO Auto-generated constructor stub
    }

    public Employee(String name, String email, String phone, String address, String status) {
        super();
        this.employee_fname = name;
        this.employee_email = email;
        this.employee_phone = phone;
        this.employee_address = address;
        this.status_id = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return employee_fname;
    }

    public void setName(String name) {
        this.employee_fname = name;
    }

    public String getEmail() {
        return employee_email;
    }

    public void setEmail(String email) {
        this.employee_email = email;
    }

    public String getPhone() {
        return employee_phone;
    }

    public void setPhone(String phone) {
        this.employee_phone = phone;
    }

    public String getAddress() {
        return employee_address;
    }

    public void setAddress(String address) {
        this.employee_address = address;
    }

    public String getStatus() {
        return status_id;
    }

    public void setStatus(String status) {
        this.status_id = status;
    }

}