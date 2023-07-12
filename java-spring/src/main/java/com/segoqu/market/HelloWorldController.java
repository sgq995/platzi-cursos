package com.segoqu.market;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeting")
public class HelloWorldController {
    @GetMapping("/hello")
    public String greet() {
        return "Hello world!";
    }
}
