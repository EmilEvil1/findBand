package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Data
@Table(name = "reset_password")
@Entity(name = "resetPassword")
public class ResetPasswordEntity {

    public ResetPasswordEntity() {}

    @Id
    @Column
    private String id;

    @Column
    private long userId;

    @Column
    private boolean activated = false;
}
