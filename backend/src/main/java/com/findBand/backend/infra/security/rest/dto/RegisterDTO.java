package com.findBand.backend.infra.security.rest.dto;

import lombok.Data;

import java.util.List;

@Data
public class RegisterDTO {
    private String username;
    private String email;
    private String password;
    private String confirmationPassword;
    private Long instrumentId;
    private long regionId;
}
