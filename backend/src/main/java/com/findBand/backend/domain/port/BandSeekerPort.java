package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.useCase.BandSeekerCreate;

public interface BandSeekerPort {
    BandSeeker create(BandSeekerCreate bandSeekerCreate);

    BandSeeker retrieve(final long id);
}
