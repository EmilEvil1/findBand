package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.BandOwner;
import com.findBand.backend.domain.port.BandOwnerPort;
import com.findBand.backend.infra.adapters.jpa.repository.BandOwnerRepository;
import org.springframework.stereotype.Component;

@Component
public class BandOwnerJpaAdapter implements BandOwnerPort {

	private BandOwnerRepository bandOwnerRepository;

	public BandOwnerJpaAdapter(BandOwnerRepository bandOwnerRepository) {
		this.bandOwnerRepository = bandOwnerRepository;
	}

	@Override
	public BandOwner createBandOwner(BandOwner bandOwner) {
		return bandOwnerRepository.save(bandOwner);
	}
}
