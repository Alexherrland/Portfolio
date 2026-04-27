import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Mail, FileText, Sparkles } from 'lucide-react';
import BentoCard from './BentoCard.jsx';
import MagneticButton from '../MagneticButton.jsx';

const baseUrl = import.meta.env.BASE_URL;

export default function HeroCard() {
  const tiltRef = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 16 });
  const sy = useSpring(my, { stiffness: 180, damping: 16 });
  const rotateY = useTransform(sx, [-1, 1], [-6, 6]);
  const rotateX = useTransform(sy, [-1, 1], [6, -6]);

  const handleMove = (e) => {
    if (reduce || !tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) / (rect.width / 2));
    my.set((e.clientY - cy) / (rect.height / 2));
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <BentoCard
      span="lg:col-span-8 lg:row-span-3 md:col-span-6"
      accent="indigo"
      id="top"
      className="!p-7 md:!p-9"
    >
      <div className="flex h-full flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex flex-1 flex-col">
          <p className="label-mono text-accent-indigo">/ Available for collaboration</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Hi, I'm <span className="text-accent-indigo">Alex Herrerias</span>.
            <span className="block text-ink-dim">
              Working at <span className="text-ink">Fever</span> and studying
              <span className="text-ink"> data science</span> on the side.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-dim md:text-base">
            Software engineer at <span className="text-ink">Fever (Onebox TDS)</span> — a microservice
            ecosystem on Java, Spring Boot &amp; Apache Camel. Currently pursuing an{' '}
            <span className="text-ink">MSc in Data Science Engineering</span> at UNED.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton
              as="a"
              href="mailto:herreriasramireza@gmail.com"
              variant="primary"
            >
              <Mail size={16} />
              Get in touch
            </MagneticButton>
            <MagneticButton
              as="a"
              href={`${baseUrl}cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <FileText size={16} />
              Download CV
            </MagneticButton>
          </div>
        </div>

        <motion.div
          ref={tiltRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          className="relative mx-auto aspect-square w-44 shrink-0 md:w-56 lg:w-64"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-accent-indigo/30 blur-2xl" aria-hidden />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/[0.10] bg-surface shadow-[0_0_60px_-15px_rgba(99,102,241,0.5)]">
            <picture>
              <source srcSet={`${baseUrl}images/perfil.jpg`} type="image/jpeg" />
              <img
                src={`${baseUrl}images/perfil.jpg`}
                alt="Alex Herrerias"
                width={512}
                height={512}
                loading="eager"
                fetchpriority="high"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <span className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-white/[0.10] bg-surface-2 px-2.5 py-1 font-mono text-[0.65rem] text-accent-cyan">
            <Sparkles size={11} /> hello
          </span>
        </motion.div>
      </div>
    </BentoCard>
  );
}
