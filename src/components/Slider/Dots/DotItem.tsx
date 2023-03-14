import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToSlide } from "../../../store/slider/slider-actions";
import { selectSliderNumber } from "../../../store/slider/slider-selectors";
import styles from "./Dots.module.css";

interface DotItemProps {
  number: number;
}

const DotItem: FC<DotItemProps> = ({ number }) => {
  const dispatch: any = useDispatch();
  const slideNumber = useSelector(selectSliderNumber);

  const classes = `${styles.dot_item} ${
    slideNumber === number ? styles.activate : ""
  }`;

  return (
    <div className={classes} onClick={() => dispatch(goToSlide(number))} />
  );
};

export default DotItem;
