package com.example.portfolio.controller;

import com.example.portfolio.model.Employee;
import com.example.portfolio.model.Project;
import com.example.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ProjectController {

    @Autowired
    public ProjectService projectService;

    /**
     * Read - Get all employees
     * @return - An Iterable object of Projects
     */
    @GetMapping("/projects")
    public Iterable<Project> getProjects() {
        return projectService.getProjects();
    }

    @GetMapping("/projects/{id}")
    public Optional<Project> getProjects(@PathVariable Integer id) {
        return projectService.getProject(id);
    }

    @PostMapping("/projects/")
    public Project saveProject(@RequestBody Project project) {
        return projectService.saveProject(project);
    }

    @DeleteMapping("/projects/{id}")
    public void deleteProject(@PathVariable Integer id) {
        projectService.deleteProject(id);
    }
}
