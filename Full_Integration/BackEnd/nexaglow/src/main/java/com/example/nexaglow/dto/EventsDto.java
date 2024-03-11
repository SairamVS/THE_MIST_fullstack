package com.example.nexaglow.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EventsDto {
    private Long id;
    private String name;
    private String email;
    private Long phoneNo;
    private String state;
    private String city;
    private String celebration;
    private String date;
    private String price;
    private String requirements;
    
}
