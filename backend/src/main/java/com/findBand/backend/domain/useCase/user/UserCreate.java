package com.findBand.backend.domain.useCase.user;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Data;

@Data
public class UserCreate implements UseCase {
    private String userName;
    private String email;
    private String password;
}
