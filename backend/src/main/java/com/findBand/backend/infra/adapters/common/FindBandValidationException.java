package com.findBand.backend.infra.adapters.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class FindBandValidationException extends RuntimeException {
    private final String fieldName;

    public FindBandValidationException(String fieldName) {
        super();
        this.fieldName = fieldName;
    }
}
