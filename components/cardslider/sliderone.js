import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./slideronestyle.module.css";
export default class SliderOne extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 6,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div style={ {background: ""}}>
        <Slider {...settings}>
          <div>
            <div className={styles.card}>
              <img src={this.props.img1} alt="دامپزشک آنلاین" />
            </div>
            <h1 id={styles.title} >{this.props.title1} </h1>
          </div>
         
          <div>
            <div className={styles.card}>
              <img src={this.props.img2} alt="بیماری های طیور" />
            </div>
              <h1 id={styles.title} >{this.props.title2}</h1>
          </div>

          <div>
            <div className={styles.card}>
              <img src={this.props.img3} alt="تجهیزات طیور" />
            </div>
              <h1 id={styles.title} > {this.props.title3}</h1>
          </div>

          <div>
            <div className={styles.card}>
              <img src={this.props.img4} alt="داروخانه طیور" />
            </div>
              <h1 id={styles.title} >{this.props.title4}</h1>
          </div>

          
          <div>
            <div className={styles.card}>
              <img src={this.props.img5} alt="پرندگان زینتی" />
            </div>
              <h1 id={styles.title} >{this.props.title5}</h1>
          </div>
         
         
          <div>
            <div className={styles.card}>
              <img src={this.props.img6} alt="پرورش طیور گوشتی" />
            </div>
              <h1 id={styles.title} >{this.props.title6}</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
