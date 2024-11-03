package com.tallerAti.webapp.controller;

import com.tallerAti.webapp.model.Greeting;
import com.tallerAti.webapp.repository.GreetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @Autowired
    private GreetingRepository greetingRepository;

    @GetMapping("/greet")
    public String greet(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        String message = "Hello " + name;
        model.addAttribute("message", message);
        return "greeting";
    }

    @PostMapping("/greet")
    public String saveGreeting(@RequestParam(name = "name") String name, Model model) {
        String message = "Hello " + name;
        greetingRepository.save(new Greeting(message));
        model.addAttribute("message", message);
        return "greeting";
    }
}