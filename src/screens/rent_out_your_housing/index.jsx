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
import rentimage2 from "../../assets/iconscout/rentimage2.png";
import rentimage1 from "../../assets/iconscout/rentimage1.png";
import rentimage3 from "../../assets/iconscout/rentimage3.png";
import rentimage4 from "../../assets/iconscout/rentimage4.png";
import rentimage5 from "../../assets/iconscout/rentimage5.png";
import Select from "../../components/Selecttab";

import { color } from "framer-motion";

const Rent_out_your_housing = () => {
  const { t } = useTranslation();


  const [selectCountry, setSelectCountry] = useState("");
  const [skaneCity, setSkaneCity] = useState("");
  const [denmarkCity, setDenmarkCity] = useState("");
  const [houseType, setHouseType] = useState("");
  const [floor, setFloor] = useState("");
  const [totalRooms, setTotalRooms] = useState("");
  const [furnished, setFurnished] = useState("");
  const [carParking, setCarParking] = useState("");
  const [petsAllowed, setPetsAllowed] = useState("");
  const [smokingAllowed, setSmokingAllowed] = useState("");
  const [electricityIncluded, setElectricityIncluded] = useState("");
  const [liftAvailable, setLiftAvailable] = useState("");
  const [internetIncluded, setInternetIncluded] = useState("");
  const [washingMachine, setWashingMachine] = useState("");
  const [dishwasher, setDishwasher] = useState("");
  const [heatWaterIncluded, setHeatWaterIncluded] = useState("");
  const [balconyAvailable, setBalconyAvailable] = useState("");
  const [contractType, setContractType] = useState("");
  const [lookingForDeposit, setLookingForDeposit] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [rentDuration, setRentDuration] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bankCountry, setBankCountry] = useState("");
  


  const handleSelectChange = (event) => {
    const { name, value } = event.target;
  
    switch (name) {
      case "selectCountry":
        setSelectCountry(value);
        break;
      case "skaneCity":
        setSkaneCity(value);
        break;
      case "denmarkCity":
        setDenmarkCity(value);
        break;
      case "houseType":
        setHouseType(value);
        break;
      case "floor":
        setFloor(value);
        break;
      case "totalRooms":
        setTotalRooms(value);
        break;
      case "furnished":
        setFurnished(value);
        break;
      case "carParking":
        setCarParking(value);
        break;
      case "petsAllowed":
        setPetsAllowed(value);
        break;
      case "smokingAllowed":
        setSmokingAllowed(value);
        break;
      case "electricityIncluded":
        setElectricityIncluded(value);
        break;
      case "liftAvailable":
        setLiftAvailable(value);
        break;
      case "internetIncluded":
        setInternetIncluded(value);
        break;
      case "washingMachine":
        setWashingMachine(value);
        break;
      case "dishwasher":
        setDishwasher(value);
        break;
      case "heatWaterIncluded":
        setHeatWaterIncluded(value);
        break;
      case "balconyAvailable":
        setBalconyAvailable(value);
        break;
      case "contractType":
        setContractType(value);
        break;
      case "lookingForDeposit":
        setLookingForDeposit(value);
        break;
      case "maxPeople":
        setMaxPeople(value);
        break;
      case "rentDuration":
        setRentDuration(value);
        break;
      case "propertyType":
        setPropertyType(value);
        break;
      case "bankCountry":
        setBankCountry(value);
        break;
      default:
        break;
    }
  };
  

 

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Lease your Property")}
        regularText={t(
          "Maximize your rental potential with ease. We provide support for listing and renting out your property efficiently."
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" md:tw-pt-8 tw-pt-8   px-4 tw-py-4 tw-shadow-2xl tw-bg-[#F5FAFF] ">
        <section className="tw-w-full tw-px-8  2xl:tw-pl-[14%] md:tw-pl-[10%] tw-pl-3 tw-pr-[3.5%] 2xl:tw-pr-[15%] md:tw-pr-[10%]">
          <div className="    px-10 tw-py-4  tw-bg-[#F5FAFF] ">
            <div className="tw-px-8 tw-py-8 tw-bg-white tw-rounded-2xl tw-shadow-lg">
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
          <div className="row tw-justify-left  tw-gap-5 tw-items-start ">
            <div className="col-md-8 ">
              <div className="  tw-pt-8 tw-pl-10   2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[0%]">
                <form>
                  <div className="row g-3 tw-pt-6  tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                    <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill out the details of your house.
                      </span>
                      <h7
                        className="tw-text-light"
                        style={{
                          fontSize: "1.8em",
                          color: "#1F2437",
                          fontWeight: "300",
                        }}
                      >
                        Details
                      </h7>
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

<Select
  label="Select Country"
  name="selectCountry"
  options={[
    { value: "Sweden - Skane", label: "Sweden - Skane" },
    { value: "Denmark - Copenhagen", label: "Denmark - Copenhagen" },
  ]}
  value={selectCountry}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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
                     <Select
  label="Select Skåne City"
  name="skaneCity"
  options={[
    { value: "Ängelholm", label: "Ängelholm" },
    { value: "Åstorp", label: "Åstorp" },
    { value: "Båstad", label: "Båstad" },
    { value: "Bjuv", label: "Bjuv" },
    { value: "Bromölla", label: "Bromölla" },
    { value: "Burlöv", label: "Burlöv" },
  ]}
  value={skaneCity}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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
                    <Select
  label="Select Denmark City"
  name="denmarkCity"
  options={[
    { value: "Ängelholm", label: "Ängelholm" },
    { value: "Åstorp", label: "Åstorp" },
    { value: "Båstad", label: "Båstad" },
    { value: "Bjuv", label: "Bjuv" },
    { value: "Bromölla", label: "Bromölla" },
    { value: "Burlöv", label: "Burlöv" },
  ]}
  value={denmarkCity}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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

<Select
  label="Select House Type"
  name="houseType"
  options={[
    { value: "Apartment", label: "Apartment" },
    { value: "Villa", label: "Villa" },
    { value: "Radhus", label: "Radhus" },
    { value: "Shared Rooms", label: "Shared Rooms" },
    { value: "Shared Beds", label: "Shared Beds" },
  ]}
  value={houseType}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Floor
                      </label> */}

<Select
  label="Select Floor"
  name="floor"
  options={[
    { value: "Basement", label: "Basement" },
    { value: "Ground Floor", label: "Ground Floor" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ]}
  value={floor}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Total rooms
                      </label> */}

<Select
  label="Total Rooms in Property"
  name="totalRooms"
  options={[
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ]}
  value={totalRooms}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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
                        Fill up the information of your basic Necessities.
                      </span>
                      <h7
                        className="tw-text-light"
                        style={{
                          fontSize: "1.8em",
                          color: "#1F2437",
                          fontWeight: "300",
                        }}
                      >
                       Basic Necessities
                      </h7>
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

<Select
  label="Furnished"
  name="furnished"
  options={[
    { value: "yes", label: "Yes" },
    { value: "partly", label: "Partly" },
    { value: "Flexible", label: "Flexible" },
    { value: "No", label: "No" },
  ]}
  value={furnished}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>
                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is car parking included?
                      </label> */}

