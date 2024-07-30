/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";
import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});
  const loginSubmitHandler = async (values, setServerError) => {
    const result = await authService.login(values.email, values.password);

    if (result) {
      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate("/");
    } else {
      setServerError("Invalid email or password");
    }
  };

  const registerSubmitHandler = async (values, setServerError) => {
    const result = await authService.register(
      values.email,
      values.username,
      values.password
    );

    if (result) {
      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate("/");
    } else if (result.status === 409) {
      setServerError(`User with ${values.email} already registered`);
    } else {
      setServerError("Something went wrong");
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth?.email,
    username: auth?.username,
    userId: auth?._id,
    isAuthenticated: !!auth?.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
