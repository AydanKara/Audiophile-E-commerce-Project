import { Link } from "react-router-dom";
import "../styles/auth.css";
import "../styles/form.css";
import useForm from "../hooks/useForm";

const LoginPage = () => {
  const { values, onChange, onSubmit } = useForm({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="site-heading">
        <h1 className="heading-title">Login</h1>
      </div>
      {/*   if (inputData.errorMessage) { 
  <div class="alert">
    <h2>Invalid Credentials</h2>
    <p>
 inputData.errorMessage
    </p>
  </div>
   }  */}
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            value={values?.email}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
            value={values?.password}
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
