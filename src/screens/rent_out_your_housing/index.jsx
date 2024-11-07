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

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"




const Rent_out_your_housing = () => {
  
  const {t} = useTranslation();


  const [selectCountry,setSelectCountry] = useState(" ")

  const handleSelectChange = (e) => setSelectCountry(e.target.value);

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Rent Out Your House")}
    regularText={t("Maximize your rental potential with ease. We provide support for listing and renting out your property efficiently.")}
    backgroundImage={homeBgImage} 
/>
      <section className=" md:tw-pt-8 tw-pt-8">


      <section className="tw-bg-[#F5FAFF] tw-p-5">
  <div className="container ">
    <div className="row md:tw-px-40 sd:tw-px-0">
    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Rent out your property
                    </span>
      <h2>
        List Your Property with <strong>Us</strong>
      </h2>

      <p className="tw-text-gray">
        Looking to rent out your property quickly and efficiently? You've come
        to the right place! By listing your property on our platform, you'll
        gain access to a large audience of qualified tenants actively seeking
        their next home. Simply fill out the form below with your property's
        details to get started. The more precise and thorough the information
        you provide, the better we'll be able to match your property with the
        perfect tenants, maximizing your rental opportunities.
      </p>
    </div>
  </div>
</section>




        <div className="container-fluid ">
          <div className="row tw-justify-center tw-items-center">
            <div className="col-md-8">
              <div className=" tw-bg-white tw-pt-14  ">
                <div className="  tw-bg-primary tw-text-center tw-rounded-md tw-py-4  px-3">
                  <h6 className=" tw-text-white tw-m-0">
                    {" "}
                    <i class="fa fa-building"></i> FILL UP THE DETAILS OF YOUR
                    HOUSE
                  </h6>
                </div>

                <form>
                  <div className="row g-3 tw-pt-6 ">
                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Country
                      </label> */}
                      <label className=" tw-text-sm  tw-text-gray ">
                        Select Country
                      </label>
                      <select  value={selectCountry}
                            name="selectCountry"
                            onChange={handleSelectChange} className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
                        <option value="Sweden - Skane">Sweden - Skane</option>
                        <option value="Denmark - Copenhagen">
                          Denmark - Copenhagen
                        </option>
                      </select>
                    </div>
                    {selectCountry==="Sweden - Skane"?(
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
                      <select  className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
                        <option value="Ängelholm">Ängelholm</option>
                        <option value="Åstorp">
                        Åstorp
                        </option>
                        <option value="Båstad">
                        Båstad
                        </option>
                        <option value="Bjuv">
                        Bjuv
                        </option>
                        <option value="Bromölla">
                        Bromölla
                        </option>
                        <option value="Burlöv">
                        Burlöv
                        </option>
                      </select>
                    </div>
                    ):null}

{selectCountry==="Denmark - Copenhagen"?(
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
                      <select  className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
                        <option value="Ängelholm">Ängelholm</option>
                        <option value="Åstorp">
                        Åstorp
                        </option>
                        <option value="Båstad">
                        Båstad
                        </option>
                        <option value="Bjuv">
                        Bjuv
                        </option>
                        <option value="Bromölla">
                        Bromölla
                        </option>
                        <option value="Burlöv">
                        Burlöv
                        </option>
                      </select>
                    </div>
                    ):null}
                    
                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select your type of house
                      </label> */}
                      <label className=" tw-text-sm  tw-text-gray ">
                        Select your type of house
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Select Floor
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Total rooms are in the property?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className=" tw-text-sm  tw-text-gray ">
                        Housing Area (square meters)?
                      </label>
                      <Input
                        star={"*"}
                        className={
                          " tw-w-full border  tw-py-3 tw-rounded-xl mt-2 tw-px-2"
                        }
                        label={"Housing Area (square meters)?"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>

                    <div className="  tw-bg-primary  tw-rounded-md tw-py-3.5  px-3">
                      <h6 className=" tw-text-white tw-m-0">
                        BASIC NECESSITIES
                      </h6>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Furnished?
                      </label> */}

                      <label className=" tw-text-sm  tw-text-gray ">
                        Furnished?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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

                      <label className=" tw-text-sm  tw-text-gray ">
                        Is car parking included?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Are pets allowed?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is smoking allowed?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is electricity included?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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

                      <label className=" tw-text-sm  tw-text-gray ">
                        Is lift available?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg  mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is internet included?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is washing machine available?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is dishwasher available?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is heat & water includes in rent?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Is balcony/terrace available?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
                        <option value={"Included"}>Included</option>
                        <option value={"Not Included"}>Not Included</option>
                      </select>
                    </div>

                    <div className="  tw-bg-primary  tw-rounded-md tw-py-3  px-3">
                      <h6 className=" tw-text-white tw-m-0">
                        CONTRACT DETAILS
                      </h6>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Contract Type?
                      </label> */}
                      <label className=" tw-text-sm  tw-text-gray ">
                        Select Contract Type
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        How much rent are you looking for?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Are you looking for deposit?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Maximum people can stay in this residence?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        What is the duration of rent out?
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
                        <option value={"1 Month "}>1 Month </option>
                        <option value={"1 Months"}>2 Months</option>
                        <option value={"3 Months "}>3 Months</option>
                        <option value={"4 Months"}>4 Months</option>
                        <option value={"5 Months"}>5 Months</option>
                      </select>
                    </div>

                    <div className=" tw-bg-primary  tw-rounded-md tw-py-3 px-3">
                      <h6 className=" tw-text-white tw-m-0">
                        PROPERTY DETAILS & PICTURES
                      </h6>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Your Property Type
                      </label> */}
                        <label className=" tw-text-sm  tw-text-gray ">
                        Your Property Type
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2">
                        <option>Choose Option</option>
                        <option value={'Rental Property'}>Rental Property</option>
                        <option value={'Shared Property'}>Shared Property</option>
                        <option value={'Own Property'}>Own Property</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                    <label className=" tw-text-sm  tw-text-gray ">
                        Your Property Type
                      </label>
                      <textarea
                        star={"*"}
                        type={"text"}
                        className={
                          " tw-w-full border tw-py-2.5 tw-px-3  tw-rounded-xl mt-2"
                        }
                        label={"Your Property Address"}
                        placeholder={"Complete Address"}
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                    <label className=" tw-text-sm  tw-text-gray ">
                    Upload Property Pictures
                      </label>
                      <input
                        star={"*"}
                        type={"file"}
                        className={" tw-w-full tw-rounded-xl tw-mt-2 border tw-py-2.5 tw-px-3 "}
                        label={"Upload Property Pictures"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>



                    <div className="   tw-bg-primary tw-rounded-md tw-py-3  px-3">
                      <h6 className=" tw-text-white tw-m-0">BANK DETAILS</h6>
                    </div>

                   
                    <div className="col-md-12">
                      <label className=" tw-text-sm  tw-text-gray ">
                      Your Full Name
                      </label>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                      Your Email
                      </label>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                      Your Phone Number
                      </label>
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

                    <div className="   tw-bg-primary tw-rounded-md tw-py-3  px-3">
                      <h6 className=" tw-text-white tw-m-0">BANK DETAILS</h6>
                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Bank Country
                      </label> */}
                      <label className=" tw-text-sm  tw-text-gray ">
                        Select Bank Country
                      </label>
                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Choose Option</option>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Bank Name
                      </label>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Branch Code
                      </label>
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
                      <label className=" tw-text-sm  tw-text-gray ">
                        Account No
                      </label>
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
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rent_out_your_housing;