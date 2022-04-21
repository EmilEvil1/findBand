package com.findBand.backend.infra.adapters.rest.dto.user;

import lombok.Data;

@Data
public class UserProfileRequestDTO {
    private long userId;
    private String userName;
    private String emailAddress;
    private int age;
    private int experienceAge;
    private String password;
    private String confirmationPassword;
}
