import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import { ClaySection, ClayCard } from './ui/Clay'

export default function Education() {
  return (
    <ClaySection id="education" title="Education">
      <ol className="relative space-y-6 border-l-4 border-lavender pl-8">
        {education.map((e) => (
          <li key={e.degree} className="relative">
            <span aria-hidden="true" className="clay-sm absolute -left-[3.15rem] top-4 bg-mint p-2"><GraduationCap size={18} /></span>
            <ClayCard tone="bg-cream" className="!p-5">
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="text-xl font-bold">{e.degree}</h3>
                <span className="font-bold text-accent">{e.years}</span>
              </div>
              <p className="mt-1 text-muted">{e.school}, {e.place}</p>
            </ClayCard>
          </li>
        ))}
      </ol>
    </ClaySection>
  )
}