<Select
  label="Is Car Parking Included?"
  name="carParking"
  options={[
    { value: "Included", label: "Included" },
    { value: "Not Included", label: "Not Included" },
    { value: "N/A", label: "N/A" },
  ]}
  value={carParking}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are pets allowed?
                      </label> */}

<Select
  label="Are Pets Allowed?"
  name="petsAllowed"
  options={[
    { value: "Allowed", label: "Allowed" },
    { value: "Not Allowed", label: "Not Allowed" },
  ]}
  value={petsAllowed}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is smoking allowed?
                      </label> */}

<Select
  label="Is Smoking Allowed?"
  name="smokingAllowed"
  options={[
    { value: "Allowed", label: "Allowed" },
    { value: "Not Allowed", label: "Not Allowed" },
  ]}
  value={smokingAllowed}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is electricity included?
                      </label> */}

<Select
  label="Is Electricity Included?"
  name="electricityIncluded"
  options={[
    { value: "Included", label: "Included" },
    { value: "Not Included", label: "Not Included" },
  ]}
  value={electricityIncluded}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is lift available?
                      </label> */}

<Select
  label="Is Lift Available?"
  name="liftAvailable"
  options={[
    { value: "Allowed", label: "Allowed" },
    { value: "Not Allowed", label: "Not Allowed" },
  ]}
  value={liftAvailable}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is internet included?
                      </label> */}

