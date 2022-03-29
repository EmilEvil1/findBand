package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import com.findBand.backend.infra.adapters.jpa.repository.RegionsJpaRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
public class RegionsJpaAdapter implements RegionsPort {

    private final RegionsJpaRepository regionsJpaRepository;

    public RegionsJpaAdapter(RegionsJpaRepository regionsJpaRepository) {
        this.regionsJpaRepository = regionsJpaRepository;
    }

    @Override
    public Set<Region> findAllRegions() {
        return new HashSet<>(regionsJpaRepository.findAll());
    }

}
