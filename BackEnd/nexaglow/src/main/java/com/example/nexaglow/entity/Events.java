package com.example.nexaglow.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "events")
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "Email", nullable = false)
    private String email;

    @Column(name = "Phone_No", unique = true, nullable = false)
    private Long phoneNo;

    @Column(name = "State", nullable = false)
    private String state;
    
    @Column(name = "City", nullable = false)
    private String city;

    @Column(name = "Celebration", nullable =  false)
    private String celebration;
    
    @Column(name = "Date", nullable = false)
    private String date;

    @Column(name = "Price",nullable = false)
    private String price;

    @Column(name = "Requirements", nullable = false)
    private  String requirements;
}
