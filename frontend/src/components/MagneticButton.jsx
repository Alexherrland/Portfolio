import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  as: Tag = 'button',
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    x.set(Math.max(-1, Math.min(1, dx)) * 8);
    y.set(Math.max(-1, Math.min(1, dy)) * 8);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium text-sm transition-colors duration-200';
  const variants = {
    primary:
      'bg-accent-indigo text-white px-5 py-2.5 shadow-[0_0_30px_-10px_rgba(99,102,241,0.6)] hover:bg-accent-indigo/90',
    ghost:
      'border border-white/[0.12] bg-white/[0.03] text-ink px-5 py-2.5 hover:border-white/[0.20] hover:bg-white/[0.06]',
  };

  const MotionTag = motion[Tag] ?? motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant] ?? variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
