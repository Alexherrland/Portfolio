import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-bg/70 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight text-ink">
          <span className="grid size-7 place-items-center rounded-md border border-white/[0.10] bg-white/[0.04] text-xs font-semibold">
            AH
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-dim sm:inline">
            Alex Herrerias
          </span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-3">
          <a href="#work" className="hidden rounded-md px-3 py-1.5 text-xs font-medium text-ink-dim transition-colors hover:text-ink sm:inline">
            Work
          </a>
          <a href="#stack" className="hidden rounded-md px-3 py-1.5 text-xs font-medium text-ink-dim transition-colors hover:text-ink sm:inline">
            Stack
          </a>
          <a href="#projects" className="hidden rounded-md px-3 py-1.5 text-xs font-medium text-ink-dim transition-colors hover:text-ink sm:inline">
            Projects
          </a>
          <a
            href="mailto:herreriasramireza@gmail.com"
            className="rounded-lg border border-white/[0.10] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-accent-indigo/40 hover:bg-accent-indigo/[0.08] hover:text-accent-indigo"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