<Select
  label="Is Internet Included?"
  name="internetIncluded"
  options={[
    { value: "Included", label: "Included" },
    { value: "Not Included", label: "Not Included" },
  ]}
  value={internetIncluded}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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

<Select
  label="Is Washing Machine Available?"
  name="washingMachine"
  options={[
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
  ]}
  value={washingMachine}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is dishwasher available?
                      </label> */}

<Select
  label="Is Dishwasher Available?"
  name="dishwasher"
  options={[
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
  ]}
  value={dishwasher}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is heat & water includes in rent?
                      </label> */}

<Select
  label="Is Heat & Water Included in Rent?"
  name="heatWaterIncluded"
  options={[
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
  ]}
  value={heatWaterIncluded}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is balcony/terrace available?
                      </label> */}

<Select
  label="Is Balcony/Terrace Available?"
  name="balconyAvailable"
  options={[
    { value: "Included", label: "Included" },
    { value: "Not Included", label: "Not Included" },
  ]}
  value={balconyAvailable}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="row g-1 tw-rounded-md  tw-pt-10  tw-pb-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill out the details of your contract.
                      </span>
                      <h7
                        className="tw-text-light"
                        style={{
                          fontSize: "1.8em",
                          color: "#1F2437",
                          fontWeight: "300",
                        }}
                      >
Contract Details                      </h7>
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

<Select
  label="Select Contract Type"
  name="contractType"
  options={[
    { value: "First Hand", label: "First Hand" },
    { value: "Second Hand", label: "Second Hand" },
    { value: "Other", label: "Other" },
    { value: "N/A", label: "N/A" },
  ]}
  value={contractType}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are you looking for deposit?
                      </label> */}
                     <Input
  star={"*"}
  type={"number"}
  step="0.01"
  min="0"
  className={
    "tw-w-full border tw-py-2.5 tw-px-3 tw-rounded-xl mt-2"
  }
  label={"How much rent are you looking for?"}
  placeholder={"Enter the rent amount"}
></Input>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Maximum people can stay in this residence?
                      </label> */}

<Select
  label="Are You Looking for Deposit?"
  name="lookingForDeposit"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={lookingForDeposit}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label> */}

<Select
  label="Maximum People Can Stay"
  name="maxPeople"
  options={[
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ]}
  value={maxPeople}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label> */}

<Select
  label="Duration of Rent Out"
  name="rentDuration"
  options={[
    { value: "1 Month", label: "1 Month" },
    { value: "2 Months", label: "2 Months" },
    { value: "3 Months", label: "3 Months" },
    { value: "4 Months", label: "4 Months" },
    { value: "5 Months", label: "5 Months" },
  ]}
  value={rentDuration}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                    </div>


                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are you looking for deposit?
                      </label> */}
                      <Input
                        star={"*"}
                        type={"date"}
                        className={
                          " tw-w-full border tw-py-2.5 tw-px-3  tw-rounded-xl mt-2"
                        }
                        label={"Perfer Rentout Date:"}
                        placeholder={"Perfer Rentout Date:"}
                      ></Input>
                    </div>

                    <div className="row   tw-rounded-md  tw-pt-10 tw-pb-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                       Fill out your property detail along with pictures.
                      </span>
                      <h7
                        className="tw-text-light"
                        style={{
                          fontSize: "1.8em",
                          color: "#1F2437",
                          fontWeight: "300",
                        }}
                      >
                        Property Details and Pictures
                      </h7>
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

<Select
  label="Property Type"
  name="propertyType"
  options={[
    { value: "Rental Property", label: "Rental Property" },
    { value: "Shared Property", label: "Shared Property" },
    { value: "Own Property", label: "Own Property" },
  ]}
  value={propertyType}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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

                      <label>
                      <p className="tw-text-gray tw-pl-4">File Allowed type (jpg,jpeg,png) | Maxium File size limit(5 mb)</p>
                      </label>
                    </div>

                    <div className="row   tw-rounded-md  tw-pt-10 tw-pb-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill out your contact details.
                      </span>
                      <h7
                        className="tw-text-light"
                        style={{
                          fontSize: "1.8em",
                          color: "#1F2437",
                          fontWeight: "300",
                        }}
                      >
                        Contact Details
                      </h7>
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
                        label={"Your Full Name"}
                        placeholder={"Your Full Name"}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={"email"}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                        }
                        label={"Your email"}
                        placeholder={"Your email"}
                      />
                    </div>

                    <div className="col-md-6">
                    <Input
  star={"*"}
  type={"tel"}
  className={
    "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
  }
  label={"Your phone number"}
  placeholder={"Your phone number"}
