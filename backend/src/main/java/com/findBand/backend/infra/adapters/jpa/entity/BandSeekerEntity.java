package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;

@Getter
@Setter
@Entity(name = "bandSeeker")
@Table(name = "bandSeeker")
public class BandSeekerEntity {

    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String phone;

    @Column
    private String email;

}
