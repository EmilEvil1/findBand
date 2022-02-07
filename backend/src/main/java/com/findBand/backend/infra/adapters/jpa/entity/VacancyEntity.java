package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;

import javax.persistence.*;

@Table(name = "vacancy")
@Entity
@Data
public class VacancyEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    @ManyToOne
    @JoinColumn(name = "band_id")
    private BandEntity bandEntity;

    @Column
    @OneToOne
    @JoinColumn(name = "instrument_id")
    private InstrumentalEntity instrumentalEntity;
}
