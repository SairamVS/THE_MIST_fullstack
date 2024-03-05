package com.example.nexaglow.service;

import java.util.List;

import com.example.nexaglow.dto.SignupDto;

public interface SignupService {
    SignupDto createSignup(SignupDto signupDto);

    SignupDto getSignupById(Long signupId);

    List<SignupDto> getAllSignups();
}