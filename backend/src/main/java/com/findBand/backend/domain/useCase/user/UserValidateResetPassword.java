package com.findBand.backend.domain.useCase.user;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class UserValidateResetPassword implements UseCase {
    private final String resetPasswordId;
}
