import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUserContext } from "../context/usercontext";
const PrivateRoute = ({ children }) => {
  const { userData } = useUserContext();
  return userData ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
