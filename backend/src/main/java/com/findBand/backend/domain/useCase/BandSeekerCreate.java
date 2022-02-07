package com.findBand.backend.domain.useCase;

import com.findBand.backend.domain.common.model.UseCase;
import com.findBand.backend.domain.model.InstrumentDomain;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BandSeekerCreate implements UseCase {
    private String name;
    private String phone;
    private String email;
    private InstrumentDomain musicalInstrument;
}
