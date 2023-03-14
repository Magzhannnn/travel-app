import { SliderActionTypes, ISlider } from "./../../types/slider";

export const initSLides = (slides: ISlider[]) => ({
  type: SliderActionTypes.INIT_SLIDES,
  payload: slides,
});

export const initItemsLength = (itemsLength: number) => ({
  type: SliderActionTypes.INIT_ITEMS_LENGTH,
  payload: itemsLength,
});

export const changeSlide = (
  direction = 1,
  sliderNumber: number,
  itemsLength: number
) => ({
  type: SliderActionTypes.CHANGE_SLIDE,
  payload: { direction, sliderNumber, itemsLength },
});

export const goToSlide = (number: number) => ({
  type: SliderActionTypes.GO_TO_SLIDE,
  payload: number,
});
