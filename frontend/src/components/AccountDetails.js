import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./styles/AccountDetails.css";

//creating the custom forceUpdate hook
function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function AccountDetails() {
  const [{ user }] = useStateValue();
  const forceUpdate = useForceUpdate();
  const [userName, setUserName] = useState("");
  const [picURL, setPicURL] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const displayName = authUser.displayName;
        const userPhoto = authUser.photoURL;
        const isAnonymous = authUser.isAnonymous;

        if (isAnonymous) {
          authUser
            .updateProfile({
              displayName: "UNKNOWN USER",
              photoURL:
                "https://cdn2.vectorstock.com/i/1000x1000/55/86/anonymous-icon-incognito-sign-privacy-vector-34705586.jpg",
            })
            .then(
              function () {
                // Profile updated successfully!
              },
              function (error) {
                // An error happened.
                console.log(error);
              }
            );
        }
        if (!isAnonymous) {
          if (!displayName && !userPhoto) {
            authUser
              .updateProfile({
                displayName: userName,
                photoURL: picURL,
              })
              .then(
                function () {
                  // Profile updated successfully!
                },
                function (error) {
                  // An error happened.
                  console.log(error);
                }
              );
          }
        }
      }
    });
  });

  return (
    <div className="account_details">
      <div className="account_details_grp1">
        <h3>Your Email Address : {user?.email}</h3>
        <h3>Your Username : {user?.displayName}</h3>
        <h3>Profile Image :</h3>
        <img src={user?.photoURL} alt="" />
      </div>
      <div className="account_details_grp2">
        <form>
          <h5>Update your Profile : </h5>
          <h5>User Name</h5>
          <input
            type="text"
            value={userName}
            onInput={(e) => setUserName(e.target.value)}
          />

          <h5>Photo URL</h5>
          <input
            type="text"
            value={picURL}
            onInput={(e) => setPicURL(e.target.value)}
          />
          <button onClick={forceUpdate}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default AccountDetails;
