package com.findBand.backend.domain.common.useCase;

import com.findBand.backend.domain.common.model.UseCase;

public interface VoidUseCaseHandler<T extends UseCase> {

    void handle(T useCase);
}
