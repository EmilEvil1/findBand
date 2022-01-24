package com.findBand.backend.domain.model;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Builder
@Data
public class FoundMember {
    private Set<Long> instrumentIds;
    private String username;
    private String shortDescription;
}
