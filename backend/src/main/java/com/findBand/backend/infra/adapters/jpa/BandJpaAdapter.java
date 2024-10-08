package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.infra.adapters.jpa.repository.BandJpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class BandJpaAdapter implements BandPort {

    private BandJpaRepository bandJpaRepository;

    public BandJpaAdapter(BandJpaRepository bandJpaRepository) {
        this.bandJpaRepository = bandJpaRepository;
    }

    @Override
    @Transactional
    public Band createBand(Band band) {
        return bandJpaRepository.save(band);
    }

}
