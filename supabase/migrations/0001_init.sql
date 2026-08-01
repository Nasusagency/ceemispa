-- CEEMI SPA · Panel admin — esquema inicial
-- Pega este archivo completo en Supabase → SQL Editor → Run.

-- ─────────────────────────────────────────────
-- Tabla: categorias
-- ─────────────────────────────────────────────
create table if not exists public.categorias (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  nombre text not null,
  descripcion text,
  activo boolean not null default true,
  orden integer not null default 0,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- Tabla: servicios
-- ─────────────────────────────────────────────
create table if not exists public.servicios (
  id uuid primary key default gen_random_uuid(),
  categoria text not null references public.categorias(slug) on update cascade,
  nombre text not null,
  descripcion text,
  precio numeric(10, 2) not null,
  precio_desde boolean not null default false,
  -- Precio de paquete de 5 sesiones (hoy solo lo usa Depilación).
  precio_paquete numeric(10, 2),
  -- Texto libre: "90 min" (masajes) o "3 sesiones" (programas/paquetes).
  duracion text,
  tipo text not null default 'tratamiento' check (tipo in ('tratamiento', 'programa')),
  activo boolean not null default true,
  imagen_url text,
  orden integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (categoria, nombre)
);

create index if not exists servicios_categoria_idx on public.servicios (categoria);

-- ─────────────────────────────────────────────
-- Tabla: imagenes (fotos de cabecera por sección del sitio)
-- ─────────────────────────────────────────────
create table if not exists public.imagenes (
  id uuid primary key default gen_random_uuid(),
  seccion text unique not null,
  url text not null,
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- updated_at automático en servicios
-- ─────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists servicios_set_updated_at on public.servicios;
create trigger servicios_set_updated_at
  before update on public.servicios
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────
-- Row Level Security
-- ─────────────────────────────────────────────
alter table public.categorias enable row level security;
alter table public.servicios enable row level security;
alter table public.imagenes enable row level security;

-- categorias: el sitio público solo ve las activas; el panel (autenticado) ve todo.
drop policy if exists "categorias_public_select" on public.categorias;
create policy "categorias_public_select" on public.categorias
  for select using (activo = true);

drop policy if exists "categorias_auth_select" on public.categorias;
create policy "categorias_auth_select" on public.categorias
  for select to authenticated using (true);

drop policy if exists "categorias_auth_insert" on public.categorias;
create policy "categorias_auth_insert" on public.categorias
  for insert to authenticated with check (true);

drop policy if exists "categorias_auth_update" on public.categorias;
create policy "categorias_auth_update" on public.categorias
  for update to authenticated using (true) with check (true);

-- servicios: misma lógica.
drop policy if exists "servicios_public_select" on public.servicios;
create policy "servicios_public_select" on public.servicios
  for select using (activo = true);

drop policy if exists "servicios_auth_select" on public.servicios;
create policy "servicios_auth_select" on public.servicios
  for select to authenticated using (true);

drop policy if exists "servicios_auth_insert" on public.servicios;
create policy "servicios_auth_insert" on public.servicios
  for insert to authenticated with check (true);

drop policy if exists "servicios_auth_update" on public.servicios;
create policy "servicios_auth_update" on public.servicios
  for update to authenticated using (true) with check (true);

-- imagenes: siempre públicas para lectura; solo el panel las cambia.
drop policy if exists "imagenes_public_select" on public.imagenes;
create policy "imagenes_public_select" on public.imagenes
  for select using (true);

drop policy if exists "imagenes_auth_insert" on public.imagenes;
create policy "imagenes_auth_insert" on public.imagenes
  for insert to authenticated with check (true);

drop policy if exists "imagenes_auth_update" on public.imagenes;
create policy "imagenes_auth_update" on public.imagenes
  for update to authenticated using (true) with check (true);

-- ─────────────────────────────────────────────
-- Storage: bucket público para fotos subidas desde el panel
-- ─────────────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('ceemi-images', 'ceemi-images', true)
on conflict (id) do nothing;

drop policy if exists "ceemi_images_auth_insert" on storage.objects;
create policy "ceemi_images_auth_insert" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'ceemi-images');

drop policy if exists "ceemi_images_auth_update" on storage.objects;
create policy "ceemi_images_auth_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'ceemi-images');
