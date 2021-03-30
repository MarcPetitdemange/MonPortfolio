package com.example.portfolio;

import com.example.portfolio.model.Categorie;
import com.example.portfolio.model.HelloWorld;
import com.example.portfolio.model.Project;
import com.example.portfolio.model.designPattern.COR.ProjectCOR.HasDescription;
import com.example.portfolio.model.designPattern.COR.ProjectCOR.HasTitle;
import com.example.portfolio.model.designPattern.COR.ProjectCOR.ProjectChain;
import com.example.portfolio.service.BusinessService;
import com.example.portfolio.service.CategorieService;
import com.example.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Set;
import java.util.function.Supplier;

@Component
public class MyCommandLine implements CommandLineRunner {

    @Autowired
    private BusinessService businessService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private CategorieService categorieService;


    @Override
    public void run(String... args) throws Exception {
        HelloWorld hw = businessService.getHelloWorld();
        System.out.println(hw);

        projectService.getProjects();
        Project project = new Project();
        project.setTitle("Projet Ballade à Metz");
        project.setDescription("Super projet de ballade à Metz réalisé pour la fac");
        ArrayList<Categorie> arrayList = new ArrayList<>();
        arrayList.add(categorieService.getCategorie(1).get());
        project.setCategories(arrayList);
        projectService.saveProject(project);

        //Test COR
        ProjectChain projectChain = new HasTitle();
        ProjectChain projectChain1 = new HasDescription();
        projectChain.setNextChain(projectChain1);
        projectChain.inspect(project);

    }
}
