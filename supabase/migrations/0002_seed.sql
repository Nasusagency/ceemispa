-- CEEMI SPA · Datos iniciales (migración de lo que hoy está hardcodeado en el sitio)
-- Corre esto DESPUÉS de 0001_init.sql. Es seguro volver a correrlo: no duplica filas.

-- ─────────────────────────────────────────────
-- Categorías
-- ─────────────────────────────────────────────
insert into public.categorias (slug, nombre, descripcion, activo, orden) values
  ('faciales',     'Faciales',          'Cuidado avanzado para una piel saludable y radiante', true, 1),
  ('corporales',   'Corporales',        'Cuerpo renovado, bienestar total',                    true, 2),
  ('depilacion',   'Depilación Láser',  'Piel suave, libre y saludable',                       true, 3),
  ('masajes',      'Masajes',           'Relajación que se siente',                            true, 4),
  ('complementos', 'Complementos',      'Complementa tu bienestar',                            true, 5)
on conflict (slug) do nothing;

-- ─────────────────────────────────────────────
-- Faciales — tratamientos
-- ─────────────────────────────────────────────
insert into public.servicios (categoria, nombre, descripcion, precio, precio_desde, tipo, imagen_url, orden) values
  ('faciales', 'HYDRAFACIAL',    'Limpieza profunda + hidratación glow',              550,  true, 'tratamiento', '/images/Cuerpo/facial-serum.jpeg', 1),
  ('faciales', 'HOLLYWOOD PEEL', 'Glow facial con efecto piel luminosa y uniforme',   800,  true, 'tratamiento', '/images/Cuerpo/rostro-glow.jpeg',  2),
  ('faciales', 'LÁSER THULIUM',  'Rejuvenecimiento y reducción de manchas',           800,  true, 'tratamiento', '/images/Cuerpo/cuello-glow.jpeg',  3),
  ('faciales', 'HIFU FACIAL',    'Reafirmante facial sin cirugía',                    1500, true, 'tratamiento', '/images/Cuerpo/hombro-glow.jpeg',  4)
on conflict (categoria, nombre) do nothing;

-- Faciales — programas
insert into public.servicios (categoria, nombre, descripcion, precio, precio_desde, tipo, duracion, orden) values
  ('faciales', 'GLOW SKIN',     'Hydrafacial + mascarilla hidratante + glow inmediato.',           1499, false, 'programa', '3 sesiones', 5),
  ('faciales', 'SKIN RECOVERY', 'Fotorejuvenecimiento + Hydrafacial + mascarilla calmante.',        3999, false, 'programa', '5 sesiones', 6),
  ('faciales', 'QUIET GLOW',    'Hollywood Peel + Láser Thulium + seguimiento facial.',             8900, false, 'programa', '3 sesiones', 7)
on conflict (categoria, nombre) do nothing;

-- ─────────────────────────────────────────────
-- Corporales — tratamientos
-- ─────────────────────────────────────────────
insert into public.servicios (categoria, nombre, descripcion, precio, precio_desde, tipo, imagen_url, orden) values
  ('corporales', 'MOLDEO CORPORAL',      'Tratamiento enfocado en ayudar a moldear y definir zonas específicas del cuerpo.',       550,  true, 'tratamiento', '/images/Cuerpo/corporales.jpeg',  1),
  ('corporales', 'REAFIRMANTE CORPORAL', 'Ayuda a mejorar la firmeza y elasticidad de la piel, mejorando su apariencia.',           500,  true, 'tratamiento', '/images/Cuerpo/hombro-glow.jpeg', 2),
  ('corporales', 'PRESOTERAPIA',         'Drenaje corporal que ayuda a disminuir la retención de líquidos e inflamación.',          300,  true, 'tratamiento', null, 3),
  ('corporales', 'HIFU CORPORAL',        'Tratamiento avanzado que ayuda a tensar, reafirmar y redefinir zonas corporales sin cirugía.', 2500, true, 'tratamiento', null, 4)
on conflict (categoria, nombre) do nothing;

