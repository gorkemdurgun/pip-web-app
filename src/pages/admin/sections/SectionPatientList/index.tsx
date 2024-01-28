import { PIPButton, PIPText } from "@/components";

import { MdFilterList as Filter, MdEdit as Edit, MdDelete as Delete, MdWhatsapp as Whatsapp } from "react-icons/md";

import styles from "./index.module.scss";

export const SectionPatientList: React.FC = () => {
  function calculateAge(birthday: string) {
    const birthdayDate = new Date(birthday);
    const ageDifMs = Date.now() - birthdayDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
  }

  return (
    <div className={styles.sectionPatientList}>
      <div className={styles.header}>
        <div className={styles.titleSide}>
          <PIPText className={styles.title} text="Patient List" />
          <PIPText className={styles.subtitle} text="Manage your patients" />
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
          <PIPText className={styles.tableHeaderText} text="Animal ID" />
          <PIPText className={styles.tableHeaderText} text="Pet Name" />
          <PIPText className={styles.tableHeaderText} text="Pet Class" />
          <PIPText className={styles.tableHeaderText} text="Pet Type" />
          <PIPText className={styles.tableHeaderText} text="Pet Gender" />
          <PIPText className={styles.tableHeaderText} text="Current Age" />
          <PIPText className={styles.tableHeaderText} text="Current Weight" />
          <PIPText className={styles.tableHeaderText} text="Owner" />
          <PIPText className={styles.tableHeaderText} text="" />
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableRow}>
            <PIPText className={styles.tableRowText} text="#1234567890" />
            <PIPText className={styles.tableRowText} text="Linda" />
            <PIPText className={styles.tableRowText} text="Dog" />
            <PIPText className={styles.tableRowText} text="Pug" />
            <PIPText className={styles.tableRowText} text="Male" />
            <PIPText className={styles.tableRowText} text={calculateAge("2018-01-01")} />
            <PIPText className={styles.tableRowText} text="5.7" />
            <div className={styles.tableRowItem}>
              <PIPText className={styles.tableRowText} text="John Doe" />
              <PIPButton
                className={styles.whatsappButton}
                onClick={() => {
                  window.open("https://wa.me/1234567890", "_blank");
                }}
              >
                <Whatsapp className={styles.whatsappIcon} />
              </PIPButton>
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
