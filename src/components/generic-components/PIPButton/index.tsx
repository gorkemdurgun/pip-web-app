import React from "react";

import styles from "./index.module.scss";

type PIPButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  animatable?: boolean;
  className?: string;
  onClick?: () => void;
};

export const PIPButton: React.FC<PIPButtonProps> = ({ children, animatable = false, disabled = false, className = "", onClick }) => {
  return (
    <button data-animatable={animatable} aria-disabled={disabled} className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
