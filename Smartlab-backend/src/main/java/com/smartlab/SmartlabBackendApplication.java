package com.smartlab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * SmartlabBackendApplication
 * @EnableScheduling activates Feature 5 (Auto Escalation)
 */
@SpringBootApplication
@EnableScheduling
public class SmartlabBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(SmartlabBackendApplication.class, args);
    }
}
