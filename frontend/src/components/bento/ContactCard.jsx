import { Mail, ArrowRight, GithubIcon, LinkedinIcon } from 'lucide-react';
import BentoCard from './BentoCard.jsx';

export default function ContactCard() {
  return (
    <BentoCard
      span="lg:col-span-4 lg:row-span-2 md:col-span-6"
      accent="indigo"
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div>
          <p className="label-mono text-accent-indigo">/ Let's collaborate</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
            Have an idea worth shipping?
          </h3>
          <p className="mt-2 text-sm text-ink-dim">
            Open to roles in backend engineering, data platforms and ML — or interesting side projects.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href="mailto:herreriasramireza@gmail.com"
            className="group flex items-center justify-between gap-3 rounded-xl border border-accent-indigo/40 bg-accent-indigo/[0.08] px-4 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-accent-indigo/[0.16]"
          >
            <span className="flex items-center gap-2.5">
              <Mail size={16} className="text-accent-indigo" />
              herreriasramireza@gmail.com
            </span>
            <ArrowRight
              size={16}
              className="text-accent-indigo transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/AlexHerrerias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-xs font-medium text-ink-dim transition-colors duration-200 hover:border-white/[0.12] hover:text-ink"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alex-herrer%C3%ADas-ram%C3%ADrez-283179129/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-xs font-medium text-ink-dim transition-colors duration-200 hover:border-white/[0.12] hover:text-ink"
            >
              <LinkedinIcon size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
