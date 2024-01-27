import { NextPage } from "next";

import {
  MdOutlineSupervisedUserCircle as Patient,
  MdOutlineChangeCircle as TreatmentHistory,
  MdOutlinePlaylistAddCheckCircle as Receipt,
  MdOutlineNotificationsActive as SendNotification,
  MdOutlineAdd as AddNewPatient,
  MdOutlineLogout as Logout,
} from "react-icons/md";

import styles from "./index.module.scss";
import { PIPButton, PIPText } from "@/components";
import { PNG } from "@assets/images";
import Image from "next/image";
import { useState } from "react";
import { SectionPatientList, SectionTreatmentHistory } from "./sections";

const sidebarItems = [
  {
    icon: <Patient className={styles.icon} />,
    text: "Patient List",
  },
  {
    icon: <TreatmentHistory className={styles.icon} />,
    text: "Treatment History",
  },
  {
    icon: <Receipt className={styles.icon} />,
    text: "Receipts",
  },
];

export const AdminPage: NextPage = () => {
  const [selectedBarItem, setSelectedBarItem] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logoBox}>
          <PIPText className={styles.logoText} text="LARVAL Admin" />
        </div>
        <div className={styles.sidebarItems}>
          {sidebarItems.map((item, index) => (
            <PIPButton
              key={index}
              active={selectedBarItem === index}
              className={styles.sidebarItem}
              onClick={() => setSelectedBarItem(index)}
            >
              {item.icon}
              <PIPText className={styles.text} text={item.text} />
            </PIPButton>
          ))}
        </div>
        <div className={styles.quickButtons}>
          <PIPButton animatable className={styles.sidebarQuickButton}>
            <AddNewPatient className={styles.icon} />
            <PIPText className={styles.text} text="Add New Patient" />
          </PIPButton>
          <PIPButton animatable className={styles.sidebarQuickButton}>
            <SendNotification className={styles.icon} />
            <PIPText className={styles.text} text="Send Notification" />
          </PIPButton>
          <PIPButton animatable className={styles.sidebarQuickButton}>
            <Logout className={styles.icon} />
            <PIPText className={styles.text} text="Logout" />
          </PIPButton>
        </div>
      </div>
      <div className={styles.content}>
        {
          {
            0: <SectionPatientList />,
            1: <SectionTreatmentHistory />,
            2: <div>Receipts</div>,
          }[selectedBarItem]
        }
      </div>
    </div>
  );
};

export default AdminPage;
