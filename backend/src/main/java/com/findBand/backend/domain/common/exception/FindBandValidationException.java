package com.findBand.backend.domain.common.exception;

public class FindBandValidationException extends RuntimeException {
    private final String fieldName;

    public FindBandValidationException(String fieldName) {
        super();
        this.fieldName = fieldName;
    }
}
