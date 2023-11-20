package com.Main.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Main.Services.ClientService;
import com.Main.models.Client;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ClientController {

    @Autowired
    private ClientService clientService;

//    @PostMapping("/clients/create")
//    public ResponseEntity<Client> addClient(@Validated @RequestBody Client client) {
//        Client newClient = clientService.addClient(client);
//        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
//    }
//
//    @GetMapping("/clients/all")
//    public List<Client> getAllClients() {
//        return clientService.getAllClients();
//    }
 
    @PostMapping("/clients/create")
	public ResponseEntity<?> addPTToBoard(@Validated @RequestBody Client projectClient, BindingResult result) {

		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<String, String>();

			for (FieldError error : result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}

		Client newPT = clientService.saveOrUpdate(projectClient);

		return new ResponseEntity<Client>(newPT, HttpStatus.CREATED);
	}

	@GetMapping("/clients/all")
	public Iterable<Client> getAllClients() {
		return clientService.findAll();
	}
    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable String id) {
        Optional<Client> client = clientService.getClientById(id);
        if(client.isPresent()) {
            return new ResponseEntity<>(client.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable String id, @Valid @RequestBody Client client) {
        Optional<Client> updatedClient = Optional.empty();
        if(updatedClient.isPresent()) {
            return new ResponseEntity<>(updatedClient.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable String id) {
        clientService.deleteClient(id);
        return new ResponseEntity<>("Client deleted", HttpStatus.OK);
    }

}