package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserValidateResetPassword;
import org.springframework.stereotype.Component;

@Component
public class UserValidateResetPasswordUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<Boolean, UserValidateResetPassword> {

    private UserPort userPort;

    public UserValidateResetPasswordUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
        register(UserValidateResetPassword.class, this);
    }

    @Override
    public Boolean handle(UserValidateResetPassword useCase) {
        return userPort.validateResetPassword(useCase.getResetPasswordId());
    }
}
