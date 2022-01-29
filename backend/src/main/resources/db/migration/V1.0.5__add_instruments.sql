create table if not exists instruments(
    id bigserial not null,
    name varchar(50) not null,
    PRIMARY KEY(id)
);

INSERT INTO instruments (name) VALUES ('Гитара');
INSERT INTO instruments (name) VALUES ('Барабаны');
INSERT INTO instruments (name) VALUES ('Бас-гитара');
INSERT INTO instruments (name) VALUES ('Фортепиано');
INSERT INTO instruments (name) VALUES ('Вокал');
INSERT INTO instruments (name) VALUES ('Скрипка');
INSERT INTO instruments (name) VALUES ('Саксофон');
INSERT INTO instruments (name) VALUES ('Флейта');
INSERT INTO instruments (name) VALUES ('DJ-контроллер');
INSERT INTO instruments (name) VALUES ('Арфа');
INSERT INTO instruments (name) VALUES ('Синтезатор');

create table if not exists users_instruments(
    id bigserial not null,
    user_id bigint not null,
    instrument_id bigint not null,
    PRIMARY KEY(id),
    constraint user_id_fk
      foreign key(user_id)
        references findband_user(id),
    constraint instrumental_id_fk
      foreign key(instrument_id)
        references instruments(id)
);