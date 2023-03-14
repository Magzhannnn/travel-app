import { localStorageUser } from "./../types/user";
import { IUser } from "../types/user";

export const loadState = () => {
  try {
    const savedState = localStorage.getItem("user_store");

    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state: localStorageUser) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem("user_store", stateToBeSaved);
  } catch (e) {
    console.error(e);
  }
};
