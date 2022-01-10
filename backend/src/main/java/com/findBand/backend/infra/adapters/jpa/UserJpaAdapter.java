package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.model.UserRole;
import com.findBand.backend.domain.model.UserRoleEnum;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreate;
import com.findBand.backend.infra.adapters.common.NoSuchResetPasswordException;
import com.findBand.backend.infra.adapters.jpa.entity.*;
import com.findBand.backend.infra.adapters.jpa.repository.BandJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.ResetPasswordJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.UserJpaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Component
@Slf4j
public class UserJpaAdapter implements UserPort {

    private UserJpaRepository userJpaRepository;
    private PasswordEncoder passwordEncoder;
    private ResetPasswordJpaRepository passwordJpaRepository;
    private BandJpaRepository bandJpaRepository;


    public UserJpaAdapter(UserJpaRepository userJpaRepository, PasswordEncoder passwordEncoder,
                          ResetPasswordJpaRepository passwordJpaRepository, BandJpaRepository bandJpaRepository) {
        this.userJpaRepository = userJpaRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordJpaRepository = passwordJpaRepository;
        this.bandJpaRepository = bandJpaRepository;
    }

    @Override
    public Optional<UserDomain> findUserByEmail(String email) {
        return userJpaRepository.findByEmail(email).map(this::toDomain);
    }

    @Override
    @Transactional
    public Optional<UserDomain> createUser(UserCreate userCreate) {
        boolean isBandOwner = userCreate.getUserRoleEnum() == UserRoleEnum.BAND_OWNER;
        UserEntity userEntity;

        if (isBandOwner) {
            BandEntity newBand = new BandEntity();
            newBand.setName(userCreate.getBandName());
            bandJpaRepository.save(newBand);

            BandOwnerEntity bandOwnerEntity = new BandOwnerEntity();
            fillUserCommonFields(bandOwnerEntity, userCreate);
            bandOwnerEntity.setBand(newBand);
            userEntity = bandOwnerEntity;
        } else {
            BandSeekerEntity bandSeekerEntity = new BandSeekerEntity();
            fillUserCommonFields(bandSeekerEntity, userCreate);
            userEntity = bandSeekerEntity;
        }
        return Optional.of(userJpaRepository.save(userEntity)).map(this::toDomain);
    }

    private void fillUserCommonFields(UserEntity userEntity, UserCreate userCreate) {
        userEntity.setEmail(userCreate.getEmail());
        userEntity.setPassword(passwordEncoder.encode(userCreate.getPassword()));
        userEntity.setUsername(userCreate.getUserName());
    }

    @Override
    public String createResetPasswordRequest(long userId) {
        final String resetPasswordId = UUID.randomUUID().toString();
        ResetPasswordEntity resetPasswordEntity = new ResetPasswordEntity();
        resetPasswordEntity.setId(resetPasswordId);
        resetPasswordEntity.setUserId(userId);
        passwordJpaRepository.save(resetPasswordEntity);
        return resetPasswordId;
    }

    @Override
    public boolean validateResetPassword(String resetPasswordId) {
        ResetPasswordEntity resetPassword = passwordJpaRepository.findById(resetPasswordId)
          .orElseThrow(() -> new NoSuchResetPasswordException("No reset password with id: " + resetPasswordId));
        return !resetPassword.isActivated();
    }

    @Override
    @Transactional
    public void createNewPassword(String newPassword, String resetPasswordId) {
        ResetPasswordEntity passwordEntity = passwordJpaRepository.findById(resetPasswordId).orElseThrow(() -> new NoSuchResetPasswordException("No reset password with id: " + resetPasswordId));
        passwordEntity.setActivated(true);
        passwordJpaRepository.save(passwordEntity);
        userJpaRepository.updatePassword(passwordEncoder.encode(newPassword), passwordEntity.getUserId());
    }

    private UserDomain toDomain(UserEntity userEntity) {
        return UserDomain.builder()
          .id(userEntity.getId())
          .email(userEntity.getEmail())
          .password(userEntity.getPassword())
          .phone(userEntity.getPhone())
          .name(userEntity.getUsername())
          .userRole(UserRole.BAND_SEEKER)
          .isActivated(true)
          .build();
    }
}
