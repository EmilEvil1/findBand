package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.infra.adapters.jpa.entity.BandSeekerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BandSeekerJpaRepository extends JpaRepository<BandSeekerEntity, Long> {
}
