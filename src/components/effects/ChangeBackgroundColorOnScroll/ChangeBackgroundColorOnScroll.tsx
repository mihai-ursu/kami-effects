import { FC } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "./ChangeBackgroundColorOnScroll.module.scss";
import ChangeBackgroundColorOnScrollProps from "./ChangeBackgroundColorOnScrollProps";

const ChangeBackgroundColorOnScroll: FC<ChangeBackgroundColorOnScrollProps> = (
  props
) => {
  const { children } = props;
  const { scrollY } = useScroll();
  const colorBackground = useTransform(
    scrollY,
    [200, 600],
    [props.initialColor, props.finalColor]
  );

  return (
    <div className={styles.contentWrapper}>
      {children}
      <div className={styles.backgroundWrapper}>
        <motion.div
          className={styles.background}
          style={{ backgroundColor: colorBackground }}
        />
      </div>
    </div>
  );
};

export default ChangeBackgroundColorOnScroll;
