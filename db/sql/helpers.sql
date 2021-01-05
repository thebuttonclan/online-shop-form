create or replace function create_constraint_if_not_exists (s_name text, t_name text, c_name text, constraint_sql text)
  returns void
as
$body$
  begin
    -- look for our constraint
    if not exists (select constraint_name
                   from information_schema.key_column_usage
                   where table_schema = s_name and table_name = t_name and constraint_name = c_name) then
        execute constraint_sql;
    end if;
end;
$body$
language plpgsql volatile;

create or replace function create_index_if_not_exists (s_name text, i_name text, index_sql text)
  returns void
as
$body$
  begin
    -- look for our index
    if not exists (select indexname
                   from pg_indexes
                   where schemaname = s_name and indexname = i_name) then
        execute index_sql;
    end if;
end;
$body$
language plpgsql volatile;

create or replace function create_trigger_if_not_exists (s_name text, t_name text, trigger_sql text)
  returns void
as
$body$
  begin
    if not exists (select trigger_name
                   from information_schema.triggers
                   where trigger_schema = s_name and trigger_name = t_name) then
        execute trigger_sql;
    end if;
end;
$body$
language plpgsql volatile;
