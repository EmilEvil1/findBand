package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.infra.adapters.jpa.repository.BandJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BandJpaAdapter implements BandPort {

    private BandJpaRepository bandJpaRepository;

    @Override
    public Band retrieve(final long id) {
        return null;
    }
}
