create table if not exists regions(
    id smallserial not null,
    name varchar(100) not null,
    PRIMARY KEY(id)
);

INSERT INTO regions (name) VALUES ('Вологодская область');
INSERT INTO regions (name) VALUES ('Татарстан');
INSERT INTO regions (name) VALUES ('Якутия');
INSERT INTO regions (name) VALUES ('Хабаровский край');
INSERT INTO regions (name) VALUES ('Кемеровская область');
INSERT INTO regions (name) VALUES ('Коми');
INSERT INTO regions (name) VALUES ('Бурятия');
INSERT INTO regions (name) VALUES ('Новосибирская область');
INSERT INTO regions (name) VALUES ('Мурманская область');
INSERT INTO regions (name) VALUES ('Алтайский край');
INSERT INTO regions (name) VALUES ('Псковская область');
INSERT INTO regions (name) VALUES ('Тыва');
INSERT INTO regions (name) VALUES ('Саратовская область');
INSERT INTO regions (name) VALUES ('Красноярский край');
INSERT INTO regions (name) VALUES ('Брянская область');
INSERT INTO regions (name) VALUES ('Карачаево-Черкесия');
INSERT INTO regions (name) VALUES ('Смоленская область');
INSERT INTO regions (name) VALUES ('Магаданская область');
INSERT INTO regions (name) VALUES ('Костромская область');
INSERT INTO regions (name) VALUES ('Карелия');
INSERT INTO regions (name) VALUES ('Тамбовская область');
INSERT INTO regions (name) VALUES ('Краснодарский край');
INSERT INTO regions (name) VALUES ('Калининградская область');
INSERT INTO regions (name) VALUES ('Тульская область');
INSERT INTO regions (name) VALUES ('Чувашия');
INSERT INTO regions (name) VALUES ('Ханты-Мансийский АО — Югра');
INSERT INTO regions (name) VALUES ('Московская область');
INSERT INTO regions (name) VALUES ('Иркутская область');
INSERT INTO regions (name) VALUES ('Ненецкий АО');
INSERT INTO regions (name) VALUES ('Томская область');
INSERT INTO regions (name) VALUES ('Ивановская область');
INSERT INTO regions (name) VALUES ('Чукотский АО');
INSERT INTO regions (name) VALUES ('Мордовия');
INSERT INTO regions (name) VALUES ('Омская область');
INSERT INTO regions (name) VALUES ('Белгородская область');
INSERT INTO regions (name) VALUES ('Тверская область');
INSERT INTO regions (name) VALUES ('Амурская область');
INSERT INTO regions (name) VALUES ('Калмыкия');
INSERT INTO regions (name) VALUES ('Камчатский край');
INSERT INTO regions (name) VALUES ('Курганская область');
INSERT INTO regions (name) VALUES ('Ленинградская область');
INSERT INTO regions (name) VALUES ('Забайкальский край');
INSERT INTO regions (name) VALUES ('Воронежская область');
INSERT INTO regions (name) VALUES ('Волгоградская область');
INSERT INTO regions (name) VALUES ('Челябинская область');
INSERT INTO regions (name) VALUES ('Липецкая область');
INSERT INTO regions (name) VALUES ('Ульяновская область');
INSERT INTO regions (name) VALUES ('Ингушетия');
INSERT INTO regions (name) VALUES ('Адыгея');
INSERT INTO regions (name) VALUES ('Москва');
INSERT INTO regions (name) VALUES ('Ростовская область');
INSERT INTO regions (name) VALUES ('Пензенская область');
INSERT INTO regions (name) VALUES ('Ярославская область');
INSERT INTO regions (name) VALUES ('Курская область');
INSERT INTO regions (name) VALUES ('Санкт-Петербург');
INSERT INTO regions (name) VALUES ('Приморский край');
INSERT INTO regions (name) VALUES ('Удмуртия');
INSERT INTO regions (name) VALUES ('Хакасия');
INSERT INTO regions (name) VALUES ('Ямало-Ненецкий АО');
INSERT INTO regions (name) VALUES ('Тюменская область');
INSERT INTO regions (name) VALUES ('Свердловская область');
INSERT INTO regions (name) VALUES ('Новгородская область');
INSERT INTO regions (name) VALUES ('Крым');
INSERT INTO regions (name) VALUES ('Орловская область');
INSERT INTO regions (name) VALUES ('Калужская область');
INSERT INTO regions (name) VALUES ('Башкортостан');
INSERT INTO regions (name) VALUES ('Сахалинская область');
INSERT INTO regions (name) VALUES ('Марий Эл');
INSERT INTO regions (name) VALUES ('Нижегородская область');
INSERT INTO regions (name) VALUES ('Архангельская область');
INSERT INTO regions (name) VALUES ('Пермский край');
INSERT INTO regions (name) VALUES ('Владимирская область');
INSERT INTO regions (name) VALUES ('Самарская область');
INSERT INTO regions (name) VALUES ('Кабардино-Балкария');
INSERT INTO regions (name) VALUES ('Северная Осетия — Алания');
INSERT INTO regions (name) VALUES ('Оренбургская область');
INSERT INTO regions (name) VALUES ('Рязанская область');
INSERT INTO regions (name) VALUES ('Севастополь');
INSERT INTO regions (name) VALUES ('Кировская область');
INSERT INTO regions (name) VALUES ('Чечня');
INSERT INTO regions (name) VALUES ('Астраханская область');
INSERT INTO regions (name) VALUES ('Ставропольский край');
INSERT INTO regions (name) VALUES ('Дагестан');
INSERT INTO regions (name) VALUES ('Алтай');
INSERT INTO regions (name) VALUES ('Еврейская АО');

ALTER TABLE findband_user ADD COLUMN region_id smallint;
ALTER TABLE findband_user ADD
constraint region_id_fk
    foreign key(region_id)
        references regions(id)
            ON DELETE RESTRICT;

ALTER TABLE band ADD COLUMN region_id smallint;
ALTER TABLE band ADD constraint region_id_fk
    foreign key(region_id)
        references regions(id)
            ON DELETE RESTRICT;