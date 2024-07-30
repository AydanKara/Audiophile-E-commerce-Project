import { Link } from "react-router-dom";
import "../styles/auth.css";
import "../styles/form.css";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import useRegisterForm from "../hooks/useRegisterForm";

const RegisterPage = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, errors, serverError, onChange, onSubmit } = useRegisterForm(
    registerSubmitHandler
  );

  return (
    <>
      <div className="site-heading">
        <h1 className="heading-title">Create new Account</h1>
      </div>
      {serverError && (
        <div className="alert">
          <h2>{serverError}</h2>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <p className="input-box">
          <label htmlFor="email">E-Mail</label>
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            value={values?.email}
            className={errors.email ? "error-input" : ""}
          />
        </p>
        <p className="input-box">
          <label htmlFor="username">Username</label>
          {errors.username && <span className="error">{errors.username}</span>}

          <input
            type="text"
            name="username"
            id="username"
            onChange={onChange}
            value={values?.username}
            className={errors.username ? "error-input" : ""}
          />
        </p>
        <p className="input-box">
          <label htmlFor="password">Password</label>
          {errors.password && <span className="error">{errors.password}</span>}

          <input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
            value={values?.password}
            className={errors.password ? "error-input" : ""}
          />
        </p>
        <p className="input-box">
          <label htmlFor="repass">Confirm Password</label>
          {errors.repass && <span className="error">{errors.repass}</span>}

          <input
            type="password"
            name="repass"
            id="repass"
            onChange={onChange}
            value={values?.repass}
            className={errors.repass ? "error-input" : ""}
          />
        </p>
        <button type="submit" className="btn-1">
          Create Account
        </button>
        <p className="btn-2 auth">
          <Link to="/login">Login instead</Link>
          <img src="shared/icon-arrow-right.svg" alt="icon-arrow-right" />
        </p>
      </form>
    </>
  );
};

export default RegisterPage;
