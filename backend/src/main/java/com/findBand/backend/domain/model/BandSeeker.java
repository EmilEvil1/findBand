package com.findBand.backend.domain.model;

import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
    private List<Instrument> instruments = new ArrayList<>();
}
