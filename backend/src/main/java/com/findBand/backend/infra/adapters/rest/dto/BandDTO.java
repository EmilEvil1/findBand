package com.findBand.backend.infra.adapters.rest.dto;

import com.findBand.backend.domain.model.Region;
import com.findBand.backend.domain.model.UserDomain;
import lombok.Builder;

import java.util.Date;

@Builder
public class BandDTO {

    private Long id;

    private UserDomain bandOwner;

    private String name;

    private String description;

    private Region region;

    private Date createDate;
}
