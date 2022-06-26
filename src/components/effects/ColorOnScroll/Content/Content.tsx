import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./Content.module.scss";

const Content: FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            Work for the biggest startup in the world.
          </h1>
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
