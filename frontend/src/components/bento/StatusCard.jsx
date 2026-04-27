import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import BentoCard from './BentoCard.jsx';

export default function StatusCard() {
  return (
    <BentoCard
      span="lg:col-span-4 lg:row-span-2 md:col-span-3"
      accent="cyan"
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <motion.span
              animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-emerald-400"
            />
            <span className="relative size-2 rounded-full bg-emerald-400" />
          </span>
          <p className="label-mono">Currently</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            MSc Data Science Engineering
          </h3>
          <p className="mt-1.5 text-xs text-ink-dim">
            Distributed computing, advanced ML, NLP &amp; massive data pipelines.
          </p>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2">
          <GraduationCap size={16} className="shrink-0 text-accent-cyan" />
          <div className="flex flex-1 flex-col">
            <span className="text-xs font-medium text-ink">UNED</span>
            <span className="font-mono text-[0.65rem] text-ink-muted">2025 — 2026 · in progress</span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
