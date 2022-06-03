package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.port.InstrumentsPort;
import com.findBand.backend.infra.adapters.rest.dto.InstrumentDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
public class InstrumentsController {

    private InstrumentsPort instrumentsPort;

    @Autowired
    public void setInstrumentsPort(InstrumentsPort instrumentsPort) {
        this.instrumentsPort = instrumentsPort;
    }

    @GetMapping("/instruments")
    @Operation(summary = "Возвращает все инструменты")
    public List<InstrumentDTO> getAllInstruments() {
        return instrumentsPort.getAllInstruments().stream().map(this::toInstrumentDTO).collect(Collectors.toList());
    }

    private InstrumentDTO toInstrumentDTO(Instrument instrument) {
        return InstrumentDTO.builder()
          .id(instrument.getId())
          .name(instrument.getName())
          .build();
    }
}
