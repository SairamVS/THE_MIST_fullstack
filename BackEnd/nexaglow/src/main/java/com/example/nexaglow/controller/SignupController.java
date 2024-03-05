package com.example.nexaglow.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import com.example.nexaglow.dto.SignupDto;
import com.example.nexaglow.service.SignupService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/signups")
public class SignupController {

    private SignupService signupService;

    @PostMapping("add")
    public ResponseEntity<SignupDto> createSignup(@RequestBody SignupDto signupDto) {
        SignupDto savedSignup = signupService.createSignup(signupDto);
        return new ResponseEntity<>(savedSignup, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<SignupDto> getSignupId(@PathVariable("id") Long signupId) {
        SignupDto signupDto = signupService.getSignupById(signupId);
        return ResponseEntity.ok(signupDto);
    }

    // Build Get All Employee REST API
    @GetMapping("user")
    public ResponseEntity<List<SignupDto>> getAllSignups() {
        List<SignupDto> signups = signupService.getAllSignups();
        return ResponseEntity.ok(signups);
    }

}