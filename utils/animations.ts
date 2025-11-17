// Utility functions for animations
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number = 0) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (direction: string = "up", delay: number = 0, duration: number = 1.25) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export const zoomIn = (delay: number = 0, duration: number = 1.25) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction: string = "left", delay: number = 0, duration: number = 1.25) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});