package com.example.portfolio.controller;

import com.example.portfolio.model.Employee;
import com.example.portfolio.model.Project;
import com.example.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController {
    @Autowired
    public ProjectService projectService;

    /**
     * Read - Get all employees
     * @return - An Iterable object of Projects
     */
    @GetMapping("/projects")
    public Iterable<Project> getEmployees() {
        return projectService.getProjects();
    }
}
