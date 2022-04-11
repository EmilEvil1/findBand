package com.findBand.backend.infra.adapters.redis;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.port.InstrumentsPort;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.Set;

public class InstrumentRedisAdapter implements InstrumentsPort {

    private RedisTemplate<String, Object> redisTemplate;

    @Override
    public Set<Instrument> getAllInstruments() {
        return null;
    }
}
