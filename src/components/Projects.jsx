import { projects } from '../data/portfolio'
import { ClaySection, ClayCard, ClayBadge, ClayButton } from './ui/Clay'

export default function Projects() {
  return (
    <ClaySection id="projects" title="Projects" subtitle="Two full-stack applications built with React.js, Node.js, Express.js and MySQL.">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p) => (
          <ClayCard key={p.title} tone={p.tone} as="article" className="flex flex-col transition hover:-translate-y-1.5">
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.summary}</p>
            <ul className="my-5 flex flex-wrap gap-2" aria-label="Technologies">
              {p.tech.map((t) => <li key={t}><ClayBadge tone="bg-cream">{t}</ClayBadge></li>)}
            </ul>
            <ul className="mb-6 list-disc space-y-2 pl-5 leading-relaxed">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            <ClayButton variant="secondary" disabled aria-disabled="true" className="mt-auto self-start opacity-80">Links coming soon</ClayButton>
          </ClayCard>
        ))}
      </div>
    </ClaySection>
  )
}
