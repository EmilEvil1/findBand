package com.findBand.backend.domain.common.useCase;

import com.findBand.backend.domain.common.model.UseCase;

public interface UseCasePublisher {

    <R, T extends UseCase> R publish(Class<R> returnClass, T useCase);

    <R, T extends UseCase> void publish(T useCase);
}
