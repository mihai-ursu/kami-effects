import Link from "next/link";
import { FC } from "react";
import styles from "./Card.module.scss";
import CardProps from "./CardProps";

const Card: FC<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <Link href={props.url}>
        <a>{props.name}</a>
      </Link>
    </div>
  );
};

export default Card;
