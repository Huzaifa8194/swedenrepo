import React, { useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";

import Header from "../../components/Header_New/Header";

import { useTranslation } from "react-i18next";

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import rentimage2 from "../../assets/iconscout/rentimage1.png";
import rentimage1 from "../../assets/iconscout/rentimage2.png";
import rentimage3 from "../../assets/iconscout/rentimage3.png";
import rentimage4 from "../../assets/iconscout/rentimage4.png";
import rentimage5 from "../../assets/iconscout/rentimage5.png";

import { color } from "framer-motion";

const Rent_out_your_housing = () => {
  const { t } = useTranslation();

  const [selectCountry, setSelectCountry] = useState(" ");

  const handleSelectChange = (e) => setSelectCountry(e.target.value);

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Rent Out Your House")}
        regularText={t(
          "Maximize your rental potential with ease. We provide support for listing and renting out your property efficiently."
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" md:tw-pt-8 tw-pt-8 tw-rounded-2xl  px-4 tw-py-4 tw-shadow-2xl tw-bg-[#F5FAFF]">
        <section className="tw-w-full">
          <div className=" tw-rounded-2xl  px-4 tw-py-4 tw-shadow-lg tw-bg-white">
            <div className="row tw-py-8 ">
              <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                Rent out your property
              </span>
              <h2>
                List Your Property with <strong>Us</strong>
              </h2>

             

              <p className="tw-text-gray">
                Looking to rent out your property quickly and efficiently?
                You've come to the right place! By listing your property on our
                platform, you'll gain access to a large audience of qualified
                tenants actively seeking their next home. Simply fill out the
                form below with your property's details to get started. The more
                precise and thorough the information you provide, the better
                we'll be able to match your property with the perfect tenants,
                maximizing your rental opportunities.
              </p>
            </div>
          </div>
        </section>

        <div className="container-fluid  tw-px-4 ">
          <div className="row tw-justify-left tw-items-start ">
            <div className="col-md-8 ">
              <div className="  tw-pt-8 tw-pl-10  ">
              

                <form>
                  <div className="row g-3 tw-pt-6  tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                   
                  <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                FILL UP THE DETAILS OF YOUR HOUSE
              </span>
              <h2>
              Details
              </h2>
                    </div>

                    <div
                      className="tw-border-t-2"
                      style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                    ></div>
                   
                   
                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Country
                      </label> */}

                      <select
                        value={selectCountry}
                        name="selectCountry"
                        onChange={handleSelectChange}
                        className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                      >
                        <option>Select Country</option>
                        <option value="Sweden - Skane">Sweden - Skane</option>
                        <option value="Denmark - Copenhagen">
                          Denmark - Copenhagen
                        </option>
                      </select>
                    </div>
                    {selectCountry === "Sweden - Skane" ? (
                      <div className="col-md-6">
                        {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Country
                      </label> */}
                        <label className=" tw-text-sm  tw-text-gray ">
                          Select Skåne City
                        </label>
                        <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                          <option>Choose Option</option>
                          <option value="Ängelholm">Ängelholm</option>
                          <option value="Åstorp">Åstorp</option>
                          <option value="Båstad">Båstad</option>
                          <option value="Bjuv">Bjuv</option>
                          <option value="Bromölla">Bromölla</option>
                          <option value="Burlöv">Burlöv</option>
                        </select>
                      </div>
                    ) : null}

                    {selectCountry === "Denmark - Copenhagen" ? (
                      <div className="col-md-6">
                        {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Country
                      </label> */}
                        <label className=" tw-text-sm  tw-text-gray ">
                          Select Denmark City
                        </label>
                        <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                          <option>Choose Option</option>
                          <option value="Ängelholm">Ängelholm</option>
                          <option value="Åstorp">Åstorp</option>
                          <option value="Båstad">Båstad</option>
                          <option value="Bjuv">Bjuv</option>
                          <option value="Bromölla">Bromölla</option>
                          <option value="Burlöv">Burlöv</option>
                        </select>
                      </div>
                    ) : null}

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select your type of house
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option> Select your type of house</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Radhus">Radhus</option>
                        <option value="Shared Rooms">Shared Rooms</option>
                        <option value="Shared Beds">Shared Beds</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Floor
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Select Floor</option>
                        <option value="Basement">Basement</option>
                        <option value="Ground Floor">Ground Floor</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Total rooms
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option> Total rooms are in the property?</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        className={
                          " tw-w-full border  tw-py-3 tw-rounded-xl mt-2 tw-px-2"
                        }
                        label={"Housing Area (square meters)?"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>

                    <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                FILL UP THE BASIC NECESSITIES OF YOUR HOUSE
              </span>
              <h2>
              BASIC NECESSITIES
              </h2>
                    </div>

                    <div
                      className="tw-border-t-2"
                      style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                    ></div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Furnished?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option> Furnished?</option>
                        <option value={"yes"}>Yes</option>
                        <option value={"partly"}>Partly</option>
                        <option value={"Flexible"}>Flexible</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is car parking included?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option> Is car parking included?</option>
                        <option value={"Included"}>Included</option>
                        <option value={"Not Included"}>Not Included</option>
                        <option value={"N/A"}>N/A</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are pets allowed?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Are pets allowed?</option>
                        <option value={"Allowed"}>Allowed</option>
                        <option value={"Not Allowed"}>Not Allowed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is smoking allowed?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Is smoking allowed?</option>
                        <option value={"Allowed"}>Allowed</option>
                        <option value={"Not Allowed"}>Not Allowed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is electricity included?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Is electricity included?</option>
                        <option value={"Included"}>Included</option>
                        <option value={"Not Included"}>Not Included</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is lift available?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg  mt-2">
                        <option>Is lift available?</option>
                        <option value={"Allowed"}>Allowed</option>
                        <option value={"Not Allowed"}>Not Allowed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is internet included?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Is internet included?</option>
                        <option value={"Included"}>Included</option>
                        <option value={"Not Included"}>Not Included</option>
                      </select>
                    </div>

                    <div className="col-md-6"></div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is washing machine available?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Is washing machine available?</option>
                        <option value={"Available"}>Available</option>
                        <option value={"Not Available"}>Not Available</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is dishwasher available?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option> Is dishwasher available?</option>
                        <option value={"Available"}>Available</option>
                        <option value={"Available"}>Not Available</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is heat & water includes in rent?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Is heat & water includes in rent?</option>
                        <option value={"Available"}>Available</option>
                        <option value={"Not Available"}>Not Available</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is balcony/terrace available?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Is balcony/terrace available?</option>
                        <option value={"Included"}>Included</option>
                        <option value={"Not Included"}>Not Included</option>
                      </select>
                    </div>

                    <div className="row g-1 tw-rounded-md  tw-pt-10  tw-pb-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                FILL UP THE CONTRACT DETAILS OF YOUR HOUSE
              </span>
              <h2>
              CONTRACT DETAILS
              </h2>
                    </div>
                    <div
                      className="tw-border-t-2"
                      style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                    ></div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Contract Type?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Select Contract Type</option>
                        <option value={"First Hand"}> First Hand</option>
                        <option value={"Second Hand"}>Second Hand</option>
                        <option value={"Other"}>Other</option>
                        <option value={"N/A"}>N/A</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are you looking for deposit?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>How much rent are you looking for?</option>
                        <option value={"yes"}>Yes</option>
                        <option value={"no"}>No</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Maximum people can stay in this residence?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Are you looking for deposit?</option>
                        <option value={"yes"}>Yes</option>
                        <option value={"no"}>No</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>
                          Maximum people can stay in this residence?
                        </option>
                        <option value={"1"}>1 </option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>What is the duration of rent out?</option>
                        <option value={"1 Month "}>1 Month </option>
                        <option value={"1 Months"}>2 Months</option>
                        <option value={"3 Months "}>3 Months</option>
                        <option value={"4 Months"}>4 Months</option>
                        <option value={"5 Months"}>5 Months</option>
                      </select>
                    </div>

                    <div className="row   tw-rounded-md  tw-pt-10 tw-pb-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                FILL UP THE PROPERTY DETAILS & PICTURES OF YOUR HOUSE
              </span>
              <h2>
              PROPERTY DETAILS & PICTURES
              </h2>
                    </div>
                    <div
                      className="tw-border-t-2"
                      style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                    ></div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Your Property Type
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2">
                        <option>Your Property Type</option>
                        <option value={"Rental Property"}>
                          Rental Property
                        </option>
                        <option value={"Shared Property"}>
                          Shared Property
                        </option>
                        <option value={"Own Property"}>Own Property</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={"text"}
                        className={
                          " tw-w-full border tw-py-2.5 tw-px-3  tw-rounded-xl mt-2"
                        }
                        label={"Your Property Address"}
                        placeholder={"Complete Address"}
                      ></Input>
                    </div>

                    <div className="col-md-6">
                      <input
                        star={"*"}
                        type={"file"}
                        className={
                          " tw-w-full tw-rounded-xl tw-mt-2 border tw-py-2.5 tw-px-3 "
                        }
                        label={"Upload Property Pictures"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>

                    <div className="row   tw-rounded-md  tw-pt-10 tw-pb-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                FILL UP THE PROPERTY BANK DETAILS
              </span>
              <h2>
              BANK DETAILS
              </h2> 
                    </div>
                    <div
                      className="tw-border-t-2"
                      style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                    ></div>

                    <div className="col-md-12">
                      <Input
                        star={"*"}
                        type={"text"}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 mt-2  tw-rounded-2xl"
                        }
                        label={"Bank Name"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={""}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                        }
                        label={"Branch Code"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={""}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl "
                        }
                        label={"Account No"}
                        placeholder={""}
                      />
                    </div>

                    <div className="row   tw-rounded-md  tw-pt-10 tw-pb-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                FILL UP THE PROPERTY BANK DETAILS
              </span>
              <h2>
              FURTHER BANK DETAILS
              </h2>
                    </div>

                    <div
                      className="tw-border-t-2"
                      style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                    ></div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Bank Country
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Select Bank Country</option>
                        <option value={"Rental Property"}>
                          Rental Property
                        </option>
                        <option value={"Shared Property"}>
                          Shared Property
                        </option>
                        <option value={"Own Property"}>Own Property</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={"text"}
                        className={
                          " tw-w-full border tw-py-2.5 tw-px-3 mt-2  tw-rounded-xl"
                        }
                        label={"Bank Name"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={""}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  mt-2"
                        }
                        label={"Branch Code"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={""}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  mt-2"
                        }
                        label={"Account No"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-12 tw-pb-12">
                      <Button
                        label={"SEND REQUEST"}
                        className={
                          " tw-uppercase tw-mx-auto  tw-text-sm   tw-bg-primary tw-py-3   tw-w-full tw-rounded-xl  tw-text-white "
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4  row gap-3 tw-justify-center tw-text-center">
             
             <div></div>
             <img
                src={rentimage1}
                className=" tw-rounded-3xl tw-w-full tw-mt-14  "

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h7 className="tw-text-light" style = {{fontSize:"1.6em", color:"#1F2437", fontWeight:"300"}} >Maximize Your Property’s Potential</h7>
                <p>
                  Leverage our platform to showcase your property to a wide
                  range of potential tenants. Fill out the necessary
                  information, and we’ll guide you through every step to ensure
                  a smooth rental experience.
                </p>
              </div>

              <img
                src={rentimage2}
                className=" tw-rounded-3xl tw-w-full"

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h7 className="tw-text-light" style = {{fontSize:"1.6em", color:"#1F2437", fontWeight:"300"}} >Personalized Search Experience</h7>
                <p>
                  We prioritize your preferences to show only the most relevant
                  listings. Whether it’s a cozy apartment or a spacious family
                  home, let us help you find the place you’ll love.
                </p>
              </div>

              <img
                src={rentimage3}
                className=" tw-rounded-3xl tw-w-full"

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h7 className="tw-text-light" style = {{fontSize:"1.6em", color:"#1F2437", fontWeight:"300"}} >Trust and Transparency</h7>
                <p>
                  Our goal is to make renting a hassle-free experience. We
                  provide clear information on each property, ensuring you feel
                  confident in every step of the rental process.
                </p>
              </div>

              <img
                src={rentimage4}
                className=" tw-rounded-3xl tw-w-full"

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h7 className="tw-text-light" style = {{fontSize:"1.6em", color:"#1F2437", fontWeight:"300"}} >Rent Out Your Home with Ease</h7>
                <p>
                  Start the process of renting out your property by filling in
                  the details about your house. Our simple form helps you get
                  started quickly, so you can start earning from your space
                  without the stress.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rent_out_your_housing;
