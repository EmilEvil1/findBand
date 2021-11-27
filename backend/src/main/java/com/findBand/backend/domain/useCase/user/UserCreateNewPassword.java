package com.findBand.backend.domain.useCase.user;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Data
public class UserCreateNewPassword implements UseCase {
    private final String newPassword;
    private final long userId;
    private final String resetPasswordId;
}
