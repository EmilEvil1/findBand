package com.findBand.backend.infra.security.rest.dto;


import lombok.Data;

/**
 * DTO for storing a user's credentials.
 */
@Data
public class LoginDTO {

    private String email;

    private String password;

    private Boolean rememberMe;
}