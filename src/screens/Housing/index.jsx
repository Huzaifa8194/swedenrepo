import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { PiMapPin } from "react-icons/pi";
import work from "../../assets/images/how-it-works.png";
import camera from "../../assets/images/no-picture-taking.png";
import payments from "../../assets/images/failed.png";
import agreement from "../../assets/images/view-document.png";
import rent from "../../assets/images/find-home.png";
import house from "../../assets/images/looking-for-housing.png";


import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Teams from "../teams";
import New_Listings from "../../components/New_listings";
import { FaCamera } from "react-icons/fa6";
import Popular from "../../components/Popular";

import Header from '../../components/Header_New/Header';
const Housing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner_Page 
  highlightText={"Housing"} 
  regularText={"Your home in Sweden is just a step away. Explore options across cities and neighborhoods that suit your needs. Let us help you find the perfect place to settle in."} 
  backgroundImage={homeBgImage} 
/>

      <div className=" ">
        <div className="  md:tw-mt-44 tw-mt-44">
          <div className="container-fluid">
            <section className="">
              <div className="container  tw-my-7 tw-rounded-md tw-shadow-lg tw-bg-white ">
                <div className="   tw-gap-12  tw-grid md:tw-grid-cols-4 tw-grid-cols-2 p-2 tw-w-full">
                  <div className=" tw-w-full   tw-items-end tw-flex tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">
                        I’m looking to...
                      </p>
                      <h6>Buy Apartments</h6>
                    </div>

                    <div>
                      <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>

                  <div className=" tw-w-full tw-flex tw-items-end  tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">Location</p>
                      <h6>Berlin, Germany</h6>
                    </div>

                    <div className=" tw-pb-2">
                      <PiMapPin />
                    </div>
                  </div>

                  <div className=" tw-w-full tw-items-end tw-flex tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">Price Range</p>
                      <h6>$10,000 - $200,000</h6>
                    </div>

                    <div>
                      <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>

                  <div className=" tw-w-full ">
                    <Button
                      label={"SEARCH"}
                      className={
                        " tw-bg-blue tw-text-white tw-py-3.5  tw-w-full tw-rounded-md"
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container tw-py-5">
                <div className="tw-flex tw-justify-center">
                  <h3 className=" tw-flex tw-items-center tw-gap-0 tw-justify-center">
                    <img src={work} alt="" className="tw-w-24" /> How It Works
                  </h3>
                </div>
                <p className=" tw-text-gray"></p>
                <div className=" col  tw-pt-5">
                <div className="tw-mx-8">
                    <div className="tw-flex tw-items-start">
                      <img src={camera} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Photos</h5>
                        <p className="tw-text-gray">
                          Documentation Before tenants move into a property, we
                          conduct a thorough inspection and take detailed
                          photographs of the residence. This documentation
                          ensures that the condition of the property is clearly
                          recorded, providing both landlords and tenants with a
                          clear reference point for any future assessments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-mx-8">
                    <div className="tw-flex tw-items-start">
                      <img src={rent} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Rental Agreements</h5>
                        <p className="tw-text-gray">
                          We draft comprehensive rental agreements that clearly
                          outline the terms and conditions of the lease. Our
                          goal is to ensure that both parties understand their
                          obligations and rights. We also streamline the payment
                          process to guarantee that transactions are secure and
                          hassle-free, creating a seamless experience for both
                          tenants and landlords.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-mx-8">
                    <div className="tw-flex tw-items-start">
                      <img src={payments} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Security Deposit</h5>
                        <p className="tw-text-gray">
                          Management We take special care to manage the security
                          deposit process efficiently. Our commitment is to
                          ensure that the tenant's deposit is fully refunded on
                          the agreed move-out date, provided there are no
                          damages to the property beyond normal wear and tear.
                          This process protects both parties and provides peace
                          of mind.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-mx-8">
                    <div className="tw-flex tw-items-start">
                      <img src={agreement} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Service Charges (Tenants)</h5>
                        <p className="tw-text-gray">
                          For our rental services, we charge a one-time service
                          fee to tenants, which applies to leases with a minimum
                          duration of one year. This fee covers the
                          comprehensive support and management services we
                          provide throughout the rental process, ensuring a
                          smooth and well-coordinated experience from start to
                          finish.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="row g-4">
              <div className=" tw-py-12 tw-text-center">
                {/* <span>EXPopular</span> */}
                <h2>
                  <h1>Explore Popular Location</h1>
                </h2>
                <p className=" tw-text-gray">
                  Explore the latest listings & projects in diverse areas
                </p>

                <Popular />
              </div>
            </div>
            <New_Listings />
            {/* <div className="row g-4">
              <div className=" tw-py-12 tw-text-center">
                <span>EXPERT TEAM</span>
                <h2>
                  Meet With Our <h1>Dedicated Team Members</h1>
                </h2>

                <Teams />
              </div>
            </div> */}
          </div>
        </div>

        <section className=" tw-flex  tw-items-center tw-bg-Journey tw-bg-fixed tw-bg-center tw-bg-cover  tw-h-[60vh]">
          <div className=" container">
            <div className=" row">
              <div className=" col-md-6">
                <div>
                  <h2 className=" text-white h2">
                    Start your Journey As a Retailer.
                  </h2>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-w-full tw-relative">
                  <input
                    placeholder="Email address"
                    className=" tw-bg-white  tw-h-20 tw-outline-none  tw-pl-4 tw-rounded-xl tw-w-full"
                  />
                  <Button
                    label={"Get Started"}
                    className={
                      " tw-bg-blue tw-py-4 tw-rounded-xl tw-text-white tw-absolute tw-top-3 tw-right-3"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Housing;
