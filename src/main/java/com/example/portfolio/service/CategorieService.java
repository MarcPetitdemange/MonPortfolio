package com.example.portfolio.service;

import com.example.portfolio.model.Categorie;
import com.example.portfolio.model.Project;
import com.example.portfolio.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategorieService {

    @Autowired
    private CategorieRepository categorieRepository;

    public Optional<Categorie> getCategorie(final Integer id) {
        return categorieRepository.findById(id);
    }

    public Iterable<Categorie> getCategories() {
        return categorieRepository.findAll();
    }

    public void deleteCategorie(final Integer id) {
        categorieRepository.deleteById(id);
    }

    public Categorie saveCategorie(Categorie categorie) {
        Categorie savedCategorie = categorieRepository.save(categorie);
        return savedCategorie;
    }


}
