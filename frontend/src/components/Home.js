import React from "react";
import "./styles/Home.css";
import CategoryIcon from "@material-ui/icons/Category";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ChildFriendlyOutlinedIcon from "@material-ui/icons/ChildFriendlyOutlined";
import MainPage from "./MainPage";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
function Home() {
  const [{ user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_ADD",
        address: "",
      });
    }
  };
  return (
    <div className="home">
      <div className="sidebar">
        <div className="sidebar_items">
          <div className="sidebar_items_head">
            <CategoryIcon />
            <h4>Categories</h4>
          </div>
          <div className="sidebar_sub_items_body">
            <div className="sidebar_sub_item">
              <h6>Eco and Alexa</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Kindle</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Books</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Electronics</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Home and Gardens</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Fashion</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Health and Beauty</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Automotive</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Sport and Tourism</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Games</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Film and Music</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Animals</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Hobby</h6>
            </div>
            <div className="sidebar_sub_item">
              <h6>Gift Cards</h6>
            </div>
          </div>
          <div className="sidebar_item1">
            <ChildFriendlyOutlinedIcon />
            <h4>Sell on AtoZ-M</h4>
          </div>
          <div className="sidebar_item2">
            <HelpOutlineOutlinedIcon />
            <h4>Help</h4>
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
      <div className="main">
        <MainPage />
      </div>
    </div>
  );
}

export default Home;
