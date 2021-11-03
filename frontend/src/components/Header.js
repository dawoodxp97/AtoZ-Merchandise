import React, { useRef, useState } from "react";
import "./styles/Header.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { Avatar } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

toast.configure();

function Header() {
  const [{ basket, user, address, allData }, dispatch] = useStateValue();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const inputElem = useRef();
  const [searchedItems, setSearchedItems] = useState([]);

  const displaySearch = () => {
    setShow(true);
    document.getElementById("search-content").style.display = "block";
  };
  const hideSearch = () => {
    document.getElementById("search-content").style.display = "none";
    setShow(false);
  };

  const getSearch = () => {
    getSearchData(allData, inputElem.current.value);
  };

  const getSearchData = function (data, value) {
    if (value !== "") {
      const searchObject = data.filter((item) =>
        item?.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedItems(searchObject);
    } else {
      setSearchedItems([]);
    }
  };

  const notify = (text) => {
    toast.success(`🚀 ${text}... `, { autoClose: 2000 });
  };

  const addToBasket = (data) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: data?.id,
        title: data?.title,
        image: data?.image,
        price: data?.price,
        rating: data?.rating,
        brand: data?.brand,
      },
    });
    notify(`${data?.title?.substring(0, 20)} added to Cart`);
  };
  return (
    <div className="header">
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
          <div id="search-content" className="search_content">
            {searchedItems &&
              searchedItems.map((item) => (
                <div key={item?.id} className="search_item">
                  <div className="search_item_1">
                    <img src={item?.image} alt="" />
                  </div>
                  <div className="search_item_2">
                    <p>{item?.title.substring(0, 60)}...</p>
                  </div>
                  <div className="search_item_3">
                    {basket.some((res) => res.id === item?.id) ? (
                      <button
                        onClick={() => {
                          history.push("/checkout");
                          hideSearch();
                        }}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          addToBasket(item);
                        }}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <input
            ref={inputElem}
            onFocus={displaySearch}
            onChange={getSearch}
            placeholder="Search..."
            type="text"
            className="form_input"
          />
          <div className="search_icon">
            {show ? (
              <div
                onClick={hideSearch}
                style={{ color: "black", fontWeight: "bold" }}
              >
                X
              </div>
            ) : (
              <SearchIcon />
            )}
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
