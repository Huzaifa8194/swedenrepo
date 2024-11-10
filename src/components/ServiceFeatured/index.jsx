import React from 'react';
import Slider from 'react-slick';
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


const FeatureSection = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    autoplay: true,
    centerMode: false,
    centerPadding: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="cmt-row features-section cmt-bgcolor-grey bg-img1 cmt-bg cmt-bgimage-yes cmt-bg-pattern clearfix">
      <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title style2">
              <div className="title-header">
                <h5>who we are</h5>
                <h2 className="title">
                  Immigration and citizenship
                  <strong> choose your country!</strong>
                </h2>
              </div>
              <div className="title-desc">
                <p>
                  We are an expert visa consultant focusing on providing quick services to all your travelling needs.
                  Be it a visa, travel insurance, flight ticketing, we cover it all.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slick Slider for feature boxes */}
        <div className='row'>
        <Slider {...settings} className=" slick_slider">
          {[
            {
              img: 'https://via.placeholder.com/720x600?text=720x600+country-01.jpg',
              flag: 'https://via.placeholder.com/100x100?text=100x100+flag_01.jpg',
              country: 'United States',
              description: 'We will help you in every step of the Visa application process.',
            },
            {
              img: 'https://via.placeholder.com/720x600?text=720x600+country-02.jpg',
              flag: 'https://via.placeholder.com/100x100?text=100x100+flag_02.jpg',
              country: 'Australia',
              description: 'Applicants are of Australia, returning to live citizenship',
            },
            {
              img: 'https://via.placeholder.com/720x600?text=720x600+country-03.jpg',
              flag: 'https://via.placeholder.com/100x100?text=100x100+flag_03.jpg',
              country: 'Canada',
              description: 'Apply to travel, study, work or immigrate citizenship or PR.',
            },
            {
              img: 'https://via.placeholder.com/720x600?text=720x600+country-04.jpg',
              flag: 'https://via.placeholder.com/100x100?text=100x100+flag_04.jpg',
              country: 'United Kingdom',
              description: 'Millions of the decisions about who has the right to visit or stay.',
            },
            {
              img: 'https://via.placeholder.com/720x600?text=720x600+country-05.jpg',
              flag: 'https://via.placeholder.com/100x100?text=100x100+flag_05.jpg',
              country: 'India',
              description: 'We will help you with every step of the process of immigration',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail">
                    <a href="#" tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href="#" tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href="#" tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>

        {/* View More Button */}
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-35 res-991-mt-20">
              <a className="cmt-btn cmt-btn-size-md cmt-btn-shape-round cmt-btn-style-border cmt-btn-color-dark" href="#">
                View More country!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
