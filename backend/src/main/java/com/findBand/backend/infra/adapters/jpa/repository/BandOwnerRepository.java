package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.BandOwner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BandOwnerRepository extends JpaRepository<BandOwner, Long> {
}
