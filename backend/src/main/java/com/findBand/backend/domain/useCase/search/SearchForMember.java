package com.findBand.backend.domain.useCase.search;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Data
@Builder
@RequiredArgsConstructor
public class SearchForMember implements UseCase {
    private final Set<Long> instrumentalIds;
}
