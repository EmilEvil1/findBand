package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.port.BandSeekerPort;
import com.findBand.backend.domain.useCase.BandSeekerCreate;
import com.findBand.backend.infra.adapters.jpa.entity.BandSeekerEntity;
import com.findBand.backend.infra.adapters.jpa.repository.BandSeekerJpaRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BandSeekerAdapter implements BandSeekerPort {

    private BandSeekerJpaRepository bandSeekerJpaRepository;

    @Override
    public BandSeeker create(BandSeekerCreate bandSeekerCreate) {
        BandSeekerEntity bandSeekerEntity = new BandSeekerEntity();
        bandSeekerEntity.setEmail(bandSeekerCreate.getEmail());
        bandSeekerEntity.setName(bandSeekerCreate.getName());
        bandSeekerEntity.setPhone(bandSeekerCreate.getPhone());
        return toModel(bandSeekerJpaRepository.save(bandSeekerEntity));
    }

    @Override
    public BandSeeker retrieve(long id) {
        return null;
    }

    private BandSeeker toModel(BandSeekerEntity bandSeekerEntity) {
        return BandSeeker.builder()
          .email(bandSeekerEntity.getEmail())
          .name(bandSeekerEntity.getName())
          .phone(bandSeekerEntity.getPhone())
          .build();
    }
}
