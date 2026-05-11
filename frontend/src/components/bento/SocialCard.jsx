import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import BentoCard from './BentoCard.jsx';

const links = [
  {
    icon: GithubIcon,
    href: 'https://github.com/AlexHerrerias',
    label: 'GitHub',
    handle: '@AlexHerrerias',
  },
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/alex-herrer%C3%ADas-ram%C3%ADrez-283179129/',
    label: 'LinkedIn',
    handle: 'alex-herrerías',
  },
  {
    icon: Mail,
    href: 'mailto:herreriasramireza@gmail.com',
    label: 'Email',
    handle: 'herreriasramireza@gmail.com',
  },
];

export default function SocialCard() {
  return (
    <BentoCard
      span="lg:col-span-4 lg:row-span-1 md:col-span-3"
      accent="indigo"
      className="!p-4"
    >
      <div className="grid h-full grid-cols-3 gap-2">
        {links.map(({ icon: Icon, href, label, handle }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-2 transition-all duration-200 hover:border-accent-indigo/40 hover:bg-accent-indigo/[0.08]"
            title={handle}
          >
            <Icon
              size={18}
              className="text-ink-dim transition-colors duration-200 group-hover:text-accent-indigo"
            />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted group-hover:text-accent-indigo">
              {label}
            </span>
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
