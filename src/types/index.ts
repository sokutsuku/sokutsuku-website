export interface Work {
  id: string
  slug: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  link?: string
  completed: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
}