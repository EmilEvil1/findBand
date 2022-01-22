package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@DiscriminatorValue("BAND_OWNER")
@Data
public class BandOwnerEntity extends UserEntity {

}
