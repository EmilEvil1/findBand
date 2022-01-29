package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.infra.adapters.jpa.entity.BandEntity;
import com.findBand.backend.infra.adapters.jpa.entity.BandOwnerEntity;
import com.findBand.backend.infra.adapters.jpa.repository.BandJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.BandOwnerRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Component
public class BandJpaAdapter implements BandPort {

    private BandJpaRepository bandJpaRepository;
    private BandOwnerRepository bandOwnerRepository;

    public BandJpaAdapter(BandJpaRepository bandJpaRepository, BandOwnerRepository bandOwnerRepository) {
        this.bandJpaRepository = bandJpaRepository;
        this.bandOwnerRepository = bandOwnerRepository;
    }

    @Override
    public Band retrieveBand(long id) {
        return null;
    }

    @Override
    @Transactional
    public Band createBand(String bandName, Long bandOwnerId) {
        BandEntity newBand = new BandEntity();
        newBand.setName(bandName);

        BandOwnerEntity bandOwner = bandOwnerRepository.findById(bandOwnerId).orElseThrow(() -> new RuntimeException("No user exists with such id " + bandOwnerId));
        newBand.setBandOwner(bandOwner);
        return toDomain(bandJpaRepository.save(newBand));
    }

    @Override
    public List<Band> findBandsByInstrumentsIdsAndRegions(Set<Long> instrumentsIds, Set<Long> regionsIds) {
        return null;
    }

    private Band toDomain(BandEntity bandEntity) {
        return Band.builder()
          .name(bandEntity.getName())
          .description(bandEntity.getDescription())
          .build();
    }
}
