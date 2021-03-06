import React, { useState } from "react";
import "./styles/Login.css";
import logo from "./images/icons8-google-48.png";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import ClipLoader from "react-spinners/ClipLoader";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          setLoading(false);
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
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
            onChange={(e) => setEmail(e.target.value.trimStart())}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trimStart())}
          />
          <p>
            By signing-in you agree to the A to Z MERCHANDISE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            disabled={!(email && password) || loading}
            type="submit"
            onClick={signIn}
            className="login_signInButton"
          >
            {loading ? (
              <ClipLoader color="#161d25" loading={true} size={12} />
            ) : (
              "Sign In"
            )}
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
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            setEmail("tester@test.in");
            setPassword("tester@12345");
          }}
        >
          Guest Login
        </p>
      </div>
      <div onClick={googleAuth} className="other_auth">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
