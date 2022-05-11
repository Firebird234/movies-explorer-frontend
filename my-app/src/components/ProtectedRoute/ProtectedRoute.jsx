import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirectTo, loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
