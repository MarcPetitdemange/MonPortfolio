package com.example.portfolio.service;

import com.example.portfolio.model.HelloWorld;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class BusinessService {

    public HelloWorld getHelloWorld(){
        HelloWorld helloWorld = new HelloWorld("Salut le monde !");
        return helloWorld;
    }
}
