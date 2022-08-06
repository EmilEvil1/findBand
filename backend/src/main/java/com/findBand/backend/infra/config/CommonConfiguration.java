package com.findBand.backend.infra.config;

import com.findBand.backend.domain.common.model.UseCase;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Configuration
public class CommonConfiguration {

    @Autowired
    private List<UseCaseHandler> handlers;

    @Bean
    public Map<Class<UseCase>, List<UseCaseHandler>> useCaseToHandler() {
        System.out.println("handlers are created");
        return handlers.stream().collect(Collectors.groupingBy(UseCaseHandler::useCaseClass));
    }
}
