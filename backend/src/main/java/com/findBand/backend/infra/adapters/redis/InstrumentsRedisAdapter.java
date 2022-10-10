package com.findBand.backend.infra.adapters.redis;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.InstrumentsPort;
import com.findBand.backend.infra.adapters.jpa.repository.InstrumentJpaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class InstrumentsRedisAdapter implements InstrumentsPort{

    private final String CACHE_INSTRUMENTS = "CACHE_INSTRUMENTS";

    private final RedisTemplate<String, List<Object>> redisTemplate;
    private final InstrumentJpaRepository instrumentJpaRepository;

    @PostConstruct
    public void init() {
        saveAllInstruments();
    }

    @Override
    public Set<Instrument> getAllInstruments() {
        return redisTemplate.opsForValue().get(CACHE_INSTRUMENTS).stream().map(this::toDomain).collect(Collectors.toSet());
    }

    private void saveAllInstruments() {
        List<Instrument> instruments = instrumentJpaRepository.findAll();
        redisTemplate.opsForValue().setIfAbsent(CACHE_INSTRUMENTS, instruments.stream().map(this::toRedisEntity).collect(Collectors.toList()));
    }

    private InstrumentRedisEntity toRedisEntity(Instrument instrument) {
        return InstrumentRedisEntity.builder()
                .instrumentId(instrument.getId())
                .instrumentName(instrument.getName())
                .build();
    }

    private Instrument toDomain(Object instrumentRedisObj) {
        LinkedHashMap instrumentRedisMap = (LinkedHashMap) instrumentRedisObj;
        return new Instrument(
                (Integer) instrumentRedisMap.get("instrumentId"),
                (String) instrumentRedisMap.get("instrumentName")
        );
    }
}
