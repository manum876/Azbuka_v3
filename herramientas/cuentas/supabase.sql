-- ============================================================
-- AZBUKA · Cuentas (14/10/2026)
-- Se pega entero en Supabase → SQL Editor → New query → Run.
-- Se puede volver a correr sin romper nada.
--
-- Qué arma:
--   · permitidos: los mails que pueden entrar (los maneja Manu desde
--     Ajustes → Accesos). admin = true puede habilitar y quitar mails.
--   · progreso: una fila por alumno con todo lo que la app guarda.
--   · Un control que impide crear una cuenta con un mail que no está
--     en permitidos (ni con código por mail ni con Google).
--   · Funciones para borrar la cuenta propia y para que el admin vea,
--     habilite y quite accesos.
-- ============================================================

create table if not exists public.permitidos (
  email   text primary key check (email = lower(email)),
  admin   boolean not null default false,
  nota    text,
  creado  timestamptz not null default now()
);

create table if not exists public.progreso (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  datos       jsonb not null default '{}'::jsonb,
  actualizado timestamptz not null default now()
);

alter table public.permitidos enable row level security;
alter table public.progreso   enable row level security;

-- Mail de quien está conectado
create or replace function public.mi_email() returns text
language sql stable as $$ select lower(coalesce(auth.jwt() ->> 'email', '')) $$;

create or replace function public.es_permitido() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.permitidos where email = public.mi_email())
$$;

create or replace function public.es_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.permitidos where email = public.mi_email() and admin)
$$;

-- permitidos: solo el admin la lee y la cambia
drop policy if exists "admin lee"     on public.permitidos;
drop policy if exists "admin agrega"  on public.permitidos;
drop policy if exists "admin cambia"  on public.permitidos;
drop policy if exists "admin borra"   on public.permitidos;
create policy "admin lee"    on public.permitidos for select using (public.es_admin());
create policy "admin agrega" on public.permitidos for insert with check (public.es_admin());
create policy "admin cambia" on public.permitidos for update using (public.es_admin());
create policy "admin borra"  on public.permitidos for delete using (public.es_admin() and email <> public.mi_email());

-- progreso: cada uno el suyo, y solo si sigue habilitado
drop policy if exists "cada uno el suyo" on public.progreso;
create policy "cada uno el suyo" on public.progreso for all
  using (user_id = auth.uid() and public.es_permitido())
  with check (user_id = auth.uid() and public.es_permitido());

-- Nadie crea una cuenta con un mail que no está habilitado
create or replace function public.solo_permitidos() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.permitidos where email = lower(new.email)) then
    raise exception 'AZ_NO_PERMITIDO';
  end if;
  return new;
end $$;
drop trigger if exists az_solo_permitidos on auth.users;
create trigger az_solo_permitidos before insert on auth.users
  for each row execute function public.solo_permitidos();

-- Ajustes → «Eliminar mi cuenta y mis datos»
create or replace function public.borrar_mi_cuenta() returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'sin sesión'; end if;
  delete from public.progreso where user_id = auth.uid();
  delete from auth.users where id = auth.uid();
end $$;

-- Ajustes → Accesos (solo admin): la lista con la última actividad
create or replace function public.admin_resumen()
returns table (email text, admin boolean, nota text, creado timestamptz, tiene_cuenta boolean, ultimo timestamptz)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.es_admin() then raise exception 'solo admin'; end if;
  return query
    select p.email, p.admin, p.nota, p.creado, (u.id is not null), g.actualizado
    from public.permitidos p
    left join auth.users u on lower(u.email) = p.email
    left join public.progreso g on g.user_id = u.id
    order by p.creado;
end $$;

-- Ajustes → Accesos → «Quitar»: saca el mail y borra su cuenta y su progreso
create or replace function public.admin_quitar(p_email text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.es_admin() then raise exception 'solo admin'; end if;
  if lower(p_email) = public.mi_email() then raise exception 'no podés quitarte a vos'; end if;
  delete from auth.users where lower(email) = lower(p_email);
  delete from public.permitidos where email = lower(p_email);
end $$;

-- Permisos de las tablas para los usuarios con sesión (las reglas de arriba deciden qué filas)
grant select, insert, update, delete on public.permitidos to authenticated;
grant select, insert, update, delete on public.progreso   to authenticated;
revoke all on public.permitidos, public.progreso from anon;

revoke all on function public.borrar_mi_cuenta() from public, anon;
revoke all on function public.admin_resumen()    from public, anon;
revoke all on function public.admin_quitar(text) from public, anon;
grant execute on function public.es_permitido()     to authenticated;
grant execute on function public.es_admin()         to authenticated;
grant execute on function public.borrar_mi_cuenta() to authenticated;
grant execute on function public.admin_resumen()    to authenticated;
grant execute on function public.admin_quitar(text) to authenticated;

-- Manu, administrador
insert into public.permitidos (email, admin, nota)
values ('manuelmunoz87@gmail.com', true, 'Manu')
on conflict (email) do update set admin = true;
