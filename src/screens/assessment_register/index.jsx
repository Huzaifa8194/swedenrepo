import React, { useEffect, useState } from "react";
import blog1 from "../../assets/images/single-img-04.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";
import profile from "../../assets/images/profile.png";
import { FaFacebookF } from "react-icons/fa";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { GoTriangleRight } from "react-icons/go";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { TfiAngleLeft } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import Assessment_modal from "./Assessment_modal";
import Header from "../../components/Header_New/Header";

import Select from "../../components/Selecttab";

import { useTranslation } from "react-i18next";

const Assessment_register = () => {
  const { t } = useTranslation();
  const { id } = useParams();
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
      Link: "/asylum",
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link: "/family-reunification",
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link: "/personnumer-sweden",
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link: "/cpr-number-denmark",
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link: "/work-permit",
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link: "/business-permit",
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),

      Link: "/business-visit",
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link: "/citizenship",
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link: "/study-in-eu",
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link: "/global-visit-visas",
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link: "/eea-permits",
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link: "/parents-eu-permit",
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link: "/marriage-divorce",
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/company-registration",
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/house-offices",
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link: "/appeal-cases",
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link: "/eu-family-reunification",
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link: "/investment",
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link: "/direct-citizenship-by-investments",
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link: "/permanent-residence",
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  const [location, setLocation] = useState("");
  const [plan, setPlans] = useState("");
  const [buy, setBuys] = useState("");
  const [personalStatus, setPersonalStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [residencePermit, setResidencePermit] = useState("");
  const [personnummer, setPersonnummer] = useState("");
  const [coordinationNumber, setCoordinationNumber] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [separateAssets, setSeparateAssets] = useState("");
  const [depents, setDepents] = useState("");
  const [knowsomeone, setknowsomeone] = useState("");

  const [knowsomeone_legalstatus, setKnowsomeonelegalstatus] = useState("");

  const [knowsomeone_personnummer, setKnowsomeonepersonnummber] = useState("");

  const [movealongwithfamily, setMoveAlongWithFamily] = useState("");

  const [seperateassets, setSeperateAssets] = useState("");

  const [seperateassetsamount, setSeperateAssetsAmount] = useState("");

  const [schengen, setSchenger] = useState("");

  const [schengenissuecountry, setSchengerIssueCountry] = useState("");

  const [schengentype, setSchengerType] = useState("");

  const [schengenexpirydate, setSchengerExpiryDate] = useState("");

  const [schengendetail, setSchengerDetail] = useState("");

  const [past2years, setPast2Years] = useState("");

  const [past2yearscountry, setPast2YearsCountry] = useState("");

  const [past2yearsrejection, setPast2YearsRejection] = useState("");
  const [past2yearsrejectionreason, setPast2YearsRejectionReason] =
    useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "location":
        setLocation(value);
        break;



        case "past2years":
          setPast2Years(value);
          break;


          case "past2yearscountry":
            setPast2YearsCountry(value);
            break;


            case "past2yearsrejection":
              setPast2YearsCountry(value);
              break;

              case "past2yearsrejectionreason":
              setPast2YearsRejectionReason(value);
              break;

      case "schengen":
        setSchenger(value);
        break;

      case "schengenissuecountry":
        setSchengerIssueCountry(value);
        break;

      case "schengenexpirydate":
        setSchengerExpiryDate(value);
        break;

      case "schengentype":
        setSchengerType(value);
        break;

      case "schengendetail":
        setSchengerDetail(value);
        break;

      case "movealongwithfamily":
        setMoveAlongWithFamily(value);
        break;

      case "seperateassets":
        setSeperateAssets(value);
        break;

      case "seperateassetsamount":
        setSeperateAssetsAmount(value);
        break;

      case "knowsomeone_legalstatus":
        setKnowsomeonelegalstatus(value);
        break;

      case "knowsomeone_personnummber":
        setKnowsomeonepersonnummber(value);
        break;

      case "knowsomeone":
        setknowsomeone(value);
        break;
      case "personalStatus":
        setPersonalStatus(value);
        break;
      case "plan":
        setPlans(value);
        break;
      case "buy":
        setBuys(value);
        break;
      case "maritalStatus":
        setMaritalStatus(value);
        break;
      case "residencePermit":
        setResidencePermit(value);
        break;
      case "personnummer":
        setPersonnummer(value);
        break;
      case "coordinationNumber":
        setCoordinationNumber(value);
        break;
      case "investmentAmount":
        setInvestmentAmount(value);
        break;
      case "separateAssets":
        setSeparateAssets(value);
        break;
      case "depents":
        setDepents(value);
        break;
      default:
        break;
    }

    // if (name === "maritalStatus" && value === "yes") {
    //   setCoordinationNumber("");
    // } else if (name === "maritalStatus" && value === "no") {
    //   setPersonnummer("");
    // } else if (name === "location" && value === "yes") {
    //   setLocation("");
    // } else if (name === "location" && value === "no") {
    //   setLocation("");
    // }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("BUSINESS VISA ASSESSMENT")}
        regularText={t(
          "Secure your business visa assessment confidently. We guide you through the process for a seamless experience."
        )}
        backgroundImage={homeBgImage}
      />

      <section className=" ">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Business visa assessment
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                        Find Out Your Eligibility for a Business or
                        Self-Employed Permit in Sweden
                      </strong>
                    </h2>
                    <br/>
                    <strong className="tw-text-gray">Who Should Fill Out the Assessment Form?</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Individuals currently in Sweden or applying from
                          outside the country
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Those who are studying in Sweden and looking to switch
                          their residence permit track.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Anyone considering applying for a business or
                          self-employed permit in Sweden
                        </p>
                      </li>
                    </ul>


