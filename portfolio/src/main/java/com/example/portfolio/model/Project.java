package com.example.portfolio.model;


import javax.persistence.*;

/**
 * Projects with
 * @author MarcP
 */
@Entity
@Table(name="PROJECT")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "TITLE")
    private String firstName;

    @Column(name = "DESCRIPTION")
    private String lastName;
}
