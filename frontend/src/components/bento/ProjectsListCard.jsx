import { ArrowUpRight, Brain, GraduationCap, Trophy, GithubIcon } from 'lucide-react';
import BentoCard from './BentoCard.jsx';

const projects = [
  {
    icon: Brain,
    title: "Bachelor's Thesis · app_unet",
    subtitle: 'Modified RUNet for image upscaling & super-resolution',
    stack: 'PyTorch · Python · RUNet',
    href: 'https://github.com/Alexherrland/app_unet',
    accent: 'indigo',
  },
  {
    icon: GraduationCap,
    title: 'MSc Data Science Engineering',
    subtitle: 'Distributed ML, NLP and time series across the MSc programme at UNED',
    stack: 'PyTorch · PySpark · Kafka · R',
    href: 'https://github.com/Alexherrland/master-data-science',
    accent: 'indigo',
  },
  {
    icon: Trophy,
    title: 'CS2 Major Calculator',
    subtitle: 'Buchholz pairings & probabilities for Counter-Strike 2 majors',
    stack: 'TypeScript · Django · Python',
    href: 'https://github.com/Alexherrland/CS2MajorCalculator',
    accent: 'indigo',
  },
  {
    icon: GithubIcon,
    title: 'More on GitHub',
    subtitle: 'Side projects, experiments, course work',
    stack: '@Alexherrland',
    href: 'https://github.com/Alexherrland',
    accent: 'indigo',
  },
];

export default function ProjectsListCard() {
  return (
    <BentoCard
      span="lg:col-span-8 lg:row-span-2 md:col-span-6"
      accent="indigo"
      id="projects"
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <p className="label-mono text-accent-indigo">/ Selected projects</p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ icon: Icon, title, subtitle, stack, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-indigo/40 hover:bg-accent-indigo/[0.06]"
            >
              <div className="flex items-start justify-between gap-2">
                <Icon
                  size={18}
                  className="text-ink-dim transition-colors duration-200 group-hover:text-accent-indigo"
                />
                <ArrowUpRight
                  size={14}
                  className="text-ink-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-indigo"
                />
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-ink">{title}</h4>
                <p className="mt-1 text-xs text-ink-dim">{subtitle}</p>
              </div>
              <p className="mt-auto pt-2 font-mono text-[0.65rem] text-ink-muted">{stack}</p>
            </a>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
