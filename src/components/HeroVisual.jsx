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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardFloatY = [0, -6];
const cardFloatTransition = {
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 5,
  ease: 'easeInOut',
  delay: 1,
};

// Sophisticated component animations with diverse styles
const componentConfigs = {
  header: {
    delay: 0,
    duration: 0.45,
    initial: { x: -120, y: -30, opacity: 0, rotate: -12, scale: 0.6 },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      }
    },
    ease: [0.68, -0.55, 0.265, 1.55], // Back ease
  },
  heroTitle: {
    delay: 0.15,
    duration: 0.5,
    initial: { 
      x: 180, 
      y: -40, 
      opacity: 0, 
      rotate: 15, 
      scale: 0.4,
      filter: "blur(8px)",
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: 1,
      filter: "blur(0px)",
    },
    ease: [0.34, 1.56, 0.64, 1], // Elastic
  },
  heroSubtitle: {
    delay: 0.35,
    duration: 0.4,
    initial: { 
      x: -100, 
      y: 30, 
      opacity: 0, 
      scale: 0.7,
      filter: "blur(4px)",
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
    },
    ease: [0.25, 0.46, 0.45, 0.94], // Ease out quad
  },
  heroButton: {
    delay: 0.55,
    duration: 0.4,
    initial: { 
      x: 140, 
      y: 60, 
      opacity: 0, 
      rotate: 20, 
      scale: 0.3,
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: [0.3, 1.15, 1], // Bounce effect
    },
    ease: [0.68, -0.6, 0.32, 1.6], // Strong back
  },
  contentLine1: {
    delay: 0.75,
    duration: 0.35,
    initial: { 
      opacity: 0, 
      scaleX: 0,
      x: -20,
    },
    animate: { 
      opacity: 1, 
      scaleX: 1,
      x: 0,
    },
    ease: [0.22, 1, 0.36, 1], // Ease out cubic
  },
  contentLine2: {
    delay: 0.88,
    duration: 0.35,
    initial: { 
      opacity: 0, 
      scaleX: 0,
      x: 20,
    },
    animate: { 
      opacity: 1, 
      scaleX: 1,
      x: 0,
    },
    ease: [0.22, 1, 0.36, 1],
  },
  contentLine3: {
    delay: 1.0,
    duration: 0.35,
    initial: { 
      opacity: 0, 
      scaleX: 0,
      x: -15,
    },
    animate: { 
      opacity: 1, 
      scaleX: 1,
      x: 0,
    },
    ease: [0.22, 1, 0.36, 1],
  },
  card1: {
    delay: 1.2,
    duration: 0.5,
    initial: { 
      x: -200, 
      y: 150, 
      opacity: 0, 
      rotate: -25, 
      scale: 0.2,
      filter: "blur(6px)",
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: 1,
      filter: "blur(0px)",
    },
    ease: [0.34, 1.56, 0.64, 1], // Elastic
  },
  card2: {
    delay: 1.35,
    duration: 0.5,
    initial: { 
      x: 0, 
      y: 200, 
      opacity: 0, 
      rotate: 10, 
      scale: 0.2,
      filter: "blur(6px)",
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: [0.2, 1.1, 1], // Bounce
      filter: "blur(0px)",
    },
    ease: [0.68, -0.6, 0.32, 1.6], // Back
  },
  card3: {
    delay: 1.5,
    duration: 0.5,
    initial: { 
      x: 200, 
      y: 150, 
      opacity: 0, 
      rotate: 25, 
      scale: 0.2,
      filter: "blur(6px)",
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: 1,
      filter: "blur(0px)",
    },
    ease: [0.34, 1.56, 0.64, 1], // Elastic
  },
};

