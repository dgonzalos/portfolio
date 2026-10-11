# Portfolio

Portfolio personal hecho con Next.js 16 (App Router), React 19, TypeScript y CSS Modules.

## Empezar

```bash
npm install
cp .env.example .env.local   # opcional
npm run dev
```

Abre http://localhost:3000.

## Dónde está cada cosa

```
src/
├── app/
│   ├── layout.tsx            Metadatos, fuentes y script de tema
│   ├── page.tsx              Orden de las secciones
│   ├── globals.css           Tokens de diseño (colores, tipografía, espaciado)
│   ├── opengraph-image.tsx   Imagen al compartir el enlace
│   └── icon.svg              Favicon
├── content/                  ← Tu contenido. Rellena los TODO
│   ├── profile.ts            Nombre, titular, resumen, redes
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts           Repos de GitHub
│   ├── products.ts           Apps desplegadas
│   └── types.ts
├── components/               Un componente por carpeta, con su .module.css
└── lib/                      Formato de fechas, GitHub, tema
```

## Contenido

Todo el texto sale de `src/content/`. Busca `TODO` y sustitúyelo. TypeScript te avisa si falta un campo obligatorio.

Archivos para `public/`:

| Archivo | Uso | Formato |
| --- | --- | --- |
| `avatar.jpg` | Foto del inicio | Cuadrada, mín. 400×400 |
| `cv-diego.pdf` | Botón «Descargar CV» | PDF |
| `projects/*.png` | Capturas de proyectos | 16:10, p. ej. 1600×1000 |
| `products/*.png` | Capturas de productos | 16:10, p. ej. 1600×1000 |

Mientras una imagen no exista, se muestra un marcador con la ruta que espera; la foto y el botón de CV simplemente no aparecen.

## Tema claro / oscuro

Los colores están en `src/app/globals.css` como variables CSS, con los valores del tema oscuro bajo `:root[data-theme="dark"]`. Los componentes solo usan esas variables. Un script en `<head>` aplica el tema guardado o el del sistema antes de pintar, así que no hay parpadeo.

## GitHub

`src/lib/github.ts` consulta estrellas y último push de cada repo de `projects.ts` y lo revalida cada 6 horas. Funciona sin token; con `GITHUB_TOKEN` en `.env.local` (o en Vercel) evitas el límite de 60 peticiones/hora.

## Despliegue

Importa el repo en Vercel y añade `NEXT_PUBLIC_SITE_URL` con tu dominio.
