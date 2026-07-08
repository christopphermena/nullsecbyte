export function initScrollAnimations(): void {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.fade-up').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.08}s`
      observer.observe(el)
    })
  } else {
    document.querySelectorAll('.fade-up').forEach((el) => {
      el.classList.add('visible')
    })
  }
}
