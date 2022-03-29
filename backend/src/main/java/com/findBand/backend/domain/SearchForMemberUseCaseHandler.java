package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.model.FoundMember;
import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.port.BandSeekerPort;
import com.findBand.backend.domain.useCase.search.SearchForMember;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SearchForMemberUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<List<BandSeeker>, SearchForMember> {

    private BandSeekerPort bandSeekerPort;

    public SearchForMemberUseCaseHandler(BandSeekerPort bandSeekerPort) {
        this.bandSeekerPort = bandSeekerPort;
        register(SearchForMember.class, this);
    }

    @Override
    public List<BandSeeker> handle(SearchForMember useCase) {
        return bandSeekerPort.findByInstrumentsIds(
                useCase.getInstrumentalIds().stream().map(Instrument::new).collect(Collectors.toSet())
        );
    }
}
