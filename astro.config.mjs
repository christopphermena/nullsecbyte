import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://nsbyte.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  scopedStyleStrategy: 'class',
  server: { port: 3000 },
})
