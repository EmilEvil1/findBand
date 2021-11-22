package com.findBand.backend.infra.adapters.jpa.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "reset_password")
public class ResetPasswordEntity {

    @Id
    @Column
    private String id;

    @Column
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Column
    private boolean activated;
}
