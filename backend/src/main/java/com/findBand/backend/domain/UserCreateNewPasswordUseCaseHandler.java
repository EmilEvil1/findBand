package com.findBand.backend.domain;

import com.findBand.backend.domain.exceptions.FindBandValidationException;
import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.ResetPassword;
import com.findBand.backend.domain.port.ResetPasswordPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreateNewPassword;
import com.findBand.backend.domain.useCase.user.UserValidateResetPassword;
import com.findBand.backend.infra.adapters.common.NoSuchResetPasswordException;
import com.findBand.backend.infra.common.util.ValidationRulesUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserCreateNewPasswordUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<Boolean, UserCreateNewPassword> {

    private ResetPasswordPort resetPasswordPort;
    private PasswordEncoder passwordEncoder;

    public UserCreateNewPasswordUseCaseHandler(ResetPasswordPort resetPasswordPort, PasswordEncoder passwordEncoder) {
        this.resetPasswordPort = resetPasswordPort;
        this.passwordEncoder = passwordEncoder;
        register(UserCreateNewPassword.class, this);
    }

    @Override
    public Boolean handle(UserCreateNewPassword useCase) {
        boolean isValidResetPassword = publish(Boolean.class, new UserValidateResetPassword(useCase.getResetPasswordId()));

        if (!isValidResetPassword) {
            throw new FindBandValidationException("create.new.password.invalid");
        }

        ResetPassword resetPassword = resetPasswordPort.findResetPasswordById(useCase.getResetPasswordId())
                .orElseThrow(() -> new NoSuchResetPasswordException("No reset password with id: " + useCase.getResetPasswordId()));
        resetPassword.setActivated(true);
        resetPassword.getUser().setPassword(useCase.getNewPassword(), passwordEncoder, useCase.getConfirmationNewPassword());
        resetPasswordPort.createNewPassword(resetPassword);

        return true;
    }
}
