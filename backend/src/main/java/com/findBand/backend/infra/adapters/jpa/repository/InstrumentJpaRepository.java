package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstrumentJpaRepository extends JpaRepository<Instrument, Long> {

}
