package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.User;
import com.findBand.backend.domain.useCase.UserCreate;

import java.util.Optional;

public interface UserPort {
    Optional<User> findUserByEmail(String email);

    Optional<User> createUser(UserCreate userCreate);
}
