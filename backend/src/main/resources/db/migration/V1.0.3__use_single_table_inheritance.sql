ALTER TABLE findband_user ADD COLUMN user_role varchar(15) NOT NULL DEFAULT 'BAND_SEEKER';

ALTER TABLE findband_user ADD COLUMN band_id bigint references band;