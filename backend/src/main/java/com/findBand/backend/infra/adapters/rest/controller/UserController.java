package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.user.UserCreateNewPassword;
import com.findBand.backend.domain.useCase.user.UserResetPassword;
import com.findBand.backend.domain.useCase.user.UserValidateResetPassword;
import com.findBand.backend.infra.adapters.rest.dto.user.UserCreateNewPasswordRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.user.ValidateResetPasswordDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController extends BaseController {

    @PostMapping("/resetPassword")
    public void resetPassword(@RequestBody String emailAddress) {
        publish(UserDomain.class, new UserResetPassword(emailAddress));
    }

    @GetMapping("/validateResetPassword")
    public ValidateResetPasswordDTO validateResetPassword(@RequestBody String resetPasswordId) {
        boolean isValid = publish(Boolean.class, new UserValidateResetPassword(resetPasswordId));
        return new ValidateResetPasswordDTO(isValid);
    }

    @PostMapping("/createNewPassword")
    public void createNewPassword(@RequestBody UserCreateNewPasswordRequestDTO newPasswordRequestDTO) {
        //TODO: HOW TO GET USER ID?
        publish(Boolean.class, new UserCreateNewPassword(
          newPasswordRequestDTO.getNewPassword(),
          newPasswordRequestDTO.getResetPasswordId(),
          newPasswordRequestDTO.getConfirmationNewPassword()
        ));


    }

}
