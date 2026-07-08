# nullsecbyte — Landing Pages + Tutoriales

Sitio personal de **nullsecbyte** donde comparto tutoriales de desarrollo web, muestro proyectos y ofrezco servicios de creación de landing pages modernas.

Construido con Astro 5 + Tailwind CSS 4 + TypeScript.

## Stack tecnológico

| Tecnología | Propósito |
|---|---|
| **Astro 5** | Framework web, generación estática, cero JS por defecto |
| **Tailwind CSS 4** | Estilos utility-first con `@tailwindcss/vite` |
| **TypeScript** | Tipado estricto en toda la base de código |
| **MDX** | Preparado para blog y contenido futuro |
| **@fontsource/inter** | Fuente Inter auto-hosteada (sin Google Fonts externo) |

## Estructura del proyecto

```
src/
├── components/
│   ├── seo/          # BaseHead, Schema, Analytics
│   ├── sections/     # Hero, Services, Tutorials, About, TechStack, Process, Faq, Cta
│   ├── ui/           # Button, Container, Section, SectionHeader
│   └── widgets/      # Navbar, Footer, CookieBanner
├── constants/        # site, navigation, services, process, tutorials, projects, faq, tech
├── layouts/          # BaseLayout
├── lib/              # scroll-observer, analytics
├── pages/            # index.astro
├── styles/           # global.css (Tailwind + design tokens)
├── types/            # TypeScript interfaces
└── utils/            # cn (classnames helper)
```

## Principios de arquitectura

- **Componentes atómicos** — Cada componente tiene una única responsabilidad
- **Datos fuera del markup** — Servicios, FAQ, tutoriales y config en archivos `constants/` tipados
- **Cero JS por defecto** — Astro renderiza HTML estático; JS solo para interactividad necesaria
- **SEO first** — Meta tags, Open Graph, Schema.org, sitemap
- **Rendimiento** — Fonts auto-hosteado, CSS purgado por Tailwind, HTML comprimido

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
# Abre http://localhost:3000
```

## Build

```bash
npm run build
# Output en dist/
```

## Preview del build

```bash
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `PUBLIC_GA_ID` | Google Analytics 4 ID (G-XXXXXXXXXX) |
| `PUBLIC_YOUTUBE_URL` | URL del canal de YouTube |
| `PUBLIC_YOUTUBE_API_KEY` | YouTube Data API key (opcional) |
| `PUBLIC_EMAIL` | Correo de contacto |

## Despliegue

### Netlify / Vercel

1. Conecta el repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Listo — SSL automático

## Servicios

- Landing Pages
- Diseño UI
- Desarrollo con Astro
- Optimización de performance
- SEO técnico
- Diseño responsive

## Licencia

MIT — Ver [LICENSE](LICENSE)
