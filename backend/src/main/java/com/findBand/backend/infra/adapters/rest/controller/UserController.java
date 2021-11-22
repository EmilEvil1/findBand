package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.useCase.UserResetPassword;
import com.findBand.backend.infra.common.rest.BaseController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController extends BaseController {

    @PostMapping("/resetPassword")
    @ResponseStatus(HttpStatus.OK)
    public void resetPassword(@RequestBody String emailAddress) {
        publish(UserDomain.class, new UserResetPassword(emailAddress));
    }
}
