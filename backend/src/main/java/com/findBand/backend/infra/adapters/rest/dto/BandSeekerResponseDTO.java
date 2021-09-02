package com.findBand.backend.infra.adapters.rest.dto;

import com.findBand.backend.domain.model.BandSeeker;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BandSeekerResponseDTO {
    private String name;
    private String phone;
    private String email;

    public static BandSeekerResponseDTO fromModel(BandSeeker bandSeeker) {
        return BandSeekerResponseDTO.builder()
          .name(bandSeeker.getName())
          .email(bandSeeker.getEmail())
          .phone(bandSeeker.getPhone())
          .build();
    }
}
