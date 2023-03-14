import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CHANGE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  TODOS_ROUTE,
} from "../../utils/consts";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, [navigate]);

  const logOut = (e: React.MouseEvent<HTMLDivElement>) => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    navigate(LOGIN_ROUTE);
  };

  return (
    <div className={styles.navbar}>
      {isAuth === "true" ? (
        <>
          <Link to={HOME_ROUTE} className={styles.navbar_item}>
            home
          </Link>
          <Link to={ABOUT_ROUTE} className={styles.navbar_item}>
            about
          </Link>
          <Link to={TODOS_ROUTE} className={styles.navbar_item}>
            todos
          </Link>
          <Link to={CHANGE_ROUTE} className={styles.navbar_item}>
            setting
          </Link>
          <div className={styles.navbar_item} onClick={logOut}>
            logout
          </div>
        </>
      ) : (
        <>
          <Link to={HOME_ROUTE} className={styles.navbar_item}>
            home
          </Link>
          <Link to={LOGIN_ROUTE} className={styles.navbar_item}>
            login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
