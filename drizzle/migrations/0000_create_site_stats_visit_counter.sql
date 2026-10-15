create table if not exists public.site_stats (
  key text primary key,
  visit_count bigint not null default 0,
  updated_at timestamptz not null default now()
);

-- Direct table access is never granted to anon/authenticated; the security definer
-- function below is the only path. service_role keeps full access for admin work.
grant all on public.site_stats to service_role;
revoke all on public.site_stats from anon, authenticated;

alter table public.site_stats enable row level security;

create or replace function public.increment_site_visits()
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count bigint;
begin
  insert into public.site_stats (key, visit_count)
  values ('visits', 1)
  on conflict (key) do update
    set visit_count = public.site_stats.visit_count + 1,
        updated_at = now();

  select visit_count into v_count
  from public.site_stats
  where key = 'visits';

  return v_count;
end;
$$;

revoke execute on function public.increment_site_visits() from public, anon, authenticated;
grant execute on function public.increment_site_visits() to anon, authenticated, service_role;