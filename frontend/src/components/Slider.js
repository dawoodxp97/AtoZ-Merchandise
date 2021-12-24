import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles/Slide.css";
import img0 from "./images/img0.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
const Slider = () => {
  return (
    <div className="slider_comp">
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >
        <div>
          <img className="slider_img" src={img0} alt="" />
        </div>
        <div>
          <img className="slider_img" src={img1} alt="" />
        </div>
        <div>
          <img className="slider_img" src={img2} alt="" />
        </div>
        <div>
          <img className="slider_img" src={img3} alt="" />
        </div>
        <div>
          <img className="slider_img" src={img4} alt="" />
        </div>
        <div>
          <img className="slider_img" src={img5} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
