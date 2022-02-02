package com.findBand.backend.infra.adapters.redis;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import com.findBand.backend.infra.adapters.jpa.entity.RegionEntity;
import com.findBand.backend.infra.adapters.jpa.repository.RegionsJpaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import javax.annotation.PostConstruct;
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
	public Set<Region> findCitiesBySearchKey(String searchKey) {
		Set<String> keys = redisTemplate.keys(searchKey);
		return redisTemplate.opsForValue().multiGet(keys).stream().map(this::toDomain).collect(Collectors.toSet());
	}

	@Override
	public Set<Region> findAllRegions() {
		Set<String> keys = redisTemplate.keys("*");
		return redisTemplate.opsForValue().multiGet(keys).stream().map(this::toDomain).collect(Collectors.toSet());
	}

	private void saveAllRegions() {
		List<RegionEntity> regions = regionsJpaRepository.findAll();
		redisTemplate.opsForValue().multiSet(regions.stream().collect(Collectors.toMap(reg -> String.valueOf(reg.getId()), this::toRedisEntity)));
	}

	private RegionRedisEntity toRedisEntity(RegionEntity regionEntity) {
		return RegionRedisEntity.builder()
			.regiondId(regionEntity.getId())
			.regionName(regionEntity.getName())
			.build();
	}

	private Region toDomain(Object regionRedisEntity) {
		try {
			return new Region((Long) ReflectionUtils.findField(RegionRedisEntity.class, "regionId", Long.class).get(regionRedisEntity),
			(String) ReflectionUtils.findField(RegionRedisEntity.class, "regionName", String.class).get(regionRedisEntity));
		} catch (IllegalAccessException e) {
			return null;
		}
	}
}