-- Corporales — paquetes
insert into public.servicios (categoria, nombre, descripcion, precio, precio_desde, tipo, duracion, orden) values
  ('corporales', 'BODY RESET',   'Presoterapia + drenaje + reafirmante corporal.',          2499,  false, 'programa', '5 sesiones',        5),
  ('corporales', 'BODY SCULPT',  'Moldeo corporal + reafirmante + presoterapia.',           5999,  false, 'programa', '10 sesiones',       6),
  ('corporales', 'BODY CONTOUR', 'HIFU corporal + moldeo + drenaje corporal.',              12900, true,  'programa', 'Programa premium', 7)
on conflict (categoria, nombre) do nothing;

-- ─────────────────────────────────────────────
-- Depilación láser (precio = 1 sesión, precio_paquete = paquete de 5 sesiones)
-- ─────────────────────────────────────────────
insert into public.servicios (categoria, nombre, precio, precio_paquete, tipo, orden) values
  ('depilacion', 'Axilas',                 500,  2200,  'tratamiento', 1),
  ('depilacion', 'Rostro',                 500,  2200,  'tratamiento', 2),
  ('depilacion', 'Cuello',                 500,  2200,  'tratamiento', 3),
  ('depilacion', 'Bikini',                 500,  2200,  'tratamiento', 4),
  ('depilacion', 'Bikini Brasileño',       800,  3600,  'tratamiento', 5),
  ('depilacion', 'Pecho',                  800,  3600,  'tratamiento', 6),
  ('depilacion', 'Espalda',                800,  3600,  'tratamiento', 7),
  ('depilacion', 'Media Pierna',           800,  3800,  'tratamiento', 8),
  ('depilacion', 'Medio Brazo',            600,  3800,  'tratamiento', 9),
  ('depilacion', 'Brazo Completo',         600,  3800,  'tratamiento', 10),
  ('depilacion', 'Piernas Completas',      1200, 5000,  'tratamiento', 11),
  ('depilacion', 'Cuerpo Completo Mujer',  2800, 12800, 'tratamiento', 12),
  ('depilacion', 'Cuerpo Completo Hombre', 3500, 15500, 'tratamiento', 13)
on conflict (categoria, nombre) do nothing;

-- ─────────────────────────────────────────────
-- Masajes
-- ─────────────────────────────────────────────
insert into public.servicios (categoria, nombre, precio, precio_desde, tipo, duracion, orden) values
  ('masajes', 'MASAJE RELAJANTE',         1200, false, 'tratamiento', '90 min', 1),
  ('masajes', 'MASAJE DESCONTRACTURANTE', 800,  false, 'tratamiento', '60 min', 2),
  ('masajes', 'MASAJE REDUCTIVO',         900,  false, 'tratamiento', '60 min', 3),
  ('masajes', 'MASAJE DRENANTE',          800,  false, 'tratamiento', '60 min', 4)
on conflict (categoria, nombre) do nothing;

-- ─────────────────────────────────────────────
-- Complementos ("Complementa tu bienestar")
-- ─────────────────────────────────────────────
insert into public.servicios (categoria, nombre, descripcion, precio, precio_desde, tipo, orden) values
  ('complementos', 'DRENAJE LINFÁTICO',      'Favorece la eliminación de toxinas, reduce inflamación y mejora la circulación.',       700, true, 'tratamiento', 1),
  ('complementos', 'ENVOLTURAS CORPORALES',  'Tratamientos complementarios que ayudan a desintoxicar, hidratar y reafirmar la piel.', 800, true, 'tratamiento', 2),
  ('complementos', 'EXFOLIACIÓN CORPORAL',   'Renueva tu piel, elimina células muertas y mejora la absorción de activos.',            500, true, 'tratamiento', 3)
on conflict (categoria, nombre) do nothing;

-- ─────────────────────────────────────────────
-- Imágenes por sección (foto del Hero + banner de cabecera por categoría)
-- ─────────────────────────────────────────────
insert into public.imagenes (seccion, url) values
  ('hero',       '/images/Cuerpo/rostro-glow.jpeg'),
  ('faciales',   '/images/Cuerpo/facial-serum.jpeg'),
  ('corporales', '/images/Cuerpo/corporales.jpeg'),
  ('masajes',    '/images/Cuerpo/hombro-glow.jpeg'),
  ('depilacion', '/images/Cuerpo/cuello-glow.jpeg')
on conflict (seccion) do nothing;
