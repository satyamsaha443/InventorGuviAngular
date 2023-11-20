package com.Main.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.RevenueRepository;
import com.Main.models.Revenue;
import com.Main.models.Sell;

import java.util.List;
import java.util.Optional;


@Service
public class RevenueService {

    @Autowired
    private RevenueRepository revenueRepository;

    public List<Revenue> getAllRevenues() {
        return revenueRepository.findAll();
    }

    public Optional<Revenue> getRevenueById(String id) {
        return revenueRepository.findById(id);
    }

    public Revenue createRevenue(Revenue revenue) {
        return revenueRepository.save(revenue);
    }

    public Revenue updateRevenue(String id, Revenue revenue) {
        revenue.setId(id);
        return revenueRepository.save(revenue);
    }

    public void deleteRevenue(String id) {
        revenueRepository.deleteById(id);
    }
    
    public Revenue saveOrUpdate(Revenue revenue) {

		return revenueRepository.save(revenue);
	}

	public Iterable<Revenue> findAll() {
		return revenueRepository.findAll();
	}

    // Additional business logic and methods can be added here
}

