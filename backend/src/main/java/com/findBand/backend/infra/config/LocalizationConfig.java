package com.findBand.backend.infra.config;

import lombok.NonNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.i18n.LocaleContext;
import org.springframework.context.i18n.SimpleLocaleContext;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.i18n.AcceptHeaderLocaleContextResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Configuration
public class LocalizationConfig extends AcceptHeaderLocaleContextResolver implements WebMvcConfigurer {

    private static final String LANGUAGE_HEADER_NAME = "lang";
    private static final String DEFAULT_LANGUAGE_NAME = "ru";
    private static final List<String> SUPPORTED_LANGUAGE = List.of("ru");


    @Bean
    public ResourceBundleMessageSource messageSource() {
        var source = new ResourceBundleMessageSource();
        source.setBasenames("messages/errors");
        source.setDefaultEncoding("UTF-8");
        return source;
    }
}
