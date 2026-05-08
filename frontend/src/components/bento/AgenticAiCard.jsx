import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import BentoCard from './BentoCard.jsx';
import TechBadge from './TechBadge.jsx';

const groups = [
  {
    label: 'Agents & orchestration',
    items: ['Claude Agent SDK', 'Sub-agent delegation', 'Multi-agent TDD', 'Tool routing'],
  },
  {
    label: 'Skills & MCP',
    items: ['Slash commands', 'Skill authoring', 'MCP servers', 'Atlassian · IntelliJ · Postman'],
  },
  {
    label: 'Hooks & guardrails',
    items: ['PreToolUse / PostToolUse', 'Deterministic enforcement', 'State files', 'Self-healing pipelines'],
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function AgenticAiCard() {
  return (
    <BentoCard
      span="lg:col-span-12 lg:row-span-2 md:col-span-6"
      accent="violet"
      id="ai"
    >
      <div className="grid h-full gap-5 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <p className="label-mono text-accent-violet">/ Agentic AI engineering</p>
            <h2 className="mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
              <Bot size={18} className="text-accent-violet" />
              Claude Code agents &amp; orchestration
            </h2>
            <p className="mt-1 text-xs text-ink-dim">
              Designing and shipping AI developer agents on top of the Claude Agent SDK —
              skills, hooks and sub-agent workflows wired into real engineering pipelines.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="label-mono text-accent-violet">In production</p>
            <ul className="mt-1.5 space-y-1 text-xs text-ink-dim">
              <li>
                Daily-driven agents covering the{' '}
                <span className="text-ink">spec → TDD → PR</span> loop on a microservices backend.
              </li>
              <li>
                Repo-aware skills delivering architectural context — controllers, flows,
                dependencies — per service.
              </li>
              <li>
                Deterministic hooks enforcing agent routing, the TDD pipeline and
                read/edit guardrails.
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.02 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-1.5">
              <p className="label-mono">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <motion.span key={item} variants={badgeVariants}>
                    <TechBadge accent="violet">{item}</TechBadge>
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </BentoCard>
  );
}
