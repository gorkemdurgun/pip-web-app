import React from "react";

import styles from "./index.module.scss";

type PIPDropdownProps = {
  options: Array<{
    label: string;
    value: string;
  }>;
  disabled?: boolean;
  className?: string;
  toggleClassName?: string;
  onClick?: () => void;
};

export const PIPDropdown: React.FC<PIPDropdownProps> = ({ options, disabled = false, toggleClassName = "", className = "", onClick }) => {
  return (
    <div className={`${styles.dropdown} ${className}`}>
      <select className={`${styles.dropdownToggle} ${toggleClassName}`} disabled={disabled} onClick={onClick}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
