package com.findBand.backend.infra.adapters.redis;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.port.InstrumentsPort;
import com.findBand.backend.infra.adapters.jpa.repository.InstrumentJpaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
public class InstrumentsRedisAdapter implements InstrumentsPort{

    private final String CACHE_INSTRUMENTS = "CACHE_INSTRUMENTS";

    private final RedisTemplate<String, List<Object>> redisTemplate;
    private final InstrumentJpaRepository instrumentJpaRepository;

    @Override
    public Set<Instrument> getAllInstruments() {
        return null;
    }

    private void saveAllInstruments() {
        List<Instrument> instruments = instrumentJpaRepository.findAll();
//        redisTemplate.opsForValue().setIfAbsent(CACHE_INSTRUMENTS, instruments.stream());
    }
}
