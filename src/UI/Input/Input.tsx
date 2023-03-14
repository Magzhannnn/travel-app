import React, { FC } from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: string;
  title: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({ value, title, type, onChange, className }) => {
  let classes = styles.input;
  if (className) {
    classes = `${styles.input} ${className}`;
  }

  return (
    <input
      className={classes}
      type={type}
      placeholder={title}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
