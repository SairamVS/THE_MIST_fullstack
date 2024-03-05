package com.example.nexaglow.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignupDto {
    private Long id;
    private String name;
    private String email;
    private String phoneNo;
    private String password;
    private String confirm_password;
}