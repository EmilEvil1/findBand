package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.model.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface BandSeekerRepository extends JpaRepository<BandSeeker, Long> {

    List<BandSeeker> findByInstrumentsIn(Set<Instrument> instruments);
}
