import type { NextPage } from "next";

import styles from "styles/ColorScroll.module.scss";
import Layout from "components/Layout/Layout";
import ColorBackground from "@/components/effects/ColorBackground/ColorBackground";

const ColorScrollPage: NextPage = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.stickyHeadline}>Testing Page Color Change</h1>

        <ColorBackground />
      </main>
    </Layout>
  );
};

export default ColorScrollPage;
