-- drop table if exists connect_session applications;
-- drop table if exists connect_session cascade;

begin;

create table if not exists public.applications (
    id serial not null,
    form_data jsonb,
    created_at timestamp with time zone default current_timestamp,
    updated_at timestamp with time zone default current_timestamp,
    primary key(id)
);
alter table public.applications owner to osf;

create table if not exists public.connect_session (
    sid varchar(4093) not null collate "default",
    sess json not null,
    expire timestamp(6) not null
)
with (oids=false);

alter table public.connect_session owner to osf;

select create_constraint_if_not_exists(
    'public',
    'connect_session',
    'osf_session_pkey',
    'alter table public.connect_session add constraint osf_session_pkey primary key (sid) not deferrable initially immediate;');

select create_index_if_not_exists(
    'public',
    'osf_idx_session_expire',
    'create index osf_idx_session_expire on public.connect_session(expire);');

commit;
