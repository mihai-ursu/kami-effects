import { FunctionComponent } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import styles from "./ColorBackground.module.scss";

const ColorBackground: FunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  const colorBackground = useTransform(scrollY, [200, 600], ["#fff", "#000"]);

  return (
    <div className={styles.backgroundWrapper}>
      <motion.div
        className={styles.background}
        style={{ backgroundColor: colorBackground }}
      />
    </div>
  );
};

export default ColorBackground;
