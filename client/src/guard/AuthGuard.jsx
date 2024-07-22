import { useContext } from "react";
import AuthContext from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
