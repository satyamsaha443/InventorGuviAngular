//package com.Main.Controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.Main.Services.UserService;
//import com.Main.models.User;
//
//@Controller
//@RequestMapping("/api/users")
//public class UserController {
//    
//    @Autowired
//    private UserService userService;
//
//    @GetMapping
//    public String getAllUsers(Model model) {
//        model.addAttribute("users", userService.getAllUsers());
//        return "users";
//    }
//
//    @GetMapping("/{id}")
//    public String getUserById(Model model, @PathVariable String id) {
//        model.addAttribute("user", userService.getUserById(id));
//        return "user";
//    }
//
//    @GetMapping("/all")
//    public String addUser(Model model) {
//        model.addAttribute("user", new User());
//        return "add-user";
//    }
//
//    @PostMapping("/create")
//    public String saveUser(User user) {
//        userService.saveUser(user);
//        return "redirect:/users";
//    }
//
//    @GetMapping("/edit/{id}")
//    public String editUser(Model model, @PathVariable String id) {
//        model.addAttribute("user", userService.getUserById(id));
//        return "edit-user";
//    }
//
//    @PostMapping("/edit/{id}")
//    public String updateUser(User user) {
//        userService.updateUser(user);
//        return "redirect:/users";
//    }
//
//    @GetMapping("/delete/{id}")
//    public String deleteUser(@PathVariable String id) {
//        userService.deleteUser(id);
//        return "redirect:/users";
//    }
//
//}
