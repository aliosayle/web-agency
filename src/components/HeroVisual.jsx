import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroVisual.css';

const floatTransition = {
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 4,
  ease: 'easeInOut',
};

const orbVariants = {
  one: {
    x: [0, 24, -12, 0],
    y: [0, -30, 20, 0],
    scale: [1, 1.08, 0.98, 1],
    transition: { ...floatTransition, duration: 18 },
  },
  two: {
    x: [0, -20, 15, 0],
    y: [0, 25, -15, 0],
    scale: [1, 0.95, 1.05, 1],
    transition: { ...floatTransition, duration: 22 },
  },
  three: {
    x: [0, 15, -25, 0],
    y: [0, -20, 30, 0],
    scale: [1, 1.03, 0.97, 1],
    transition: { ...floatTransition, duration: 20 },
  },
};

const cardStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardFloatY = [0, -6];
const cardFloatTransition = (stagger = 0) => ({
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 5,
  ease: 'easeInOut',
  delay: 1 + stagger,
});

export default function HeroVisual() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Animated gradient orbs */}
      <motion.div
        className="hero-orb hero-orb-1"
        variants={orbVariants}
        animate={reduceMotion ? false : 'one'}
      />
      <motion.div
        className="hero-orb hero-orb-2"
        variants={orbVariants}
        animate={reduceMotion ? false : 'two'}
      />
      <motion.div
        className="hero-orb hero-orb-3"
        variants={orbVariants}
        animate={reduceMotion ? false : 'three'}
      />

      {/* Subtle grid behind bento */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Bento grid of glass cards */}
      <div className="hero-bento">
        <motion.div
          className="hero-card hero-card-main"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardStagger}
          animate={reduceMotion ? {} : { y: cardFloatY }}
          transition={reduceMotion ? {} : cardFloatTransition(0)}
        >
          <div className="hero-card-chrome">
            <span /><span /><span />
          </div>
          <div className="hero-card-content">
            <div className="hero-card-line hero-card-title" />
            <div className="hero-card-line" />
            <div className="hero-card-line hero-card-short" />
            <div className="hero-card-line hero-card-short" />
            <div className="hero-card-cta" />
          </div>
        </motion.div>

        <motion.div
          className="hero-card hero-card-sm"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardStagger}
          animate={reduceMotion ? {} : { y: cardFloatY }}
          transition={reduceMotion ? {} : cardFloatTransition(0.4)}
        >
          <div className="hero-card-dots">
            <span /><span /><span /><span /><span />
          </div>
        </motion.div>

        <motion.div
          className="hero-card hero-card-sm hero-card-bar"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardStagger}
          animate={reduceMotion ? {} : { y: cardFloatY }}
          transition={reduceMotion ? {} : cardFloatTransition(0.8)}
        >
          <div className="hero-card-progress" />
        </motion.div>
      </div>
    </div>
  );
}
