package com.example.portfolio.service;

import com.example.portfolio.model.Employee;
import com.example.portfolio.model.Project;
import com.example.portfolio.repository.ProjectRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Optional<Project> getProject(final Integer id) {
        return projectRepository.findById(id);
    }

    public Iterable<Project> getProjects() {
        return projectRepository.findAll();
    }

    public void deleteProject(final Integer id) {
        projectRepository.deleteById(id);
    }

    public Project saveEmployee(Project project) {
        Project savedProject = projectRepository.save(project);
        return savedProject;
    }

}
