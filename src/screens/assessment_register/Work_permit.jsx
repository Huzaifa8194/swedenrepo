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
import { TfiAngleLeft } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import Assessment_modal from "./Assessment_modal";

import { useTranslation } from "react-i18next";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import Header from "../../components/Header_New/Header";

const Work_permit = () => {
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

  const [workCategory, setWorkCategory] = useState("");
  const [Saveing, setSaveing] = useState("");
  const [applying, setApplying] = useState("");

  const handleWorkCategoryChange = (e) => setWorkCategory(e.target.value);
  const handleWorkSaveingChange = (e) => setSaveing(e.target.value);
  const handleWorkApplyingChange = (e) => setApplying(e.target.value);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isSingle, setIsSingle] = useState(true);

  const handleCheckboxChange = () => {
    setIsSingle(!isSingle);
  };

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Work Permit")}
        regularText={t(
          "Unlock your career potential in Sweden. We provide guidance and support for a smooth work permit application process."
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" ">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  {/* user info */}

                  {/* text content */}

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Work Permit assessment
                    </span>

                    <h2>
                      <strong>
                        Find Out Your Eligibility for a Work Permit in Sweden
                      </strong>
                    </h2>
                    <br/>
                    <strong className="tw-text-gray">Who Should Use This Tool?</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Individuals applying for a Working Holiday permit to
                          live and work temporarily in Sweden
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Individuals and families seeking an AU Pair permit for
                          cultural exchange opportunities in Sweden.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Students in Sweden who are looking to switch from a
                          student permit to a work permit.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Applicants switching from a business permit to a work
                          permit route.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Individuals applying for a work permit after an asylum
                          application refusal.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Berry pickers and other seasonal workers seeking a
                          work permit in Sweden.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Anyone applying for a work permit from inside or
                          outside of Sweden.
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
                      Use the Eligibility Tool?
                      </strong>
                    </h2>
                    <br/>



                   
                    <p className="tw-text-gray">
                      This tool is designed to help you understand the
                      requirements and eligibility criteria for obtaining a work
                      permit in Sweden by collecting important information such
                      as:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Your Current Status: Whether you are already in Sweden
                          or applying from abroad.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Type of Work Permit: Details about the specific permit
                          you are applying for (e.g., Working Holiday, AU Pair,
                          seasonal work).
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Previous Permits: Information on any previous permits
                          you have held, such as student or business permits,
                          and your current status in Sweden.
                        </p>
                      </li>
                    </ul>


                    <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Complete
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Visa and Permit Application Support
                      </strong>
                    </h2>
                    <br/>


                  

                    <p className="tw-text-gray">
                      We offer comprehensive support for your move to Sweden
                      through our web portal and app:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Comprehensive Documentation: We prepare all the
                          necessary documents for your application, ensuring
                          full compliance with Swedish regulations
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Appointment Scheduling: We handle the booking of
                          appointments with relevant authorities to streamline
                          your application process.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Digital Access: Access your complete application file
                          directly through our web portal or app, where you can
                          view, download, and print all required documents with
                          ease.
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
                          We will assess your information to determine your
                          eligibility for a work permit in Sweden.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Our team will guide you through the entire application
                          process using our digital tools.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          We ensure that you meet all necessary requirements to
                          successfully obtain your work permit in Sweden.
                        </p>
                      </li>
                    </ul>


                    <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Get Started 
                      </strong>
                    </h2>
                    <br/>

                   
                    <p className=" tw-text-gray">
                      Use the eligibility tool on our web portal or app to take
                      the first step toward your work journey in Sweden, whether
                      you’re applying from within the country or
                      internationally!
                    </p>
                  </div>

                  {/*end*/}

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
                      <div className="row  tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
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
                  <div className=" tw-pt-8">
                 
                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black ">
                        
                      <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Work Permit Categories
                      </strong>
                    </h2>
                        
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray "></label>
                          <select
                            value={workCategory}
                            onChange={handleWorkCategoryChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Select Category</option>
                            <option value="WORK PERMIT OUTSIDE OF SWEDEN">
                              WORK PERMIT OUTSIDE OF SWEDEN
                            </option>
                            <option value="AU PAIR">AU PAIR</option>
                            <option value="WORKING HOLIDAYS">
                              WORKING HOLIDAYS
                            </option>
                            <option value="ASYLUM - WORK PERMIT">
                              ASYLUM - WORK PERMIT
                            </option>
                            <option value="STUDENT - WORK PERMIT">
                              STUDENT - WORK PERMIT
                            </option>
                            <option value="EU LONG TERM RESIDENCE/PERMANENT RESIDENCE">
                              EU LONG TERM RESIDENCE/PERMANENT RESIDENCE
                            </option>
                          </select>
                        </div>
                      </div>

                      {workCategory === "WORK PERMIT OUTSIDE OF SWEDEN" && (
                        <div className=" row row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white">
                          <div className="col-md-12">
                          <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Educational Background
                      </strong>
                    </h2>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option> Education Level</option>
                              <option value="Matriculation/Secondary">
                                Matriculation/Secondary
                              </option>
                              <option value="Higher Secondary/Intermediate">
                                Higher Secondary/Intermediate
                              </option>
                              <option value="Bachelor's / Under Graduate">
                                Bachelor's / Under Graduate
                              </option>
                              <option value="Masters/M.Phil">
                                Masters/M.Phil
                              </option>
                              <option value="Ph.d">Ph.d</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Educational Certificate available</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Work Expierence In Your Field
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>

                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option> Did you have a job experience?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className=" col-md-6"></div>

                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>

                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Experience Certificate available</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Residence and Work Permit
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option> Are you outside of Sweden?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className=" col-md-6"></div>

                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option> Did you work in Sweden before?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in 
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Are you Applying for your Family
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>
                                Do you have savings or assets in case if your
                                salary is lower than requirements?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>
                                Have you applied any sort of Schengen visa or
                                residence permit in past 2 years and got
                                rejected?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {workCategory === "AU PAIR" && (
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     AU Pair
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Are you single?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Are you between 18 and 30 years?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>
                                {" "}
                                Do you have a Proof that you have signed or
                                applied for a health insurance policy?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>
                                Are you able to show that you have a distinct
                                interest in or use for Swedish language studies?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>
                                {" "}
                                Are Do you have a certificate of admission/Offer
                                Letter to the course of study concerned?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Do you have a written invitation from your host
                              family in Sweden stating the terms and Terms and
                              Conditions
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Will you Study for 15 hours a week or the time for
                              housework and studies will not exceed 40 hours per
                              week?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {workCategory === "WORKING HOLIDAYS" && (
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Working Holidays
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Are you single?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Are you citizens of Argentina, Australia, Chile,
                              Hong Kong, Canada, New Zealand, South Korea or
                              Uruguay?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Do you have money so that you can support yourself
                              during the first year in Sweden (atleaet 15000
                              SEK) ?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">
                                Do you Have a return ticket or enough money to
                                buy one?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>
                                Do you have a comprehensive health insurance
                                that applies to care in Sweden?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {workCategory === "ASYLUM - WORK PERMIT" && (
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Asylum Work Permit
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray "></label>
                            <select
                              value={applying}
                              onChange={handleWorkApplyingChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                            >
                              <option>
                                Did you already worked in Sweden before applying
                                the asylum?
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          {applying === "no" ? (
                            <>
                              <div className="col-md-12 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray "></label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>
                                    {" "}
                                    Did Your asylum case has been refused and
                                    you want to apply for work permit?
                                  </option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray "></label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>
                                    Did you get the permission of work in
                                    Sweden?
                                  </option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>

                              <div className="col-md-6 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray "></label>
                                <Input
                                  placeholder={
                                    " When did you got the negative decision?"
                                  }
                                  type={"date"}
                                  className={
                                    " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                  }
                                  label={
                                    " When did you got the negative decision?"
                                  }
                                />
                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Are you still working in the same company for
                                  the last 4 months
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>Choose option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                              <div className="col-md-8 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Do you have permanent job contract?
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>Choose option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Is minimum offered salary more than 26560 SEK?
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>Choose option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                              <div className="col-md-8 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Does company have more than 5 employees?
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>Choose option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Did your company have valid insurance for
                                  employees?
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option>Choose option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            </>
                          ) : null}
                        </div>
                      )}

                      {workCategory === "STUDENT - WORK PERMIT" && (
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Student and Work Permit
                      </strong>
                    </h2>
                            </div>
                          </div>
                          <div className="col-md-8 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Are you studying in Sweden and have gotten a job
                              offer?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-5 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Are you currently working in Sweden?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-5 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              {" "}
                              Is this your first work permit in Sweden?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {workCategory ===
                        "EU LONG TERM RESIDENCE/PERMANENT RESIDENCE" && (
                        <>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                                

                                <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      EU Long Term Residence/Permanent Residence
                      </strong>
                    </h2>
                              </div>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Citizenship
                              </label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Choose option</option>
                                <option value="">Choose option</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AS">American Samoa</option>
                                <option value="CA">Canada</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="NL">Netherlands</option>
                                <option value="NZ">New Zealand</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="FR">France</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                              </select>
                            </div>

                            <div className=" col-md-6"></div>

                            <div className="col-md-12 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Do you have permanent Residence permit from
                                below mentioned countries?
                              </label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Choose option</option>
                                <option value="">Choose option</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AS">American Samoa</option>
                                <option value="CA">Canada</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="NL">Netherlands</option>
                                <option value="NZ">New Zealand</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="FR">France</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                              </select>
                            </div>
                            <div className="col-md-8 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Are you willing to start your own business in
                                Sweden?
                              </label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Choose option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>

                            <div className="col-md-8 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Do you have job offer in Sweden?
                              </label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Choose option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Do you have Assets/Saving?
                              </label>
                              <select
                                value={Saveing}
                                onChange={handleWorkSaveingChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                              >
                                <option>Choose option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>

                            {Saveing === "yes" ? (
                              <>
                                <div className="col-md-6 tw-pt-4">
                                  <label className=" tw-text-sm  tw-text-gray ">
                                    Do you have Assets/Saving?
                                  </label>
                                  <select
                                    value={Saveing}
                                    onChange={handleWorkSaveingChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                  >
                                    <option>Choose option</option>
                                    <option value="250000 TO 300000 SEK">
                                      250000 TO 300000 SEK
                                    </option>
                                    <option value="300000 TO 350000 SEK">
                                      300000 TO 350000 SEK
                                    </option>
                                    <option value="350000 TO 500000 SEK">
                                      350000 TO 500000 SEK
                                    </option>
                                    <option value="400000 TO 450000 SEK">
                                      400000 TO 450000 SEK
                                    </option>
                                    <option value="MORE THAN 500000 SEK">
                                      MORE THAN 500000 SEK
                                    </option>
                                  </select>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </>
                      )}
                    </form>
                  </div>

                  <Button
                    onClick={openModal}
                    label={"Submit"}
                    className={
                      "  tw-w-full  tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="   md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-sticky">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data?.map((item, index) => {
                    return (
                      <Link
                        to={`${item?.Link}`}
                        className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
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

export default Work_permit;