/>

                    </div>

                    <div className="row   tw-rounded-md  tw-pt-10 tw-pb-4  tw-bg-white " >
                      <span className=" tw-flex tw-items-center tw-justify-ns tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill out your bank details.
                      </span>
                      <h7
                        className="tw-text-light"
                        style={{
                          fontSize: "1.8em",
                          color: "#1F2437",
                          fontWeight: "300",
                        }}
                      >
                         Bank Details
                      </h7>
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

<Select
  label="Bank Country"
  name="bankCountry"
  options={[
    { value: "Sweden", label: "Sweden" },
    { value: "Denmark", label: "Denmark" },
    { value: "International", label: "International" },
  ]}
  value={bankCountry}
  onChange={handleSelectChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

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

                    <div className="col-md-4">
                      <Input
                        star={"*"}
                        type={"text"}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  mt-2"
                        }
                        label={"Branch Code"}
                        placeholder={"Branch Code"}
                      />
                    </div>

                    <div className="col-md-8">
                      <Input
                        star={"*"}
                        type={"text"}
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

            <div className="col-md-3    gap-3 tw-justify-center tw-text-center">
              <div className="tw-pr-[22.5%]">

              <img
                src={rentimage1}
                className=" tw-rounded-xl tw-w-full tw-mt-14 tw-bg-white tw-shadow-lg   "
              
                // keeps image fixed at the top of its container while scrolling
              />

              <div className="" >
                {" "}
                <h7
                  className="tw-text-light"
                  style={{
                    fontSize: "1.2em",
                    color: "#1F2437",
                    fontWeight: "300",
                    
                  }}
                >
                  Maximize Your Property’s Potential
                </h7>
                <p>
                  Leverage our platform to showcase your property to a wide
                  range of potential tenants. Fill out the necessary
                  information, and we’ll guide you through every step to ensure
                  a smooth rental experience.
                </p>
              </div>

              <img
                src={rentimage2}
                className=" tw-rounded-xl tw-w-full tw-mt-14 tw-bg-white tw-shadow-lg "
             
                // keeps image fixed at the top of its container while scrolling
              />

              <div className=""  >
                {" "}
                <h7
                  className="tw-text-light"
                  style={{
                    fontSize: "1.2em",
                    color: "#1F2437",
                    fontWeight: "300",
                  }}
                >
                  Personalized Search Experience
                </h7>
                <p>
                  We prioritize your preferences to show only the most relevant
                  listings. Whether it’s a cozy apartment or a spacious family
                  home, let us help you find the place you’ll love.
                </p>
              </div>

              <img
                src={rentimage3}
                className=" tw-rounded-xl tw-w-full tw-mt-14 tw-bg-white tw-shadow-lg "
              
                // keeps image fixed at the top of its container while scrolling
              />

              <div className=""  >
                {" "}
                <h7
                  className="tw-text-light"
                  style={{
                    fontSize: "1.2em",
                    color: "#1F2437",
                    fontWeight: "300",
                  }}
                >
                  Trust and Transparency
                </h7>
                <p>
                  Our goal is to make renting a hassle-free experience. We
                  provide clear information on each property, ensuring you feel
                  confident in every step of the rental process.
                </p>
              </div>

              <img
                src={rentimage4}
                className=" tw-rounded-xl tw-w-full tw-mt-14 tw-bg-white tw-shadow-lg "
                
                // keeps image fixed at the top of its container while scrolling
              />

              <div className=""  >
                {" "}
                <h7
                  className="tw-text-light"
                  style={{
                    fontSize: "1.2em",
                    color: "#1F2437",
                    fontWeight: "300",
                  }}
                >
                  Rent Out Your Home with Ease
                </h7>
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rent_out_your_housing;
