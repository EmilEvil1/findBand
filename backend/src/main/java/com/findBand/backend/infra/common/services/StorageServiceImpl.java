package com.findBand.backend.infra.common.services;

import com.findBand.backend.domain.services.StorageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
@Slf4j
public class StorageServiceImpl implements StorageService {

    private final Path rootLocation;

    public StorageServiceImpl(@Value("${storage.folder}") String rootFolder) {
        this.rootLocation = Paths.get(rootFolder);
    }

    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(this.rootLocation);
        } catch (IOException e) {
            log.error("Error in creating directory {}", this.rootLocation, e);
        }
    }

    @Override
    public String store(MultipartFile file, long userId) throws StorageException {
        String filename = file.getOriginalFilename();
        if (file.isEmpty()) {
            throw new StorageException("File is empty " + file.getName());
        }

        try (InputStream inputStream = file.getInputStream()) {
            Path userDirectory = createUserDirectory(userId);
            Files.copy(inputStream, userDirectory.resolve(filename),
              StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new StorageException("Error in file copying", e);
        }

        return filename;
    }

    private Path createUserDirectory(long userId) throws IOException {
        Path userDirectoryPath = this.rootLocation.resolve(String.valueOf(userId));
        Files.createDirectories(userDirectoryPath);
        return userDirectoryPath;
    }
}
