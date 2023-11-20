//package com.Main.Services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Service;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.GrantedAuthority;
//
//import com.Main.Repository.UserRepository;
//import com.Main.models.User;
//
//import java.util.Collections;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
//        User user = userRepository.findByName(name);
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found with username: " + name);
//        }
//
//        // Create a GrantedAuthority based on user's role. 
//        // You might need to modify this part based on how you handle roles in your User model.
//        GrantedAuthority authority = new SimpleGrantedAuthority(user.getRoles());
//
//        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), Collections.singletonList(authority));
//    }
//}