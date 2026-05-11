import { ArrowUpRight, Star } from 'lucide-react';
import BentoCard from './BentoCard.jsx';
import TechBadge from './TechBadge.jsx';

const baseUrl = import.meta.env.BASE_URL;

export default function FeaturedProjectCard() {
  return (
    <BentoCard
      span="lg:col-span-8 lg:row-span-2 md:col-span-6"
      accent="cyan"
      id="work"
    >
      <a
        href="https://github.com/Alexherrland/tfm-anonimizacion-ia"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col gap-5 sm:flex-row sm:items-stretch"
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-white/[0.06] bg-surface sm:w-2/5">
          <img
            src={`${baseUrl}images/master.jpg`}
            alt="Master's Thesis · Privacy-Preserving Clinical ML"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/[0.10] bg-bg/70 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-accent-cyan backdrop-blur-md">
            <Star size={10} /> Featured
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <p className="label-mono text-accent-cyan">/ Master's Thesis · 2026</p>
          <h3 className="mt-2 flex items-start gap-2 text-xl font-semibold tracking-tight text-ink">
            Privacy-Preserving Clinical ML
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-ink-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan"
            />
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">
            Empirical study on the privacy-utility-fairness trade-off in hospital readmission models.
            Combines k-anonymity (ARX), Differential Privacy (diffprivlib) and Membership Inference auditing
            (ART) over 98k clinical records to produce evidence-based recommendations.
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            <TechBadge accent="cyan">ARX</TechBadge>
            <TechBadge accent="cyan">diffprivlib</TechBadge>
            <TechBadge accent="cyan">ART</TechBadge>
            <TechBadge accent="cyan">scikit-learn</TechBadge>
            <TechBadge accent="cyan">Python</TechBadge>
          </div>
        </div>
      </a>
    </BentoCard>
  );
}
