import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { currentLoggedUser } = useAuthContext();
  if (currentLoggedUser.role !== "admin") {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminProtectedRoute;
