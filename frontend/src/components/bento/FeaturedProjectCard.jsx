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
        href="https://github.com/Alexherrland/master-data-science"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col gap-5 sm:flex-row sm:items-stretch"
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-white/[0.06] bg-surface sm:w-2/5">
          <img
            src={`${baseUrl}images/master.jpg`}
            alt="MSc Data Science Engineering portfolio"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/[0.10] bg-bg/70 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-accent-cyan backdrop-blur-md">
            <Star size={10} /> Featured
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <p className="label-mono text-accent-cyan">/ Master's project · ongoing</p>
          <h3 className="mt-2 flex items-start gap-2 text-xl font-semibold tracking-tight text-ink">
            MSc Data Science Engineering
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-ink-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan"
            />
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">
            Hands-on projects on distributed ML, NLP and time series — built across the MSc programme at UNED.
            Pipelines on Spark/Kafka, models in PyTorch, statistical analysis in R.
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            <TechBadge accent="cyan">PyTorch</TechBadge>
            <TechBadge accent="cyan">PySpark</TechBadge>
            <TechBadge accent="cyan">Kafka</TechBadge>
            <TechBadge accent="cyan">spaCy</TechBadge>
            <TechBadge accent="cyan">R</TechBadge>
          </div>
        </div>
      </a>
    </BentoCard>
  );
}
