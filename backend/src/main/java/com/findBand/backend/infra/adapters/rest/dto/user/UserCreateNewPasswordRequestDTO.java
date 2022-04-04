package com.findBand.backend.infra.adapters.rest.dto.user;

import lombok.Data;

@Data
public class UserCreateNewPasswordRequestDTO {
    private String resetPasswordId;
    private String newPassword;
    private String confirmationNewPassword;
}
