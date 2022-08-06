package com.findBand.backend.domain.common.useCase;

import com.findBand.backend.domain.common.model.UseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@Primary
public class SpringUseCasePublisher implements UseCasePublisher{

    @Autowired
    private Map<Class<UseCase>, List<UseCaseHandler>> useCaseHandlerMap;

    @Override
    public <R, T extends UseCase> R publish(Class<R> returnClass, T useCase) {
        var useCaseHandler = (UseCaseHandler<R, T>) useCaseHandlerMap.get(useCase.getClass()).get(0);
        return useCaseHandler.handle(useCase);
    }

    @Override
    public <R, T extends UseCase> void publish(T useCase) {

    }
}
