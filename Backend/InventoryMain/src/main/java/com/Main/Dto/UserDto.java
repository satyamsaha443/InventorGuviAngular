//package com.Main.Dto;
//
//
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotEmpty;
//
//
//
//public class UserDto {
//
//    private String id;
//
//    @NotEmpty(message = "First name should not be empty")
//    private String firstName;
//
//    @NotEmpty(message = "Last name should not be empty")
//    private String lastName;
//
//    @NotEmpty(message = "Email should not be empty")
//    @Email
//    private String email;
//
//    @NotEmpty(message = "Password should not be empty")
//    private String password;
//
//
//
//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//    
//    
//}