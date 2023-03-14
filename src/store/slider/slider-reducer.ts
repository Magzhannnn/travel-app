import {
  ISlider,
  SliderAction,
  SliderActionTypes,
  SliderState,
} from "./../../types/slider";

const initialState: SliderState = {
  number: 0,
  itemsLength: 0,
  slides: [],
};

export const sliderReducer = (
  state = initialState,
  action: SliderAction
): SliderState => {
  switch (action.type) {
    case SliderActionTypes.INIT_SLIDES: {
      return { ...state, slides: action.payload };
    }
    case SliderActionTypes.INIT_ITEMS_LENGTH: {
      return { ...state, itemsLength: action.payload };
    }
    case SliderActionTypes.CHANGE_SLIDE: {
      const { direction, sliderNumber, itemsLength } = action.payload;

      if (sliderNumber + direction < 0) {
        return { ...state, number: itemsLength - 1 };
      } else {
        return { ...state, number: (sliderNumber + direction) % itemsLength };
      }
    }
    case SliderActionTypes.GO_TO_SLIDE: {
      return { ...state, number: action.payload };
    }
    default:
      return state;
  }
};
