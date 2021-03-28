package com.example.portfolio;

import com.example.portfolio.model.HelloWorld;
import com.example.portfolio.service.BusinessService;
import com.example.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLine implements CommandLineRunner {

    @Autowired
    private BusinessService businessService;

    @Autowired
    private ProjectService projectService;


    @Override
    public void run(String... args) throws Exception {
        HelloWorld hw = businessService.getHelloWorld();
        System.out.println(hw);

        projectService.getProjects();



    }
}
