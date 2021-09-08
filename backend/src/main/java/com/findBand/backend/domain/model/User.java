package com.findBand.backend.domain.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {
    private String name;
    private String phone;
    private String email;
    private String password;
    private UserRole userRole;
    private boolean isActivated;
}
