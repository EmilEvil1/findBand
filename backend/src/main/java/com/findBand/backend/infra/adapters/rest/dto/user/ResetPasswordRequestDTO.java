package com.findBand.backend.infra.adapters.rest.dto.user;

import lombok.Data;

@Data
public class ResetPasswordRequestDTO {
    private String emailAddress;
}
