package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.BandOwner;

public interface BandOwnerPort {
    BandOwner createBandOwner(BandOwner bandOwner);
}
