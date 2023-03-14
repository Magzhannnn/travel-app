export interface ISlider {
  id: number;
  img: string;
}

export interface SliderState {
  number: number;
  itemsLength: number;
  slides: ISlider[];
}

export enum SliderActionTypes {
  CHANGE_SLIDE = "CHANGE_SLIDE",
  GO_TO_SLIDE = "GO_TO_SLIDE",
  INIT_ITEMS_LENGTH = "INIT_ITEMS_LENGTH",
  INIT_SLIDES = "INIT_SLIDES",
}

interface initSlides {
  type: SliderActionTypes.INIT_SLIDES;
  payload: ISlider[];
}

interface initItemsLength {
  type: SliderActionTypes.INIT_ITEMS_LENGTH;
  payload: number;
}

interface initChange {
  direction: number;
  sliderNumber: number;
  itemsLength: number;
}
interface changeSlide {
  type: SliderActionTypes.CHANGE_SLIDE;
  payload: initChange;
}

interface goToSlide {
  type: SliderActionTypes.GO_TO_SLIDE;
  payload: number;
}

export type SliderAction =
  | initSlides
  | initItemsLength
  | changeSlide
  | goToSlide;
