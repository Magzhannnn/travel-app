import { useSelector } from "react-redux";
import { selectSliderItemsLength } from "../../../store/slider/slider-selectors";
import DotItem from "./DotItem";
import styles from "./Dots.module.css";

const DotList = () => {
  const slidesCount = useSelector(selectSliderItemsLength);

  const renderDots = () => {
    const dots = [];

    for (let i = 0; i < slidesCount; i++) {
      dots.push(<DotItem key={`dot_${i}`} number={i} />);
    }

    return dots;
  };

  return <div className={styles.dot_list}>{renderDots()}</div>;
};

export default DotList;
