import IconViewer from "@/components/Shared/IconViewer/IconViewer";
import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <IconViewer name="logo" className={styles.logo} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
