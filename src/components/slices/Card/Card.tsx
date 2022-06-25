import Link from "next/link";
import { FC } from "react";
import styles from "./Card.module.scss";

const Card: FC = (props) => {
  return (
    <div className={styles.card}>
      <Link href={props.url}>
        <a>{props.name}</a>
      </Link>
    </div>
  );
};

export default Card;
