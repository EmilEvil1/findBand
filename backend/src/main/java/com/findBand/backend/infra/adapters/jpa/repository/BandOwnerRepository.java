package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.infra.adapters.jpa.entity.BandOwnerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BandOwnerRepository extends JpaRepository<BandOwnerEntity, Long> {
}
