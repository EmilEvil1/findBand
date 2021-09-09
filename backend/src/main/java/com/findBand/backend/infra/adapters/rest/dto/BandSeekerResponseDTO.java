package com.findBand.backend.infra.adapters.rest.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BandSeekerResponseDTO {
    private String name;
    private String phone;
    private String email;
}
