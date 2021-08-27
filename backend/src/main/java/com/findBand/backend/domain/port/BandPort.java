package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Band;

public interface BandPort {
    Band findBandById(final long id);
}
