import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
