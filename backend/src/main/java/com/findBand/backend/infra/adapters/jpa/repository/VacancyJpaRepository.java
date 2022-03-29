package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.Vacancy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface VacancyJpaRepository extends JpaRepository<Vacancy, Long> {

    List<Vacancy> findByInstrumentIn(Set<Instrument> instruments);
}
