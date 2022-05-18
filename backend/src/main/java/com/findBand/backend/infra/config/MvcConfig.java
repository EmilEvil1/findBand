package com.findBand.backend.infra.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Value("${storage.folder}")
    private String storageFolder;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        exposeStorageFolder(registry);
    }

    private void exposeStorageFolder(ResourceHandlerRegistry registry) {
        Path storageFolderPath = Paths.get(storageFolder);
        String absolutePath = storageFolderPath.toFile().getAbsolutePath();

        registry.addResourceHandler("/uploads/**").addResourceLocations("file:" + absolutePath + "/");
    }
}
