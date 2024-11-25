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
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import Header from '../../components/Header_New/Header';

const Visit_visa = () => {
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
  const [personalStatus, setPersonalStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [residencePermit, setResidencePermit] = useState("");
  const [personnummer, setPersonnummer] = useState("");
  const [coordinationNumber, setCoordinationNumber] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [separateAssets, setSeparateAssets] = useState("");
  const [refusal, setRefusal] = useState("");
  const [depents, setDepents] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "personalStatus") {
      setResidencePermit("");
    }

    if (e.target.name === "refusal") {
      setRefusal("");
    }

    switch (e.target.name) {
      case "depents":
        setDepents(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "personalStatus":
        setPersonalStatus(value);
        break;
      case "maritalStatus":
        setMaritalStatus(value);
        break;
      case "refusal":
        setRefusal(value);

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
      default:
        break;
    }
  };

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
    highlightText={t("Visit Visa")}
    regularText={t("Plan your visit with ease. We offer assistance for obtaining visit visas tailored to your travel needs.")}
    backgroundImage={homeBgImage} 
/>
      <section className="">
        <div className="container-fluid ">
          <div className="row   g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  {/* user info */}
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Visit visa assessment
                    </span>

                    <h2>
                      <strong>
                        Find Out Your Eligibility for a Visit Visa to Sweden
                      </strong>
                    </h2>
                    <br/>
                    <strong className = "tw-text-gray">Who Should Use This Tool?</strong>

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
                          Those attending a conference or on a short business
                          visit to Sweden.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          People joining their EU partner for a temporary stay.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Anyone applying for any type of visit visa to Sweden.
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
                      requirements and eligibility criteria for different types
                      of visit visas by gathering important details, such as:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Purpose of Your Visit: Whether you’re visiting family,
                          attending a business event, or joining your EU
                          partner.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Duration of Stay: Information about how long you plan
                          to stay in Sweden.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Visa Requirements: Specific guidelines based on your
                          visit type and individual circumstances
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
                      Schengen Visa File Preparation
                      </strong>
                    </h2>
                    <br/>


                    

                    <p className="tw-text-gray">
                      We handle the entire process of preparing your Schengen
                      visa file, ensuring it includes everything you need:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Comprehensive Documentation: We compile all necessary
                          documents, including health insurance and flight
                          reservations.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Appointment Booking: We book appointments with the
                          embassy, VFS, FedEx, or any relevant service providers
                          on your behalf.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Convenient Access: You can simply log into our web
                          portal or app to print the complete visa file and
                          submit it along with your original passport.
                        </p>
                      </li>
                    </ul>

                    <strong className = "tw-text-gray">File Delivery Options</strong>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          DHL Delivery: We can send the complete visa file
                          directly to your home address before the appointment
                          date.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Easy Submission: All you need to do is sign the
                          application form and submit it to the embassy or visa
                          center.
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
                        We will analyze your information to provide a clear assessment of your eligibility for a visit visa.

                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Our team will guide you through the next steps of the visa application process.

                        </p>
                      </li>


                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        We’ll ensure you meet all the requirements to successfully obtain a visit visa to Sweden.

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
                    Use the eligibility tool to take the first step toward your visit to Sweden, whether it’s to see loved ones, attend a conference, or for a short-term business trip!

                    </p>
                  </div>

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
                 

                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        
                      <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Applicant Assessment
                      </strong>
                    </h2> 
                        
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                            
                          </label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Do you have National Passport? </option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                           
                          </label>

                          <select
                            name="personalStatus"
                            value={personalStatus}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option> Did you visit Schengen Countries before?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {personalStatus === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                
                              </label>

                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>How many time you visited the Schengen States?</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5 or more</option>
                              </select>
                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                              
                              </label>

                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option value="">Purpose of Visit</option>
                                <option value="Visiting Family Friend">
                                  Visiting Family Friend
                                </option>
                                <option value="Official Trip">
                                  Official Trip
                                </option>
                                <option value="Tourism">Tourism</option>
                                <option value="Business Conference">
                                  Business Conference
                                </option>
                                <option value="Medical Treatment">
                                  Medical Treatment
                                </option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </>
                        ) : null}
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                            
                          </label>

                          <select
                            name="refusal"
                            value={refusal}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Have you got any refusal for Schengen Countries?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {refusal === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                              
                              </label>

                              <Input
                            placeholder={"Refusal Month-Year"}
                            star={"*"}
                            type = {"date"}
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Refusal Month-Year"}
                          />
                            </div>

                            <div className="col-md-12 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                              
                              </label>
                              <Input
                            placeholder={"Reason of Refusal"}
                            star={"*"}
                           
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Reason of Refusal"}
                          />
                              
                              
                              
                                </div>
                          </>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                           
                          </label>

                          <select
                            name="residencePermit"
                            value={residencePermit}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option value=""> Is any of your close relative living in Schengen
                            Countries and you want to visit him/her?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {residencePermit === "yes" ? (
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                             
                            </label>

                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value=""> Relation with the EU person( Like Parents,
                                Siblings, Family friend)</option>
                              <option value="Parents">Parents</option>
                              <option value="Husband">Husband</option>
                              <option value="Wife">Wife</option>
                              <option value="Sibling">Sibling</option>
                              <option value="Cousin">Cousin</option>
                              <option value="Family Friend">
                                Family Friend
                              </option>
                            </select>
                          </div>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                          
                          </label>
                          <select
                            name="depents"
                            value={depents}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>  Are you dependent on the person who is living in
                            Schengen Countries?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {depents === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                             
                              </label>
                              
                              <Input
                            placeholder={" Describe How?"}
                            star={"*"}
                            type = {"year"}
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={" Describe How?"}
                          />
                              
                              
                                </div>
                          </>
                        ) : null}
                        <div className="col-md-12 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                           
                          </label>
                          <select
                            name="separateAssets"
                            value={separateAssets}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option value=""> Do you have an invitation from any Individual
                            Business Group, Company, Organisation?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {separateAssets === "yes" ? (
                          <>
                            <div className="col-md-12 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                             
                              </label>
                             
                              <Input
                            placeholder={" Details of the Company, Organisation or Association"}
                            star={"*"}
                         
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Details of the Company, Organisation or Association"}
                          />
                             
                             
                                        </div>
                          </>
                        ) : null}
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                           
                          </label>
                          <select
                            name="investmentAmount"
                            value={investmentAmount}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option value=""> Can you support yourself for this trip?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        {investmentAmount === "no" ? (
                          <div className="col-md-3 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <select
                              name="coordinationNumber"
                              value={coordinationNumber}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                            >
                              <option value="">Funded by Organizer?</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        ) : null}

                        {coordinationNumber === "yes" ? (
                          <>
                            <div className="col-md-3 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                               
                              </label>
                             
                              <Input
                            placeholder={" Details of Organizer"}
                           
                           
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={" Details of Organizer"}
                          />
                             
                             
                                </div>
                          </>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            
                          </label>
                          <select
                            name="personnummer"
                            value={personnummer}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Choose Employee Type?</option>
                            <option value="Employee">Employee</option>
                            <option value="Self-Employee">Self-Employee</option>
                            <option value="Student">Student</option>
                            <option value="NGO / Media /Sports / Association">
                              NGO / Media /Sports / Association
                            </option>
                          </select>
                        </div>

                        {personnummer === "Student" ? (
                          <>
                            <div className="row">
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  t
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Proof of enrolmen</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Invitation for visit</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>

                              <div className="col-md-6 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                 
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value=""> No objection letter from
                                  School/College/University</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            </div>
                          </>
                        ) : null}

                        {personnummer === "Self-Employee" ? (
                          <>
                            <div className="row">
                              <div className="col-md-4 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Registration Certificate</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                              <div className="col-md-4 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Available Assets</option>
                                  <option value="1 Million $ to 3 Million $">
                                    1 Million $ to 3 Million $
                                  </option>
                                  <option value="3 Million $ to 5 Million $">
                                    3 Million $ to 5 Million $
                                  </option>
                                  <option value="5 Million $ to 10 Million $">
                                    5 Million $ to 10 Million $
                                  </option>
                                  <option value="3 Million $ to 5 Million $">
                                    10 Million $ to 20 Million $
                                  </option>
                                </select>
                              </div>

                              <div className="col-md-4 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Tax Returns of 2 to 3 Years</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            </div>
                          </>
                        ) : null}

                        {personnummer ===
                        "NGO / Media /Sports / Association" ? (
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <Input
                            placeholder={"Please describe NGO / Media /Sports / Association:"}
                           
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Please describe NGO / Media /Sports / Association:"}
                          />
                           
                           
                           
                                  </div>
                        ) : null}

                        {personnummer === "Employee" ? (
                          <>
                            <div className="row">
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Nature of Jobn</option>
                                  <option value="Permanent">Permanent</option>
                                  <option value="Temporary">Temporary</option>
                                </select>
                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Monthly Salary</option>
                                  <option value="Permanent">
                                    0 - 50.000 $
                                  </option>
                                  <option value="50.000 $-75000 $">
                                    50.000 $-75000 $
                                  </option>
                                  <option value="75.000 $- 100.000 $">
                                    75.000 $- 100.000 $
                                  </option>
                                </select>
                              </div>

                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Job Contract</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Vacations Letter</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                     <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                 
                     <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Family Document detail
                      </strong>
                    </h2>
              

                    <div className="tw-flex tw-items-center tw-gap-2 tw-pt-3">
                      <input
                        type="checkbox"
                        className="tw-mt-1"
                        checked={isSingle}
                        onChange={handleCheckboxChange}
                      />
                      <p className="tw-text-gray-dark  tw-m-0">
                        I am Visiting Alone
                      </p>
                    </div>

                    {!isSingle && (
                      <form>
                        <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Did your Spouse have valid National Passport?</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                            Did your spouse have Marriage certificate and did
                            your marriage is registered in your home country?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-8 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                             
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Do you have Family Registration Certificate?</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Do you as main applicant support your family as
                              trip?</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                             
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option> Do you have children?</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>If you are not EU citizen, do you have birth
                              certificate of your childrens?</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Does your spouse have any income, Savings?</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Someone else will support you for this trip</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
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
              <div className="  md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-relative">
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

export default Visit_visa;
