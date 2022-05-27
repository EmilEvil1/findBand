package com.findBand.backend.infra.adapters.rest.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RegionDTO {
    private long regionId;
    private String regionName;
}
