package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "regions")
@Data
public class RegionEntity {
    private long id;
    private String name;
}
