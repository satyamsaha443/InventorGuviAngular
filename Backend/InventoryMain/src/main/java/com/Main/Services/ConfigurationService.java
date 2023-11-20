package com.Main.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.Repository.ConfigurationRepository;
import com.Main.models.Configuration;

import java.util.List;
import java.util.Optional;


@Service
public class ConfigurationService {

    @Autowired
    private ConfigurationRepository configurationRepository;

    public List<Configuration> getAllConfigurations() {
        return configurationRepository.findAll();
    }

    public Optional<Configuration> getConfigurationById(String id) {
        return configurationRepository.findById(id);
    }

    public Configuration createConfiguration(Configuration configuration) {
        return configurationRepository.save(configuration);
    }

    public Configuration updateConfiguration(String id, Configuration configuration) {
        configuration.setId(id);
        return configurationRepository.save(configuration);
    }

    public void deleteConfiguration(String id) {
        configurationRepository.deleteById(id);
    }

    // Additional business logic and methods can be added here
}
