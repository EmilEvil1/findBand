package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.ResetPassword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResetPasswordJpaRepository extends JpaRepository<ResetPassword, String> {

}
