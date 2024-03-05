package com.example.nexaglow.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.nexaglow.dto.SignupDto;
import com.example.nexaglow.entity.Signup;
import com.example.nexaglow.exception.ResourceNotFoundException;
import com.example.nexaglow.mapper.SignupMapper;
import com.example.nexaglow.repository.SignupRepository;
import com.example.nexaglow.service.SignupService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SignupServiceImpl implements SignupService {

    private SignupRepository signupRepository;

    @Override
    public SignupDto createSignup(SignupDto signupdto) {

        Signup signup = SignupMapper.maptoSignup(signupdto);
        Signup savedSignup = signupRepository.save(signup);
        return SignupMapper.maptoSignupDto(savedSignup);
    }

    @Override
    public SignupDto getSignupById(Long signupId) {
        Signup signup = signupRepository.findById(signupId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + signupId));

        return SignupMapper.maptoSignupDto(signup);
    }

    @Override
    public List<SignupDto> getAllSignups() {
        List<Signup> signups = signupRepository.findAll();
    
        List<SignupDto> signupDtos = new ArrayList<>();
        for (Signup signup : signups) {
            signupDtos.add(SignupMapper.maptoSignupDto(signup));
        }
    
        return signupDtos;
    }
    
}