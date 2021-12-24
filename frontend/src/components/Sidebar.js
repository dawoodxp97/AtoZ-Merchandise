import React from "react";
import CategoryIcon from "@material-ui/icons/Category";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import "./styles/Sidebar.css";
import { Link, useHistory } from "react-router-dom";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_ADD",
        address: "",
      });
      history.push("/");
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar_items">
        <div className="sidebar_items_head">
          <CategoryIcon />
          <h4>Categories</h4>
        </div>
        <div className="sidebar_sub_items_body">
          <Link style={{ textDecoration: "none" }} to="/detail/Eco and Alexa">
            <div className="sidebar_sub_item">
              <h6>Eco and Alexa</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Kindle">
            <div className="sidebar_sub_item">
              <h6>Kindle</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Books">
            <div className="sidebar_sub_item">
              <h6>Books</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Electronics">
            <div className="sidebar_sub_item">
              <h6>Electronics</h6>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/detail/Home and Gardens"
          >
            <div className="sidebar_sub_item">
              <h6>Home and Gardens</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Fashion">
            <div className="sidebar_sub_item">
              <h6>Fashion</h6>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/detail/Health and Beauty"
          >
            <div className="sidebar_sub_item">
              <h6>Health and Beauty</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Automotive">
            <div className="sidebar_sub_item">
              <h6>Automotive</h6>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/detail/Sport and Tourism"
          >
            <div className="sidebar_sub_item">
              <h6>Sport and Tourism</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Games">
            <div className="sidebar_sub_item">
              <h6>Games</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Film and Music">
            <div className="sidebar_sub_item">
              <h6>Film and Music</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Animals">
            <div className="sidebar_sub_item">
              <h6>Animals</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Hobby">
            <div className="sidebar_sub_item">
              <h6>Hobby</h6>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/detail/Gift Cards">
            <div className="sidebar_sub_item">
              <h6>Gift Cards</h6>
            </div>
          </Link>
        </div>
      </div>
      {!user ? (
        ""
      ) : (
        <div onClick={handleAuth} className="logout">
          <ExitToAppIcon id="logout_logo" />
          <p>Log Out</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
