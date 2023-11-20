package com.Main.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.BuyRepository;
import com.Main.models.Buy;


@Service
public class BuyService {
	
	@Autowired
	private BuyRepository buyRepository;
	
	
	   public List<Buy> getBuys() {
	        return buyRepository.findAll();
	    }
	    

	public List<Buy> getAllBuys(){
		return buyRepository.findAll();
	}
	public Buy getBuyById(String id) {
		return buyRepository.findById(id).orElse(null);
	}
	
	public Buy createBuy(Buy buy) {
		return buyRepository.save(buy);
	}
	public Buy updateBuy(String id, Buy buy) {
		buy.setId(id);
		return buyRepository.save(buy);
	}
	
	public void deleteBuy(String id) {
		buyRepository.deleteById(id);
	}


}
