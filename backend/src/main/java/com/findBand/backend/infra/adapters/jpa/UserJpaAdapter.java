package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.User;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.infra.adapters.jpa.entity.UserEntity;
import com.findBand.backend.infra.adapters.jpa.repository.UserJpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserJpaAdapter implements UserPort {

    private UserJpaRepository userJpaRepository;

    @Override
    public Optional<User> findUserByEmail(String email) {
        return userJpaRepository.findByEmail(email).map(this::toDomain);
    }

    private User toDomain(UserEntity userEntity) {
        return User.builder()
          .email(userEntity.getEmail())
          .password(userEntity.getPassword())
          .phone(userEntity.getPhone())
          .name(userEntity.getUsername())
          .build();
    }
}
