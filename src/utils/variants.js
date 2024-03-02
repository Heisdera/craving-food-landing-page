export function fadeIn(direction, customDelay) {
  return {
    hidden: {
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
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

export function slideIn(direction) {
  return {
    hidden: {
      x: direction === "left" ? "-100vw" : direction === "right" ? "100vw" : 0,
      opacity: 1,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
}
