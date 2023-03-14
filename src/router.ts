import AboutMe from "./components/AboutMe/AboutMe";
import Auth from "./components/Auth/Auth";
import ChangePerson from "./components/ChangeUser/ChangeUser";
import Home from "./components/Home/Home";
import TodoList from "./components/Todos/TodoList";
import {
  ABOUT_ROUTE,
  CHANGE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TODOS_ROUTE,
} from "./utils/consts";

export interface IRoutes {
  path: string;
  Component: () => React.ReactElement;
}

export const authRoutes: IRoutes[] = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  { path: HOME_ROUTE, Component: Home },
];

export const publicRoutes: IRoutes[] = [
  {
    path: TODOS_ROUTE,
    Component: TodoList,
  },
  {
    path: ABOUT_ROUTE,
    Component: AboutMe,
  },
  {
    path: CHANGE_ROUTE,
    Component: ChangePerson,
  },
  { path: HOME_ROUTE, Component: Home },
];
