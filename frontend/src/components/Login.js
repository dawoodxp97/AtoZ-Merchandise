import React, { useState } from "react";
import "./styles/Login.css";
import logo from "./images/icons8-google-48.png";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const googleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.ibb.co/fCP5Frx/AtoZzzq.png"
          alt="Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            By signing-in you agree to the A to Z MERCHANDISE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
          <p>
            Don't have account ?
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#ff9900",
              }}
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div onClick={googleAuth} className="other_auth">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
