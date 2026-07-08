/// <reference types="astro/client" />

interface Window {
  gtag?: (command: string, ...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}
