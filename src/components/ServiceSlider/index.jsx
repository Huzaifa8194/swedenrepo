import React from 'react';
import Slider from 'react-slick';
import servicebanner1 from "../../assets/iconscout/servicebanner1.png";
import servicebanner2 from "../../assets/iconscout/servicebanner_2.png";
import video1 from '../../assets/images/hero_video.mp4';
import VideoPlayer from '../videoPlayer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/bootstrap.min.css';
import './style/animate.css';
import './style/font-awesome.css';
import './style/themify-icons.css';
import './style/flaticon.css';
import './style/slick.css';
import './style/prettyPhoto.css';
import './style/shortcodes.css';
import './style/main.css';
import './style/megamenu.css';
import './style/responsive.css';
import "./Slider.css"

const slides = [
  {
    title: "TRAVELS IMMIGARTATION & VISA",
    subtitle: "World Brilliant Student Immigration & Visa Company",
    image: video1,
    buttonLabel: "Book a consultation!",
    buttonLabel2: "Contact Us",
  },
  {
    title: "Welcome To The Fastest Way",
    subtitle: "Get A Visa & Immigration",
    image: video1,
    buttonLabel: "Book a consultation!",
    buttonLabel2: "Contact Us",
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slider-slide" style={{ position: 'relative' }}>
           <VideoPlayer src={video1} className = "slider-image"/>
          <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
          <div className="slider-content">
            <h3 className="slider-title">{slide.title}</h3>
            <h2 className="slider-subtitle">
              {slide.subtitle.split(" ").map((word, idx) =>
                word.toLowerCase() === 'visa' || word.toLowerCase() === 'immigration' ? (
                  <div style ={{display: 'inline'}} key={idx} className="highlighted-text">{word} </div>
                ) : (
                  `${word} `
                )
              )}
            </h2>
            <button className="slider-button">{slide.buttonLabel}</button>
            <button className="slider-button2">{slide.buttonLabel2}</button>
          </div>
        </div>
      ))}
    </Slider>
    
      </>

  );
};

export default ServiceSlider;
