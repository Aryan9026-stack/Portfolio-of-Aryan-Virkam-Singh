import { navLinks, profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10">
      <div className="clay flex flex-col items-center justify-between gap-4 bg-lavender/50 p-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-bold">Aryan Portfolio</p>
          <p className="text-sm text-muted">© 2026 Aryan Vikram Singh</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium">
          {navLinks.map((l) => <a key={l.id} href={`#${l.id}`} className="hover:text-accent">{l.label}</a>)}
        </nav>
        <a href={`mailto:${profile.email}`} className="text-sm font-bold text-accent">{profile.email}</a>
      </div>
    </footer>
  )
}
