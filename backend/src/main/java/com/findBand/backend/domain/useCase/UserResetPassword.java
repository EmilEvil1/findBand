package com.findBand.backend.domain.useCase;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class UserResetPassword implements UseCase {
    private final String emailAddress;
}
