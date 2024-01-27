import React from "react";

import styles from "./index.module.scss";

type PIPButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  animatable?: boolean;
  className?: string;
  onClick?: () => void;
};

export const PIPButton: React.FC<PIPButtonProps> = ({
  children,
  animatable = false,
  active = false,
  disabled = false,
  className = "",
  onClick,
}) => {
  return (
    <button
      data-animatable={animatable}
      aria-pressed={active}
      aria-disabled={disabled}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
