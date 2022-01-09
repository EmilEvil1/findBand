package com.findBand.backend.infra.adapters.jpa.entity;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("BAND_OWNER")
public class BandOwnerEntity extends UserEntity {

    @Column(name = "band_id")
    private Long bandId;
}
