import React, { FC } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  const classes = `${styles.container} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Container;
