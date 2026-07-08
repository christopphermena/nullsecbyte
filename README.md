# NullSecByte — Landing page de ciberseguridad

Landing page profesional para NullSecByte, empresa de ciberseguridad orientada a PYMES en Chile. Construida con Astro 5 + Tailwind CSS 4 + TypeScript.

## Stack tecnológico

| Tecnología | Propósito |
|---|---|
| **Astro 5** | Framework web, generación estática, cero JS por defecto |
| **Tailwind CSS 4** | Estilos utility-first con `@tailwindcss/vite` |
| **TypeScript** | Tipado estricto en toda la base de código |
| **MDX** | Preparado para blog y contenido futuro |
| **@fontsource/inter** | Fuente Inter auto-hosteada (sin Google Fonts externo) |
| **Formspree** | Backend del formulario de contacto |

## Estructura del proyecto

```
src/
├── components/
│   ├── seo/          # BaseHead, Schema, Analytics
│   ├── sections/     # Hero, Benefits, Services, Process, Risks, etc.
│   ├── ui/           # Button, Container, SectionHeader, ServiceCard, etc.
│   └── widgets/      # Navbar, Footer, WhatsAppFloat, CookieBanner, ContactForm
├── constants/        # site, navigation, services, process, risks, faq, differentiators
├── layouts/          # BaseLayout
├── lib/              # scroll-observer, analytics
├── pages/            # index.astro (+ blog/ preparado)
├── styles/           # global.css (Tailwind + design tokens)
├── types/            # TypeScript interfaces
└── utils/            # cn (classnames helper)
```

## Principios de arquitectura

- **Componentes atómicos** — Cada componente tiene una única responsabilidad
- **Datos fuera del markup** — Servicios, FAQ, config en archivos `constants/` tipados
- **Cero JS por defecto** — Astro renderiza HTML estático; JS solo para interactividad necesaria
- **SEO first** — Meta tags, Open Graph, Twitter Cards, Schema.org, sitemap
- **Rendimiento** — Fonts auto-hosteado, CSS purgado por Tailwind, HTML comprimido
- **Escalabilidad** — Arquitectura preparada para blog, CMS, base de datos, panel admin

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
| `PUBLIC_META_PIXEL_ID` | Meta Pixel ID |
| `PUBLIC_FORMSPREE_ID` | Formspree form ID |
| `PUBLIC_WHATSAPP` | Número WhatsApp (sin +) |
| `PUBLIC_EMAIL` | Correo de contacto |

## Despliegue

### Netlify (recomendado)

1. Conecta el repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Listo — SSL automático

## Servicios incluidos

- Auditoría básica de seguridad
- Evaluación de exposición en Internet
- Capacitación anti-phishing
- Respaldo y recuperación
- Inventario tecnológico
- Hardening básico
- Protección de cuentas
- Consultoría de seguridad

## Licencia

MIT — Ver [LICENSE](LICENSE)
