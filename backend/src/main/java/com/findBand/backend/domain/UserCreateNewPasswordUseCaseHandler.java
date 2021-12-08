package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreateNewPassword;
import com.findBand.backend.domain.useCase.user.UserValidateResetPassword;
import com.findBand.backend.infra.common.util.ValidationRulesUtil;
import org.springframework.stereotype.Component;

@Component
public class UserCreateNewPasswordUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<Boolean, UserCreateNewPassword> {

    private UserPort userPort;

    public UserCreateNewPasswordUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
    }

    @Override
    public Boolean handle(UserCreateNewPassword useCase) {
        boolean isValidResetPassword = publish(Boolean.class, new UserValidateResetPassword(useCase.getResetPasswordId()));

        if (isValidResetPassword || !ValidationRulesUtil.validatePassword(useCase.getNewPassword())) {
            return false;
        }

        userPort.createNewPassword(useCase.getNewPassword(), useCase.getResetPasswordId());
        return true;
    }
}
