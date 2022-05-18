package com.findBand.backend.domain.exceptions;

import com.findBand.backend.infra.common.rest.ApiErrorException;

//TODO: Pass message to Exception's constructor

public class FindBandCommonException extends ApiErrorException {
    public FindBandCommonException() {
        super("common.error");
    }
}
