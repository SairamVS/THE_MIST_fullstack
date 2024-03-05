package com.example.nexaglow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexaglow.entity.Signup;

public interface SignupRepository extends JpaRepository<Signup, Long> {

}