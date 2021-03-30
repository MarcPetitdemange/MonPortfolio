package com.example.portfolio.model.designPattern.COR.ProjectCOR;

import com.example.portfolio.model.Project;

public abstract class ProjectChain {

    protected ProjectChain nextChain;

    public void setNextChain(ProjectChain nextChain){
        this.nextChain = nextChain;
    }

    public abstract void inspect(Project project);
}
