package com.findBand.backend.domain.model;

import lombok.Data;

@Data
public class User {
    private String name;
    private String phone;
    private String email;
    private String password;
    private boolean isActivated;
}
