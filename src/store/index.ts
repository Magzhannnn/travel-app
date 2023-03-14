import { loadState, saveState } from "./local-storage";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { throttle } from 'lodash';

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(
    throttle(() => {
      saveState({ user: store.getState().user });
    }, 1000)
  );

  return store;
};
