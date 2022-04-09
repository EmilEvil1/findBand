package com.findBand.backend.infra.adapters.rest.dto.search;

import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.Set;

@Builder
@Data
public class BandSeekerDTO implements Serializable {
    private Set<InstrumentDTO> instruments;
    private String username;
    private String shortDescription;
}
