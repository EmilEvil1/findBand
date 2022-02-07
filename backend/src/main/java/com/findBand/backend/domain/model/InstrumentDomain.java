package com.findBand.backend.domain.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class InstrumentDomain {
    private long id;
    private String name;
}
