package com.findBand.backend.infra.adapters.jpa.entity;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("BAND_SEEKER")
public class BandSeekerEntity extends UserEntity {

}
