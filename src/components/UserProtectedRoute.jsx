import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};

export default UserProtectedRoute;
