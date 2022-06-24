import type { NextPage } from "next";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/ColorScroll.module.scss";
import Layout from "../../components/Layout/Layout";

const ColorScroll: NextPage = () => {
  const { scrollY } = useViewportScroll();
  const colorBackground = useTransform(
    scrollY,
    [200, 600],
    ["#eff0eb", "#000"]
  );

  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.stickyHeadline}>Testing Page Color Change</h1>

        <div className={styles.backgroundWrapper}>
          <motion.div
            className={styles.background}
            style={{ backgroundColor: colorBackground }}
          />
        </div>
      </main>
    </Layout>
  );
};

export default ColorScroll;
