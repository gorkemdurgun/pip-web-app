import React from "react";

import styles from "./index.module.scss";
import { PIPButton, PIPText } from "@/components";

export const PIPNavbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <h5 className={styles.title}>Logo</h5>
      </div>
      <div className={styles.centerSide}>
        <h5 className={styles.text}>Home</h5>
        <h5 className={styles.text}>Features</h5>
        <h5 className={styles.text}>About Us</h5>
        <h5 className={styles.text}>Contact</h5>
      </div>
      <div className={styles.rightSide}>
        <PIPButton animatable className={styles.button}>
          <PIPText className={styles.text} text="BUY NOW" />
        </PIPButton>
      </div>
    </div>
  );
};
