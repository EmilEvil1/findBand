package com.findBand.backend.infra.adapters.rest.dto.search;

import com.findBand.backend.infra.adapters.rest.dto.BandDTO;
import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import lombok.Builder;

@Builder
public class VacancyDTO {
    private long id;
    private String title;
    private String description;
    private BandDTO bandId;
    private InstrumentDTO instrument;
    private BandDTO band;
}
