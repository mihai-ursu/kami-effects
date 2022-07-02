import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./Content.module.scss";
import { motion } from "framer-motion";
import AnimatedArrow from "./AnimatedArrow/AnimatedArrow";

const Content: FunctionComponent = () => {
  const variants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.leftColumn}>
          <div className={styles.textTop}>
            <span className={styles.titleWrapper}>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }}
                className={styles.title}
              >
                Color change
              </motion.h1>
            </span>
            <span className={styles.titleWrapper}>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
                className={styles.title}
              >
                On Scroll
              </motion.h1>
            </span>
            <AnimatedArrow arrowClass={styles.arrow} />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/student-with-book.jpg"
              width={400}
              height={600}
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            sapiente distinctio iusto fuga nihil qui itaque neque enim eaque nam
            perspiciatis est quo ratione earum facilis dolores velit ipsa
            corrupti. Necessitatibus quaerat consectetur rem est! Beatae sit
            perferendis eveniet, repellat delectus accusamus doloribus sed?
            Explicabo quam facilis perferendis quas, corporis rem architecto
            nulla at adipisci cum quidem ducimus possimus voluptas.
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.leftColumn}>
          <h2 className={styles.quote}>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            commodi natus alias repellendus doloribus tempora rerum consectetur
            voluptatibus, laborum sint laboriosam molestias consequuntur quis
            reprehenderit voluptas repellat provident optio itaque? Voluptates
            necessitatibus vero autem error provident asperiores fuga quaerat
            quis quo aspernatur, minus voluptatibus accusantium tempora ipsam ab
            eaque eius quod quam culpa perspiciatis! Excepturi optio aliquam
            quia veritatis! Laudantium!"
          </h2>
          <p className={styles.author}> • Laura, Amsterdam</p>
        </div>

        <div className={`${styles.rightColumn} ${styles.imageRight}`}>
          <Image src="/images/laura.jpg" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Content;
