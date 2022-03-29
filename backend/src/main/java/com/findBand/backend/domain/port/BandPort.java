package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.model.BandOwner;

import java.util.List;
import java.util.Set;

public interface BandPort {

    Band createBand(Band band);
}
