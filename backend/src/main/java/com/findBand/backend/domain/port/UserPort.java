package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserCreate;

import java.util.Optional;

public interface UserPort {
    Optional<UserDomain> findUserByEmail(String email);

    Optional<UserDomain> createUser(UserCreate userCreate);

    String createResetPasswordRequest(long userId);

    boolean validateResetPassword(String resetPasswordId);

    void createNewPassword(String newPassword, String resetPasswordId);
}
