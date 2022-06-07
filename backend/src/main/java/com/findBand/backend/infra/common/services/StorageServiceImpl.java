package com.findBand.backend.infra.common.services;

import com.findBand.backend.domain.services.StorageService;
import com.findBand.backend.infra.common.util.ImageUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.*;

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

    @Override
    public String store(String base64, String filename, long userId) throws StorageException {
        if (StringUtils.isEmpty(filename)) {
            throw new StorageException("Empty filename");
        }
        try {
            byte[] base64Bytes = ImageUtil.convertImageBase64ToBytes(base64);
            String extension = ImageUtil.resolveImageExtension(base64);

            Path userDirectory = createUserDirectory(userId);
            Path imageFilePath = userDirectory.resolve(filename + "." + extension);

            Files.deleteIfExists(imageFilePath);
            Files.createFile(imageFilePath);
            Files.write(imageFilePath, base64Bytes, StandardOpenOption.WRITE);
            return filename + "." + extension;
        } catch (IOException e) {
            throw new StorageException("Error in file writing", e);
        }
    }


    private Path createUserDirectory(long userId) throws IOException {
        Path userDirectoryPath = this.rootLocation.resolve(String.valueOf(userId));
        Files.createDirectories(userDirectoryPath);
        return userDirectoryPath;
    }
}
