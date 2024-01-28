import { PIPButton, PIPText } from "@/components";

import { MdFilterList as Filter, MdEdit as Edit, MdDelete as Delete, MdWhatsapp as Whatsapp } from "react-icons/md";

import styles from "./index.module.scss";
import { JPG } from "@assets/images";
import Image from "next/image";

export const SectionVeterinaryList: React.FC = () => {
  return (
    <div className={styles.sectionPatientList}>
      <div className={styles.header}>
        <div className={styles.titleSide}>
          <PIPText className={styles.title} text="Veterinary List" />
          <PIPText className={styles.subtitle} text="Edit your teammates in your clinic" />
        </div>
        <div className={styles.actionSide}>
          <PIPButton className={styles.filterButton}>
            <Filter className={styles.filterIcon} />
            <PIPText className={styles.filterText} text="Sort List" />
          </PIPButton>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <PIPText className={styles.tableHeaderText} text="Profile Picture" />
          <PIPText className={styles.tableHeaderText} text="Name" />
          <PIPText className={styles.tableHeaderText} text="Speciality" />
          <PIPText className={styles.tableHeaderText} text="Process Count" />
          <PIPText className={styles.tableHeaderText} text="Created At" />
          <PIPText className={styles.tableHeaderText} text="Role" />
          <PIPText className={styles.tableHeaderText} text="" />
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableRow}>
            <div className={styles.tableRowPhoto}>
              <Image src={JPG.VetProfilePhoto} alt="Vet Profile Photo" />
            </div>
            <PIPText className={styles.tableRowText} text="Dr. Batsy" />
            <PIPText className={styles.tableRowText} text="Surgery Specialist" />
            <PIPText className={styles.tableRowText} text="14 Process" />
            <PIPText className={styles.tableRowText} text="01/12/2023" />
            <div className={styles.tableRowGroup}>
              <PIPText className={styles.tableRowText} text="Admin" />
              <PIPText className={styles.tableRowText} text="(jdrbatsy96@maili.com)" />
            </div>
            <div className={styles.tableRowAction}>
              <PIPButton className={styles.editButton}>
                <Edit className={styles.editIcon} />
              </PIPButton>
              <PIPButton className={styles.deleteButton}>
                <Delete className={styles.deleteIcon} />
              </PIPButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
