package com.findBand.backend.infra.adapters.rest.dto.search;

import lombok.Data;

import java.util.Set;

@Data
public class SearchForBandRequestDTO {
    private long regionId;
    private Set<Long> instrumentsIds;
}
