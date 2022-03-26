package com.findBand.backend.domain.model;

import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("BAND_OWNER")
@Data
public class BandOwner extends UserDomain {

}
