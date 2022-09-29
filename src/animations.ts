import { Variants } from "framer-motion";

export const pageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const titleAnimation: Variants = {
  hidden: {
    y: 300,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeAnimation: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const photoAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const lineAnimation: Variants = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const slideAnimation: Variants = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};
