package com.findBand.backend.infra.adapters.rest.dto.search;

import lombok.Data;

import java.util.List;

@Data
public class SearchForMemberRequestDTO {
    private List<Long> instrumentIds;
    private long regionId;
}
