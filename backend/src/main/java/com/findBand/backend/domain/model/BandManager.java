package com.findBand.backend.domain.model;

import lombok.Data;

/**
 * User that has role of band manager
 */

@Data
public class BandManager extends User {
    private Band band;
}
