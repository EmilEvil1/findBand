package com.findBand.backend.infra.adapters.jpa.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@DiscriminatorValue("BAND_SEEKER")
@Data
public class BandSeekerEntity extends UserEntity {

    @ManyToMany
    @JoinTable(
      name = "users_instruments",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "instrument_id"))
    private List<InstrumentalEntity> instrumentalIds = new ArrayList<>();
}
