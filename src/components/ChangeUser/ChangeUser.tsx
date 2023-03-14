import styles from "./ChangeUser.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import React, { useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { changeUserHelper } from "../../helpers/ChangeUserHelper";
import { authValid, isThereSuch } from "../../helpers/AuthValid";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../store/users/user-selectors";
import { changeUser } from "../../store/users/user-actions";

const ChangePerson = () => {
  const users: IUser[] = useSelector(selectAllUsers);
  const dispatch: any = useDispatch();

  const [user, setUser] = useState<IUser>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, email: e.target.value }));
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
  };

  const changeUserHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (authValid(user.email, user.password, user.name)) {
      const userTobeSaved = JSON.stringify(user);
      localStorage.setItem("user", userTobeSaved);

      if (user.id) {
        dispatch(changeUser(user.id, user));
      }
    }
  };

  useEffect(() => {
    const userData = changeUserHelper();
    if (userData) {
      setUser(userData);
    } else {
      alert("No data for this user!!!");
    }
  }, []);

  return (
    <form className={styles.change}>
      <h1 className={styles.change_title}>Change Page</h1>
      <Input
        title="Name"
        type="text"
        value={user.name}
        onChange={nameHandler}
      />
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
        <Button title="Change" onClick={changeUserHandler} />
      </div>
    </form>
  );
};

export default ChangePerson;
