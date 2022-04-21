package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserUpdateProfile;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserUpdateProfileUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserUpdateProfile> {

    private UserPort userPort;
    private PasswordEncoder passwordEncoder;

    public UserUpdateProfileUseCaseHandler(UserPort userPort, PasswordEncoder passwordEncoder) {
        this.userPort = userPort;
        this.passwordEncoder = passwordEncoder;
        register(UserUpdateProfile.class, this);
    }

    @Override
    public UserDomain handle(UserUpdateProfile useCase) {
        UserDomain user = new UserDomain();
        user.setEmail(useCase.getEmailAddress());
        user.setPhone(useCase.getPhone());
        user.setAge(useCase.getAge());
        user.setExperienceAge(useCase.getExperienceAge());
        user.setUsername(user.getUsername());
        if (StringUtils.isNotEmpty(useCase.getPassword())) {
            user.setPassword(useCase.getPassword(), passwordEncoder, useCase.getConfirmationPassword());
        }
        return userPort.updateUser(user);
    }
}
