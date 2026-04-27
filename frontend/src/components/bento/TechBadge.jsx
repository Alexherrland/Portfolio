export default function TechBadge({ children, accent = 'indigo' }) {
  return (
    <span className="tech-badge" data-accent={accent === 'cyan' ? 'cyan' : undefined}>
      {children}
    </span>
  );
}
