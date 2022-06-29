import CustomCursor from "@/components/effects/CustomCursor/CustomCursor";
import Layout from "@/components/Layout/Layout";
import type { NextPage } from "next";
import styles from "styles/CustomCursorPage.module.scss";

const CustomCursorPage: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.content}>
          <CustomCursor>
            <div className={styles.jobOffers}>
              <a href="#" className={styles.offer}>
                <h3>Frontend Developer</h3>
                <p className={styles.location}>Munich, Germany</p>
              </a>
              <a href="#" className={styles.offer}>
                <h3>Frontend Developer</h3>
                <p className={styles.location}>Munich, Germany</p>
              </a>
              <a href="#" className={styles.offer}>
                <h3>Frontend Developer</h3>
                <p className={styles.location}>Munich, Germany</p>
              </a>
              <a href="#" className={styles.offer}>
                <h3>Frontend Developer</h3>
                <p className={styles.location}>Munich, Germany</p>
              </a>
            </div>
          </CustomCursor>
        </div>
      </main>
    </Layout>
  );
};

export default CustomCursorPage;
