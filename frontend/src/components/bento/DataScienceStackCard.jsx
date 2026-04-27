import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import BentoCard from './BentoCard.jsx';
import TechBadge from './TechBadge.jsx';

const groups = [
  {
    label: 'Languages',
    items: ['Python', 'R', 'SQL'],
  },
  {
    label: 'ML & Deep Learning',
    items: ['PyTorch', 'Scikit-learn', 'spaCy (NLP)'],
  },
  {
    label: 'Big Data',
    items: ['PySpark', 'Kafka', 'HDFS', 'Hive', 'MongoDB'],
  },
  {
    label: 'Stats & Modeling',
    items: ['Statistical inference', 'Regression', 'Time series'],
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function DataScienceStackCard() {
  return (
    <BentoCard
      span="lg:col-span-5 lg:row-span-3 md:col-span-6"
      accent="cyan"
    >
      <div className="flex h-full flex-col gap-5">
        <div>
          <p className="label-mono text-accent-cyan">/ Data science journey</p>
          <h2 className="mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
            <BrainCircuit size={18} className="text-accent-cyan" />
            ML, NLP &amp; Big Data
          </h2>
          <p className="mt-1 text-xs text-ink-dim">
            Building models and distributed pipelines as part of the MSc programme.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.02 }}
          className="flex flex-1 flex-col gap-3.5"
        >
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-1.5">
              <p className="label-mono">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <motion.span key={item} variants={badgeVariants}>
                    <TechBadge accent="cyan">{item}</TechBadge>
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="label-mono text-accent-cyan">Now learning</p>
          <p className="mt-1 text-xs text-ink-dim">
            Distributed ML training, retrieval-augmented generation, and production-grade MLOps.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
