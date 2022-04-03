package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.ResetPassword;
import com.findBand.backend.domain.port.ResetPasswordPort;
import com.findBand.backend.domain.useCase.user.UserValidateResetPassword;
import com.findBand.backend.infra.adapters.common.NoSuchResetPasswordException;
import org.springframework.stereotype.Component;

@Component
public class UserValidateResetPasswordUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<Boolean, UserValidateResetPassword> {

    private ResetPasswordPort resetPasswordPort;

    public UserValidateResetPasswordUseCaseHandler(ResetPasswordPort resetPasswordPort) {
        this.resetPasswordPort = resetPasswordPort;
        register(UserValidateResetPassword.class, this);
    }

    @Override
    public Boolean handle(UserValidateResetPassword useCase) {
       ResetPassword resetPassword = resetPasswordPort.findResetPasswordById(useCase.getResetPasswordId()).orElseThrow(() -> new NoSuchResetPasswordException("No such reset password exists with id: " + useCase.getResetPasswordId()));
       return !resetPassword.isActivated();
    }
}
