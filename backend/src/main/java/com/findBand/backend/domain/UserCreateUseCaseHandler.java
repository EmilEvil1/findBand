package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.User;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.UserCreate;

public class UserCreateUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<User, UserCreate> {

    private UserPort userPort;

    public UserCreateUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
    }

    @Override
    public User handle(UserCreate useCase) {
        return userPort.createUser(useCase).orElseThrow(() -> new RuntimeException("User wasn't created"));
    }
}
