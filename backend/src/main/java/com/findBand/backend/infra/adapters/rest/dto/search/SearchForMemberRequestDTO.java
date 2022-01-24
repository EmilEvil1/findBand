package com.findBand.backend.infra.adapters.rest.dto.search;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Builder
@Data
public class SearchForMemberRequestDTO {
    private Set<Long> instrumentalIds;
    private long regionId;
}
