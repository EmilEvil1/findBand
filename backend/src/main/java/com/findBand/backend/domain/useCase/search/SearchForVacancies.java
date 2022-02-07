package com.findBand.backend.domain.useCase.search;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Builder
@RequiredArgsConstructor
public class SearchForVacancies implements UseCase {
    private final Set<Long> instrumentIds;
}
