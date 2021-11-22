package com.findBand.backend.infra.adapters.rest.controller;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.port.RegionsPort;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

/**
 * @author dsorokin on 14.11.2021
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class RegionsController {

	private final RegionsPort regionsPort;

	@GetMapping(value = "regions")
	public Set<Region> getRegions() {
		return regionsPort.findAllRegions();
	}
}
