package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "instruments")
@Data
public class InstrumentalEntity {

    public InstrumentalEntity(long id) {
        this.id = id;
    }

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column
    private String name;

}
