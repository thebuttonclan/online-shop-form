#!/bin/bash

if [[ -n "$1" ]]; then
  db="$1"
else
  db="osf"
fi

echo $db;

user="rootadmin"

_psql() {
  PGOPTIONS='--client-min-messages=warning' psql -qtA --set ON_ERROR_STOP=1 "$@" 2>&1
}

run_cmd() {
  _psql -c "$1"
}

run_cmd_on_db() {
  _psql -d "$db" <<<"$1"
}

run_file() {
  _psql -d "$db" -f "$1"
}

msg() {
  run_cmd_on_db "select '$1' as msg"
}

display_table() {
  cmd="select table_name, column_name from information_schema.columns where table_name='$1';"
  run_cmd_on_db "$cmd"
}

delete_db_query="drop database if exists $db;"
create_db_query="create database $db;"
create_user_query="create user $user;"
grant_user_query="grant all on database $db to $user; alter database $db owner to $user;"

helper_sql="sql/helpers.sql"
table_sql="sql/tables.sql"
mview_sql="sql/mviews.sql"
view_sql="sql/views.sql"
function_sql="sql/functions.sql"
extension_sql="sql/extensions.sql"
trigger_sql="sql/triggers.sql"
migration_sql="sql/migration.sql"
transition_sql="sql/transitions.sql"

coordinator_out=$(run_cmd "$create_db_query")
if [ "$coordinator_out" == "ERROR:  database \"$db\" already exists" ]; then
  echo "Database \"$db\" already exists on coordinator node"
elif [[ $coordinator_out == ERROR* ]]; then
  echo "$coordinator_out"
  exit 1
fi

coordinator_out=$(run_cmd "$create_user_query")
if [ "$coordinator_out" == "ERROR:  role \"$user\" already exists" ]; then
  echo "User \"$user\" already exists on coordinator node"
elif [[ $coordinator_out == ERROR* ]]; then
  echo "$coordinator_out"
  exit 1
fi

run_cmd_on_db "select version();"

run_file "$extension_sql"
run_file "$helper_sql"
run_file "$table_sql"
run_file "$function_sql"
run_file "$trigger_sql"
run_file "$migration_sql"
run_file "$view_sql"
run_file "$mview_sql"
run_file "$transition_sql"

msg "=== DB VERSION"
run_cmd_on_db "select version();"

msg "=== DB Tables"
run_cmd_on_db "select * from pg_database;"

msg "=== CONSTRAINTS"
run_cmd_on_db "select * from information_schema.key_column_usage;"

msg "=== TABLES"
display_table applications
display_table documents