export default function HeroVisual() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Play animation once on mount
  useEffect(() => {
    if (!reduceMotion) {
      const timer = setTimeout(() => {
        setHasPlayed(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [reduceMotion]);

  const handleClick = () => {
    if (reduceMotion) return;
    setAnimationKey(prev => prev + 1);
  };

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

      {/* Subtle grid behind card */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Single large card with animated lines */}
      <motion.div
        className="hero-card hero-card-single"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={cardVariants}
        animate={reduceMotion ? {} : { y: cardFloatY }}
        transition={reduceMotion ? {} : cardFloatTransition}
        onClick={handleClick}
        style={{ cursor: hasPlayed && !reduceMotion ? 'pointer' : 'default' }}
      >
        <div className="hero-card-chrome">
          <span /><span /><span />
        </div>
        <div className="hero-website-container" key={animationKey}>
          {/* Header/Navbar */}
          <motion.div
            className="hero-website-header"
            initial={componentConfigs.header.initial}
            animate={reduceMotion ? componentConfigs.header.initial : (hasPlayed || animationKey > 0 ? componentConfigs.header.animate : componentConfigs.header.initial)}
            transition={componentConfigs.header.animate.transition || {
              delay: componentConfigs.header.delay,
              duration: componentConfigs.header.duration,
              ease: componentConfigs.header.ease,
            }}
            key={`header-${animationKey}`}
          >
            <div className="hero-nav-logo" />
            <div className="hero-nav-menu">
              <span /><span /><span />
            </div>
          </motion.div>

          {/* Hero Section */}
          <div className="hero-website-hero">
            <motion.div
              className="hero-title-line"
              initial={componentConfigs.heroTitle.initial}
              animate={reduceMotion ? componentConfigs.heroTitle.initial : (hasPlayed || animationKey > 0 ? componentConfigs.heroTitle.animate : componentConfigs.heroTitle.initial)}
              transition={{
                delay: componentConfigs.heroTitle.delay,
                duration: componentConfigs.heroTitle.duration,
                ease: componentConfigs.heroTitle.ease,
              }}
            />
            <motion.div
              className="hero-subtitle-line"
              initial={componentConfigs.heroSubtitle.initial}
              animate={reduceMotion ? componentConfigs.heroSubtitle.initial : (hasPlayed || animationKey > 0 ? componentConfigs.heroSubtitle.animate : componentConfigs.heroSubtitle.initial)}
              transition={{
                delay: componentConfigs.heroSubtitle.delay,
                duration: componentConfigs.heroSubtitle.duration,
                ease: componentConfigs.heroSubtitle.ease,
              }}
            />
            <motion.div
              className="hero-cta-button"
              initial={componentConfigs.heroButton.initial}
              animate={reduceMotion ? componentConfigs.heroButton.initial : (hasPlayed || animationKey > 0 ? componentConfigs.heroButton.animate : componentConfigs.heroButton.initial)}
              transition={{
                delay: componentConfigs.heroButton.delay,
                duration: componentConfigs.heroButton.duration,
                ease: componentConfigs.heroButton.ease,
              }}
            />
          </div>

          {/* Content Lines */}
          <div className="hero-content-lines">
            <motion.div
              className="hero-content-line"
              initial={componentConfigs.contentLine1.initial}
              animate={reduceMotion ? componentConfigs.contentLine1.initial : (hasPlayed || animationKey > 0 ? componentConfigs.contentLine1.animate : componentConfigs.contentLine1.initial)}
              transition={{
                delay: componentConfigs.contentLine1.delay,
                duration: componentConfigs.contentLine1.duration,
                ease: componentConfigs.contentLine1.ease,
              }}
              style={{ transformOrigin: 'left' }}
            />
            <motion.div
              className="hero-content-line hero-content-line-short"
              initial={componentConfigs.contentLine2.initial}
              animate={reduceMotion ? componentConfigs.contentLine2.initial : (hasPlayed || animationKey > 0 ? componentConfigs.contentLine2.animate : componentConfigs.contentLine2.initial)}
              transition={{
                delay: componentConfigs.contentLine2.delay,
                duration: componentConfigs.contentLine2.duration,
                ease: componentConfigs.contentLine2.ease,
              }}
              style={{ transformOrigin: 'left' }}
            />
            <motion.div
              className="hero-content-line hero-content-line-short"
              initial={componentConfigs.contentLine3.initial}
              animate={reduceMotion ? componentConfigs.contentLine3.initial : (hasPlayed || animationKey > 0 ? componentConfigs.contentLine3.animate : componentConfigs.contentLine3.initial)}
              transition={{
                delay: componentConfigs.contentLine3.delay,
                duration: componentConfigs.contentLine3.duration,
                ease: componentConfigs.contentLine3.ease,
              }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Feature Cards */}
          <div className="hero-feature-cards">
            <motion.div
              className="hero-feature-card"
              initial={componentConfigs.card1.initial}
              animate={reduceMotion ? componentConfigs.card1.initial : (hasPlayed || animationKey > 0 ? componentConfigs.card1.animate : componentConfigs.card1.initial)}
              transition={{
                delay: componentConfigs.card1.delay,
                duration: componentConfigs.card1.duration,
                ease: componentConfigs.card1.ease,
              }}
            >
              <div className="hero-card-icon" />
              <div className="hero-card-line-small" />
              <div className="hero-card-line-small hero-card-line-shorter" />
            </motion.div>
            <motion.div
              className="hero-feature-card"
              initial={componentConfigs.card2.initial}
              animate={reduceMotion ? componentConfigs.card2.initial : (hasPlayed || animationKey > 0 ? componentConfigs.card2.animate : componentConfigs.card2.initial)}
              transition={{
                delay: componentConfigs.card2.delay,
                duration: componentConfigs.card2.duration,
                ease: componentConfigs.card2.ease,
              }}
            >
              <div className="hero-card-icon" />
              <div className="hero-card-line-small" />
              <div className="hero-card-line-small hero-card-line-shorter" />
            </motion.div>
            <motion.div
              className="hero-feature-card"
              initial={componentConfigs.card3.initial}
              animate={reduceMotion ? componentConfigs.card3.initial : (hasPlayed || animationKey > 0 ? componentConfigs.card3.animate : componentConfigs.card3.initial)}
              transition={{
                delay: componentConfigs.card3.delay,
                duration: componentConfigs.card3.duration,
                ease: componentConfigs.card3.ease,
              }}
            >
              <div className="hero-card-icon" />
              <div className="hero-card-line-small" />
              <div className="hero-card-line-small hero-card-line-shorter" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
