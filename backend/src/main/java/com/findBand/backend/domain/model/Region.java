package com.findBand.backend.domain.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author dsorokin on 04.11.2021
 */

@Entity
@Table(name = "regions")
@Data
public class Region {

	public Region() {}

	public Region(long id, String name) {
		this.id = id;
		this.name = name;
	}

	@Column
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;

	@Column
	private String name;
}
