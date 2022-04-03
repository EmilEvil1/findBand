package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.UserDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserJpaRepository extends JpaRepository<UserDomain, Long> {

    Optional<UserDomain> findByEmail(String email);

    boolean existsByEmail(String email);

    @Query("UPDATE user u SET password = ?1 where u.id = ?2")
    @Modifying
    void updatePassword(String password, long userId);

    List<UserDomain> findByInstrumentsIn(Set<Instrument> instruments);
}
