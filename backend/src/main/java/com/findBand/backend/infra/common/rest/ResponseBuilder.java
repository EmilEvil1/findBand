package com.findBand.backend.infra.common.rest;

import java.util.List;

public class ResponseBuilder {

    private ResponseBuilder() {
    }

    public static <T> Response<DataResponse<T>> build(List<T> items) {
        return new Response<>(new DataResponse<>(items));
    }

    public static <T> Response<DataResponse<T>> build(List<T> items, Integer page, Integer size, int totalSize) {
        return new Response<>(new DataResponse<T>(items, page, size, totalSize));
    }

    public static <T> Response<T> build(T item) {
        return new Response<>(item);
    }

    public static Response build(ErrorResponse errorResponse) {
        return new Response<>(errorResponse);
    }
}