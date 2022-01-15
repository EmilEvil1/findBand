package com.findBand.backend.infra.adapters.common;


import com.findBand.backend.infra.common.rest.ApiErrorException;

public class NoSuchUserException extends ApiErrorException {
    public NoSuchUserException(String errorCode) {
        super(errorCode);
    }
}
