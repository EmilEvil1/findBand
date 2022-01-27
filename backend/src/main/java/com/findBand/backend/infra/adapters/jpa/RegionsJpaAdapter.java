package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import com.findBand.backend.infra.adapters.jpa.entity.RegionEntity;
import com.findBand.backend.infra.adapters.jpa.repository.RegionsJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class RegionsJpaAdapter implements RegionsPort {

    private final RegionsJpaRepository regionsJpaRepository;

    @Override
    public Set<Region> findCitiesBySearchKey(String searchKey) {
        return null;
    }

    @Override
    public Set<Region> findAllRegions() {
        return regionsJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toSet());
    }

    private Region toDomain(RegionEntity region) {
        return new Region(region.getId(), region.getName());
    }
}
