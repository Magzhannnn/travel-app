import { RootState } from "../rootReducer";

export const selectAllSlider = (state: RootState) => state.slider;
export const selectSliderNumber = (state: RootState) => state.slider.number;
export const selectSliderItemsLength = (state: RootState) => state.slider.itemsLength;
export const selectSlides = (state: RootState) => state.slider.slides;
