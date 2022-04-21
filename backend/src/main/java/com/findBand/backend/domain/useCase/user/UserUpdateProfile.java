package com.findBand.backend.domain.useCase.user;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Builder;

@Builder
public class UserUpdateProfile implements UseCase {

    private String username;
    private String emailAddress;
    private long experienceAge;
    private long age;
    private String phone;

    public static UserUpdateProfile fromDTO(UserUpdate)
}
