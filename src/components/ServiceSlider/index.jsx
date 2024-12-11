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
import { useTranslation } from '../../context/TranslationContext';
import sr1 from "../../assets/iconscout/sr1.png"
import sr2 from "../../assets/iconscout/sr2.png"
import sr3 from "../../assets/iconscout/sr3.png"






const ServiceSlider = () => {
  const {t} = useTranslation();
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

  const slides = [
    {
      title: t("Your Gateway to A"),
      subtitle: t("Seamless Relocation Experience"),
      image: sr1,
      buttonLabel: t("Book a consultation!"),
      buttonLabel2: t("Contact Us"),
    },
    {
      title: t("Simplifying Immigration"),
      subtitle: t("One Move at a Time"),
      image: sr2,
      buttonLabel: t("Book a consultation!"),
      buttonLabel2: t("Contact Us"),
    },


    {
      title: t("Expert Guidance "),
      subtitle: t("for Your Global Journey"),
      image: sr3,
      buttonLabel: t("Book a consultation!"),
      buttonLabel2: t("Contact Us"),
    },
  ];
  



  return (
    <>
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slider-slide" style={{ position: 'relative' }}>


<img
  src={slide.image}

  className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-rounded-2xl tw-object-contain tw-bg-white tw-shadow-lg"
/>
           {/* <VideoPlayer src={video1} className = "slider-image"/> */}
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
