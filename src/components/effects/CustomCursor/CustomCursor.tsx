import { FunctionComponent, useEffect, useState } from "react";
import CustomCursorProps from "./CustomCursorProps";
import styles from "./CustomCursor.module.scss";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const CustomCursor: FunctionComponent<CustomCursorProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const onMouseMove = (e: MouseEvent) => {
    cursorX.set(e.clientX - 30);
    cursorY.set(e.clientY - 30);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={styles.customCursor}
      />
      {children}
    </div>
  );
};

export default CustomCursor;
