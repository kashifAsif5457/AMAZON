import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role, auth }) => {
  // Check if user is authenticated
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has the required role
  if (role && auth.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;
