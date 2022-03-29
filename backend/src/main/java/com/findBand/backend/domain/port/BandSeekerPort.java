package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.model.FoundMember;
import com.findBand.backend.domain.model.Instrument;

import java.util.List;
import java.util.Set;

public interface BandSeekerPort {
    BandSeeker createBandSeeker(BandSeeker bandSeeker);

    List<BandSeeker> findByInstrumentsIds(Set<Instrument> instrumentsIds);
}
