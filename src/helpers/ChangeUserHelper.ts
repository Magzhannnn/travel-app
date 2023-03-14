import { IUser } from "./../types/user";

export const changeUserHelper = (): IUser | undefined => {
  try {
    const userLocalStorage = localStorage.getItem("user");

    if (userLocalStorage === null) {
      return undefined;
    }

    return JSON.parse(userLocalStorage);
  } catch (e) {
    return undefined;
  }
};
