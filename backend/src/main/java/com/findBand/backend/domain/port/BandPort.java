package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.model.BandOwner;

import java.util.List;
import java.util.Set;

public interface BandPort {
    Band retrieveBand(final long id);

    Band createBand(Band band);

    BandOwner findBandOwnerById(long id);

    List<Band> findBandsByInstrumentsIdsAndRegions(Set<Long> instrumentsIds, Set<Long> regionsIds);
}
