package com.findBand.backend.infra.adapters.redis;

import lombok.Data;

/**
 * @author dsorokin on 04.11.2021
 */

@Data
public class CityEntity {
	private String district;
	private String name;
	private String subject;
}
