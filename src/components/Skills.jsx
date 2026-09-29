import { skills } from '../data/portfolio'
import { ClaySection, ClayCard, ClayBadge } from './ui/Clay'

export default function Skills() {
  return (
    <ClaySection id="skills" title="Technical skills" subtitle="The tools and concepts I work with.">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <li key={s.category}>
            <ClayCard tone={s.tone} className="h-full transition hover:-translate-y-1.5">
              <h3 className="mb-4 text-xl font-bold">{s.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => <li key={i}><ClayBadge tone="bg-cream">{i}</ClayBadge></li>)}
              </ul>
            </ClayCard>
          </li>
        ))}
      </ul>
    </ClaySection>
  )
}
