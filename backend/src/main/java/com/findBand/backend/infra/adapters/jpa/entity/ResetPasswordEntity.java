package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Data
@RequiredArgsConstructor
@Table(name = "reset_password")
public class ResetPasswordEntity {

    @Id
    @Column
    private final String id;

    @Column
    private long userId;

    @Column
    private boolean activated = false;
}
