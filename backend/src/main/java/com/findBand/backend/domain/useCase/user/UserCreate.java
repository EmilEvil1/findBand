package com.findBand.backend.domain.useCase.user;

import com.findBand.backend.domain.common.model.UseCase;
import com.findBand.backend.domain.model.UserRoleEnum;
import lombok.Data;

import java.util.List;

@Data
public class UserCreate implements UseCase {
    private String userName;
    private String email;
    private String password;
    private String confirmationPassword;
    private UserRoleEnum userRoleEnum;
    private long regionId;
    private Long instrumentId;
}
