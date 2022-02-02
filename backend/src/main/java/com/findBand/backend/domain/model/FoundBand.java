package com.findBand.backend.domain.model;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
public class FoundBand {
    private String name;
}
