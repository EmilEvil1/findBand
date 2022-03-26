package com.findBand.backend.infra.adapters.jpa.entity;

import com.findBand.backend.domain.model.BandOwner;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Table(name = "band")
@Entity
@Data
public class BandEntity {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    @JoinColumn(name = "band_owner_id")
    private BandOwner bandOwner;

    @Column
    private String name;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private RegionEntity region;

    @Column
    private Date createDate;
}
