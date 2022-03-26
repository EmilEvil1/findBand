package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.Vacancy;
import com.findBand.backend.domain.port.VacanciesPort;
import com.findBand.backend.infra.adapters.jpa.entity.InstrumentalEntity;
import com.findBand.backend.infra.adapters.jpa.entity.VacancyEntity;
import com.findBand.backend.infra.adapters.jpa.repository.VacancyJpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class VacancyJpaAdapter implements VacanciesPort {

    private final VacancyJpaRepository vacancyJpaRepository;

    public VacancyJpaAdapter(VacancyJpaRepository vacancyJpaRepository) {
        this.vacancyJpaRepository = vacancyJpaRepository;
    }

    @Override
    public List<Vacancy> findVacanciesByInstrumentIds(Set<Long> instrumentIds) {
        return vacancyJpaRepository.findByInstrumentIn(
          instrumentIds.stream().map(Instrument::new).collect(Collectors.toSet())
        );
    }
}
