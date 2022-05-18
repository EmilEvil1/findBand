package com.findBand.backend.domain.services;

import com.findBand.backend.infra.common.services.StorageException;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    String store(MultipartFile file, long userId) throws StorageException;
}
