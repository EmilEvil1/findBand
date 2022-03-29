package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionsJpaRepository extends JpaRepository<Region, Long> {
}
