package com.findBand.backend.domain.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "instruments")
@Data
public class Instrument {

    public Instrument() {}

    public Instrument(long id) {
        this.id = id;
    }

    public Instrument(long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column
    private String name;
}
