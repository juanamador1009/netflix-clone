import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { signup, login } from "../../firebase";

const Login = () => {
  const [signInState, setSignInState] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signInState) {
      await login(email, password);
    } else {
      await signup(name, lastName, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signInState ? "Sign In" : "Sign Up"}</h1>
        <form>
          {signInState ? null : (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          )}
          {signInState ? null : (
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={user_auth} type="submit">
            {signInState ? "Sign In" : "Sign up"}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" placeholder="remeber" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signInState ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignInState(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setSignInState(true)}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
