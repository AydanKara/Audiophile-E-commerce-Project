import { Link } from "react-router-dom";
import "../styles/auth.css";
import "../styles/form.css";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import useForm from "../hooks/useForm";

const RegisterPage = () => {
  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    email: "",
    password: "",
    repass: "",
  });

  return (
    <>
      <div className="site-heading">
        <h1 className="heading-title">Create new Account</h1>
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
        <p>
          <label htmlFor="repass">Confirm Password</label>
          <input
            type="password"
            name="repass"
            id="repass"
            onChange={onChange}
            value={values?.repass}
          />
        </p>

        {/*  <hr />
        <p>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" id="fullname" defaultValue="" />
        </p>
        <p>
          <label htmlFor="street">Street</label>
          <input type="text" name="street" id="street" defaultValue="" />
        </p>
        <p>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" name="postal" id="postal" defaultValue="" />
        </p>
        <p>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" defaultValue="" />
        </p> */}
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
