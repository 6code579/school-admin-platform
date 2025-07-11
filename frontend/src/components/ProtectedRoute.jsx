import React from "react";
import { Navigate } from "react-router-dom";
import { getToken as isAuthenticated } from "../services/Auth";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
