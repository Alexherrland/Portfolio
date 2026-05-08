const NON_DEFAULT_ACCENTS = new Set(['cyan', 'violet']);

export default function TechBadge({ children, accent = 'indigo' }) {
  return (
    <span className="tech-badge" data-accent={NON_DEFAULT_ACCENTS.has(accent) ? accent : undefined}>
      {children}
    </span>
  );
}
