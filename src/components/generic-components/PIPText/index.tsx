import styles from "./index.module.scss";

type PIPTextProps = {
  text: string;
  translate?: boolean;
  className?: string;
};

export const PIPText: React.FC<PIPTextProps> = ({ text, translate = false, className = "" }) => {
  return <h5 className={`${styles.text} ${className}`}>{translate ? text : text}</h5>;
};
