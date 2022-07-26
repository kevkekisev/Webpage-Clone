import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 60000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    arrows: false,
    height: 400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="carousel-div">
        <h1 className="front-title">
          One of the Best Software Houses in Poland according to clutch.co
        </h1>
        <button className="front-btn">DISCOVER REVIEWS</button>
      </div>
      <div className="carousel-div">
        <h1 className="front-title">
          5 Steps to a successful software development project
        </h1>
        <button className="front-btn">LEARN MORE</button>
      </div>
      <div className="carousel-div">
        <h1 className="front-title">
          Software development outsourcing in one place
        </h1>
        <button className="front-btn">LEARN MORE</button>
      </div>
      <div className="carousel-div">
        <h1 className="front-title">
          How to start software development outsourcing
        </h1>
        <button className="front-btn">LEARN MORE</button>
      </div>
      <div className="carousel-div">
        <h1 className="front-title">
          Learn why finance and Technology need a proper Software Mind
        </h1>
        <button className="front-btn">LEARN MORE</button>
      </div>
      <div className="carousel-div">
        <h1 className="front-title">
          Custom software development can take your business to the next level
        </h1>
        <button className="front-btn">LEARN MORE</button>
      </div>
    </Slider>
  );
}
