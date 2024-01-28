import { PIPButton, PIPDropdown, PIPText } from "@/components";

import { MdFilterList as Filter, MdEdit as Edit, MdDelete as Delete, MdWhatsapp as Whatsapp } from "react-icons/md";

import { VscChevronRight as View, VscRemote as Swap, VscReply as Discharge } from "react-icons/vsc";

import styles from "./index.module.scss";
import { JPG, PNG } from "@assets/images";
import Image from "next/image";

export const SectionDeviceList: React.FC = () => {
  return (
    <div className={styles.sectionDeviceList}>
      <div className={styles.header}>
        <div className={styles.titleSide}>
          <PIPText className={styles.title} text="Device List" />
          <PIPText className={styles.subtitle} text="View streaming devices and manage them" />
        </div>
        <div className={styles.actionSide}>
          <PIPButton className={styles.filterButton}>
            <Filter className={styles.filterIcon} />
            <PIPText className={styles.filterText} text="Sort List" />
          </PIPButton>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.deviceItem}>
          <div className={styles.deviceLogo}>
            <Image src={PNG.PetIcuExample} alt="Device Logo" />
          </div>
          <div className={styles.deviceInformations}>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device ID" />
              <PIPText className={styles.informationValue} text="1234567890" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device Name" />
              <PIPText className={styles.informationValue} text="LARVAL 230LT" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Guaranatee End Date" />
              <PIPText className={styles.informationValue} text="01/12/2023" />
            </span>
          </div>
          <div className={styles.deviceStates}>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Status" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Active",
                    value: "active",
                  },
                  {
                    label: "Inactive",
                    value: "inactive",
                  },
                ]}
              />
            </span>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Patient" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Patient 1 Linda",
                    value: "patient1",
                  },
                  {
                    label: "Patient 2 Tommi",
                    value: "patient2",
                  },
                ]}
              />
            </span>
          </div>
          <div className={styles.deviceActions}>
            <PIPButton className={styles.actionButton}>
              <View className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Watch Device" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Swap className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Change Patient" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Discharge className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="End Treatment" />
            </PIPButton>
          </div>
        </div>
        <div className={styles.deviceItem}>
          <div className={styles.deviceLogo}>
            <Image src={PNG.PetIcuExample} alt="Device Logo" />
          </div>
          <div className={styles.deviceInformations}>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device ID" />
              <PIPText className={styles.informationValue} text="1234567890" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device Name" />
              <PIPText className={styles.informationValue} text="LARVAL 230LT" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Guaranatee End Date" />
              <PIPText className={styles.informationValue} text="01/12/2023" />
            </span>
          </div>
          <div className={styles.deviceStates}>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Status" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Active",
                    value: "active",
                  },
                  {
                    label: "Inactive",
                    value: "inactive",
                  },
                ]}
              />
            </span>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Patient" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Patient 1 Linda",
                    value: "patient1",
                  },
                  {
                    label: "Patient 2 Tommi",
                    value: "patient2",
                  },
                ]}
              />
            </span>
          </div>
          <div className={styles.deviceActions}>
            <PIPButton className={styles.actionButton}>
              <View className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Watch Device" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Swap className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Change Patient" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Discharge className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="End Treatment" />
            </PIPButton>
          </div>
        </div>
        <div className={styles.deviceItem}>
          <div className={styles.deviceLogo}>
            <Image src={PNG.PetIcuExample} alt="Device Logo" />
          </div>
          <div className={styles.deviceInformations}>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device ID" />
              <PIPText className={styles.informationValue} text="1234567890" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device Name" />
              <PIPText className={styles.informationValue} text="LARVAL 230LT" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Guaranatee End Date" />
              <PIPText className={styles.informationValue} text="01/12/2023" />
            </span>
          </div>
          <div className={styles.deviceStates}>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Status" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Active",
                    value: "active",
                  },
                  {
                    label: "Inactive",
                    value: "inactive",
                  },
                ]}
              />
            </span>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Patient" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Patient 1 Linda",
                    value: "patient1",
                  },
                  {
                    label: "Patient 2 Tommi",
                    value: "patient2",
                  },
                ]}
              />
            </span>
          </div>
          <div className={styles.deviceActions}>
            <PIPButton className={styles.actionButton}>
              <View className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Watch Device" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Swap className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Change Patient" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Discharge className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="End Treatment" />
            </PIPButton>
          </div>
        </div>
        <div className={styles.deviceItem}>
          <div className={styles.deviceLogo}>
            <Image src={PNG.PetIcuExample} alt="Device Logo" />
          </div>
          <div className={styles.deviceInformations}>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device ID" />
              <PIPText className={styles.informationValue} text="1234567890" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Device Name" />
              <PIPText className={styles.informationValue} text="LARVAL 230LT" />
            </span>
            <span className={styles.information}>
              <PIPText className={styles.informationLabel} text="Guaranatee End Date" />
              <PIPText className={styles.informationValue} text="01/12/2023" />
            </span>
          </div>
          <div className={styles.deviceStates}>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Status" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Active",
                    value: "active",
                  },
                  {
                    label: "Inactive",
                    value: "inactive",
                  },
                ]}
              />
            </span>
            <span className={styles.action}>
              <PIPText className={styles.actionLabel} text="Patient" />
              <PIPDropdown
                disabled
                className={styles.actionDropdown}
                options={[
                  {
                    label: "Patient 1 Linda",
                    value: "patient1",
                  },
                  {
                    label: "Patient 2 Tommi",
                    value: "patient2",
                  },
                ]}
              />
            </span>
          </div>
          <div className={styles.deviceActions}>
            <PIPButton className={styles.actionButton}>
              <View className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Watch Device" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Swap className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="Change Patient" />
            </PIPButton>
            <PIPButton className={styles.actionButton}>
              <Discharge className={styles.actionIcon} />
              <PIPText className={styles.actionText} text="End Treatment" />
            </PIPButton>
          </div>
        </div>
      </div>
    </div>
  );
};
