import React from "react";
import footer_map from "../../assets/images/footer_map.png";
import { Link } from "react-router-dom";
import playstore from "../../assets/images/Google-play.png";
import applestore from "../../assets/images/App-Store.png";
import sweden from "../../assets/images/icons8-sweden.png";
import denmark from "../../assets/images/icons8-denmark.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <>
        {/*footer start*/}
        <footer className="footer tw-z-50 tw-bg-primary">
          <div className="first-footer tw-pt-12">
            <div className="container tw-px-0">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget_text mr-25 res-991-mr-0">
                    <h5 className="tw-text-white">{t("About Us")}</h5>
                    <hr className="tw-border-blue tw-border-2 tw-opacity-80 m-0 tw-w-7" />
                    <div className="textwidget widget-text tw-mt-6">
                      <p className="tw-text-cyan-50 tw-font-light">
                        {t(
                          "We are Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offer quality guidance, effective advice and provide information to our clients to settle down in the country."
                        )}
                      </p>

                      <ul className="p-0 tw-leading-2">
                        <li className="tw-flex tw-gap-1">
                          <div>
                            <img src={sweden} alt="" />
                          </div>
                          <p className="m-0 tw-text-white">
                            {t("REG 559025-2648")}
                          </p>
                        </li>
                        <li className="tw-flex tw-gap-1">
                          <div>
                            <img src={denmark} alt="" />
                          </div>
                          <p className="m-0 tw-text-white">
                            {t("CVR 41200677")}
                          </p>
                        </li>
                      </ul>
                    </div>

                    <hr className="tw-border tw-border-gray" />
                    <div className="social-icons circle">
                      <ul className="list-inline p-0 tw-flex tw-gap-2 cmt-textcolor-skincolor">
                        {/* Social media links */}
                      </ul>
                    </div>
                    <div className="tw-flex tw-gap-3">
                      <Link to="https://apps.apple.com/ca/app/sweden-relocators/id1621885091">
                        <img
                          src={applestore}
                          alt=""
                          className="tw-w-28 tw-object-contain"
                        />
                      </Link>
                      <Link to="https://play.google.com/store/apps/details?id=se.swedenrelocators.sweden_relocators">
                        <img
                          src={playstore}
                          alt=""
                          className="tw-w-28 tw-object-contain"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget_nav_menu clearfix">
                    <h5 className="tw-text-white">{t("Useful Links")}</h5>
                    <hr className="tw-border-blue tw-border-2 tw-opacity-80 m-0 tw-w-5" />
                    <ul className="p-0 tw-mt-6">
                      <li className="tw-flex tw-items-center tw-gap-2">
                        <hr className="tw-w-3 tw-opacity-75 tw-border-white tw-border-2" />
                        <Link
                          to="/about_us"
                          className="tw-text-white tw-uppercase tw-font-light"
                        >
                          {t("About Us")}
                        </Link>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-2">
                        <hr className="tw-w-3 tw-opacity-75 tw-border-white tw-border-2" />
                        <Link
                          to="/contact_us"
                          className="tw-text-white tw-uppercase tw-font-light"
                        >
                          {t("Contact Us")}
                        </Link>
                      </li>
                      {/* Additional links */}
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget-recent-post clearfix">
                    <h5 className="widget-title tw-text-white">
                      {t("Media & News")}
                    </h5>
                    <hr className="tw-border-blue tw-border-2 tw-opacity-80 m-0 tw-w-5" />
                    <ul className="p-0 tw-mt-6">
                      <li className="tw-flex tw-gap-4">
                        <Link to="">
                          <img
                            className="img-fluid"
                            width={140}
                            height={150}
                            src="https://swedenrelocators.se/wp-content/uploads/2021/07/business-startup-2-150x150.png"
                            alt="post-img"
                          />
                        </Link>
                        <div className="tw-flex tw-flex-col">
                          <span className="post-date tw-text-white">
                            <i className="fa fa-calendar" />
                            {t("Apr 06, 2020")}
                          </span>
                          <Link className="tw-text-white tw-text-sm">
                            {t(
                              "5 Things To Keep In Mind If You Are Relocating To..."
                            )}
                          </Link>
                        </div>
                      </li>
                      {/* Additional news items */}
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget contact_map clearfix">
                    <h5 className="widget-title tw-text-white">
                      {t("Get in Touch")}
                    </h5>
                    <hr className="tw-border-blue tw-border-2 tw-opacity-80 m-0 tw-w-5" />
                    <div className="tw-mt-5">
                      <img
                        width={257}
                        height={164}
                        className="img-fluid"
                        src={footer_map}
                        alt=""
                      />
                    </div>
                    <ul className="tw-mt-5">
                      <li className="tw-text-white tw-text-base">
                        <i className="cmt-textcolor-skincolor tw-text-blue fa fa-map-marker" />
                        {t("Amiralsgatan 86E 214 37 Malmö, Sweden")}
                      </li>
                      <li className="tw-text-white tw-text-base">
                        <i className="cmt-textcolor-skincolor tw-text-blue fa fa-map-marker" />
                        {t("Roskildevej 30B, 2620 Albertslund, Denmark")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-footer tw-pt-8">
            <div className="container py-3">
              <div className="row">{/* Additional sections */}</div>
            </div>
          </div>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center tw-py-1">
                    <p className="tw-text-white tw-text-sm">
                      {t("Copyright © 2024")}
                      <Link
                        to="https://swedenrelocators.se"
                        className="tw-text-white"
                      >
                        {t("SWEDEN RELOCATORS AB")}
                      </Link>{" "}
                      {t("Powered By") + " - "}
                      <Link
                        className="tw-text-white"
                        to="https://globalvisa.eu/"
                      >
                        {t("GLOBALVISA.EU")}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*footer end*/}
      </>
    </>
  );
};

export default Footer;
