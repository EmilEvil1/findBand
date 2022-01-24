package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.FoundBand;
import com.findBand.backend.domain.model.FoundMember;
import com.findBand.backend.domain.useCase.search.SearchForBand;
import com.findBand.backend.domain.useCase.search.SearchForMember;
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

    @GetMapping
    public DataResponse<FoundMember> doSearchForMember(SearchForMemberRequestDTO request) {
        SearchForMember searchForMember = new SearchForMember(request.getInstrumentalIds());
        List<FoundMember> foundMembers = publish(List.class, searchForMember);
        return new DataResponse<FoundMember>(foundMembers, 1, 1, foundMembers.size());
    }

    @GetMapping
    public DataResponse<FoundBand> doSearchForBand(SearchForBandRequestDTO request) {
        SearchForBand searchForBand = new SearchForBand(request.getRegionId(), request.getInstrumentsIds());
        publish(List.class, searchForBand);
        return null;
    }
}
