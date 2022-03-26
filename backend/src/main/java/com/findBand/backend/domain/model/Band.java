package com.findBand.backend.domain.model;

import com.findBand.backend.infra.adapters.jpa.entity.BandOwnerEntity;
import com.findBand.backend.infra.adapters.jpa.entity.RegionEntity;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Table(name = "band")
@Data
@Entity
public class Band {

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
