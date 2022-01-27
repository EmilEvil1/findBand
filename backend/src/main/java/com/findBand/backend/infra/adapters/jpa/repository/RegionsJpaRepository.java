package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.infra.adapters.jpa.entity.RegionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionsJpaRepository extends JpaRepository<RegionEntity, Long> {
}
