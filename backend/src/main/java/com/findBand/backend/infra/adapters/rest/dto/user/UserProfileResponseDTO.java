package com.findBand.backend.infra.adapters.rest.dto.user;

import lombok.Builder;

@Builder
public class UserProfileResponseDTO {
    private String userName;
    private String emailAddress;
    private String phone;
    private int experienceAge;
    private int age;
}
