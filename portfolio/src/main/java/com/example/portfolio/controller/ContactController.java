package com.example.portfolio.controller;

import com.example.portfolio.model.Contact;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ContactController {

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value="/contact")
    public void sendContactInformations(@RequestBody Contact contact){

    }


}
