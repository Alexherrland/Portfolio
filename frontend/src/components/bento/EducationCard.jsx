import { GraduationCap } from 'lucide-react';
import BentoCard from './BentoCard.jsx';
import TimelineItem from './TimelineItem.jsx';

const items = [
  {
    period: '2025 — 2026 · current',
    title: 'MSc Data Science Engineering',
    subtitle: 'UNED · Distributed computing, advanced ML, NLP',
    current: true,
  },
  {
    period: '2022 — 2025',
    title: 'Computer Engineering Degree',
    subtitle: 'AI specialization · Bachelor thesis on deep learning',
    current: false,
  },
  {
    period: '2017 — 2021',
    title: 'Web & Systems Tech',
    subtitle: 'Foundation in software development',
    current: false,
  },
];

export default function EducationCard() {
  return (
    <BentoCard
      span="lg:col-span-4 lg:row-span-2 md:col-span-6"
      accent="cyan"
    >
      <div className="flex h-full flex-col gap-4">
        <div>
          <p className="label-mono text-accent-cyan">/ Education</p>
          <h3 className="mt-1.5 flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
            <GraduationCap size={16} className="text-accent-cyan" />
            Academic timeline
          </h3>
        </div>
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </BentoCard>
  );
}
