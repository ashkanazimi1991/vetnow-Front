import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSliderStyles from "./imageSlider.module.css";
export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      lazyLoad: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className={imageSliderStyles["container"]}>
          <Slider {...settings}>
            <div>
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/chick0110.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/news010.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/news011.jpg"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
