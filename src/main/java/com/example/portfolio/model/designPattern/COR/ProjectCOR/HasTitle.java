package com.example.portfolio.model.designPattern.COR.ProjectCOR;

import com.example.portfolio.model.Project;

public class HasTitle extends ProjectChain{

    public HasTitle() {
    }

    @Override
    public void inspect(Project project) {
        if (project.getTitle() != null && project!= null)
            System.out.println("Has title !");

        if(this.nextChain != null) {
            this.nextChain.inspect(project);
        }
    }
}
