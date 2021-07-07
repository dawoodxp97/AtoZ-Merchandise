import React from "react";
import "./styles/SecNav.css";
import CategoryIcon from "@material-ui/icons/Category";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ChildFriendlyOutlinedIcon from "@material-ui/icons/ChildFriendlyOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function SecNav() {
  const [{ user }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="secnav">
      <div className="secnav_item1">
        <CategoryIcon />
        <h4>Categories</h4>
      </div>
      <div className="secnav_item2">
        <ChildFriendlyOutlinedIcon />
        <h4>Sell on AtoZ-M</h4>
      </div>
      <div className="secnav_item3">
        <HelpOutlineOutlinedIcon />
        <h4>Help</h4>
      </div>
      {!user ? (
        ""
      ) : (
        <div onClick={handleAuth} className="secnav_logout">
          <ExitToAppIcon id="secnav_logout_logo" />

          <p>Log Out</p>
        </div>
      )}
    </div>
  );
}

export default SecNav;
