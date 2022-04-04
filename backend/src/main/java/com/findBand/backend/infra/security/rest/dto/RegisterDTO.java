package com.findBand.backend.infra.security.rest.dto;

import lombok.Data;

import java.util.List;

@Data
public class RegisterDTO {
    private String username;
    private String email;
    private String password;
    private String confirmationPassword;
    private String phone;
    private Boolean isBandOwner;
    private String bandName;
    private List<Long> instrumentIds;
    private long regionId;
}
