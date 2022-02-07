package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.VacancyDomain;

import java.util.List;
import java.util.Set;

public interface VacanciesPort {
    List<VacancyDomain> findVacanciesByInstrumentIds(Set<Long> instrumentIds);
}
