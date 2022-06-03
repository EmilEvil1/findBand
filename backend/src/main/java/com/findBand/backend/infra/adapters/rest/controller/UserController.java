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
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController extends BaseController {

    @PostMapping("/resetPassword")
    @Operation(summary = "Сбрасывает пароль и отправляет письмо")
    public Response<?> resetPassword(@RequestBody ResetPasswordRequestDTO resetPasswordRequest) {
        publish(UserDomain.class, new UserResetPassword(resetPasswordRequest.getEmailAddress()));
        return new Response<>(true);
    }

    @PostMapping("/createNewPassword")
    @Operation(summary = "Создает новый пароль")
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
