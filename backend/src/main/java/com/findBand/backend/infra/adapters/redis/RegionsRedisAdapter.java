package com.findBand.backend.infra.adapters.redis;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author dsorokin on 04.11.2021
 */

@Slf4j
@Service
@RequiredArgsConstructor
public class RegionsRedisAdapter implements RegionsPort {

	private final ObjectMapper objectMapper;

	private final RedisTemplate<String, String> redisTemplate;


	@PostConstruct
	public void init() {
		this.saveAllRegions();
	}

	@Override
	public Set<Region> findCitiesBySearchKey(String searchKey) {
		return redisTemplate.keys(searchKey).stream().map(this::toDomain).collect(Collectors.toSet());
	}

	@Override
	public Set<Region> findAllRegions() {
		return redisTemplate.keys("*").stream().map(this::toDomain).collect(Collectors.toSet());
	}

	private void saveAllRegions() {
		try {
			List<String> regions = objectMapper.readValue("[\"Вологодская область\",\"Татарстан\",\"Якутия\",\"Хабаровский край\",\"Кемеровская область\",\"Коми\",\"Бурятия\",\"Новосибирская область\",\"Мурманская область\",\"Алтайский край\",\"Псковская область\",\"Тыва\",\"Саратовская область\",\"Красноярский край\",\"Брянская область\",\"Карачаево-Черкесия\",\"Смоленская область\",\"Магаданская область\",\"Костромская область\",\"Карелия\",\"Тамбовская область\",\"Краснодарский край\",\"Калининградская область\",\"Тульская область\",\"Чувашия\",\"Ханты-Мансийский АО — Югра\",\"Московская область\",\"Иркутская область\",\"Ненецкий АО\",\"Томская область\",\"Ивановская область\",\"Чукотский АО\",\"Мордовия\",\"Омская область\",\"Белгородская область\",\"Тверская область\",\"Амурская область\",\"Калмыкия\",\"Камчатский край\",\"Курганская область\",\"Ленинградская область\",\"Забайкальский край\",\"Воронежская область\",\"Волгоградская область\",\"Челябинская область\",\"Липецкая область\",\"Ульяновская область\",\"Ингушетия\",\"Адыгея\",\"Москва\",\"Ростовская область\",\"Пензенская область\",\"Ярославская область\",\"Курская область\",\"Санкт-Петербург\",\"Приморский край\",\"Удмуртия\",\"Хакасия\",\"Ямало-Ненецкий АО\",\"Тюменская область\",\"Свердловская область\",\"Новгородская область\",\"Крым\",\"Орловская область\",\"Калужская область\",\"Башкортостан\",\"Сахалинская область\",\"Марий Эл\",\"Нижегородская область\",\"Архангельская область\",\"Пермский край\",\"Владимирская область\",\"Самарская область\",\"Кабардино-Балкария\",\"Северная Осетия — Алания\",\"Оренбургская область\",\"Рязанская область\",\"Севастополь\",\"Кировская область\",\"Чечня\",\"Астраханская область\",\"Ставропольский край\",\"Дагестан\",\"Алтай\",\"Еврейская АО\"]",
					new TypeReference<List<String>>() {
					});
			redisTemplate.opsForValue().multiSet(regions.stream().collect(Collectors.toMap(reg -> reg, reg -> reg)));
		} catch (JsonProcessingException e) {
			log.warn("Regions are loaded in wrong format", e);
		}
	}

	private Region toDomain(String region) {
		return new Region(region);
	}
}
