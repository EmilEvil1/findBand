package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.FoundMember;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserCreate;
import com.findBand.backend.infra.adapters.jpa.entity.BandOwnerEntity;
import org.springframework.security.core.userdetails.User;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserPort {
    Optional<UserDomain> findUserByEmail(String email);

    Optional<UserDomain> createUser(User userCreate);

    boolean doUserExists(String emailAddress);

    String createResetPasswordRequest(long userId);

    boolean validateResetPassword(String resetPasswordId);

    void createNewPassword(String newPassword, String resetPasswordId);
}
