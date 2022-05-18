package com.findBand.backend.infra.common.services;

public class StorageException extends Exception{
    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
