import { IUser, UserActionTypes } from "../../types/user";

export const addUser = (user: IUser) => ({
  type: UserActionTypes.ADD_USER,
  payload: user,
});

export const changeUser = (id: number, user: IUser) => ({
  type: UserActionTypes.CHANGE_USER,
  payload: { id, user },
});

export const deleteUser = (id: number) => ({
  type: UserActionTypes.DELETE_USER,
  payload: id,
});
