package com.example.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contact {


    private String nameSender;
    private String numTel;
    private String email;
    private String contactPreference;
    private String message;
}
