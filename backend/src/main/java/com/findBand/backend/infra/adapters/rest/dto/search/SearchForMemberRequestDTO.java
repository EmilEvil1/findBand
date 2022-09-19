package com.findBand.backend.infra.adapters.rest.dto.search;

import lombok.Data;

import java.util.List;

@Data
public class SearchForMemberRequestDTO {
    private Long instrumentId;
    private long regionId;
}
