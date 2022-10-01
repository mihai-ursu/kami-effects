import type { NextPage } from "next";
import styles from "styles/ColorScrollPage.module.scss";
import Layout from "components/Layout/Layout";
import ColorBackground from "@/components/Effects/ChangeBackgroundColorOnScroll/ChangeBackgroundColorOnScroll";
import Content from "@/components/Content/ColorOnScroll/Content";

const ColorScrollPage: NextPage = () => {
  return (
    <Layout>
      <ColorBackground initialColor="#fff" finalColor="#000">
        <main className={styles.main}>
          <Content />
        </main>
      </ColorBackground>
    </Layout>
  );
};

export default ColorScrollPage;
