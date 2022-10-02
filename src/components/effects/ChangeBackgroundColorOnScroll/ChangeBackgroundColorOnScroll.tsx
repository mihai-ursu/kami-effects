import { FC, useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "./ChangeBackgroundColorOnScroll.module.scss";
import ChangeBackgroundColorOnScrollProps from "./ChangeBackgroundColorOnScrollProps";
import { useRect } from "hooks/useRect";

const ChangeBackgroundColorOnScroll: FC<ChangeBackgroundColorOnScrollProps> = (
  props
) => {
  const { children, percentageStart, percentageEnd } = props;
  const [effectStart, setEffectStart] = useState(99999);
  const [effectEnd, setEffectEnd] = useState(999999);
  const { scrollY } = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);
  const contentRect = useRect(contentRef);

  const colorBackground = useTransform(
    scrollY,
    [effectStart, effectEnd],
    [props.initialColor, props.finalColor]
  );

  return (
    <div className={styles.contentWrapper} ref={contentRef}>
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
