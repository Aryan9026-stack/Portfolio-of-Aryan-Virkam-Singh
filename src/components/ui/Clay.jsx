import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

const cx = (...c) => c.filter(Boolean).join(' ')

export function ClayCard({ as: Tag = 'div', tone = 'bg-cream', className, children, ...rest }) {
  return <Tag className={cx('clay p-6 md:p-8', tone, className)} {...rest}>{children}</Tag>
}

export function ClayButton({ href, variant = 'primary', className, children, ...rest }) {
  const style = variant === 'primary' ? 'bg-accent text-white' : 'bg-lavender text-ink'
  const cls = cx('clay-sm clay-press inline-flex items-center justify-center gap-2 px-6 py-3 font-bold transition hover:-translate-y-0.5', style, className)
  return href ? <a href={href} className={cls} {...rest}>{children}</a> : <button className={cls} {...rest}>{children}</button>
}

export function ClayBadge({ tone = 'bg-lavender', children }) {
  return <span className={cx('clay-sm inline-block px-3 py-1 text-sm font-medium', tone)} style={{ borderRadius: '999px' }}>{children}</span>
}

export function ClayInput({ label, id, error, multiline, ...rest }) {
  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">{label}</label>
      <Tag id={id} name={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined}
        rows={multiline ? 5 : undefined}
        className="w-full rounded-2xl bg-cream px-4 py-3 shadow-[inset_5px_5px_10px_rgba(150,130,190,.2),inset_-4px_-4px_8px_rgba(255,255,255,.9)]" {...rest} />
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  )
}

export function ClaySection({ id, title, subtitle, children }) {
  const reduced = useReducedMotion()
  return (
    <motion.section id={id} aria-labelledby={`${id}-title`} className="section"
      initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
      <h2 id={`${id}-title`} className="text-3xl font-bold md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-muted">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </motion.section>
  )
}
