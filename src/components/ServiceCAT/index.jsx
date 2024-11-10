import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/bootstrap.min.css";
import "./style/animate.css";
import "./style/font-awesome.css";
import "./style/themify-icons.css";
import "./style/flaticon.css";
import "./style/slick.css";
import "./style/prettyPhoto.css";
import "./style/shortcodes.css";
import "./style/main.css";
import "./style/megamenu.css";
import "./style/responsive.css";

const ServiceCat = () => {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    infinite: false,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 678, settings: { slidesToShow: 2 } },
      { breakpoint: 460, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="cmt-row cat-section cmt-bgcolor-darkgrey bg-img2 cmt-bg cmt-bgimage-yes cmt-bg-pattern clearfix">
      <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h5>What we do</h5>
                <div style={{ color: "white", fontSize: "2.5em", fontWeight: "200" }}>
                  We Provide Experts Create Great
                  <br />
                  Value for <strong>Visa Categories</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slick Slider */}
        <div className="row">
          <div className="col-lg-12">
            <div className="featuredbox-number">
              <Slider {...sliderSettings} className="slick_slider">
                {/* Featured Item 1 */}
                <div className="col-lg-12">
                  <div className="featured-icon-box style1 icon-align-top-content bor_rad_5">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                        <i className="flaticon-bussiness-man"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Skilled Worker Visa</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          For the persons whose jobs require a minimum work
                          experience.
                        </p>
                      </div>
                      <div className="cmt-di_links">
                        <a href="#" className="di_link">
                          <i className="ti ti-angle-right"></i>
                        </a>
                        <span className="di_num">
                          <i className="cmt-num ti-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Item 2 */}
                <div className="col-lg-12 tw-mt-4">
                  <div className="featured-icon-box style1 icon-align-top-content bor_rad_5">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                        <i className="flaticon-passport-6"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Business Visa</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          People who want to invest in or about to start
                          businesses abroad.
                        </p>
                      </div>
                      <div className="cmt-di_links">
                        <a href="#" className="di_link">
                          <i className="ti ti-angle-right"></i>
                        </a>
                        <span className="di_num">
                          <i className="cmt-num ti-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Item 3 */}
                <div className="col-lg-12 ">
                  <div className="featured-icon-box style1 icon-align-top-content bor_rad_5">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                        <i className="flaticon-passport-14"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Work Permit</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          To work refers to manage systems used to ensure that
                          work is done nicely.
                        </p>
                      </div>
                      <div className="cmt-di_links">
                        <a href="#" className="di_link">
                          <i className="ti ti-angle-right"></i>
                        </a>
                        <span className="di_num">
                          <i className="cmt-num ti-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Item 4 */}
                <div className="col-lg-12 tw-mt-4">
                  <div className="featured-icon-box style1 icon-align-top-content bor_rad_5">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                        <i className="flaticon-visa-1"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Green Card</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          For the permanent residents visa documents issued
                          under to immigration.
                        </p>
                      </div>
                      <div className="cmt-di_links">
                        <a href="#" className="di_link">
                          <i className="ti ti-angle-right"></i>
                        </a>
                        <span className="di_num">
                          <i className="cmt-num ti-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Item 5 */}
                <div className="col-lg-12">
                  <div className="featured-icon-box style1 icon-align-top-content bor_rad_5">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                        <i className="flaticon-graduation-hat"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Student Visa</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          For the perception & better career opportunities for
                          the students.
                        </p>
                      </div>
                      <div className="cmt-di_links">
                        <a href="#" className="di_link">
                          <i className="ti ti-angle-right"></i>
                        </a>
                        <span className="di_num">
                          <i className="cmt-num ti-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Explore All Visa Categories Link */}
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-35 mb_20 res-991-mt-20">
              <h6>
                <span className="font-weight-normal">
                  Don’t Hesitate, Contact us for Better Help and Services.
                </span>
                <u>
                  <a className="cmt-textcolor-skincolor" href="#">
                    Explore all visa Categories.
                  </a>
                </u>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCat;
