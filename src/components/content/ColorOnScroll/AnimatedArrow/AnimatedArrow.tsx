import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedArrow.module.scss";
import AnimatedArrowProps from "./AnimatedArrowProps";

const AnimatedArrow: FunctionComponent<AnimatedArrowProps> = ({
  arrowClass,
}) => {
  const variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.66 50.13"
      className={`${styles.arrow} ${arrowClass}`}
    >
      <g>
        <motion.line
          className={styles.line}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            ease: [0.6, 0.01, -0.05, 0.95],
            delay: 0.6,
          }}
          x1="11.33"
          y1="3.4"
          x2="11.33"
          y2="46.73"
        />
        <motion.line
          className={styles.line}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            ease: [0.6, 0.01, -0.05, 0.95],
            delay: 1.2,
          }}
          x1="11.33"
          y1="46.73"
          x2="19.43"
          y2="38.62"
        />
        <motion.line
          className={styles.line}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            ease: [0.6, 0.01, -0.05, 0.95],
            delay: 1.2,
          }}
          x1="11.33"
          y1="46.73"
          x2="3.22"
          y2="38.62"
        />
      </g>
    </svg>
  );
};

export default AnimatedArrow;
