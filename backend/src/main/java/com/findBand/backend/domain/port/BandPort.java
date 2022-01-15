package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Band;

public interface BandPort {
    Band retrieveBand(final long id);

    Band createBand(String bandName, Long bandOwnerId);
}
