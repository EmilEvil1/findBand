package com.findBand.backend.infra.common.rest;

public class Response<T> extends CommonResponseDTO {

    private T data;
    private ErrorResponse errors;

    public Response() {
        this.success = true;
    }

    public Response(ErrorResponse errors) {
        this.errors = errors;
        this.success = false;
    }

    public Response(T data) {
        this.data = data;
        this.success = true;
    }

    public ErrorResponse getErrors() {
        return errors;
    }

    public T getData() {
        return data;
    }
}