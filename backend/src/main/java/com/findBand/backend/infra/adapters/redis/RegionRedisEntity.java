package com.findBand.backend.infra.adapters.redis;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RegionRedisEntity {
    private Long regionId;
    private String regionName;
}
