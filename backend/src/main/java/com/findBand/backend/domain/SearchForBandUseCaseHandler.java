package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.FoundBand;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.search.SearchForBand;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class SearchForBandUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<List<FoundBand>, SearchForBand> {

    private final UserPort userPort;

    public SearchForBandUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
        register(SearchForBand.class, this);
    }

    @Override
    public List<FoundBand> handle(SearchForBand useCase) {

        return null;
    }
}
