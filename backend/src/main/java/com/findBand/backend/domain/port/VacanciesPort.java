package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Vacancy;

import java.util.List;
import java.util.Set;

public interface VacanciesPort {
    List<Vacancy> findVacanciesByInstrumentIds(Set<Long> instrumentIds);
}
