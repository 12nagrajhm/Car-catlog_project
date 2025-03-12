import React from "react";
import { Navigate } from "react-router-dom";
import "../styles/PrivateRoute.css";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // Change this to test authentication

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
