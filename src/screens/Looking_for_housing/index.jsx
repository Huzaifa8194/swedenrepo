import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import rentimage1 from "../../assets/iconscout/rentimage6.png";
import rentimage4 from "../../assets/iconscout/rentimage2.png";
import rentimage2 from "../../assets/iconscout/rentimage5.png";
import rentimage3 from "../../assets/iconscout/rentimage3.png";

import Header from "../../components/Header_New/Header";
const Looking_for_housing = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
    },
    {
      id: 5,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
    },
    {
      id: 18,
      title: "Direct Citizenship ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
    },
    {
      id: 20,
      title: "Golden Visa    ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
    },
  ];

  const [selectCountry, setSelectCountry] = useState(" ");
  const [deposit, setDeposit] = useState("");
  const [housing, setHousing] = useState("");

  const handleSelectChange = (e) => setSelectCountry(e.target.value);
  const handleDepositChange = (e) => setDeposit(e.target.value);
  const handleHousingChange = (e) => setHousing(e.target.value);

  return (
    <>
      <Header />

      <style>
        {`
          .custom-bg {
            background-color: rgb(0, 123, 255) !important;
          }
        `}
      </style>
      <Banner_Page
        highlightText={t("Looking For Housing")}
        regularText={t(
          "Find your ideal home in Sweden. Our comprehensive services guide you through every step of the housing search process."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" tw-pt-8 tw-bg-[#F5FAFF]">
        <section className=" tw-px-6 tw-bg-[#F5FAFF] 2xl:tw-pl-[14%] md:tw-pl-[10%] tw-pl-3 tw-pr-[3.5%] 2xl:tw-pr-[15%] md:tw-pr-[10%]">
          <section className=" tw-rounded-2xl tw-mb-1 px-4 tw-py-4 tw-shadow tw-bg-white ">
            <div className="tw-w-full ">
              <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                Looking for housing
              </span>
              <h2>
                Find Your Perfect Home with <strong>Us</strong>
              </h2>

              <p className="tw-text-gray">
                Searching for a new place to call home? Let us help you find the
                perfect match! Tell us what you're looking for, and we'll do the
                rest. By filling out the form below with your requirements, our
                team will connect you with the best options tailored to your
                needs, making your house-hunting journey as easy and stress-free
                as possible.
              </p>
            </div>
          </section>
        </section>
      </div>
      <section className=" tw-pb-8  tw-pr-12 tw-pl-4 tw-bg-[#F5FAFF]">
      
          <div className="row tw-gap-2 tw-justify-start tw-items-start">
            <div className="col-md-8 tw-mx-2">
              <div className=" tw-bg-[#F5FAFF] tw-pt-8 tw-pl-10 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[0%]">
                <form>
                  <div className="row g-3 tw-pt-6  tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                    <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Provide the details & We will assist you in finding the right place in
Skåne & Copenhagen.
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

                    <div className="col-md-6">

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
                     
                        <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                          <option>Select Skåne City</option>
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
                       

                        <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                          <option>Select Copenhagen City</option>
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
                     

                      <select
                        value={housing}
                        name="housing"
                        onChange={handleHousingChange}
                        className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                      >
                        <option>Select Housing Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Radhus">Radhus</option>
                        <option value="Shared Rooms">Shared Rooms</option>
                        <option value="Shared Beds">Shared Beds</option>
                      </select>
                    </div>


                    {housing != "Shared Beds"   ?
                    (
                    <div className="col-md-6">
                      

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Number of Rooms required?</option>

                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"5"}>6</option>
                        <option value={"7+"}>7+</option>
                      </select>
                    </div>) : null}

                    {housing === "Apartment"  || housing === "Radhus" ? (
                      <>
                        <div className="col-md-6">
                        

                          <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Number of Floor Required?</option>

                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                            <option value={"7"}>7</option>
                            <option value={"8"}>8</option>
                            <option value={"9"}>9</option>
                            <option value={"10"}>10</option>
                            <option value={"11"}>11</option>
                            <option value={"12"}>12</option>
                            <option value={"13"}>13</option>
                            <option value={"14"}>14</option>
                            <option value={"15"}>15</option>
                            <option value={"16"}>16</option>
                            <option value={"17"}>17</option>
                            <option value={"18+"}>18+</option>
                          </select>
                        </div>
                      </>
                    ) : null}




{housing === "Shared Rooms" || housing === "Shared Beds"   ? (
                      <>
                        <div className="col-md-6">
                        

                          <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Maximum beds in a room?</option>

                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5+"}>5+</option>
                           
                          </select>
                        </div>
                      </>
                    ) : null}

                    <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill up your family details
                      </span>
                      <h7 className="tw-text-light" style = {{fontSize:"1.8em", color:"#1F2437", fontWeight:"300"}} >Family Details</h7>
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
                        <option>Number of adults in the house?</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6 or +</option>
                      </select>
                    </div>
                    {/* <div className="col-md-6">
                      

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>How many children do you have?</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"N/A"}>N/A</option>
                      </select>
                    </div> */}

                    {/* <div className="col-md-6">
                     

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Do you have infants?</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4 or +</option>
                        <option value={"N/A"}>N/A</option>
                      </select>
                    </div> */}

                    <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill up your contract details
                      </span>
                      <h7 className="tw-text-light" style = {{fontSize:"1.8em", color:"#1F2437", fontWeight:"300"}} >Contract Details</h7>
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

<Input
  star={"*"}
  type={"number"}
  step="0.01"
  min="0"
  className={
    "tw-w-full border tw-py-2.5 tw-px-3 tw-rounded-xl mt-2"
  }
  label={"How much rent can you pay?"}
  placeholder={"How much rent can you pay?"}
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

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>What is the duration of your stay?</option>
                        <option value={"1 Month"}>1 Month</option>
                        <option value={"2 Month"}>2 Month</option>
                        <option value={"3 Month"}>3 Month</option>
                        <option value={"4 Month"}>4 Month</option>
                        <option value={"5 Month"}>5 Month</option>
                        <option value={"6 Month"}>6 Month</option>
                        <option value={"7 Month"}>7 Month</option>
                        <option value={"8 Month"}>8 Month</option>
                        <option value={"9 Month"}>9 Month</option>
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

                      <select
                        value={deposit}
                        name="deposit"
                        onChange={handleDepositChange}
                        className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                      >
                        <option>Are you willing to pay deposit?</option>
                        <option value={"yes"}>Yes</option>
                        <option value={"no"}>No</option>
                      </select>
                    </div>

                    {deposit === "yes" ? (
                      <>
                        <div className="col-md-6">
                          {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label> */}

                          <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>How many months of deposit?</option>
                            <option value={"1 Month"}>1 Month</option>
                            <option value={"2 Month"}>2 Month</option>
                            <option value={"3 Month"}>3 Month</option>
                            <option value={"4 Month"}>4 Month</option>
                            <option value={"5 Month"}>5 Month</option>
                            <option value={"6 Month"}>6 Month</option>
                          </select>
                        </div>
                      </>
                    ) : null}

                    <div className="col-md-6">
                     

                      <Input
                        star={"*"}
                        type={"date"}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                        }
                        label={"Expected moving date:"}
                        placeholder={"Expected moving date:"}
                      />
                    </div>

                    <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        Fill up your Other Details
                      </span>
                      <h7 className="tw-text-light" style = {{fontSize:"1.8em", color:"#1F2437", fontWeight:"300"}} >Other Details</h7>
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
                        <option>Do you have Pets?</option>
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
                        Your Property Type
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2">
                        <option>Do You Smoke?</option>
                        <option value={"yes"}>Yes</option>
                        <option value={"no"}>No</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={""}
                        required={true}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                        }
                        label={"* Why you are leaving your current place?"}
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
                        label={"Any other information?"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-12 tw-pb-12">
                      <Button
                        label={"SEND REQUEST"}
                        className={
                          " tw-uppercase tw-mx-auto  tw-text-sm    tw-py-3 tw-bg-primary  tw-w-full tw-rounded-xl  tw-text-white "
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-3    gap-3 tw-justify-center tw-text-center">
              <div className="tw-pr-[22.5%]">

              <div className=" tw-pt-6 tw-pb-0">
                <Link
                  to="/available_housing"
                  className="
        
          tw-bg-primary
          tw-text-white
          tw-px-6
          tw-py-3
          tw-w-full
          tw-rounded-lg
          tw-font-semibold
          tw-text-md
          tw-transition
          tw-duration-300
          hover:tw-bg-blue-100
          focus:tw-ring-2
          focus:tw-ring-blue-100
          active:tw-scale-95
          tw-shadow-lg
          hover:tw-shadow-xl
        "
                >
                  Available Housing
                </Link>
              </div>

              <img
                src={rentimage1}
                className=" tw-rounded-xl tw-w-full tw-mt-14 tw-bg-white tw-shadow-lg   "

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h7
                  className="tw-text-light"
                  style={{
                    fontSize: "1.3em",
                    color: "#1F2437",
                    fontWeight: "300",
                  }}
                >
                  Find Your Perfect Rental Home
                </h7>
                <p>
                  Fill out the form with your preferences, and we'll show you
                  the best rental options. Start your search today and discover
                  homes that fit your needs.
                </p>
              </div>

              <img
                src={rentimage2}
                className=" tw-rounded-xl tw-w-full tw-shadow-lg tw-bg-white"

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h7
                  className="tw-text-light"
                  style={{
                    fontSize: "1.3em",
                    color: "#1F2437",
                    fontWeight: "300",
                  }}
                >
                  Your Ideal Rental 
                </h7>
                <p>
                  Enter your details, and we’ll present rental homes that match
                  your criteria. Finding the perfect place has never been
                  easier.
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

export default Looking_for_housing;
