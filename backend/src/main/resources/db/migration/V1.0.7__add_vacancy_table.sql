CREATE TABLE IF NOT EXISTS vacancy(
    id bigserial not null,
    title varchar(100) not null,
    description text not null,
    band_id bigint not null,
    instrument_id not null,
    PRIMARY KEY(id),
    constraint band_id_fk
        foreign key(band_id)
            references band(id);
);

