package com.findBand.backend.domain.exceptions;

import com.findBand.backend.infra.common.rest.ApiErrorException;


public class FindBandCommonException extends ApiErrorException {
    public FindBandCommonException() {
        super("common.error");
    }
}
