package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.port.BandSeekerPort;
import com.findBand.backend.infra.adapters.jpa.repository.BandSeekerRepository;

import java.util.List;
import java.util.Set;

public class BandSeekerJpaAdapter implements BandSeekerPort {

	private BandSeekerRepository bandSeekerRepository;

	public BandSeekerJpaAdapter(BandSeekerRepository bandSeekerRepository) {
		this.bandSeekerRepository = bandSeekerRepository;
	}

	@Override
	public BandSeeker createBandSeeker(BandSeeker bandSeeker) {
		return bandSeekerRepository.save(bandSeeker);
	}

	@Override
	public List<BandSeeker> findByInstrumentsIds(Set<Long> instrumentsIds) {
		return bandSeekerRepository
	}
}
