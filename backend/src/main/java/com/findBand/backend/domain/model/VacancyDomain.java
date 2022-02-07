package com.findBand.backend.domain.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class VacancyDomain {
    private Long id;
    private String title;
    private String description;
    private InstrumentDomain instrument;
}
