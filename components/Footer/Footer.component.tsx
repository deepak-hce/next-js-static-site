import type { ReactElement } from "react";
import styles from "./Footer.module.css";

const Footer = (): ReactElement => {
  return (
    <div className={styles.container}>
      <h1> This is footer component. </h1>
    </div>
  );
};

export default Footer;
