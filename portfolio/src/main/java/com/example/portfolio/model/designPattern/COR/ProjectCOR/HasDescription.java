package com.example.portfolio.model.designPattern.COR.ProjectCOR;

import com.example.portfolio.model.Project;

public class HasDescription extends ProjectChain {

    public HasDescription() {
    }

    @Override
    public void inspect(Project project) {
        if (project.getDescription() != null && project!= null)
            System.out.println("Has description !");

        if(this.nextChain != null) {
            this.nextChain.inspect(project);
        }
    }
}
