export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  CHANGE_USER = "CHANGE_USER",
  DELETE_USER = "DELETE_USER",
}

interface AddUser {
  type: UserActionTypes.ADD_USER;
  payload: IUser;
}

export interface change {
  id: number;
  user: IUser;
}

interface ChangeUser {
  type: UserActionTypes.CHANGE_USER;
  payload: change;
}

interface DeleteUser {
  type: UserActionTypes.DELETE_USER;
  payload: number;
}

export type UserAction = AddUser | ChangeUser | DeleteUser;

export interface localStorageUser {
  user: IUser[];
}
