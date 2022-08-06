package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.exceptions.FindBandCommonException;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserGetProfile;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class UserGetProfileUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserGetProfile> {

    private UserPort userPort;

    public UserGetProfileUseCaseHandler (UserPort userPort) {
        this.userPort = userPort;
        register(UserGetProfile.class, this);
    }

    @Override
    public Class<UserGetProfile> useCaseClass() {
        return UserGetProfile.class;
    }

    @Override
    public UserDomain handle(UserGetProfile useCase) {
        return userPort.findUserByEmail(useCase.getEmailAddress()).orElseThrow(() -> {
            log.error("No user exists with email: {}", useCase.getEmailAddress());
            return new FindBandCommonException();
        });
    }
}
