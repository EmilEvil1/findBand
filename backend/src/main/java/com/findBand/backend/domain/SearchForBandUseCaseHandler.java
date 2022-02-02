package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.model.FoundBand;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.domain.useCase.search.SearchForBand;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class SearchForBandUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<List<FoundBand>, SearchForBand> {

    private final BandPort bandPort;

    public SearchForBandUseCaseHandler(BandPort bandPort) {
        this.bandPort = bandPort;
        register(SearchForBand.class, this);
    }

    @Override
    public List<FoundBand> handle(SearchForBand useCase) {
        List<Band> bands = bandPort.findBandsByInstrumentsIdsAndRegions(useCase.getInstrumentsIds(), Collections.singleton(useCase.getRegionId()));
        return bands.stream().map(this::toFoundBand).collect(Collectors.toList());
    }

    private FoundBand toFoundBand(Band band) {
        return FoundBand.builder()
          .name(band.getName())
          .build();

    }
}
