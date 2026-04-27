import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export default function BentoGrid({ children }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid auto-rows-[minmax(120px,auto)] grid-cols-1 gap-4 md:grid-cols-6 md:gap-5 lg:grid-cols-12"
    >
      {children}
    </motion.section>
  );
}
