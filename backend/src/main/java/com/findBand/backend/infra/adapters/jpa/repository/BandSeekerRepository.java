package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.infra.adapters.jpa.entity.BandSeekerEntity;
import com.findBand.backend.infra.adapters.jpa.entity.InstrumentalEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BandSeekerRepository extends JpaRepository<BandSeeker, Long> {

    List<BandSeeker> findByInstrumentsIn(List<Instrument> instruments);
}
