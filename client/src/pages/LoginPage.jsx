import { Link } from "react-router-dom";
import "../styles/auth.css";
import "../styles/form.css";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import useLoginForm from "../hooks/useLoginForm";

const LoginPage = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, errors, serverError, onChange, onSubmit } =
    useLoginForm(loginSubmitHandler);
  return (
    <>
      <div className="site-heading">
        <h1 className="heading-title">Login</h1>
      </div>
      {serverError && (
        <div className="alert">
          <h2>{serverError}</h2>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="email">E-Mail</label>
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            value={values?.email}
            className={
              errors.email
                ? "error-input"
                : "" || serverError
                ? "error-input"
                : ""
            }
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          {errors.password && <span className="error">{errors.password}</span>}
          <input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
            value={values?.password}
            className={
              errors.password
                ? "error-input"
                : "" || serverError
                ? "error-input"
                : ""
            }
          />
        </p>
        <button type="submit" className="btn-1">
          Login
        </button>
        <p className="btn-2 auth">
          <Link to="/register">Create a new user</Link>
          <img src="shared/icon-arrow-right.svg" alt="icon-arrow-right" />
        </p>
      </form>
    </>
  );
};

export default LoginPage;
