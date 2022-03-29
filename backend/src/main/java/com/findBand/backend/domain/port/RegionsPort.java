package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.Region;

import java.util.Set;

public interface RegionsPort {
	Set<Region> findAllRegions();
}
