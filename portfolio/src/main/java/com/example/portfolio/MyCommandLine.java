package com.example.portfolio;

import com.example.portfolio.model.HelloWorld;
import com.example.portfolio.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLine implements CommandLineRunner {

    @Autowired
    private BusinessService businessService;


    @Override
    public void run(String... args) throws Exception {
        HelloWorld hw = businessService.getHelloWorld();
        System.out.println(hw);

    }
}
