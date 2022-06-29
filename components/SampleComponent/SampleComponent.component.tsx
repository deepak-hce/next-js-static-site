import type { ReactElement } from "react";
import styles from "./SampleComponent.module.css";

const SampleComponent = (): ReactElement => {
  return (
    <div className={styles.container}>
      <h1> This is sample reusable component. </h1>
    </div>
  );
};

export default SampleComponent;
