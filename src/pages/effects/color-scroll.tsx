import type { NextPage } from "next";
import styles from "styles/ColorScrollPage.module.scss";
import Layout from "components/Layout/Layout";
import ColorBackground from "@/components/effects/ColorBackgroundOnScroll/ColorBackgroundOnScroll";
import Content from "@/components/content/ColorOnScroll/Content";

const ColorScrollPage: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <Content />
        <ColorBackground />
      </main>
    </Layout>
  );
};

export default ColorScrollPage;
