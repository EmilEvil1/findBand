package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.UserCreate;
import org.springframework.stereotype.Component;

@Component
public class UserCreateUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserCreate> {

    private UserPort userPort;

    public UserCreateUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
        register(UserCreate.class, this);
    }

    @Override
    public UserDomain handle(UserCreate useCase) {
        return userPort.createUser(useCase).orElseThrow(() -> new RuntimeException("User wasn't created"));
    }
}
