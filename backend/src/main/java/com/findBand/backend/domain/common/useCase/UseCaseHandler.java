package com.findBand.backend.domain.common.useCase;

import com.findBand.backend.domain.common.model.UseCase;

public interface UseCaseHandler<R, T extends UseCase> {

    R handle(T useCase);

    Class<T> useCaseClass();
}
