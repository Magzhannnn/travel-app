import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSliderNumber } from "../../store/slider/slider-selectors";
import { ISlider } from "../../types/slider";
import styles from "./Slider.module.css";

interface SliderItemProps {
  data: ISlider;
  number: number;
}

const SliderItem: FC<SliderItemProps> = ({ data, number }) => {
  const slideNumber = useSelector(selectSliderNumber);

  const classes = `${styles[`slider-center_${data.img}`]} ${
    slideNumber === number ? styles.selected : ""
  }`;

  return <div className={classes}></div>;
};

export default SliderItem;
