package com.findBand.backend.infra.adapters.rest.dto.search;

import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import com.findBand.backend.infra.adapters.rest.dto.RegionDTO;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.Set;

@Builder
@Data
public class BandSeekerDTO implements Serializable {
    private long id;
    private Set<String> instruments;
    private String regionName;
    private String username;
    private String bandName;
    private Integer experienceAge;
}
