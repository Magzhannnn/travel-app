import { IUser, UserAction, UserActionTypes } from "../../types/user";

const initialState: IUser[] = [];

export const userReducer = (
  state = initialState,
  action: UserAction
): IUser[] => {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return [...state, action.payload];
    case UserActionTypes.CHANGE_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload.user : user
      );
    case UserActionTypes.DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};
