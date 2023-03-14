import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authValid, isThereSuch, loginEnter } from "../../helpers/AuthValid";
import { addUser } from "../../store/users/user-actions";
import { selectAllUsers } from "../../store/users/user-selectors";
import { IUser } from "../../types/user";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TODOS_ROUTE,
} from "../../utils/consts";
import styles from "./Auth.module.css";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });
  const dispatch: any = useDispatch();
  const users = useSelector(selectAllUsers);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
  };

  const addUserHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isLogin) {
      //* для логин
      if (authValid(user.email, user.password)) {
        if (loginEnter(users, user.email, user.password)) {
          navigate(TODOS_ROUTE);
        }
      }
    } else {
      //* для регистраций
      if (authValid(user.email, user.password, user.name)) {
        const data = {
          ...user,
          id: Date.now(),
        };
        if (!isThereSuch(users, user.email)) {
          dispatch(addUser(data));
          navigate(TODOS_ROUTE);
        }
      }
    }
  };

  const navigateLoginHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigate(LOGIN_ROUTE);
  };

  const navigateRegHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigate(REGISTRATION_ROUTE);
  };

  return (
    <form className={styles.auth}>
      <h1 className={styles.auth_title}>
        {isLogin ? "Login page" : "Registration page"}
      </h1>
      {!isLogin && (
        <Input
          title="Name"
          type="text"
          value={user.name}
          onChange={nameHandler}
        />
      )}
      <Input
        title="Email"
        type="email"
        value={user.email}
        onChange={emailHandler}
      />
      <Input
        title="Password"
        type="password"
        value={user.password}
        onChange={passwordHandler}
      />
      <div className={styles.auth_foot}>
        <div className={styles.auth_foot_text}>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span onClick={navigateRegHandler}>Registration</span>
            </>
          ) : (
            <>
              Are you already registered?{" "}
              <span onClick={navigateLoginHandler}>Login</span>
            </>
          )}
        </div>
        <Button title="Sign in" onClick={addUserHandler} />
      </div>
    </form>
  );
};

export default Auth;
