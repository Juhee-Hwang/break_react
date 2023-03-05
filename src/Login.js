import "./Login.css";

function Login() {
  return (
    <>
      <div className="wrapper">
        <header>Login Form</header>
        <form>
          <div className="field email">
            <div className="input-area">
              <input type="text" placeholder="Email Address" />
              <i className="icon fas fa-envelope" />
              <i className="error error-icon fas fa-exclamation-circle" />
            </div>
            <div className="error error-txt">Email can't be blank</div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" placeholder="Password" />
              <i className="icon fas fa-lock" />
              <i className="error error-icon fas fa-exclamation-circle" />
            </div>
            <div className="error error-txt">Password can't be blank</div>
          </div>
          <div className="pw-txt">
            <a href="#">Forgot password?</a>
          </div>
          <input type="submit" defaultValue="Login" />
        </form>
        <div className="signup-txt">
          Not yet member? <a href="#">Signup now</a>
        </div>
      </div>
    </>
  );
}

export default Login;
