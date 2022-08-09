import React from "react";
import "../Slider/slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Slider() {
  return (
    <>
    <Carousel>
      <img
        className="sliderImg"
        src={require("../../img/book-794978__340.webp")}
        alt=""
      />
      <img
        className="sliderImg"
        src={require("../../img/images.jpg")}
        alt=""
      />
      <img
        className="sliderImg"
        src={require("../../img/427545862167656.jpg")}
        alt=""
      />
    </Carousel>
  </>
  );
}

export default Slider;
