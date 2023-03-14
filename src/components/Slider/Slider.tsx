import Container from "../../UI/Container/Container";
import DotList from "./Dots/DotList";
import styles from "./Slider.module.css";
import slider from "../../data/slider.json";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  changeSlide,
  initItemsLength,
  initSLides,
} from "../../store/slider/slider-actions";
import { ISlider } from "../../types/slider";
import {
  selectSliderItemsLength,
  selectSliderNumber,
  selectSlides,
} from "../../store/slider/slider-selectors";
import SliderItem from "./SliderItem";

const Slider = () => {
  const dispatch: any = useDispatch();
  const sliderData = useSelector(selectSlides);
  const sliderNumber = useSelector(selectSliderNumber);
  const slidesLength = useSelector(selectSliderItemsLength);

  const slides: ISlider[] = slider;

  useEffect(() => {
    dispatch(initSLides(slides));
    dispatch(initItemsLength(slides.length));
  }, [slider]);

  const changeSlideHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    directionText: string
  ) => {
    e.preventDefault();

    if (directionText === "left") {
      dispatch(changeSlide(-1, sliderNumber, slidesLength));
    } else if (directionText === "right") {
      dispatch(changeSlide(1, sliderNumber, slidesLength));
    }
  };

  return (
    <>
      <Container className={styles.slider_wrap}>
        <div className={styles.slider}>
          <div
            className={styles["slider-left_arrow"]}
            onClick={(event) => changeSlideHandler(event, "left")}
          >
            ❮
          </div>
          {sliderData.map((slide, index) => (
            <SliderItem
              key={`slide-item_${index}`}
              data={slide}
              number={index}
            />
          ))}
          <div
            className={styles["slider-right_arrow"]}
            onClick={(event) => changeSlideHandler(event, "right")}
          >
            ❯
          </div>
        </div>
        <DotList />
      </Container>
    </>
  );
};

export default Slider;
