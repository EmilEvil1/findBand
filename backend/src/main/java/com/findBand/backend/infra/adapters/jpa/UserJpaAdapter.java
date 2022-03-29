package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.FoundMember;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.model.UserRole;
import com.findBand.backend.domain.model.UserRoleEnum;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreate;
import com.findBand.backend.infra.adapters.common.NoSuchResetPasswordException;
import com.findBand.backend.infra.adapters.jpa.entity.*;
import com.findBand.backend.infra.adapters.jpa.repository.BandJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.BandSeekerRepository;
import com.findBand.backend.infra.adapters.jpa.repository.ResetPasswordJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.UserJpaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.*;
import java.util.stream.Collectors;

@Component
@Slf4j
public class UserJpaAdapter implements UserPort {

    private UserJpaRepository userJpaRepository;

    public UserJpaAdapter(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public Optional<UserDomain> findUserByEmail(String email) {
        return userJpaRepository.findByEmail(email);
    }



    @Override
    public boolean doUserExists(String emailAddress) {
        return userJpaRepository.existsByEmail(emailAddress);
    }
}
