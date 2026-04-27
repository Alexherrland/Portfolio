import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const accentByName = {
  indigo: 'indigo',
  cyan: 'cyan',
};

export default function BentoCard({
  children,
  className = '',
  span = '',
  accent = 'none',
  as: Tag = 'article',
  ...rest
}) {
  const accentAttr = accentByName[accent] ?? null;
  return (
    <motion.div variants={itemVariants} className={span}>
      <Tag
        data-accent={accentAttr ?? undefined}
        className={`bento-card h-full ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
