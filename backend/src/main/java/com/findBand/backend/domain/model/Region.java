package com.findBand.backend.domain.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 * @author dsorokin on 04.11.2021
 */

@RequiredArgsConstructor
@Data
public class Region {
	private final Long regionId;
	private final String regionName;
}
