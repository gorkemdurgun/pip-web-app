import { PIPButton, PIPText } from "@/components";

import { MdFilterList as Filter, MdEdit as Edit, MdDelete as Delete, MdWhatsapp as Whatsapp } from "react-icons/md";

import styles from "./index.module.scss";

export const SectionPatientList: React.FC = () => {
  return (
    <div className={styles.sectionPatientList}>
      <div className={styles.actions}>
        <PIPButton className={styles.filterButton}>
          <Filter className={styles.filterIcon} />
          <PIPText className={styles.filterText} text="Sort List" />
        </PIPButton>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <PIPText className={styles.tableHeaderText} text="Name" />
          <PIPText className={styles.tableHeaderText} text="Email" />
          <PIPText className={styles.tableHeaderText} text="Phone" />
          <PIPText className={styles.tableHeaderText} text="Pet List" />
          <PIPText className={styles.tableHeaderText} text="Last Processed" />
          <PIPText className={styles.tableHeaderText} text="Action" />
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableRow}>
            <PIPText className={styles.tableRowText} text="John Doe" />
            <PIPText className={styles.tableRowText} text="johnn@mailllar.com" />
            <div className={styles.tableRowItem}>
              <PIPText className={styles.tableRowText} text="1234567890" />
              <PIPButton
                className={styles.whatsappButton}
                onClick={() => {
                  window.open("https://wa.me/1234567890", "_blank");
                }}
              >
                <Whatsapp className={styles.whatsappIcon} />
              </PIPButton>
            </div>
            <div className={styles.tableRowGroup}>
              <PIPText className={styles.tableRowText} text="Pet 1" />
              <PIPText className={styles.tableRowText} text="Pet 2" />
            </div>
            <PIPText className={styles.tableRowText} text="01/12/2023" />
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
