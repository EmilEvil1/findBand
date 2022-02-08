package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.VacancyDomain;
import com.findBand.backend.domain.port.VacanciesPort;
import com.findBand.backend.domain.useCase.search.SearchForVacancies;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SearchForVacanciesUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<List, SearchForVacancies> {

    private VacanciesPort vacationPort;

    public SearchForVacanciesUseCaseHandler(VacanciesPort vacationPort) {
        register(SearchForVacancies.class, this);
        this.vacationPort = vacationPort;
    }

    @Override
    public List<VacancyDomain> handle(SearchForVacancies useCase) {
        return vacationPort.findVacanciesByInstrumentIds(useCase.getInstrumentsIds());
    }
}
