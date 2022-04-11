package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Instrument;

import java.util.Set;

public interface InstrumentsPort {
    Set<Instrument> getAllInstruments();
}
