create table if not exists "findband_user"(
    id bigserial not null
    constraint user_pkey
    primary key,
    username text,
    email text,
    password text,
    phone text,
    created_date date not null default CURRENT_DATE
);

create table if not exists "band"(
    id bigserial not null
    constraint band_pkey
    primary key,
    name text,
    description text,
    created_date date not null default CURRENT_DATE
);