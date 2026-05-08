const ACCENT_CLASS = {
  indigo: 'text-accent-indigo',
  cyan: 'text-accent-cyan',
  violet: 'text-accent-violet',
};

export default function MetricCard({ value, label, accent = 'indigo' }) {
  const accentClass = ACCENT_CLASS[accent] ?? ACCENT_CLASS.indigo;
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
      <span className={`font-mono text-2xl font-semibold ${accentClass}`}>{value}</span>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}
