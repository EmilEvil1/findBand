package com.findBand.backend.infra.adapters.rest.dto.user;

import lombok.Data;

@Data
public class ValidatePasswordRequestDTO {
    private String resetPasswordId;
}
