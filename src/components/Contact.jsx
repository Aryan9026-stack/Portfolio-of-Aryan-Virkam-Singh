import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { ClaySection, ClayCard, ClayButton, ClayInput } from './ui/Clay'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  // No backend is configured, so a valid form opens the visitor's email app with the message filled in.
  const onSubmit = (ev) => {
    ev.preventDefault()
    const v = Object.fromEntries(new FormData(ev.currentTarget))
    const err = validate(v)
    setErrors(err)
    if (Object.keys(err).length) { setStatus(''); return }
    const body = `${v.message}\n\nFrom: ${v.name} (${v.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + v.name)}&body=${encodeURIComponent(body)}`
    setStatus('Your email app should open with the message ready to send. Nothing is sent until you send it.')
  }

  return (
    <ClaySection id="contact" title="Contact" subtitle="Open to software development roles. Send a message or reach out directly.">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <ClayButton href={`mailto:${profile.email}`} className="w-full justify-start break-all"><Mail size={18} className="shrink-0" />{profile.email}</ClayButton>
          <ClayButton href={`tel:${profile.phoneHref}`} variant="secondary" className="w-full justify-start"><Phone size={18} />{profile.phone}</ClayButton>
          <ClayCard tone="bg-mint/60" className="!p-5"><p className="flex items-center gap-2 font-bold"><MapPin size={18} />{profile.location}</p></ClayCard>
        </div>
        <ClayCard tone="bg-blush/50" className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <ClayInput id="name" label="Name" autoComplete="name" error={errors.name} />
            <ClayInput id="email" label="Email" type="email" autoComplete="email" error={errors.email} />
            <ClayInput id="message" label="Message" multiline error={errors.message} />
            <ClayButton type="submit">Write message</ClayButton>
            <p role="status" className="text-sm text-muted">{status}</p>
          </form>
        </ClayCard>
      </div>
    </ClaySection>
  )
}
