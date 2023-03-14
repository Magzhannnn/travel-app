import { todoReducer } from "./todos/todo-reducer";
import { combineReducers } from "redux";
import { userReducer } from "./users/user-reducer";
import { sliderReducer } from './slider/slider-reducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  slider: sliderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
