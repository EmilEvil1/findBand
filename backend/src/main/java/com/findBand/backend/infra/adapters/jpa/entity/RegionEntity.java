package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "regions")
@Data
public class RegionEntity {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column
    private String name;
}
