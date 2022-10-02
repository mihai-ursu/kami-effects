import type { NextPage } from "next";
import styles from "styles/ColorScrollPage.module.scss";
import Layout from "components/Layout/Layout";
import ColorBackground from "@/components/Effects/ChangeBackgroundColorOnScroll/ChangeBackgroundColorOnScroll";
import Content from "@/components/Content/ColorOnScroll/Content";

const ColorScrollPage: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <ColorBackground
          initialColor="#fff"
          finalColor="#000"
          percentageStart={30}
          percentageEnd={55}
        >
          <Content />
        </ColorBackground>
      </main>
    </Layout>
  );
};

export default ColorScrollPage;
