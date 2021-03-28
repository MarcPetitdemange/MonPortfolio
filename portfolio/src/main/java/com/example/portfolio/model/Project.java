package com.example.portfolio.model;


import javax.persistence.*;

@Entity
@Table(name="Project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String firstName;

    @Column(name = "DESC")
    private String lastName;
}
