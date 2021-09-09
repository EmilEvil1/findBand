create table if not exists "user"(
    id bigserial not null
    constraint user_pkey
    primary key,
    username text,
    email text,
    password text,
    phone text,
    created_date date not null default CURRENT_DATE
);