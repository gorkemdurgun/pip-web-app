import { NextPage } from "next";

import {
  MdOutlineBuildCircle as DeviceList,
  MdOutlineGroupWork as PatientList,
  MdOutlineSupervisedUserCircle as VeterinaryList,
  MdOutlineCloudCircle as TreatmentHistory,
  MdOutlinePlaylistAddCheckCircle as Receipt,
  MdOutlineNotifications as SendNotification,
  MdOutlineAdd as AddNewPatient,
  MdOutlineLogout as Logout,
  MdSearch as Search,
  MdSettings as Settings,
} from "react-icons/md";

import styles from "./index.module.scss";
import { PIPButton, PIPText } from "@/components";
import { JPG, PNG } from "@assets/images";
import Image from "next/image";
import { useState } from "react";
import { SectionDeviceList, SectionPatientList, SectionVeterinaryList } from "./sections";

const sidebarItems = [
  {
    icon: <DeviceList className={styles.icon} />,
    text: "Device List",
  },
  {
    icon: <PatientList className={styles.icon} />,
    text: "Patient List",
  },
  {
    icon: <VeterinaryList className={styles.icon} />,
    text: "Veterinary List",
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
          <PIPText className={styles.logoText} text="LARVAL Clinic Management System" />
        </div>
        <div className={styles.sidebarItems}>
          {sidebarItems.map((item, index) => (
            <PIPButton key={index} active={selectedBarItem === index} className={styles.sidebarItem} onClick={() => setSelectedBarItem(index)}>
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
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.searchBox}>
            <input className={styles.searchInput} placeholder="Search" />
            <PIPButton className={styles.searchButton}>
              <Search className={styles.icon} />
            </PIPButton>
          </div>
          <div className={styles.profileBox}>
            <div className={styles.profileImage}>
              <Image fill src={JPG.VetClinicLogo} alt="logo" />
            </div>
            <PIPText className={styles.profileText} text="Vetopia Veterinary Clinic" />
            <PIPButton className={styles.settingsButton}>
              <Settings className={styles.icon} />
            </PIPButton>
          </div>
        </div>
        <div className={styles.content}>
          {
            {
              0: <SectionDeviceList />,
              1: <SectionPatientList />,
              2: <SectionVeterinaryList />,
              3: <div>Treatment History</div>,
              4: <div>Receipts</div>,
            }[selectedBarItem]
          }
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
