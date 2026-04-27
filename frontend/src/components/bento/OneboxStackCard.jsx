import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import BentoCard from './BentoCard.jsx';
import TechBadge from './TechBadge.jsx';
import MetricCard from './MetricCard.jsx';

const groups = [
  {
    label: 'Core',
    items: ['Java 25', 'Spring Boot', 'Spring MVC', 'Maven'],
  },
  {
    label: 'Async & Integration',
    items: ['Apache Camel', 'Apache CXF (SOAP)', 'RabbitMQ / AMQP', 'Resilience4j', 'Quartz', 'Hazelcast'],
  },
  {
    label: 'Data',
    items: ['Couchbase', 'MySQL · JOOQ', 'Elasticsearch', 'AWS S3'],
  },
  {
    label: 'Auth & Security',
    items: ['OAuth2 / JWT', 'WSS4J', 'X.509 mTLS'],
  },
  {
    label: 'Testing & DevOps',
    items: ['Karate (BDD)', 'JUnit 5', 'Mockito', 'Testcontainers', 'Docker', 'Kubernetes'],
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function OneboxStackCard() {
  return (
    <BentoCard
      span="lg:col-span-7 lg:row-span-3 md:col-span-6"
      accent="indigo"
      id="stack"
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="label-mono text-accent-indigo">/ Production engineering</p>
            <h2 className="mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
              <Layers size={18} className="text-accent-indigo" />
              Fever — Onebox TDS
            </h2>
            <p className="mt-1 text-xs text-ink-dim">
              Ticketing platform for live entertainment · microservices on Spring Boot, event-driven, hexagonal arch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <MetricCard value="μ-services" label="Spring Boot" accent="indigo" />
          <MetricCard value="event-driven" label="AMQP · Camel" accent="indigo" />
          <MetricCard value="SOAP→REST" label="legacy migration" accent="indigo" />
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
                    <TechBadge accent="indigo">{item}</TechBadge>
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
