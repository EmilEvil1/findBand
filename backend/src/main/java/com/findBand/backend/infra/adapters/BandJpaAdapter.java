package com.findBand.backend.infra.adapters;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.port.BandPort;

public class BandJpaAdapter implements BandPort {
    @Override
    public Band findBandById(long id) {
        return null;
    }
}
