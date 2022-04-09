package com.findBand.backend.infra.adapters.rest.dto;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Builder
@Data
public class InstrumentDTO implements Serializable {
    private long id;
    private String name;
}
