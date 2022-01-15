package com.findBand.backend.infra.common.rest;

public class ApiErrorException extends RuntimeException {
    private final String errorCode;

    public String getErrorCode() {
        return errorCode;
    }

    public ApiErrorException(String errorCode) {
        super();
        this.errorCode = errorCode;
    }
}
