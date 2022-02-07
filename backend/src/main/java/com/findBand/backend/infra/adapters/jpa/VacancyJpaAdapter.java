package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.InstrumentDomain;
import com.findBand.backend.domain.model.VacancyDomain;
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
    public List<VacancyDomain> findVacanciesByInstrumentIds(Set<Long> instrumentIds) {
        List<VacancyEntity> vacancyEntities = vacancyJpaRepository.findByInstrumentalEntityIn(
          instrumentIds.stream().map(InstrumentalEntity::new).collect(Collectors.toSet())
        );
        return vacancyEntities.stream().map(this::toDomain).collect(Collectors.toList());
    }

    private VacancyDomain toDomain(VacancyEntity vacancyEntity) {
        return VacancyDomain.builder()
          .id(vacancyEntity.getId())
          .title(vacancyEntity.getTitle())
          .description(vacancyEntity.getDescription())
          .instrument(toDomain(vacancyEntity.getInstrumentalEntity()))
          .build();
    }

    private InstrumentDomain toDomain(InstrumentalEntity instrumentalEntity) {
        return InstrumentDomain.builder()
          .id(instrumentalEntity.getId())
          .name(instrumentalEntity.getName())
          .build();
    }
}
