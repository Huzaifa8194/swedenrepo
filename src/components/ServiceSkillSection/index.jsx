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

import { useEffect, useState } from 'react';

const ProgressBar = ({ title, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="cmt-progress-bar clearfix">
      <div className="progressbar-title">{title}</div>
      <div className="progress-bar-inner">
        <div
          className="progress-bar progress-bar-color-bar_skincolor"
          style={{ width: `${progress}%` }} // Dynamically set width
        ></div>
      </div>
      <div className="progress-bar-percent">{progress}%</div>
    </div>
  );
};


const SkillSection = () => {

  
  return (
    <section className="cmt-row skill-section clearfix">
      <div className="container">
        <div className="row row-equal-height">
          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-7 mx-auto">
            <div className="d-flex cmt-boxes-spacing-20px">
              <div className="cmt-box-col-wrapper">
                {/* ttm_single_image-wrapper */}
                <div className="ttm_single_image-wrapper">
                  <img
                    className="img-fluid"
                    src={houses}
                    alt="single_01"
                  />
                </div>
                <div className="ttm_single_image-wrapper tw-pt-8">
                  <img
                    className="img-fluid"
                    src={cpr}
                    alt="single_01"
                  />
                </div>
              </div>
              
              <div className="cmt-box-col-wrapper">
                
                
                {/* ttm_single_image-wrapper */}
                <div className="ttm_single_image-wrapper pb-20">
                  <img
                    className="img-fluid"
                    src= {asylumphoto}
                    alt="single_02"
                  />
                </div>
                {/* ttm_single_image-wrapper */}
                <div className="ttm_single_image-wrapper">
                  <img
                    className="img-fluid"
                    src= {citzenship}
                    alt="single_03"
                  />
                </div>
                
              </div>
            </div>
            <div className="m-auto cmt-textcolor-white pt-15 pb-0 mt_190 pr-30 pl-30 z-index-1 cmt-bgcolor-skincolor">
              <a href="https://youtu.be/7e90gBu4pas" target="_self" className="cmt_prettyphoto">
                <div className="d-flex align-items-center">
                  <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-white cmt-icon_element-size-sm mb-15 mr-2">
                    <i className="ti ti-control-play"></i>
                  </div>
                  <h5>Working Since 1987</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-xs-12">
            <div className="pl-15 mt-15 text-left res-991-pl-0 res-991-mt-15">
              {/* section title */}
              <div className="section-title">
                <div className="title-header">
                  <h5>ABOUT consultant</h5>
                  <h2 className="title">
                    Immigration Services From <strong>Experienced Agents.</strong>
                  </h2>
                </div>
                <div className="title-desc">
                  The Most Eminent Visas and Immigration Consultant service provider. Branches in India and overseas.
                </div>
              </div>
              {/* section title end */}

              <div className="pt-10 pb-35">
                {/* cmt-progress-bar */}
                <ProgressBar title="Immigration Consultant" percentage={92} />
                {/* cmt-progress-bar end */}
                {/* cmt-progress-bar */}
                <ProgressBar title="Study and work visa" percentage={80} />
                {/* cmt-progress-bar end */}
                {/* cmt-progress-bar */}
                <ProgressBar title="Business visit visa" percentage={88} />
                {/* cmt-progress-bar end */}
              </div>



             
                {/* cmt-progress-bar end */}
                           <p className="mb-0">
                Foundation was established with a small idea that was incepted in the minds of its promoters in the year 1994! We skillfully guide applicants for their immigration process to any country they aspire to settle.{' '}
                <a className="cmt-textcolor-skincolor" href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
};

export default SkillSection;
