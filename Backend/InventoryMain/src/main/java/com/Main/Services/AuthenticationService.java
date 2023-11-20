package com.Main.Services;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.Main.Repository.UserRepository;
//import com.Main.models.User;
//
//@Service
//public class AuthenticationService {
//	
//	@Autowired
//	private UserRepository userRepository;
//	
//	public User authenticate (String username, String password, String role) {
//		User user = userRepository.findByUsername(username);
//		if(user != null && user.getPassword().equals(password) && user.getRole().equals(role)) {
//			return user;
//		}
//		return null;
//	}
//	
//
//}
