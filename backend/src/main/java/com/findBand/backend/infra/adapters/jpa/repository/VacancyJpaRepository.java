package com.findBand.backend.infra.adapters.jpa.repository;

import com.findBand.backend.infra.adapters.jpa.entity.InstrumentalEntity;
import com.findBand.backend.infra.adapters.jpa.entity.VacancyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface VacancyJpaRepository extends JpaRepository<VacancyEntity, Long> {

    List<VacancyEntity> findByInstrumentalEntityIn(Set<InstrumentalEntity> instrumentalEntities);
}
