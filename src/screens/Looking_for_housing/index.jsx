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
import rentimage1 from "../../assets/images/rentoutyourhouse1.png";
import rentimage2 from "../../assets/images/rentoutyourhouse2.png";
import rentimage3 from "../../assets/images/rentoutyourhouse3.png";
import rentimage4 from "../../assets/images/rentoutyourhouse4.png";
import rentimage5 from "../../assets/images/rentoutyourhouse5.png";

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
        <section className=" tw-bg-[#F5FAFF]">
          <div className="container tw-rounded-2xl tw-mb-1 px-4 tw-py-4 tw-shadow tw-bg-white">
            <div className="row tw-py-8">
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
          </div>
        </section>
      </div>
      <section className=" md:tw-pt-2 tw-pt-4 tw-bg-[#F5FAFF]">
        <div className="container-fluid  tw-bg-[#F5FAFF] ">
          <div className="row tw-justify-start tw-items-start">
            <div className="col-md-8 tw-mx-2">
              <div className=" tw-bg-[#F5FAFF] tw-pt-8 ">
                <div className="row g-3 tw-pt-6 tw-rounded-2xl  px-4 tw-py-4 tw-shadow tw-bg-white ">
                  <h5 className=" tw-text-black  "> Details</h5>

                  <h6 className=" tw-text-black ">
                    {" "}
                    <i class="fa fa-building"></i> Provide the details & We will
                    assist you in finding the right place in Skåne & Copenhagen.
                  </h6>
                </div>

                <form>
                  <div className="row g-3 tw-pt-6  tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
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
                        {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Country
                      </label> */}

                        <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                          <option>Select Denmark City</option>
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

                      <select
                        value={housing}
                        name="housing"
                        onChange={handleSelectChange}
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

                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Floor
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>Select Required Floor?</option>

                        <option value={"Basement"}>Basement</option>
                        <option value={"Ground Floor"}>Ground Floor</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                      </select>
                    </div>

                    {housing === "Apartment" ? (
                      <>
                        <div className="col-md-6">
                          {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Floor
                      </label> */}

                          <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Number of Rooms Required?</option>

                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                            <option value={"6"}>7 or +</option>
                          </select>
                        </div>
                      </>
                    ) : null}

                    <div className="row g-3 tw-rounded-md tw-py-4 tw-bg-white border-t-2 border-b-2 border-black">
                      <h5 className="tw-text-black">Family Details</h5>

                      <h6 className="tw-text-gray">
                        Fill up your family details
                      </h6>
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
                    <div className="col-md-6">
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is car parking included?
                      </label> */}

                      <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                        <option>How many children do you have?</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
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
                        <option>Do you have infants?</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4 or +</option>
                        <option value={"N/A"}>N/A</option>
                      </select>
                    </div>

                    <div className="row g-3 tw-rounded-md tw-py-4 tw-bg-white border-t-2 border-b-2 border-black">
                      <h5 className="tw-text-black">Contract Details</h5>

                      <h6 className="tw-text-gray">
                        Fill up your contract details
                      </h6>
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
                        type={""}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                        }
                        label={" How much rent you can pay?"}
                        placeholder={""}
                      />
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
                      {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label> */}

                      <Input
                        star={"*"}
                        type={""}
                        className={
                          " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                        }
                        label={"Expected moving date:"}
                        placeholder={""}
                      />
                    </div>

                    <div className="row g-3 tw-rounded-md tw-py-4 tw-bg-white border-t-2 border-b-2 border-black">
                      <h5 className="tw-text-black">Other Details</h5>

                      <h6 className="tw-text-gray">
                        Fill up your Other Details
                      </h6>
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

            <div className="col-md-4  row gap-3 tw-justify-center tw-text-center">
              <div></div>
              <img
                src={rentimage1}
                className=" tw-rounded-3xl tw-w-full tw-mt-14  "

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h2>Find Your Perfect Rental Home</h2>
                <p>
                  Fill out the form with your preferences, and we'll show you
                  the best rental options. Start your search today and discover
                  homes that fit your needs.
                </p>
              </div>

              <img
                src={rentimage2}
                className=" tw-rounded-3xl tw-w-full"

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h2>Your Ideal Rental Is Just a Few Clicks Away</h2>
                <p>
                  Enter your details, and we’ll present rental homes that match
                  your criteria. Finding the perfect place has never been
                  easier.
                </p>
              </div>

              <img
                src={rentimage3}
                className=" tw-rounded-3xl tw-w-full"

                // keeps image fixed at the top of its container while scrolling
              />

              <div className="">
                {" "}
                <h2>Browse Homes That Fit Your Needs</h2>
                <p>
                  Complete the form, and we’ll match you with available rental
                  properties. Find a home that suits your style and budget
                  today.
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
