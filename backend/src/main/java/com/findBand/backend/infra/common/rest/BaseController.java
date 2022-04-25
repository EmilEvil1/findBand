package com.findBand.backend.infra.common.rest;

import com.findBand.backend.domain.common.useCase.BeanAwareUseCasePublisher;
import com.findBand.backend.infra.adapters.common.UserForbiddenException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public class BaseController extends BeanAwareUseCasePublisher {

    public <T> Response<DataResponse<T>> respond(List<T> items) {
        return ResponseBuilder.build(items);
    }

    public <T> Response<DataResponse<T>> respond(List<T> items, int page, int size, int totalSize) {
        return ResponseBuilder.build(items, page, size, totalSize);
    }

    protected <T> Response<T> respond(T item) {
        return ResponseBuilder.build(item);
    }

    protected Response<ErrorResponse> respond(ErrorResponse errorResponse) {
        return ResponseBuilder.build(errorResponse);
    }

    protected void checkUserByEmail(String emailAddress) {
        User authenticatedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!emailAddress.equals(authenticatedUser.getUsername())) {
            throw new UserForbiddenException();
        }
    }
}