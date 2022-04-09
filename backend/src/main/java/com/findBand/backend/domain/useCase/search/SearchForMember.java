package com.findBand.backend.domain.useCase.search;

import com.findBand.backend.domain.common.model.UseCase;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Builder
@RequiredArgsConstructor
public class SearchForMember implements UseCase {

    public SearchForMember(List<Long> instrumentIds, long regionId) {
        this.instrumentalIds = new HashSet<>(instrumentIds);
        this.regionId = regionId;
    }

    private final Set<Long> instrumentalIds;
    private final long regionId;
}
