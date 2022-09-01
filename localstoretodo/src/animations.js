export const dangerAnim = {
    hidden: {
        opacity: 0,
        y: -100,
      },
      show: {
        opacity: 0.7,
        y: 0,
        transition: {
          duration: 1,
          when: "beforeChildren",
          staggerChildren: 0.25,
        },
      },
      exit: {
        opacity: 0,
        y: -100,
        transition: {
          duration: 0.5,
        },
      },
}