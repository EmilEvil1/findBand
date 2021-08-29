package com.findBand.backend.infra.adapters.rest.dto;

import com.findBand.backend.domain.useCase.BandSeekerCreate;

public class BandSeekerCreateRequestDTO {
    private String name;
    private String email;
    private String phone;

    public BandSeekerCreate toDomainModel() {
        return BandSeekerCreate.builder()
          .email(email)
          .phone(phone)
          .name(name)
          .build();
    }
}
