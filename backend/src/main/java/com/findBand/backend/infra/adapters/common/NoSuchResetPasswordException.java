package com.findBand.backend.infra.adapters.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoSuchResetPasswordException extends RuntimeException {
    public NoSuchResetPasswordException(String message) {
        super(message);
    }
}
