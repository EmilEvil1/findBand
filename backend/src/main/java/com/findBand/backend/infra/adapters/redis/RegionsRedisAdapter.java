package com.findBand.backend.infra.adapters.redis;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import com.findBand.backend.infra.adapters.jpa.repository.RegionsJpaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import javax.annotation.PostConstruct;
import java.lang.reflect.Field;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author dsorokin on 04.11.2021
 */

@Slf4j
@Service
@Primary
@RequiredArgsConstructor
public class RegionsRedisAdapter implements RegionsPort {

	private final RedisTemplate<String, Object> redisTemplate;

	private final RegionsJpaRepository regionsJpaRepository;

	@PostConstruct
	public void init() {
		this.saveAllRegions();
	}

	@Override
	public Set<Region> findAllRegions() {
		Set<String> keys = redisTemplate.keys("*");
		log.info("All keys: {}", keys);
		return redisTemplate.opsForValue().multiGet(keys).stream().map(this::toDomain).collect(Collectors.toSet());
	}

	@Override
	public Region findById(long id) {
//		return (Region) redisTemplate.opsForValue().get(String.valueOf(id));
		return this.toDomain(redisTemplate.opsForValue().get(String.valueOf(id)));
	}

	private void saveAllRegions() {
		List<Region> regions = regionsJpaRepository.findAll();
		redisTemplate.opsForValue().multiSet(regions.stream().collect(Collectors.toMap(reg -> String.valueOf(reg.getId()), this::toRedisEntity)));
	}

	private RegionRedisEntity toRedisEntity(Region regionEntity) {
		return RegionRedisEntity.builder()
			.regionId(regionEntity.getId())
			.regionName(regionEntity.getName())
			.build();
	}

	private Region toDomain(Object regionRedisObj) {
		LinkedHashMap regionRedisMap = (LinkedHashMap) regionRedisObj;
		log.info("RegionRedisEntity: {}", regionRedisMap);
		return new Region((Integer) regionRedisMap.get("regionId"),
		(String) regionRedisMap.get("regionName"));
	}
}
