package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.User;

import java.util.Optional;

public interface UserPort {
    Optional<User> findUserByEmail(String email);
}
