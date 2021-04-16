package com.example.portfolio.controller;

import com.example.portfolio.model.Categorie;
import com.example.portfolio.model.Project;
import com.example.portfolio.service.CategorieService;
import com.example.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategorieController {

    @Autowired
    public CategorieService categorieService;

    /**
     * Read - Get all employees
     * @return - An Iterable object of Projects
     */
    @GetMapping("/")
    public Iterable<Categorie> getCategorie() { return categorieService.getCategories(); }

    @GetMapping("{id}")
    public Optional<Categorie> getCategorieById(@PathVariable Integer id) {
        return categorieService.getCategorie(id);
    }

    @PostMapping("/")
    public Categorie saveCategorie(@RequestBody Categorie categorie) {
        return categorieService.saveCategorie(categorie);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id) {
        categorieService.deleteCategorie(id);
    }

}
