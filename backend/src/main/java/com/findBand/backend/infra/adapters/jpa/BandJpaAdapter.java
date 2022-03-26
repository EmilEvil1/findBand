package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.infra.adapters.jpa.entity.BandEntity;
import com.findBand.backend.infra.adapters.jpa.entity.BandOwnerEntity;
import com.findBand.backend.infra.adapters.jpa.repository.BandJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.BandOwnerRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Set;

@Component
public class BandJpaAdapter implements BandPort {

    private BandJpaRepository bandJpaRepository;
    private BandOwnerRepository bandOwnerRepository;

    public BandJpaAdapter(BandJpaRepository bandJpaRepository, BandOwnerRepository bandOwnerRepositoryN) {
        this.bandJpaRepository = bandJpaRepository;
        this.bandOwnerRepository = bandOwnerRepository;
    }

    @Override
    public Band retrieveBand(long id) {
        return null;
    }

    @Override
    @Transactional
    public Band createBand(Band band) {
        return bandJpaRepository.save(band);

        return toDomain(bandJpaRepository.save(newBand));
    }

    @Override
    public List<Band> findBandsByInstrumentsIdsAndRegions(Set<Long> instrumentsIds, Set<Long> regionsIds) {
        throw new UnsupportedOperationException();
    }

    private Band toDomain(BandEntity bandEntity) {
        return Band.builder()
          .name(bandEntity.getName())
          .description(bandEntity.getDescription())
          .build();
    }
}
