import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";
function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        console.log(auth);
        alert(
          "Successfully Created Account. Enjoy your A to Z Merchandise App ."
        );
        history.push("/");
      }
    });
  };
  return (
    <div className="signup">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.ibb.co/fCP5Frx/AtoZzzq.png"
          alt="Logo"
        />
      </Link>
      <div className="signup_container">
        <h1>Sign-up</h1>

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
        </form>

        <p>
          By Signing-Up you agree to the A to Z MERCHANDISE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="registerButton">
          Create your AtoZ Account
        </button>
      </div>
    </div>
  );
}

export default SignUp;
