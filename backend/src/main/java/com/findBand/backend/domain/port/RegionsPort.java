package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.City;
import com.findBand.backend.domain.model.Region;

import java.util.List;

public interface RegionsPort {
	List<Region> findCitiesBySearchKey(String searchKey);

	void saveAllRegions(List<String> regions);
}
