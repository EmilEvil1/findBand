package com.findBand.backend.domain.exceptions;

import com.findBand.backend.infra.common.rest.ApiErrorException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class FindBandValidationException extends ApiErrorException {
    public FindBandValidationException(String errorCode) {
        super(errorCode);
    }
}
