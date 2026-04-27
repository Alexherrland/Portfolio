export default function TimelineItem({ period, title, subtitle, current = false }) {
  return (
    <li className="relative pl-6">
      <span
        className={`absolute left-0 top-1.5 size-2 rounded-full ${
          current ? 'bg-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.7)]' : 'bg-ink-muted'
        }`}
      />
      <span className="absolute left-[3px] top-4 h-[calc(100%-1rem)] w-px bg-white/[0.08]" aria-hidden />
      <p className="label-mono">{period}</p>
      <h4 className="mt-0.5 text-sm font-medium text-ink">{title}</h4>
      {subtitle && <p className="mt-0.5 text-xs text-ink-dim">{subtitle}</p>}
    </li>
  );
}
