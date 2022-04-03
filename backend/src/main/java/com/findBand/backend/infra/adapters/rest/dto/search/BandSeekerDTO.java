package com.findBand.backend.infra.adapters.rest.dto.search;

import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Builder
@Data
public class BandSeekerDTO {
    private Set<InstrumentDTO> instruments;
    private String username;
    private String shortDescription;
}
