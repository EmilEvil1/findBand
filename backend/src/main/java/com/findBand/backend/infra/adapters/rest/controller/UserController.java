package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserCreateNewPassword;
import com.findBand.backend.domain.useCase.user.UserResetPassword;
import com.findBand.backend.domain.useCase.user.UserValidateResetPassword;
import com.findBand.backend.infra.adapters.rest.dto.user.ResetPasswordRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.UserCreateNewPasswordRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.ValidatePasswordRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.ValidateResetPasswordDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import com.findBand.backend.infra.common.rest.Response;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController extends BaseController {

    @PostMapping("/resetPassword")
    public Response<?> resetPassword(@RequestBody ResetPasswordRequestDTO resetPasswordRequest) {
        publish(UserDomain.class, new UserResetPassword(resetPasswordRequest.getEmailAddress()));
        return new Response<>(true);
    }

    @GetMapping("/validateResetPassword")
    public ValidateResetPasswordDTO validateResetPassword(@RequestBody ValidatePasswordRequestDTO validatePasswordRequest) {
        boolean isValid = publish(Boolean.class, new UserValidateResetPassword(validatePasswordRequest.getResetPasswordId()));
        return new ValidateResetPasswordDTO(isValid);
    }

    @PostMapping("/createNewPassword")
    public Response<?> createNewPassword(@RequestBody UserCreateNewPasswordRequestDTO newPasswordRequestDTO) {
        //TODO: HOW TO GET USER ID?
        publish(Boolean.class, new UserCreateNewPassword(
          newPasswordRequestDTO.getNewPassword(),
          newPasswordRequestDTO.getConfirmationNewPassword(),
          newPasswordRequestDTO.getResetPasswordId()
        ));
        return new Response<>();
    }

}
