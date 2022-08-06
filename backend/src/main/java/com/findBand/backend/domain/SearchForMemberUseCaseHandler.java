package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.search.SearchForMember;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SearchForMemberUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<List<UserDomain>, SearchForMember> {

    private UserPort userPort;

    public SearchForMemberUseCaseHandler(UserPort userPort) {
        this.userPort = userPort;
        register(SearchForMember.class, this);
    }

    @Override
    public Class<SearchForMember> useCaseClass() {
        return SearchForMember.class;
    }

    @Override
    public List<UserDomain> handle(SearchForMember useCase) {
        return userPort.findByInstrumentsIdsAndRegionId(
                useCase.getInstrumentalIds(), useCase.getRegionId()
        );
    }
}
