package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserUpdateProfile;

public class UserUpdateProfileUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserUpdateProfile> {

    private UserPort userPort;

    public UserUpdateProfileUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
        register(UserUpdateProfile.class, this);
    }

    @Override
    public UserDomain handle(UserUpdateProfile useCase) {

        return null;
    }
}
