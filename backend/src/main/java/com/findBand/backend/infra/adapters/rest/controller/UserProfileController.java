package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserGetProfile;
import com.findBand.backend.domain.useCase.user.UserUpdateProfile;
import com.findBand.backend.domain.useCase.user.UserUploadAvatar;
import com.findBand.backend.infra.adapters.rest.dto.profile.UserAvatarResponseDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.UserProfileResponseDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URISyntaxException;

@RestController
@Slf4j
@RequestMapping("/api/v1")
public class UserProfileController extends BaseController {

    @PostMapping("/uploadAvatar")
    public UserAvatarResponseDTO uploadAvatar(@RequestParam("file") MultipartFile file) {
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserUploadAvatar userUploadAvatar = new UserUploadAvatar(file, authenticatedUser.getUsername());
        String avatarUri = publish(String.class, userUploadAvatar);
        return new UserAvatarResponseDTO(avatarUri);
    }

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
        String avatarUri = null;
        try {
            avatarUri = userDomain.getAvatarUri();
        } catch (URISyntaxException e) {
            log.error("Error in URI syntax of avatar for user: {}", userDomain.getId(), e);
        }
        return UserProfileResponseDTO.builder()
          .userName(userDomain.getUsername())
          .emailAddress(userDomain.getEmail())
          .experienceAge(userDomain.getExperienceAge())
          .age(userDomain.getAge())
          .phone(userDomain.getPhone())
          .avatarUri(avatarUri)
          .build();
    }
}
