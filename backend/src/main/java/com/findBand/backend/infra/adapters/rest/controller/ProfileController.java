package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserGetProfile;
import com.findBand.backend.domain.useCase.user.UserUpdateProfile;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileResponseDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(name = "/api/v1/profile")
public class ProfileController extends BaseController {

    @GetMapping
    public UserProfileResponseDTO getProfile(@RequestBody UserProfileRequestDTO userProfileRequest) {
        UserDomain user = publish(UserDomain.class, new UserGetProfile(userProfileRequest.getUserId()));
        return toDTO(user);
    }

    @PutMapping
    public UserProfileResponseDTO updateProfile(@RequestBody UserProfileRequestDTO userProfileRequest) {
        UserDomain user = publish(UserDomain.class, new UserUpdateProfile());
    }

    private UserProfileResponseDTO toDTO(UserDomain userDomain) {
        return UserProfileResponseDTO.builder()
          .userName(userDomain.getUsername())
          .emailAddress(userDomain.getEmail())
          .experienceAge(userDomain.getExperienceAge())
          .age(userDomain.getAge())
          .phone(userDomain.getPhone())
          .build();
    }
}
