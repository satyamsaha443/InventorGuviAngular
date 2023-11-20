package com.Main.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.ClientRepository;
import com.Main.models.Client;



@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Optional<Client> getClientById(String id) {
        return clientRepository.findById(id);
    }

    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClient(String id) {
        clientRepository.deleteById(id);
    }

    public void updateClient(String id, Client client) {
        Optional<Client> existingClient = clientRepository.findById(id);
        if(existingClient.isPresent()) {
            client.setId(existingClient.get().getId());
            clientRepository.save(client);
        }
    }
    
    public Client saveOrUpdate(Client client) {

		return clientRepository.save(client);
	}

	public Iterable<Client> findAll() {
		return clientRepository.findAll();
	}
}
