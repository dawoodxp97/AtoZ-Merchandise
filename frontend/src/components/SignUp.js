import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Account Created...
      })
      .then(() => {
        const currUser = auth.currentUser;
        currUser.updateProfile({
          displayName: user,
          photoURL: pic,
        });
        setLoading(false);
        alert(
          "Successfully Created Account. Enjoy your A to Z Merchandise App ."
        );
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
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
          <h5>Username</h5>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value.trimStart())}
          />
          <h5>Profile URL (Optional)</h5>
          <input
            type="text"
            value={pic}
            onChange={(e) => setPic(e.target.value.trimStart())}
          />
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
        </form>
        <button
          disabled={!(email && password && user) || loading}
          onClick={register}
          className="registerButton"
        >
          {loading ? (
            <ClipLoader color="#161d25" loading={true} size={12} />
          ) : (
            "Sign Up"
          )}
        </button>
        <p>
          Already have account ?
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#ff9900",
              marginLeft: "0.5rem",
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
