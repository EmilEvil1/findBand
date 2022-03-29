package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.UserDomain;

import java.util.Optional;

public interface UserPort {
    Optional<UserDomain> findUserByEmail(String email);

    boolean doUserExists(String emailAddress);
}
