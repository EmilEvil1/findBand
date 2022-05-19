package com.findBand.backend.infra.common.rest;

import com.findBand.backend.domain.common.useCase.BeanAwareUseCasePublisher;
import com.findBand.backend.infra.adapters.common.UserForbiddenException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public class BaseController extends BeanAwareUseCasePublisher {

    protected <T> Response<T> respond(T item) {
        return ResponseBuilder.build(item);
    }

    protected Response<ErrorResponse> respond(ErrorResponse errorResponse) {
        return ResponseBuilder.build(errorResponse);
    }
}