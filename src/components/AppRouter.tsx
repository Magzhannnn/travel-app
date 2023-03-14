import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, [navigate]);

  if (isAuth === "true")
    return (
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to="/todos" />} />
      </Routes>
    );

  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
