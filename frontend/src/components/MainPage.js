import React, { useEffect, useState } from "react";
import Product from "./Product";
import Slider from "./Slider";
import "./styles/MainPage.css";
import vc1 from "./images/vcam.png";
import vc2 from "./images/vphone.png";
import vc3 from "./images/vlap.png";
import vc4 from "./images/vheadphones.png";
import vc5 from "./images/vtshirt.png";
import vc6 from "./images/vbaby.png";
import vc7 from "./images/vwatch.png";
import vc8 from "./images/vlip.png";
import vc9 from "./images/vcycle.png";
import vc10 from "./images/vgame.png";
import vc11 from "./images/vsofa.png";
import { Tooltip } from "@material-ui/core";
import { db } from "../firebase";

function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      //cleanup
    };
  }, []);

  return (
    <div className="mainpage">
      <div className="slide">
        <Slider />
      </div>
      <h3 id="cat_head">Popular Categories</h3>

      <div className="prod_head">
        <Tooltip title="Camera" placement="bottom">
          <div>
            <img className="vector_icons" src={vc1} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Mobiles" placement="bottom">
          <div>
            <img className="vector_icons" src={vc2} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Laptops" placement="bottom">
          <div>
            <img className="vector_icons" src={vc3} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Headphones" placement="bottom">
          <div>
            <img className="vector_icons" src={vc4} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="T-Shirts" placement="bottom">
          <div>
            <img className="vector_icons" src={vc5} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Baby Essentials" placement="bottom">
          <div>
            <img className="vector_icons" src={vc6} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Watch" placement="bottom">
          <div>
            <img className="vector_icons" src={vc7} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Lipstick" placement="bottom">
          <div>
            <img className="vector_icons" src={vc8} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Bicycle" placement="bottom">
          <div>
            <img className="vector_icons" src={vc9} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Gaming" placement="bottom">
          <div>
            <img className="vector_icons" src={vc10} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Sofa" placement="bottom">
          <div>
            <img className="vector_icons" src={vc11} alt="" />
          </div>
        </Tooltip>
      </div>
      <h3>Hot Deals 🔥 🔥 🔥 </h3>
      <div className="products">
        {data &&
          data.map((item) => (
            <Product
              uid={item?.id}
              key={item?.id}
              id={item?.data?.id}
              brand={item?.data?.brand}
              title={item?.data?.title}
              price={item?.data?.price}
              rating={item?.data?.rating}
              image={item?.data?.image}
            />
          ))}
      </div>
    </div>
  );
}

export default MainPage;
