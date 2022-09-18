package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.common.useCase.UseCasePublisher;
import com.findBand.backend.domain.model.*;
import com.findBand.backend.domain.useCase.search.SearchForMember;
import com.findBand.backend.domain.useCase.search.SearchForVacancies;
import com.findBand.backend.infra.adapters.rest.dto.BandDTO;
import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import com.findBand.backend.infra.adapters.rest.dto.RegionDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.BandSeekerDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.SearchForBandRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.SearchForMemberRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.search.VacancyDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import com.findBand.backend.infra.common.rest.DataResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
public class SearchController extends BaseController {

    private UseCasePublisher useCasePublisher;

    public SearchController(UseCasePublisher useCasePublisher) {
        this.useCasePublisher = useCasePublisher;
    }

    @PostMapping(value = "searchForMembers")
    public DataResponse<BandSeekerDTO> doSearchForMember(@RequestBody SearchForMemberRequestDTO request) {
        SearchForMember searchForMember = new SearchForMember(Collections.singletonList(request.getInstrumentId()), request.getRegionId());
        List<UserDomain> bandSeekers = useCasePublisher.publish(List.class, searchForMember);
        return new DataResponse<BandSeekerDTO>(bandSeekers.stream().map(this::toFoundMemberDTO).collect(Collectors.toList()), 1, 1,bandSeekers.size());
    }

    @PostMapping(value = "searchForVacancies")
    public DataResponse<VacancyDTO> doSearchForVacancies(@RequestBody SearchForBandRequestDTO request) {
        SearchForVacancies searchForVacancies = new SearchForVacancies(request.getRegionId(), request.getInstrumentsIds());
        List<Vacancy> foundVacancies = useCasePublisher.publish(List.class, searchForVacancies);
        return new DataResponse<VacancyDTO>(foundVacancies.stream().map(this::toVacancyDTO).collect(Collectors.toList()), 1, 1, foundVacancies.size());
    }

    private RegionDTO toRegionDTO(Region region) {
        return RegionDTO.builder()
          .regionId(region.getId())
          .regionName(region.getName())
          .build();
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
          .id(bandSeeker.getId())
          .instruments(bandSeeker.getInstruments().stream().map(Instrument::getName).collect(Collectors.toSet()))
          .username(bandSeeker.getUsername())
          .bandName(bandSeeker.getBand() != null ? bandSeeker.getBand().getName() : "")
          .regionName(bandSeeker.getRegion().getName())
          .experienceAge(bandSeeker.getExperienceAge())
          .avatarUri(bandSeeker.getAvatarUri())
          .build();
    }

    private InstrumentDTO toInsrumentDTO(Instrument instrument) {
        return InstrumentDTO.builder()
          .name(instrument.getName())
          .id(instrument.getId())
          .build();
    }
}
