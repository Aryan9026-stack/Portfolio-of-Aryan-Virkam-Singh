import { about } from '../data/portfolio'
import { ClaySection, ClayCard } from './ui/Clay'

export default function About() {
  return (
    <ClaySection id="about" title="About me" subtitle="Developer in training, operator by experience.">
      <ClayCard tone="bg-powder/60" className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 animate-float rounded-full bg-blush opacity-70" />
        <div className="relative max-w-3xl space-y-4 text-lg leading-relaxed">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </ClayCard>
    </ClaySection>
  )
}
