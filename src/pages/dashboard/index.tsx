import { NextPage } from "next";

import styles from "./index.module.scss";
import { PIPButton, PIPNavbar, PIPText } from "@/components";
import { PNG } from "@assets/images";
import Image from "next/image";

const Dashboard: NextPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <PIPNavbar />
      <section className={styles.homeSection}>
        <PIPText className={styles.title} text="NEONATUS PET ICU" />
        <span className={styles.descriptionBox}>
          <PIPText
            className={styles.description}
            text="Neonatus Pet ICU is a company that provides a product that can help
          pet owners to monitor their pet's health. This product is a smart
          incubator that can monitor the pet's health and also can be used to
          help the pet's recovery process."
          />
        </span>
        <PIPButton className={styles.viewButton}>
          <PIPText className={styles.text} text="View Product" />
        </PIPButton>
        <div className={styles.videoButtonCircle}>
          <PIPButton className={styles.videoButton}>
            <PIPText className={styles.text} text="Watch Video" />
          </PIPButton>
        </div>
        <div className={styles.imageContainer}>
          <Image fill alt="Microvawe Landing" src={PNG.Microvawe_Landing} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
