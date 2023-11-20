package com.Main.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.ClientRepository;
import com.Main.Repository.SellRepository;
import com.Main.models.Sell;

import java.util.List;
import java.util.Optional;


@Service
public class SellService {

    @Autowired
    private SellRepository sellRepository;
    
    @Autowired
    ClientRepository clientRepository;

    public List<Sell> getAllSells() {
        return sellRepository.findAll();
    }

    public Optional<Sell> getSellById(String id) {
        return sellRepository.findById(id);
    }

    public Sell createSell(Sell sell) {
        return sellRepository.save(sell);
    }

    public Sell updateSell(String id, Sell sell) {
        sell.setId(id);
        return sellRepository.save(sell);
    }
    

    public void deleteSell(String id) {
        sellRepository.deleteById(id);
    }
    
    public Sell saveOrUpdate(Sell sell) {

		return sellRepository.save(sell);
	}

	public Iterable<Sell> findAll() {
		return sellRepository.findAll();
	}





    // Additional business logic and methods can be added here
}

