package com.findBand.backend.domain.useCase.user;

import com.findBand.backend.domain.common.model.UseCase;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileRequestDTO;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserUpdateProfile implements UseCase {

    private String username;
    private String emailAddress;
    private int experienceAge;
    private int age;
    private String confirmationPassword;
    private String password;
    private String phone;

    public static UserUpdateProfile fromDTO(UserProfileRequestDTO requestDTO) {
        return UserUpdateProfile.builder()
                .username(requestDTO.getUserName())
                .emailAddress(requestDTO.getEmailAddress())
                .phone(requestDTO.getPhone())
                .experienceAge(requestDTO.getExperienceAge())
                .age(requestDTO.getAge())
                .build();
    }
}
