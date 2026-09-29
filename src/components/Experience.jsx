import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'
import { ClaySection, ClayCard, ClayBadge } from './ui/Clay'

export default function Experience() {
  return (
    <ClaySection id="experience" title="Experience">
      {experience.map((e) => (
        <ClayCard key={e.role} tone="bg-peach/60">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="clay-sm bg-cream p-3"><Briefcase size={22} /></span>
              <div>
                <h3 className="text-2xl font-bold">{e.role}</h3>
                <p className="text-muted">{e.company}, {e.location}</p>
              </div>
            </div>
            <ClayBadge tone="bg-cream">{e.period}</ClayBadge>
          </div>
          <ul className="mt-6 list-disc space-y-3 pl-6 leading-relaxed">
            {e.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </ClayCard>
      ))}
    </ClaySection>
  )
}
