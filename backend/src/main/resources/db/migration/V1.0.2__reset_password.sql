CREATE TABLE IF NOT EXISTS "reset_password" (
    id text not null,
    user_id bigserial not null,
    activated boolean default FALSE,
    create_date timestamp default 'NOW',
    primary key(id),
    constraint user_id_fk
        foreign key(user_id)
            REFERENCES "findband_user"(id)
            ON DELETE CASCADE
)