package com.findBand.backend.infra.adapters.redis;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class InstrumentRedisEntity {
	private Long instrumentId;
	private String instrumentName;
}
