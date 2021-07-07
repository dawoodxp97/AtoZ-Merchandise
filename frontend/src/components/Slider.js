import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles/Slide.css";
import img0 from "./images/img0.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
const Slider = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div className="slide_1">
            <img src={img0} alt="pics" />
          </div>
        </div>
        <div className="each-slide">
          <div className="slide_2">
            <img src={img1} alt="pics" />
          </div>
        </div>
        <div className="each-slide">
          <div className="slide_3">
            <img src={img2} alt="pics" />
          </div>
        </div>
        <div className="each-slide">
          <div className="slide_4">
            <img src={img3} alt="pics" />
          </div>
        </div>
        <div className="each-slide">
          <div className="slide_5">
            <img src={img4} alt="pics" />
          </div>
        </div>
        <div className="each-slide">
          <div className="slide_6">
            <img src={img5} alt="pics" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
