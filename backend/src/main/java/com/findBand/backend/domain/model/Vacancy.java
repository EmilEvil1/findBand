package com.findBand.backend.domain.model;

import com.findBand.backend.infra.adapters.jpa.entity.BandEntity;
import com.findBand.backend.infra.adapters.jpa.entity.InstrumentalEntity;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@Table(name = "vacancy")
@Entity
public class Vacancy {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "band_id")
    private BandEntity bandEntity;

    @OneToOne
    @JoinColumn(name = "instrument_id")
    private Instrument instrument;
}
