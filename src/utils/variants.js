export function fadeIn(direction, customDelay) {
  return {
    hidden: {
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: customDelay,
        ease: "linear",
      },
    },
    scale: {
      x: 0,
      y: 0,
      scale: 3,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        delay: customDelay,
        ease: "linear",
      },
    },
  };
}

export function populate(i) {
  return {
    hidden: {
      x: 30,
      y: 30,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i / 10,
        type: "tween",
        ease: "linear",
      },
    },
  };
}

export const menuSlide = {
  hidden: {
    x: "100vw",
    height: "100dvh",
  },
  visible: {
    x: 0,
    height: "100dvh",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100vw",
    height: "100dvh",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function slide(i) {
  return {
    hidden: {
      x: 40,
      opacity: 0.4,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        stiffness: 100,
        delay: i / 5,
      },
    },
    exit: {
      x: 20,
      opacity: 0.2,
      transition: {
        type: "spring",
        duration: 0.4,
        stiffness: 100,
        delay: i / 10,
      },
    },
  };
}

export const pop = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.3,
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.6,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};
