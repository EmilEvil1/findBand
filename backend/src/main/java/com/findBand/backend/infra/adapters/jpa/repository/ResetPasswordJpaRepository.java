package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.infra.adapters.jpa.entity.ResetPasswordEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResetPasswordJpaRepository extends JpaRepository<ResetPasswordEntity, String> {

}
