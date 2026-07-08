export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface NavLink {
  href: string
  label: string
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image?: string
  url?: string
}

export interface Tutorial {
  id: number
  title: string
  description: string
  category: string
  duration: string
  image?: string
  url?: string
}

export interface TechItem {
  name: string
  category: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  locale: string
  social: {
    github?: string
    youtube?: string
    twitter?: string
    instagram?: string
    tiktok?: string
    email: string
  }
}

export interface AnalyticsEvent {
  event: string
  category?: string
  label?: string
  value?: number
}
