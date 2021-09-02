package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.infra.adapters.rest.dto.BandSeekerCreateRequestDTO;
import com.findBand.backend.infra.adapters.rest.dto.BandSeekerResponseDTO;
import com.findBand.backend.infra.common.rest.BaseController;
import com.findBand.backend.infra.common.rest.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/bandSeeker")
public class BandSeekerController extends BaseController {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Response<BandSeekerResponseDTO> createBandSeeker(BandSeekerCreateRequestDTO requestDTO) {
        BandSeeker bandSeeker = publish(BandSeeker.class, requestDTO.toDomainModel());
        return respond(BandSeekerResponseDTO.fromModel(bandSeeker));
    }
}
