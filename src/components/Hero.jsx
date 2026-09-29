import { lazy, Suspense } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { ClayButton, ClayBadge } from './ui/Clay'
import photo from '../assets/images/aryan-profile.jpg'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-32 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
        <p className="font-medium text-muted">Hi, I'm</p>
        <h1 id="hero-title" className="mt-1 text-4xl font-bold leading-tight md:text-6xl">
          Aryan Vikram Singh
        </h1>
        <p className="mt-3 font-display text-xl font-medium text-accent md:text-2xl">{profile.title}</p>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ClayButton href="#projects">View My Work</ClayButton>
          <ClayButton href="#contact" variant="secondary">Contact Me</ClayButton>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email Aryan" className="clay-sm clay-press bg-powder p-3"><Mail size={20} /></a>
          <a href={`tel:${profile.phoneHref}`} aria-label="Call Aryan" className="clay-sm clay-press bg-mint p-3"><Phone size={20} /></a>
          <span className="flex items-center"><ClayBadge tone="bg-peach"><MapPin size={14} className="mr-1 inline" />{profile.location}</ClayBadge></span>
        </div>
      </motion.div>

      <div className="relative flex min-h-[380px] items-center justify-center md:min-h-[520px]">
        <Suspense fallback={null}><HeroScene /></Suspense>
        <div className="clay relative z-10 animate-float bg-lavender p-3" style={{ borderRadius: '2.5rem' }}>
          <img src={photo} alt="Portrait of Aryan Vikram Singh" width="353" height="545" fetchpriority="high"
            className="h-[340px] w-[240px] rounded-[2rem] object-cover object-top md:h-[430px] md:w-[300px]" />
        </div>
      </div>
    </section>
  )
}
