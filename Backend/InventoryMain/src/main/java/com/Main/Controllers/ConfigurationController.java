package com.Main.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Main.Services.ConfigurationService;
import com.Main.models.Configuration;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/configurations")
public class ConfigurationController {

    @Autowired
    private ConfigurationService configurationService;

    @GetMapping
    public List<Configuration> getAllConfigurations() {
        return configurationService.getAllConfigurations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Configuration> getConfigurationById(@PathVariable String id) {
        return configurationService.getConfigurationById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Configuration createConfiguration(@RequestBody Configuration configuration) {
        return configurationService.createConfiguration(configuration);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Configuration> updateConfiguration(@PathVariable String id, @RequestBody Configuration configuration) {
        return configurationService.getConfigurationById(id)
                .map(storedConfiguration -> ResponseEntity.ok(configurationService.updateConfiguration(id, configuration)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteConfiguration(@PathVariable String id) {
        if (configurationService.getConfigurationById(id).isPresent()) {
            configurationService.deleteConfiguration(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}
