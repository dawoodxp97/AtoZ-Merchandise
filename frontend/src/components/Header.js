import React, { useState } from "react";
import "./styles/Header.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import Hamburger from "hamburger-react";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { Avatar } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket, user, address }] = useStateValue();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="header_mobile">
        <div className="header_mobile_item1">
          <div className="hamburger">
            <Hamburger size={18} toggled={isOpen} toggle={setOpen} />
          </div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#ff9900",
            }}
          >
            <img
              className="header_logo"
              style={{ marginLeft: "-6px" }}
              src="https://i.ibb.co/fCP5Frx/AtoZzzq.png"
              alt="Logo"
            />
          </Link>
          <Link to="/checkout">
            <div className="cart_grp">
              <Badge badgeContent={basket?.length} color="primary">
                <div style={{ marginLeft: "120px" }} className="cart_icon">
                  <ShoppingCartOutlinedIcon />
                </div>
              </Badge>
            </div>
          </Link>
          <div style={{ marginLeft: "10px" }} className="avatar">
            <div>
              {!user ? (
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Login
                </Link>
              ) : (
                <Avatar
                  className="header_avatar_mb"
                  alt="skd"
                  src={user?.photoURL}
                />
              )}
            </div>
            {!user ? (
              ""
            ) : (
              <Link
                to="/account"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <SettingsIcon />
              </Link>
            )}
          </div>
        </div>
        <div className="header_mobile_item2">
          <input
            placeholder="Search..."
            type="text"
            className="form_input_mb"
          />
          <div className="search_icon_mb">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="header_res">
        <div className="header_child1">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#ff9900",
            }}
          >
            <img
              className="header_logo"
              src="https://i.ibb.co/fCP5Frx/AtoZzzq.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="header_child2">
          <input placeholder="Search..." type="text" className="form_input" />
          <div className="search_icon">
            <SearchIcon />
          </div>
        </div>
        <div className="header_child3">
          <div className="address_icon">
            <LocationOnOutlinedIcon style={{ fontSize: 30 }} />
          </div>
          <div className="address_info">
            <span className="address_child_1">
              Hello, {!user ? "Guest" : user?.displayName}{" "}
            </span>
            <span className="address_child_2">
              {" "}
              {!address
                ? "Update your address"
                : `Deliver to ${address?.city} - ${address?.pincode}`}{" "}
            </span>
          </div>
        </div>

        <div className="header_child4">
          <Link
            to="/favorites"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div className="fav_icon">
              <FavoriteBorderOutlinedIcon />
            </div>
          </Link>
          <Link to="/checkout">
            <div className="cart_grp">
              <Badge badgeContent={basket?.length} color="primary">
                <div className="cart_icon">
                  <ShoppingCartOutlinedIcon />
                </div>
              </Badge>
            </div>
          </Link>

          <div className="bell_icon">
            <NotificationsNoneOutlinedIcon />
          </div>
          <Link
            to="/orders"
            style={{
              textDecoration: "none",
              color: "#ff9900",
            }}
          >
            <div className="myorders_icon">
              <AssessmentIcon />
            </div>
          </Link>

          <div className="avatar">
            <div>
              {!user ? (
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Login
                </Link>
              ) : (
                <Avatar
                  className="header_avatar"
                  alt="skd"
                  src={user?.photoURL}
                />
              )}
            </div>
            {!user ? (
              ""
            ) : (
              <Link
                to="/account"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <SettingsIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
