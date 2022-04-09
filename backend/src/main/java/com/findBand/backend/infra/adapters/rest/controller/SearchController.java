package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.infra.adapters.rest.dto.BandDTO;
import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.BandSeekerDTO;
import com.findBand.backend.domain.model.Vacancy;
import com.findBand.backend.domain.useCase.search.SearchForMember;
import com.findBand.backend.domain.useCase.search.SearchForVacancies;
import com.findBand.backend.infra.adapters.rest.dto.search.SearchForBandRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.SearchForMemberRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.VacancyDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import com.findBand.backend.infra.common.rest.DataResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
public class SearchController extends BaseController {

    @GetMapping(value = "searchForMembers")
    public DataResponse<BandSeekerDTO> doSearchForMember(SearchForMemberRequestDTO request) {
        SearchForMember searchForMember = new SearchForMember(request.getInstrumentalIds(), request.getRegionId());
        List<UserDomain> bandSeekers = publish(List.class, searchForMember);
        return new DataResponse<BandSeekerDTO>(bandSeekers.stream().map(this::toFoundMemberDTO).collect(Collectors.toList()), 1, 1,bandSeekers.size());
    }

    @GetMapping(value = "searchForVacancies")
    public DataResponse<VacancyDTO> doSearchForVacancies(SearchForBandRequestDTO request) {
        SearchForVacancies searchForVacancies = new SearchForVacancies(request.getRegionId(), request.getInstrumentsIds());
        List<Vacancy> foundVacancies = publish(List.class, searchForVacancies);
        return new DataResponse<VacancyDTO>(foundVacancies.stream().map(this::toVacancyDTO).collect(Collectors.toList()), 1, 1, foundVacancies.size());
    }

    private VacancyDTO toVacancyDTO(Vacancy vacancy) {
        return VacancyDTO.builder()
          .id(vacancy.getId())
          .description(vacancy.getDescription())
          .instrument(this.toInsrumentDTO(vacancy.getInstrument()))
          .band(this.toBandDTO(vacancy.getBand()))
          .build();
    }

    private BandDTO toBandDTO(Band band) {
        return BandDTO.builder()
          .id(band.getId())
          .createDate(band.getCreateDate())
          .name(band.getName())
          .description(band.getDescription())
          .build();
    }

    private BandSeekerDTO toFoundMemberDTO(UserDomain bandSeeker) {
        return BandSeekerDTO.builder()
          .instruments(bandSeeker.getInstruments().stream().map(this::toInsrumentDTO).collect(Collectors.toSet()))
          .username(bandSeeker.getUsername())
          .build();
    }

    private InstrumentDTO toInsrumentDTO(Instrument instrument) {
        return InstrumentDTO.builder()
          .name(instrument.getName())
          .id(instrument.getId())
          .build();
    }
}
