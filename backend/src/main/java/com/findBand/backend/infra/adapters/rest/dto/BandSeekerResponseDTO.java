package com.findBand.backend.infra.adapters.rest.dto;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Builder
@Data
public class BandSeekerResponseDTO implements Serializable {
    private String name;
    private String phone;
    private String email;
}
