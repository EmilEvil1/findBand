package com.findBand.backend.infra.adapters.redis;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.List;
import java.util.Optional;

/**
 * @author dsorokin on 04.11.2021
 */
public class CitiesRedisAdapter implements RegionsPort {

	@Autowired
	private RedisTemplate<String, String> redisTemplate;

	@Override
	public List<Region> findCitiesBySearchKey(String searchKey) {
		redisTemplate.opsForHash().get()
		return null;
	}

	@Override
	public void saveAllRegions(List<String> regions) {
		redisTemplate.opsForHash().put("regions", regions.toString());
	}
}
