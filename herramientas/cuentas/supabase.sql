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
--   · reportes (21/10/2026): los errores que mandan los alumnos con el
--     botón 🐞, con un mail al admin por cada uno (al final del archivo).
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

-- ============================================================
-- REPORTES DE ERRORES (21/10/2026)
-- El botón 🐞 del pie del menú manda un reporte: el texto del
-- alumno y, solos, la pantalla, el teléfono y los últimos errores
-- de la página. El admin los ve en Ajustes → Reportes y le llega
-- un mail por cada uno (si está guardada la clave de Brevo, abajo).
-- ============================================================
create table if not exists public.reportes (
  id        bigint generated always as identity primary key,
  user_id   uuid references auth.users(id) on delete cascade,
  email     text,
  texto     text not null check (length(texto) between 3 and 4000),
  esperado  text check (esperado is null or length(esperado) <= 2000),
  pantalla  text,
  url       text,
  contexto  jsonb not null default '{}'::jsonb,
  creado    timestamptz not null default now(),
  resuelto  boolean not null default false
);
alter table public.reportes enable row level security;

drop policy if exists "alumno reporta" on public.reportes;
drop policy if exists "admin lee reportes" on public.reportes;
drop policy if exists "admin cambia reportes" on public.reportes;
drop policy if exists "admin borra reportes" on public.reportes;
create policy "alumno reporta" on public.reportes for insert
  with check (user_id = auth.uid() and email = public.mi_email() and public.es_permitido() and resuelto = false);
create policy "admin lee reportes"    on public.reportes for select using (public.es_admin());
create policy "admin cambia reportes" on public.reportes for update using (public.es_admin());
create policy "admin borra reportes"  on public.reportes for delete using (public.es_admin());

grant select, insert, update, delete on public.reportes to authenticated;
revoke all on public.reportes from anon;

-- Freno: como mucho 20 reportes por persona por día
create or replace function public.reportes_limite() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.reportes where user_id = new.user_id and creado > now() - interval '1 day') >= 20 then
    raise exception 'AZ_MUCHOS_REPORTES';
  end if;
  return new;
end $$;
drop trigger if exists az_reportes_limite on public.reportes;
create trigger az_reportes_limite before insert on public.reportes
  for each row execute function public.reportes_limite();

-- Mail a azbuka.aprenderuso@gmail.com por cada reporte, con la API de Brevo.
-- Necesita la clave de API de Brevo guardada UNA vez en la bóveda de Supabase
-- (ver herramientas/cuentas/GUIA.md, «Reportes de errores»):
--   select vault.create_secret('xkeysib-…', 'brevo_api_key');
-- Sin la clave, los reportes se guardan igual: solo no llega el mail.
create extension if not exists pg_net;
create or replace function public.reportes_mail() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  clave text;
  destinos jsonb;
  ctx text;
begin
  select decrypted_secret into clave from vault.decrypted_secrets where name = 'brevo_api_key' limit 1;
  if clave is null then return new; end if;
  -- Destino: el mail de Azbuka (21/10/2026, Manu). No depende de quién es admin.
  destinos := jsonb_build_array(jsonb_build_object('email', 'azbuka.aprenderuso@gmail.com'));
  ctx := coalesce(new.contexto ->> 'dispositivo', '') ||
         case when new.contexto ? 'errores' then E'\nErrores de la página:\n' || (new.contexto ->> 'errores') else '' end;
  perform net.http_post(
    url := 'https://api.brevo.com/v3/smtp/email',
    headers := jsonb_build_object('api-key', clave, 'Content-Type', 'application/json', 'accept', 'application/json'),
    body := jsonb_build_object(
      'sender', jsonb_build_object('name', 'Azbuka', 'email', 'azbuka.aprenderuso@gmail.com'),
      'to', destinos,
      'replyTo', jsonb_build_object('email', coalesce(new.email, 'azbuka.aprenderuso@gmail.com')),
      'subject', '🐞 Azbuka: ' || left(regexp_replace(new.texto, '\s+', ' ', 'g'), 70),
      'textContent',
        'De: ' || coalesce(new.email, '?') || E'\n' ||
        'Pantalla: ' || coalesce(new.pantalla, '?') || E'\n' ||
        'Dirección: ' || coalesce(new.url, '?') || E'\n\n' ||
        'Qué pasó:' || E'\n' || new.texto || E'\n\n' ||
        case when new.esperado is not null and new.esperado <> '' then 'Qué esperaba:' || E'\n' || new.esperado || E'\n\n' else '' end ||
        ctx || E'\n\n' ||
        'Para verlo y marcarlo como resuelto: Azbuka → Ajustes → Reportes.'
    )
  );
  return new;
exception when others then
  return new;   -- si falla el mail, el reporte se guarda igual
end $$;
drop trigger if exists az_reportes_mail on public.reportes;
create trigger az_reportes_mail after insert on public.reportes
  for each row execute function public.reportes_mail();
