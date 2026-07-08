export function trackEvent(
  action: string,
  category?: string,
  label?: string,
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}

export function trackWhatsAppClick(label?: string): void {
  trackEvent('click_whatsapp', 'WhatsApp', label || 'contacto')
}

export function trackFormSubmit(): void {
  trackEvent('form_submit', 'Formulario', 'contacto')
}

export function trackPhoneClick(): void {
  trackEvent('click_phone', 'Telefono', 'contacto')
}

export function trackEmailClick(): void {
  trackEvent('click_email', 'Email', 'contacto')
}
