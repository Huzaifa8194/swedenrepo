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

import assess1 from "../../assets/images/BusinessAssessment.png";
import assess2 from "../../assets/images/VisitVisaAssessment.png";
import assess3 from "../../assets/images/StudyAssesmment.png";
import assess4 from "../../assets/images/WorkPermit.png";
import assess5 from "../../assets/images/ass5.png";
import assess6 from "../../assets/images/ass6.png";





import asylumphoto from "../../assets/iconscout/asylum.png";
import personnumberphoto from "../../assets/iconscout/personnummber.png";
import businesspermit from "../../assets/iconscout/businesspermit.png";
import citzenship from "../../assets/iconscout/citizenship.png";
import eapermit from "../../assets/iconscout/eapermit.png";
import parents from "../../assets/iconscout/parents.png";
import marrigedivorce from "../../assets/iconscout/marrigedivorce.png";
import companyreg from "../../assets/iconscout/companyreg.png";
import houses from "../../assets/iconscout/houses.png";
import relocation from "../../assets/iconscout/relocation.png";
import appeals from "../../assets/iconscout/appeals.png";
import investment from "../../assets/iconscout/investment.png";
import directinvestment from "../../assets/iconscout/directinvestment.png";
import DCI from "../../assets/iconscout/property.png";
import goldenvisa from "../../assets/iconscout/goldenvisa.png";
import cpr from "../../assets/iconscout/cpr.png";






const FeatureSection = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 0,
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
                  Immigration and citizenship<br/>
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
              img: asylumphoto,
              flag: asylumphoto,
              country: 'Asylum',
              description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum and we will process it for you.',
              to: '/asylum',
            },
            {
              img: assess5,
              flag: assess5,
              country: 'Family Reunification',
              description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
              to: '/family-reunification',
            },
            {
              img: personnumberphoto,
              flag: personnumberphoto,
              country: 'Personnummer Sweden',
              description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
              to: '/personnumer-sweden',
            },
           
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12 tw-h-[200px]" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5 ">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid " src={feature.img}    alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid tw-h-[200px]" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to}tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to}tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>


        <Slider {...settings} className=" slick_slider">
          {[
            {
              img: cpr,
              flag: cpr,
              country: 'CPR Number Denmark',
              to: '/cpr-number-denmark',
              description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System in short CPR.',
            },
            {
              img: assess4,
              flag: assess4,
              country: 'Work Permit',
              to: '/work-permit',
              description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.',
            },
            {
              img: businesspermit,
              flag: businesspermit,
              country: 'Business Permit',
              to: '/business-permit',
              description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to} tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to} tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>



        <Slider {...settings} className=" slick_slider">
          {[
            {
              img: assess3,
              flag: assess3,
              to: '/business-visit',
              country: 'Business Visit',
              description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.',
            },
            {
              img: citzenship,
              flag: citzenship,
              to: '/citizenship',
              country: 'Citizenship',
              description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.',
            },
            {
              img: assess3,
              flag: assess3,
              to: '/study-in-eu',
              country: 'Study in EU',
              description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to} tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to} tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings} className=" slick_slider">
          {[
            {
              img:  assess2,
              flag: assess2,
              to: '/global-visit-visas',
              country: 'Global Visit Visas',
              description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.',
            },
            {
              img: eapermit,
              flag: eapermit,
              to: '/eea-permits',
              country: 'EEA Permits',
              description: 'Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.',
            },
            {
              img: parents,
              flag: parents,
              to: '/parents-eu-permit',
              country: 'Parents EU Permit',
              description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to} tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to} tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>


        <Slider {...settings} className=" slick_slider">
          {[
            {
              img: marrigedivorce,
              flag: marrigedivorce,
              to: '/marriage-divorce',
              country: 'Marriage & Divorce',
              description: 'Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.',
            },
            {
              img: companyreg,
              flag: companyreg,
              to: '/company-registration',
              country: 'Company Registration',
              description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.',
            },
            {
              img: houses,
              flag: houses,
              to: '/house-offices',
              country: 'House & Offices',
              description: 'we offer you an easy and painless solution where you can get a place to live without any worries.',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to} tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to} tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>


        <Slider {...settings} className=" slick_slider">
          {[
            {
              img: appeals,
              flag: appeals,
              to: '/appeal-cases',
              country: 'Appeal Cases',
              description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
            },
            {
              img: relocation,
              flag: relocation,
              to: '/eu-family-reunification',
              country: 'EU Citizens Relocation',
              description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.',
            },
            {
              img: investment,
              flag: investment,
              to: '/investment',
              country: 'Investment',
              description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to} tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to} tabIndex="-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings} className=" slick_slider">
          {[
            {
              img: directinvestment,
              flag: directinvestment,
              to: '/direct-citizenship-by-investments',
              country: 'Direct Citizenship by Investments',
              description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.',
            },
            {
              img: DCI,
              flag: DCI,
              to: '/permanent-residence',
              country: 'Permanent Residence',
              description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.',
            },
            {
              img: goldenvisa,
              flag: goldenvisa,
               to: '/golden-visa-greece-portugal',
              country: 'Golden Visa (Greece - Portugal)',
              description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.',
            },
          ].map((feature, index) => (
            <div className="cmt-box-col-wrapper col-lg-12" key={index}>
              <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                <div className="cmt-box-view-content-inner">
                  <div className="featured-thumbnail" style={{ height: "300px" }}>
                    <a href={feature.to} tabIndex="-1">
                      <img className="img-fluid" src={feature.img} alt="image" />
                    </a>
                  </div>
                  <div className="featured-content">
                    <div className="featured-content-icon_img-block">
                      <img className="img-fluid" src={feature.flag} alt="image" />
                    </div>
                    <div className="featured-title">
                      <h5>
                        <a href={feature.to} tabIndex="-1">{feature.country}</a>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>{feature.description}</p>
                    </div>
                    <a className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor" href={feature.to} tabIndex="-1">
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
                View More Services!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
