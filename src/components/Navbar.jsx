import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const link = (l) => (
    <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} aria-current={active === l.id ? 'page' : undefined}
      className={`rounded-full px-4 py-2 text-sm font-bold transition ${active === l.id ? 'bg-lavender text-ink shadow-[inset_2px_2px_5px_rgba(255,255,255,.8),inset_-2px_-2px_6px_rgba(150,130,190,.25)]' : 'text-muted hover:text-ink'}`}>
      {l.label}
    </a>
  )
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <nav aria-label="Main" className="clay mx-auto flex max-w-6xl items-center justify-between bg-cream/95 px-5 py-3 backdrop-blur" style={{ borderRadius: '999px' }}>
        <a href="#home" className="font-display text-lg font-bold">Aryan Portfolio</a>
        <div className="hidden items-center gap-1 lg:flex">{navLinks.map(link)}</div>
        <button className="clay-sm clay-press p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="clay mx-auto mt-3 flex max-w-6xl flex-col gap-1 bg-cream p-4 lg:hidden">{navLinks.map(link)}</div>
      )}
    </header>
  )
}
