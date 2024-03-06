package com.example.nexaglow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.nexaglow.entity.User;

import java.util.Optional;


@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    
    Optional<User> findByUsername(String username);
}