<br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Why
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Complete the Assessment Form?
                      </strong>
                    </h2>


                   <br/>
                    <p className="tw-text-gray">
                      Filling out the assessment form allows us to gather
                      essential details about:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Your Business Experience: Information about your
                          skills and expertise in the relevant field.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Financial Situation: Details of your financial
                          capacity to support your business.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Business Plan: Insights into your proposed business
                          idea, its viability, and potential for success.
                        </p>
                      </li>
                    </ul>


<br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      How
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      We Use the Information
                      </strong>
                    </h2>

                   <br/>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          We will evaluate your qualifications based on the
                          provided details.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Our team will guide you through the next steps of the
                          application process.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          We'll ensure you meet all the necessary requirements
                          for a successful permit application.
                        </p>
                      </li>
                    </ul>

                    <h4>Get Started </h4>
                    <p className=" tw-text-gray">
                      Complete the assessment form to take the first step toward
                      your business journey in Sweden!
                    </p>
                  </div>

                  {/* user info */}
                  <div>
                    {/* <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                  <h5 className=" tw-text-black  ">Personal Details</h5>

                  <h6 className=" tw-text-black ">
                    {" "}
                    <i class="fa fa-user"> </i>FILL UP THE PERSONAL DETAILS 
                  </h6>
                </div> */}

                    <Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      // setUsers={setUsers}
                    />

                    {/* <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"You Full Name"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-rounded-lg  tw-py-3.5 tw-px-3"
                            }
                            label={"Full Name"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"Contact No with Country"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Contact No"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"your Address"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-py-3.5  tw-px-3 tw-rounded-lg"
                            }
                            label={"Your Email"}
                          />
                        </div>
                      </div>
                    </form> */}
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">
                     
                     
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Educational & Business Background
                      </strong>
                    </h2>
                     
                     
                    </div>

                    <form>
                      <div className="row  g-3 pt-4 tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                        <div className="col-md-6">
                       
                        <Select
  label="Educational Background"
  name="location"
  options={[
    { value: "", label: "Educational background" },
    { value: "sweden", label: "I am in Sweden" },
    { value: "outside", label: "I am outside of Sweden" },
  ]}
  value={location}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>
                        {location === "sweden" ? (
                          <>
                            <div className="col-md-6">
                             
                              <Select
  label="Select Personal Status"
  name="personalStatus"
  options={[
    
    { value: "student", label: "Student" },
    { value: "other", label: "Other" },
  ]}
  value={personalStatus}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            {personalStatus === "student" && (
                              <div className="col-md-6">
                                <Select
  label="Select Marital Status"
  name="maritalStatus"
  options={[
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
  ]}
  value={maritalStatus}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                              </div>
                            )}

                            {personalStatus === "employed" && (
                              <>
                                <div className="col-md-12">
                                <Select
  label="Do you have any valid residence permit in Sweden?"
  name="residencePermit"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={residencePermit}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg"
/>

                                </div>

                                <div className="col-md-6">
                                 <Select
  label="Do you have valid Personnummer?"
  name="personnummer"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={personnummer}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>

                                {personnummer === "no" && (
                                  <div className="col-md-6">
                                   <Select
  label="Do you have a valid Coordination number?"
  name="coordinationNumber"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={coordinationNumber}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                  </div>
                                )}

                                <div className="col-md-6">
                                <Select
  label="How much are you planning to invest?"
  name="investmentAmount"
  options={[
    { value: "less_than_50k", label: "Less than 50,000 SEK" },
    { value: "50k_100k", label: "50,000 - 100,000 SEK" },
    { value: "more_than_100k", label: "More than 100,000 SEK" },
  ]}
  value={investmentAmount}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>

                                <div className="col-md-12">
                                <Select
  label="Do you have separate assets other than the investment to support yourself with the application?"
  name="separateAssets"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={separateAssets}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            )}

                            {maritalStatus === "single" && (
                              <>
                                <div className="col-md-6">
                                  <div className="tw-relative tw-mb-5">
                                  <Select
  label="Did you complete your degree in Sweden?"
  name="degreeCompleted"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={degreeCompleted}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                  </div>
                                </div>

                                <div className="col-md-12">
                                <Select
  label="Do you have separate assets other than the investment to support yourself with the application?"
  name="separateAssetsDuplicate"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={separateAssetsDuplicate}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            )}

                            {maritalStatus === "married" && (
                              <>
                                <div className="col-md-6">
                                <Select
  label="Dependent / Main Applicant"
  name="depents"
  options={[
    { value: "dependent", label: "Dependent" },
    { value: "main applicant", label: "Main Applicant" },
  ]}
  value={depents}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            )}

                            {depents === "dependent" ? (
                              <div className="col-md-6">
                               <Select
  label="Did your partner complete a degree in Sweden?"
  name="partnerDegreeCompleted"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={partnerDegreeCompleted}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                              </div>
                            ) : null}

                            {depents === "main applicant" ? (
                              <>
                                <div className="col-md-6">
                                <Select
  label="Did you complete your degree in Sweden?"
  name="degreeCompleted"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={degreeCompleted}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>

                                <div className="col-md-12">
                                <Select
  label="Do you have separate assets other than the investment to support the family with the application?"
  name="familyAssets"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={familyAssets}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            ) : null}

                            {maritalStatus === "applicant" && (
                              <>
                                <div className="col-md-6">
                                <Select
  label="Did you complete your degree in Sweden?"
  name="degreeCompletedDuplicate"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={degreeCompletedDuplicate}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-3"
/>

                                </div>

                                <div className="col-md-12">
                                <Select
  label="Do you have separate assets other than the investment to support the family with the application?"
  name="familyAssetsDuplicate"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={familyAssetsDuplicate}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-3"
/>

                                </div>
                              </>
                            )}
                          </>
                        ) : null}
                      </div>
                      {location === "outside" ? (
                        <>
                          <div className="row">
                            <div className="col-md-6 tw-pt-6">
                            <Select
  label="Education Level"
  name="educationLevel"
  options={[
    { value: "matriculation", label: "Matriculation/Secondary" },
    { value: "higher_secondary", label: "Higher Secondary/Intermediate" },
    { value: "bachelors", label: "Bachelor's / Undergraduate" },
    { value: "masters", label: "Masters/M.Phil" },
    { value: "phd", label: "Ph.D" },
    { value: "other", label: "Other" },
  ]}
  value={educationLevel}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-6">
                            <Select
  label="Educational Certificate Available"
  name="certificateAvailable"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={certificateAvailable}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                            <div className="col-md-12 tw-pt-6">
                            <Select
  label="Did you have any relevant job or business experience in any other country?"
  name="jobExperience"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={jobExperience}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                            <div className="col-md-12 tw-pt-6">
                            <Select
  label="Did you currently own a business in any other country?"
  name="businessOwned"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={businessOwned}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-6">
                            <Select
  label="Did you own a business in Sweden?"
  name="businessOwnedSweden"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={businessOwnedSweden}
  onChange={handleInputChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                          </div>
                        </>
                      ) : null}
                    </form>
                  </div>

                  {location === "sweden" ? (
                    <>
                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">
                          

                         

                          <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Business plan Assessment
                      </strong>
                    </h2>
                        </div>

                        <form>
                          <div className="row  g-4 tw-pt-4 tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                            <div className="col-md-6">
                            <Select
  label="Do you have already made your business plan?"
  name="businessPlan"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={plan}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                            {plan === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">Do You want to buy a running business in
                                  sweden?</label>
                                  <select
                                    value={buy}
                                    onChange={handleInputChange}
                                    name="buy"
                                    className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                  >
                                    <option>
                                      Do You want to buy a running business in
                                      sweden?
                                    </option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                  </select>
                                </div>
                              </>
                            ) : null}

                            {buy === "yes" ? (
                              <>
                                <div className="col-md-6">
                                <Select
  label="If yes, total investment available"
  name="investment"
  options={[
    { value: "200000 SEK - 300000 SEK", label: "200000 SEK - 300000 SEK" },
    { value: "400000 SEK - 500000 SEK", label: "400000 SEK - 500000 SEK" },
    { value: "500000 SEK - 600000 SEK", label: "500000 SEK - 600000 SEK" },
    { value: "6000000 SEK - 7000000 SEK", label: "6000000 SEK - 7000000 SEK" },
    { value: "7000000 SEK - 8000000 SEK", label: "7000000 SEK - 8000000 SEK" },
    { value: "8000000 SEK - 9000000 SEK", label: "8000000 SEK - 9000000 SEK" },
    { value: "9000000 SEK - 1 Million SEK", label: "9000000 SEK - 1 Million SEK" },
    { value: "More than 1 Million SEK", label: "More than 1 Million SEK" },
  ]}
  value={investment}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            ) : null}
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {location === "outside" ? (
                    <>
                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">
                          
                          
                        <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Business plan Assessment
                      </strong>
                    </h2>




                   
                          
                         
                        </div>

                        <form>
                          <div className="row  g-4 tw-pt-4 tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                            <div className="col-md-6">
                            <Select
  label="Do you know someone in Sweden who is willing to start a business together with you?"
  name="knowsomeone"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={knowsomeone}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            {knowsomeone === "yes" ? (
                              <>
                                <div className="col-md-6">
                                <Select
  label="What is the legal status of the person?"
  name="knowsomeone_legalstatus"
  options={[
    { value: "EU Citizen", label: "EU Citizen" },
    { value: "Swedish Citizen", label: "Swedish Citizen" },
    { value: "Long Term Residence Permit", label: "Long Term Residence Permit" },
    { value: "Valid Residence Permit with Personnummer", label: "Valid Residence Permit with Personnummer" },
    { value: "N/A", label: "N/A" },
  ]}
  value={knowsomeone_legalstatus}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>

                                <div className="col-md-6">
                                <Select
  label="Did he/she have a personnummer in Sweden?"
  name="knowsomeone_personnummer"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={knowsomeone_personnummer}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            ) : null}

                            <div className="col-md-6">
                            <Select
  label="Do you want to move along with family?"
  name="movealongwithfamily"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={movealongwithfamily}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            {movealongwithfamily === "yes" ? (
                              <>
                                <div className="col-md-6">
                                <Select
  label="Do you have separate assets other than the investment to support them with the application?"
  name="separateassets"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={separateassets}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            ) : null}

                            {seperateassets === "yes" ? (
                              <>
                                <div className="col-md-6">
                                <Select
  label="Enter asset amount"
  name="separateassetsamount"
  options={[
    { value: "200.000 SEK for applicant", label: "200.000 SEK for applicant" },
    { value: "100.000 SEK for Spouse", label: "100.000 SEK for Spouse" },
    { value: "50.000 SEK for each accompanying Child", label: "50.000 SEK for each accompanying Child" },
  ]}
  value={separateassetsamount}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            ) : null}

                            <div className="col-md-6">
                            <Select
  label="Do you currently have any Schengen, UK & Ireland visa or any kind of residence permit of any Schengen states?"
  name="schengen"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={schengen}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            {schengen === "yes" ? (
                              <>
                                <div className="col-md-6">
                                <Select
  label="Issue Country"
  name="schengenissuecountry"
  options={[
    { value: "Austria", label: "Austria" },
    { value: "Belgium", label: "Belgium" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Estonia", label: "Estonia" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Germany", label: "Germany" },
    { value: "Greece", label: "Greece" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "Italy", label: "Italy" },
    { value: "Latvia", label: "Latvia" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Malta", label: "Malta" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Norway", label: "Norway" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Spain", label: "Spain" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
  ]}
  value={schengenissuecountry}
  onChange={handleInputChange}
  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>

                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                    Type of Visa/Permit
                                  </label>
                                  <select
                                    value={schengentype}
                                    onChange={handleInputChange}
                                    name="schengentype"
                                    className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                  >
                                    <option>Type</option>
                                    <option value={"Schengen Visa"}>
                                      Schengen Visa
                                    </option>
                                    <option value={"Study or Work Permit"}>
                                      Study or Work Permit
                                    </option>
                                    <option value={"Spouse Visa"}>
                                      Spouse Visa
                                    </option>
                                    <option value={"Other Valid Visa"}>
                                      Other Valid Visa
                                    </option>
                                  </select>
                                </div>

                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                    Expiry Date
                                  </label>
                                  <Input
                                    star={"*"}
                                    type={"date"}
                                    name={"schengenexpirydate"}
                                    value={schengenexpirydate}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Expiry Date"}
                                    placeholder={"Expiry Date"}
                                  />
                                </div>

                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                    You can provide us more details about your
                                    duration of stay in that country
                                  </label>
                                  <Input
                                    star={"*"}
                                    type={"text"}
                                    name={"schengendetail"}
                                    value={schengendetail}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Detail"}
                                    placeholder={"Detail"}
                                  />
                                </div>
                              </>
                            ) : null}

                            <div className="col-md-6">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Have you applied any sort of Schengen, UK &
                                Ireland visa or residence permit in past 2 years
                                and got rejected?
                              </label>
                              <select
                                value={past2years}
                                onChange={handleInputChange}
                                name="past2years"
                                className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                              >
                                <option>
                                  Have you applied any sort of Schengen, UK &
                                  Ireland visa or residence permit in past 2
                                  years and got rejected?
                                </option>
                                <option value={"yes"}>Yes</option>
                                <option value={"no"}>No</option>
                              </select>
                            </div>

                            {past2years === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                    {" "}
                                    UK, Ireland & Schengen Countries
                                  </label>
                                  <select
                                    value={past2yearscountry}
                                    onChange={handleInputChange}
                                    name="past2yearscountry"
                                    className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                  >
                                    <option>
                                      UK, Ireland & Schengen Countries
                                    </option>
                                    <option value={"Austria"}>Austria</option>
                                    <option value={"Belgium"}>Belgium</option>
                                    <option value={"Czech Republic"}>
                                      Czech Republic
                                    </option>
                                    <option value={"Denmark"}>Denmark</option>
                                    <option value={"Estonia"}>Estonia</option>
                                    <option value={"Finland"}>Finland</option>
                                    <option value={"France"}>France</option>
                                    <option value={"Germany"}>Germany</option>
                                    <option value={"Greece"}>Greece</option>
                                    <option value={"Hungary"}>Hungary</option>
                                    <option value={"Iceland"}>Iceland</option>
                                    <option value={"Italy"}>Italy</option>
                                    <option value={"Latvia"}>Latvia</option>
                                    <option value={"Liechtenstein"}>
                                      Liechtenstein
                                    </option>
                                    <option value={"Lithuania"}>
                                      Lithuania
                                    </option>
                                    <option value={"Luxembourg"}>
                                      Luxembourg
                                    </option>
                                    <option value={"Malta"}>Malta</option>
                                    <option value={"Netherlands"}>
                                      Netherlands
                                    </option>
                                    <option value={"Norway"}>Norway</option>
                                    <option value={"Poland"}>Poland</option>
                                    <option value={"Portugal"}>Portugal</option>
                                    <option value={"Slovakia"}>Slovakia</option>
                                    <option value={"Slovenia"}>Slovenia</option>
                                    <option value={"Spain"}>Spain</option>
                                    <option value={"Sweden"}>Sweden</option>
                                    <option value={"Switzerland"}>
                                      Switzerland
                                    </option>
                                  </select>
                                </div>


                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                  Rejection Date?
                                  </label>
                                  <Input
                                    star={"*"}
                                    type={"date"}
                                    name={"past2yearsrejection"}
                                    value={past2yearsrejection}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Rejection Date?"}
                                    placeholder={"Rejection Date?"}
                                  />
                                </div>


                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                  Reason of rejection
                                  </label>
                                  <Input
                                    star={"*"}
                                    type={"text"}
                                    name={"past2yearsrejectionreason"}
                                    value={past2yearsrejectionreason}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Reason of rejection"}
                                    placeholder={"Reason of rejection"}
                                  />
                                </div>
                              </>
                            ) : null}

                            <div className="col-md-6">
                              <label className=" tw-text-sm  tw-text-gray ">Do you have already made your business plan?</label>
                              <select
                                value={plan}
                                onChange={handleInputChange}
                                name="plan"
                                className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                              >
                                <option>
                                  Do you have already made your business plan?
                                </option>
                                <option value={"yes"}>Yes</option>
                                <option value={"no"}>No</option>
                              </select>
                            </div>
                            {plan === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray "> Do You want to buy a running business in
                                  sweden?</label>
                                  <select
                                    value={buy}
                                    onChange={handleInputChange}
                                    name="buy"
                                    className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                  >
                                    <option>
                                      Do You want to buy a running business in
                                      sweden?
                                    </option>
                                    <option value={"yes"}>Yes</option>
                                    <option value={"no"}>No</option>
                                  </select>
                                </div>
                              </>
                            ) : null}

                            {buy === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                    If yes, total investment available
                                  </label>
                                  <select
                                    value={buy}
                                    onChange={handleInputChange}
                                    name="buy"
                                    className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                  >
                                    <option>
                                      If yes, total investment available
                                    </option>
                                    <option value={"200000 SEK - 300000 SEK"}>
                                      200000 SEK - 300000 SEK
                                    </option>
                                    <option value={"400000 SEK - 500000 SEK"}>
                                      400000 SEK - 500000 SEK
                                    </option>
                                    <option value={"500000 SEK - 600000 SEK"}>
                                      500000 SEK - 600000 SEK
                                    </option>
                                    <option value={"6000000 SEK - 7000000 SEK"}>
                                      6000000 SEK - 7000000 SEK
                                    </option>
                                    <option value={"7000000 SEK - 8000000 SEK"}>
                                      7000000 SEK - 8000000 SEK
                                    </option>
                                    <option value={"8000000 SEK - 9000000 SEK"}>
                                      8000000 SEK - 9000000 SEK
                                    </option>
                                    <option
                                      value={"9000000 SEK - 1 Million SEK"}
                                    >
                                      9000000 SEK - 1 Million SEK
                                    </option>
                                    <option value={"More than 1 Million SEK"}>
                                      More than 1 Million SEK
                                    </option>
                                  </select>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {/* user info */}
                  <div className=" tw-pt-8">
                   

                    <form>
                      
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                       
                      <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Language Skill
                      </strong>
                    </h2>
                       
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Did you owned business in Sweden?</label>
                          <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Did you owned business in Sweden?</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div className="col-md-8 tw-pt-4">
                          {/* <label
                            htmlFor="first_name"
                            className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                          >
                            <a className=" tw-text-red-600 tw-font-semibold">
                              *
                            </a>{" "}
                            Do you have Swedish Language Certificate?
                          </label> */}
                          <label className=" tw-text-sm  tw-text-gray ">  Do you have Swedish Language Certificate?</label>
                          <select className="tw-outline-none tw-text-sm  tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>
                              Do you have Swedish Language Certificate?
                            </option>
                            <option value={"yes"}>Yes</option>
                            <option value={"no"}>No</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>

                  <Button
                    onClick={openModal}
                    label={"Submit"}
                    className={
                      "  tw-w-full tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-relative">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data?.map((item, index) => {
                    return (
                      <Link
                        to={`${item?.Link}`}
                        className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
                      >
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          {item?.title}
                        </p>
                        <GoTriangleRight className="tw-text-gray" />
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Assessment_register;
