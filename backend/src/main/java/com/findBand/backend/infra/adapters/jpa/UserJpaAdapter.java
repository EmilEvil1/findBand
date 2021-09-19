package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.model.UserRole;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.UserCreate;
import com.findBand.backend.infra.adapters.jpa.entity.UserEntity;
import com.findBand.backend.infra.adapters.jpa.repository.UserJpaRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserJpaAdapter implements UserPort {

    private UserJpaRepository userJpaRepository;
    private PasswordEncoder passwordEncoder;

    public UserJpaAdapter(UserJpaRepository userJpaRepository, PasswordEncoder passwordEncoder) {
        this.userJpaRepository = userJpaRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<UserDomain> findUserByEmail(String email) {
        return userJpaRepository.findByEmail(email).map(this::toDomain);
    }

    @Override
    public Optional<UserDomain> createUser(UserCreate userCreate) {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userCreate.getEmail());
        userEntity.setPassword(passwordEncoder.encode(userCreate.getPassword()));
        userEntity.setUsername(userCreate.getUserName());
        return Optional.of(userJpaRepository.save(userEntity)).map(this::toDomain);
    }

    private UserDomain toDomain(UserEntity userEntity) {
        return UserDomain.builder()
          .email(userEntity.getEmail())
          .password(userEntity.getPassword())
          .phone(userEntity.getPhone())
          .name(userEntity.getUsername())
          .userRole(UserRole.BAND_SEEKER)
          .isActivated(true)
          .build();
    }
}
