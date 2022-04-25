package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserGetProfile;
import com.findBand.backend.domain.useCase.user.UserUpdateProfile;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileResponseDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserProfileController extends BaseController {

    @GetMapping("/profile")
    public UserProfileResponseDTO getProfile(@RequestBody UserProfileRequestDTO userProfileRequest) {
        checkUserByEmail(userProfileRequest.getEmailAddress());
        UserDomain user = publish(UserDomain.class, new UserGetProfile(userProfileRequest.getEmailAddress()));
        return toDTO(user);
    }

    @PutMapping("/profile")
    public UserProfileResponseDTO updateProfile(@RequestBody UserProfileRequestDTO userProfileRequest) {
        checkUserByEmail(userProfileRequest.getEmailAddress());
        UserDomain user = publish(UserDomain.class, UserUpdateProfile.fromDTO(userProfileRequest));
        return toDTO(user);
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
