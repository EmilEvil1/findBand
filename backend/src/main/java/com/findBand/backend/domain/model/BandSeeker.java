package com.findBand.backend.domain.model;

import com.findBand.backend.infra.adapters.jpa.entity.InstrumentalEntity;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@DiscriminatorValue("BAND_SEEKER")
@Data
public class BandSeeker extends UserDomain{

    @ManyToMany
    @JoinTable(
      name = "users_instruments",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "instrument_id"))
    private List<InstrumentalEntity> instrumentalIds = new ArrayList<>();
}
