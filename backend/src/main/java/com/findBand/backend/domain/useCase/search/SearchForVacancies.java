package com.findBand.backend.domain.useCase.search;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Data
@Builder
@RequiredArgsConstructor
public class SearchForVacancies implements UseCase {
    private final long regionId;
    private final Set<Long> instrumentsIds;
}
