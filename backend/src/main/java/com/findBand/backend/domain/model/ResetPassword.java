package com.findBand.backend.domain.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@Table(name = "reset_password")
@Entity(name = "resetPassword")
public class ResetPassword {


	@Id
	@Column
	private String id;

	@OneToOne
	private UserDomain user;

	@Column
	private boolean activated = false;
}
