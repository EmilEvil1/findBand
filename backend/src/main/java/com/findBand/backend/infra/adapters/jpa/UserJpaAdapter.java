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
    private PasswordEncoder passwordEncoder;
    private ResetPasswordJpaRepository passwordJpaRepository;
    private BandSeekerRepository bandSeekerRepository;
    private EntityManager entityManager;


    public UserJpaAdapter(UserJpaRepository userJpaRepository, PasswordEncoder passwordEncoder,
                          ResetPasswordJpaRepository passwordJpaRepository,
                          BandSeekerRepository bandSeekerRepository, EntityManager entityManager) {
        this.userJpaRepository = userJpaRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordJpaRepository = passwordJpaRepository;
        this.bandSeekerRepository = bandSeekerRepository;
        this.entityManager = entityManager;
    }

    @Override
    public Optional<UserDomain> findUserByEmail(String email) {
        return userJpaRepository.findByEmail(email).map(this::toDomain);
    }

    @Override
    public List<FoundMember> findByInstrumentsIds(Set<Ins> instrumentsIds) {
        List<InstrumentalEntity> instrumentalEntities = instrumentsIds.stream().map(InstrumentalEntity::new).collect(Collectors.toList());
        List<BandSeekerEntity> bandSeekers = bandSeekerRepository.findByInstrumentalIdsIn(instrumentalEntities);

        return bandSeekers.stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<UserDomain> createUser(UserCreate userCreate) {
        boolean isBandOwner = userCreate.getUserRoleEnum() == UserRoleEnum.BAND_OWNER;
        UserEntity userEntity = isBandOwner ? new BandOwnerEntity() : new BandSeekerEntity();
        fillUserCommonFields(userEntity, userCreate);
        entityManager.persist(userEntity);
        return Optional.of(userEntity).map(this::toDomain);
    }

    private void fillUserCommonFields(UserEntity userEntity, UserCreate userCreate) {
        userEntity.setEmail(userCreate.getEmail());
        userEntity.setPassword(passwordEncoder.encode(userCreate.getPassword()));
        userEntity.setUsername(userCreate.getUserName());
    }

    @Override
    public boolean doUserExists(String emailAddress) {
        return userJpaRepository.existsByEmail(emailAddress);
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

    private FoundMember toDomain(BandSeekerEntity bandSeeker) {
        return FoundMember.builder()
          .instrumentIds(bandSeeker.getInstrumentalIds().stream().map(InstrumentalEntity::getId).collect(Collectors.toSet()))
          .username(bandSeeker.getUsername())
          .build();
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
