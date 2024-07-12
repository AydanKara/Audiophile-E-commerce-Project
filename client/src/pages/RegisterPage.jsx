import "../styles/auth.css";
import "../styles/form.css";

const RegisterPage = () => {
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
      <form action="/register" method="POST">
        <input type="hidden" name="" defaultValue="" />
        <p>
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" id="email" defaultValue="" />
        </p>
        <p>
          <label htmlFor="confirm-email">Confirm E-Mail</label>
          <input
            type="email"
            name="confirm-email"
            id="confirm-email"
            defaultValue=""
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue=""
          />
        </p>
        <hr />
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
        </p>
        <button className="btn-1">Create Account</button>
        <p className="btn-2 auth">
          <a href="/login">Login instead</a>
          <img src="shared/icon-arrow-right.svg" alt="icon-arrow-right" />
        </p>
      </form>
    </>
  );
};

export default RegisterPage;
