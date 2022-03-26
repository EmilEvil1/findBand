package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.infra.adapters.jpa.entity.BandEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BandJpaRepository extends JpaRepository<Band, String> {

}
