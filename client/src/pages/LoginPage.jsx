import "../styles/auth.css";
import "../styles/form.css";

const LoginPage = () => {
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
      <form action="/login" method="POST">
        <input type="hidden" name="_csrf" defaultValue="locals.csrfToken" />
        <p>
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" id="email" defaultValue="" />
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
        <button className="btn-1">Login</button>
        <p className="btn-2 auth">
          <a href="/register">Create a new user</a>
          <img src="shared/icon-arrow-right.svg" alt="icon-arrow-right" />
        </p>
      </form>
    </>
  );
};

export default LoginPage;
