package com.example.portfolio.controller;

import com.example.portfolio.model.Categorie;
import com.example.portfolio.model.Project;
import com.example.portfolio.service.CategorieService;
import com.example.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategorieController {

    @Autowired
    public CategorieService categorieService;

    /**
     * Read - Get all employees
     * @return - An Iterable object of Projects
     */
    @GetMapping("/categories")
    public Iterable<Categorie> getEmployees() { return categorieService.getCategories(); }
}
