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
@RequiredArgsConstructor
@Data
public class Region {
	@Column
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;

	@Column
	private String name;
}
