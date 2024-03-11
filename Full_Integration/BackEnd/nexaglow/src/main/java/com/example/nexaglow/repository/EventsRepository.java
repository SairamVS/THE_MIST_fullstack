package com.example.nexaglow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexaglow.entity.Events;

public interface EventsRepository extends JpaRepository<Events, Long>{
    
}
