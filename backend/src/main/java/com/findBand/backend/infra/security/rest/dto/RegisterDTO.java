package com.findBand.backend.infra.security.rest.dto;

import lombok.Data;

@Data
public class RegisterDTO {
    private String username;
    private String email;
    private String password;
}
