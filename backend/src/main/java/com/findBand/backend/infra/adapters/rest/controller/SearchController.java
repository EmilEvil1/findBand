package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.FoundMember;
import com.findBand.backend.domain.model.VacancyDomain;
import com.findBand.backend.domain.useCase.search.SearchForMember;
import com.findBand.backend.domain.useCase.search.SearchForVacancies;
import com.findBand.backend.infra.adapters.rest.dto.search.SearchForBandRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.SearchForMemberRequestDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import com.findBand.backend.infra.common.rest.DataResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class SearchController extends BaseController {

    @GetMapping(value = "searchForMembers")
    public DataResponse<FoundMember> doSearchForMember(SearchForMemberRequestDTO request) {
        SearchForMember searchForMember = new SearchForMember(request.getInstrumentalIds());
        List<FoundMember> foundMembers = publish(List.class, searchForMember);
        return new DataResponse<FoundMember>(foundMembers, 1, 1, foundMembers.size());
    }

    @GetMapping(value = "searchForVacancies")
    public DataResponse<VacancyDomain> doSearchForVacancies(SearchForBandRequestDTO request) {
        SearchForVacancies searchForVacancies = new SearchForVacancies(request.getRegionId(), request.getInstrumentsIds());
        List<VacancyDomain> foundVacancies = publish(List.class, searchForVacancies);
        return new DataResponse<VacancyDomain>(foundVacancies, 1, 1, foundVacancies.size());
    }
}
