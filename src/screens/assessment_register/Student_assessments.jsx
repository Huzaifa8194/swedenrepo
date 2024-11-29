import React, { useEffect, useState } from "react";

import Select from "../../components/Selecttab";

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

const Student_assessments = () => {
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

  const [chooseType, setChooseTypes] = useState("");
  
  const [others, setOthers] = useState("");

  const [country, setCountry] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [yearsOfStudy, setYearsOfStudy] = useState("");
  const [languageTest, setLanguageTest] = useState("");
  const [ieltsScore, setIeltsScore] = useState("");
  const [subject, setSubject] = useState("");
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");
  const [languageTest2, setLanguageTest2] = useState(""); // For repeated language test
  const [subject2, setSubject2] = useState(""); // For repeated subject



const [percentage2, setPercentage2] = useState(""); // For repeated percentage
const [grade2, setGrade2] = useState(""); // For repeated grade

const [percentage3, setPercentage3] = useState(""); // For percentage with "Select Percentage"
const [grade3, setGrade3] = useState(""); // For another grade select
const [subject3, setSubject3] = useState(""); // For another subject select




  







  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "higherEducation") {
      setHigherEducation("");
    }

    if (e.target.name === "intermediate") {
      setIntermediate("");
    }

    switch (e.target.name) {


    
   
    
      case "percentage2":
        setPercentage2(value);
        break;
      case "grade2":
        setGrade2(value);
        break;
   
   
      case "percentage3":
        setPercentage3(value);
        break;
      case "grade3":
        setGrade3(value);
        break;
      case "subject3":
        setSubject3(value);
        break;

      case "country":
      setCountry(value);
      break;
    case "studyLevel":
      setStudyLevel(value);
      break;
    case "yearsOfStudy":
      setYearsOfStudy(value);
      break;
    case "languageTest":
      setLanguageTest(value);
      break;
    case "ieltsScore":
      setIeltsScore(value);
      break;
    case "subject":
      setSubject(value);
      break;
    case "percentage":
      setPercentage(value);
      break;
    case "grade":
      setGrade(value);
      break;
    case "languageTest2":
      setLanguageTest2(value);
      break;
    case "subject2":
      setSubject2(value);
      break;
      case "higherEducation":
        setHigherEducation(value);
        break;
      case "intermediate":
        setIntermediate(value);
        break;
      case "underGraduate":
        setUnderGraduate(value);
        break;
      case "masters":
        setMasters(value);
        break;
      case "chooseType":
        setChooseTypes(value);
        break;
      case "others":
        setOthers(value);

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
        highlightText={t("Student Visa")}
        regularText={t(
          "Begin your educational journey in the EU. We simplify the process of acquiring a student visa for your studies abroad."
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

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Study in Sweden
                    </span>

                    <h2>
                      <strong>
                        Find Out Your Eligibility to Study in Sweden
                      </strong>
                    </h2>
                    <br />
                    <strong className="tw-text-gray">
                      Who Should Use This Tool?
                    </strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Individuals who are planning to apply for a student
                          residence permit in Sweden.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Those seeking assistance with the application process
                          for studying in Sweden.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Applicants looking for support with housing and
                          settling in Sweden once they arrive on a student
                          residence permit.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Anyone who prefers professional assistance in managing
                          their study application and relocation process.
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
                      requirements and eligibility criteria for studying in
                      Sweden by gathering essential details such as:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Academic Background: Information on your previous
                          education and qualifications.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Program of Interest: The type of course or program you
                          intend to apply for at Swedish universities.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Application Requirements: Your preparedness in meeting
                          the specific admission requirements of Swedish
                          institutions.
                        </p>
                      </li>
                    </ul>
                    <h5 className="tw-text-gray italic">Important Note </h5>
                    <p className="tw-text-gray">
                      {" "}
                      This assessment is designed to guide you through the
                      initial steps of applying to study in Sweden. It is not an
                      official assessment, and for the latest updates and
                      detailed information, we recommend visiting the official
                      universityadmissions.se website.
                    </p>


                    <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Complete
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Study Permit and Relocation Support{" "}
                      </strong>
                    </h2>
                    <br/>

                    

                    <p className="tw-text-gray">
                      We offer end-to-end support for your study journey and
                      relocation to Sweden through our web portal and app:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Comprehensive Application Assistance: We help with
                          your student residence permit application, making sure
                          all documents are complete and comply with Swedish
                          immigration standards.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Housing and Settling Services: Once your permit is
                          approved, we provide assistance with finding
                          accommodation and settling into your new life in
                          Sweden.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Digital Management: Manage your entire study
                          application and relocation process through our web
                          portal or app, making it easy and convenient to track
                          every step.
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
                          We will evaluate your details to determine your
                          eligibility to study in Sweden.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Our team will guide you through the application
                          process for both your chosen academic program and
                          student residence permit.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          We’ll ensure that you have the support you need for a
                          smooth transition to life in Sweden.
                        </p>
                      </li>
                    </ul>


                    <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Get Started
                      </strong>
                    </h2>
                    <br/>


                   
                    <p className=" tw-text-gray">
                      Use the eligibility tool on our web portal or app to take
                      the first step toward your educational journey in Sweden.
                      Whether you need help with your application or future
                      relocation, we’re here to assist you at every step!
                    </p>
                  </div>

                  <div>
                    {/* <div className="row g-3 tw-pt-6 tw-rounded-2xl  px-4 tw-py-4 tw-shadow tw-bg-white ">
                      <h5 className=" tw-text-black  ">Persoanl Details</h5>

                      <h6 className=" tw-text-black ">
                        {" "}
                        <i class="fa fa-building"></i> Fill up your personal
                        details.
                      </h6>
                    </div> */}

                    <Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      // setUsers={setUsers}
                    />

                    {/* <form>
                      <div className="row ">
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
                      <div className="row g-3 tw-pt-6 tw-rounded-2xl  px-4 tw-py-4 tw-shadow tw-bg-white ">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                          Fill in your
                        </span>

                        <h2 className="tw-text-left">
                          <strong>Educational Background</strong>
                        </h2>
                        <div className="col-md-6 tw-pt-4">
                        <Select
  label="Country"
  name="country"
  options={[
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    // Add more countries as needed
  ]}
  value={country}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>

                        <div className="col-md-6 tw-pt-4">
                        <Select
  label="Select Level of Studies"
  name="studyLevel"
  options={[
    { value: "Higher Secondary Education", label: "Higher Secondary Education" },
    { value: "Intermediate / O-A Levels", label: "Intermediate / O-A Levels" },
    { value: "Under Graduate", label: "Under Graduate" },
    { value: "Masters/ M.Phil / Post Graduate", label: "Masters/ M.Phil / Post Graduate" },
    { value: "Other", label: "Other" },
  ]}
  value={studyLevel}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>

                        <div className="col-md-6 tw-pt-4">
                        <Select
  label="Total no of years of study"
  name="yearsOfStudy"
  options={[
    { value: "10 Year", label: "10 Year" },
    { value: "12 Year", label: "12 Year" },
    { value: "14 Year", label: "14 Year" },
    { value: "16 Year", label: "16 Year" },
    { value: "18 Year", label: "18 Year" },
  ]}
  value={yearsOfStudy}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>
                        {studyLevel === "Other" ? (
                          <>
                            <div className="col-md-8 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>

                              <Input
                                placeholder={" Describe Your Education"}
                                star={"*"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={" Describe Your Education"}
                              />
                            </div>

                            {/* user info */}
                            <div className=" tw-pt-8">
                              

                              <form>
                                <div className="row ">
                                  <span className=" tw-flex tw-items-center tw-gap-2">
                                    {" "}
                                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                                    Fill in your
                                  </span>

                                  <h2 className="tw-text-left">
                                    <strong>
                                      Higher Secondary Education (Matriculation)
                                    </strong>
                                  </h2>

                                  <div className="col-md-6 tw-pt-4">
                                  <Select
  label="English Language Proficiency Test"
  name="languageTest"
  options={[
    { value: "IELTS", label: "IELTS" },
    { value: "TOFEL (Paper-based)", label: "TOFEL (Paper-based)" },
    { value: "TOFEL (Internet-based)", label: "TOFEL (Internet-based)" },
    { value: "CAMBRIDGE", label: "CAMBRIDGE" },
    { value: "PEARSON", label: "PEARSON" },
    { value: "LETTER OF PROFICIENCY", label: "LETTER OF PROFICIENCY" },
    { value: "OTHER", label: "OTHER" },
  ]}
  value={languageTest}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                  </div>

                                  {languageTest === "IELTS" ? (
                                    <>
                                      <div className="col-md-6 tw-pt-4">
                                      <Select
  label="Overall IELTS Score"
  name="ieltsScore"
  options={[
    { value: "5", label: "5" },
    { value: "5.5", label: "5.5" },
    { value: "6", label: "6" },
    { value: "6.5", label: "6.5" },
    { value: "7", label: "7" },
    { value: "7.5", label: "7.5" },
  ]}
  value={ieltsScore}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                      </div>
                                    </>
                                  ) : null}

                                  {languageTest === "OTHER" ? (
                                    <>
                                      <div className="col-md-6"></div>
                                      <div className="col-md-6 tw-pt-4">
                                        <label className=" tw-text-sm  tw-text-gray "></label>

                                        <Input
                                          placeholder={
                                            "Contact No with Country"
                                          }
                                          star={"*"}
                                          className={
                                            " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                          }
                                          label={"Other Language"}
                                        />
                                      </div>
                                      <div className="col-md-6 tw-pt-4">
                                        <label className=" tw-text-sm  tw-text-gray "></label>

                                        <Input
                                          placeholder={
                                            "Contact No with Country"
                                          }
                                          star={"*"}
                                          className={
                                            " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                          }
                                          label={"Other Details"}
                                        />
                                      </div>
                                    </>
                                  ) : null}
                                </div>
                              </form>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </form>
                  </div>

                  {/* higher  */}

                  {studyLevel === "Higher Secondary Education" ? (
                    <>
                      {/* user info */}
                      <div className=" tw-pt-8">
                       
                        

                        <form>
                        <div className="row tw-pt-6 tw-rounded-2xl  px-4 tw-py-4 tw-shadow tw-bg-white ">
                           
                        <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Higher Secondary Education (Matriculation)
                    
                      </strong>
                    </h2>
                           
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Subject"
  name="subject"
  options={[
    { value: "Science", label: "Science" },
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "IT", label: "IT" },
    { value: "Business", label: "Business" },
    { value: "Management", label: "Management" },
    { value: "Art Design Media", label: "Art Design Media" },
    { value: "Education", label: "Education" },
    { value: "Journalism", label: "Journalism" },
    { value: "Natural Science", label: "Natural Science" },
  ]}
  value={subject}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>
                              <Input
                                placeholder={"Completed Year"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Completed Year"}
                              />
                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Percentage"
  name="percentage"
  options={Array.from({ length: 18 }, (_, i) => ({
    value: `${33 + i}`,
    label: `${33 + i}`,
  }))}
  value={percentage}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                             
                            <Select
  label="Grade"
  name="grade"
  options={[
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ]}
  value={grade}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                          </div>
                        </form>
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
                      English Proficiency Test
                      </strong>
                    </h2>
                            
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="English Language Proficiency Test"
  name="languageTest2"
  options={[
    { value: "IELTS", label: "IELTS" },
    { value: "TOFEL (Paper-based)", label: "TOFEL (Paper-based)" },
    { value: "TOFEL (Internet-based)", label: "TOFEL (Internet-based)" },
    { value: "CAMBRIDGE", label: "CAMBRIDGE" },
    { value: "PEARSON", label: "PEARSON" },
    { value: "LETTER OF PROFICIENCY", label: "LETTER OF PROFICIENCY" },
    { value: "OTHER", label: "OTHER" },
  ]}
  value={languageTest2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>


                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {studyLevel === "Intermediate / O-A Levels" ? (
                    <>
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
                      Higher Secondary Education (Matriculation)
                      </strong>
                    </h2>
                            
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Subject"
  name="subject2"
  options={[
    { value: "Science", label: "Science" },
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "IT", label: "IT" },
    { value: "Business", label: "Business" },
    { value: "Management", label: "Management" },
    { value: "Art Design Media", label: "Art Design Media" },
    { value: "Education", label: "Education" },
    { value: "Journalism", label: "Journalism" },
    { value: "Natural Science", label: "Natural Science" },
  ]}
  value={subject2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>
                              <Input
                                placeholder={"Contact No with Country"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Completed Year"}
                              />
                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Percentage"
  name="percentage"
  options={Array.from({ length: 18 }, (_, i) => ({
    value: `${33 + i}`,
    label: `${33 + i}`,
  }))}
  value={percentage}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Grade"
  name="grade"
  options={[
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ]}
  value={grade}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                          </div>
                        </form>
                      </div>

                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                          <i class="fa tw-text-white fa-building tw-pt-1"></i>
                          <p className=" m-0 tw-text-white tw-font-semibold tw-uppercase">
                            Intermediate / O-A Levels (F.A, I.Com, ICS, FSC,
                            DAE, +2 Examination)
                          </p>
                        </div>

                        <form>
                          <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Subject"
  name="subject"
  options={[
    { value: "Science", label: "Science" },
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "IT", label: "IT" },
    { value: "Business", label: "Business" },
    { value: "Management", label: "Management" },
    { value: "Art Design Media", label: "Art Design Media" },
    { value: "Education", label: "Education" },
    { value: "Journalism", label: "Journalism" },
    { value: "Natural Science", label: "Natural Science" },
  ]}
  value={subject}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>
                              <Input
                                placeholder={"Contact No with Country"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Completed Year"}
                              />
                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Percentage"
  name="percentage2"
  options={Array.from({ length: 18 }, (_, i) => ({
    value: `${33 + i}`,
    label: `${33 + i}`,
  }))}
  value={percentage2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Grade"
  name="grade2"
  options={[
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ]}
  value={grade2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                          </div>
                        </form>
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
                      Higher Secondary Education (Matriculation)
                      </strong>
                    </h2>
                            
                            
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="English Language Proficiency Test"
  name="languageTest"
  options={[
    { value: "IELTS", label: "IELTS" },
    { value: "TOFEL (Paper-based)", label: "TOFEL (Paper-based)" },
    { value: "TOFEL (Internet-based)", label: "TOFEL (Internet-based)" },
    { value: "CAMBRIDGE", label: "CAMBRIDGE" },
    { value: "PEARSON", label: "PEARSON" },
    { value: "LETTER OF PROFICIENCY", label: "LETTER OF PROFICIENCY" },
    { value: "OTHER", label: "OTHER" },
  ]}
  value={languageTest}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {studyLevel === "Under Graduate" ||
                  studyLevel === "Masters/ M.Phil / Post Graduate" ? (
                    <>
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
                      Higher Secondary Education (Matriculation)
                      </strong>
                    </h2>
                           
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Subject"
  name="subject2"
  options={[
    { value: "Science", label: "Science" },
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "IT", label: "IT" },
    { value: "Business", label: "Business" },
    { value: "Management", label: "Management" },
    { value: "Art Design Media", label: "Art Design Media" },
    { value: "Education", label: "Education" },
    { value: "Journalism", label: "Journalism" },
    { value: "Natural Science", label: "Natural Science" },
  ]}
  value={subject2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>
                              <Input
                                placeholder={"Completed Year"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Completed Year"}
                              />
                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Percentage"
  name="percentage3"
  options={Array.from({ length: 18 }, (_, i) => ({
    value: `${33 + i}`,
    label: `${33 + i}`,
  }))}
  value={percentage3}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Grade"
  name="grade3"
  options={[
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ]}
  value={grade3}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2"
/>

                            </div>
                          </div>
                        </form>
                      </div>

                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                          <i class="fa tw-text-white fa-building tw-pt-1"></i>
                          <p className=" m-0 tw-text-white tw-font-semibold tw-uppercase">
                            Intermediate / O-A Levels (F.A, I.Com, ICS, FSC,
                            DAE, +2 Examination)
                          </p>
                        </div>

                        <form>
                          <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Subject"
  name="subject3"
  options={[
    { value: "Science", label: "Science" },
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "IT", label: "IT" },
    { value: "Business", label: "Business" },
    { value: "Management", label: "Management" },
    { value: "Art Design Media", label: "Art Design Media" },
    { value: "Education", label: "Education" },
    { value: "Journalism", label: "Journalism" },
    { value: "Natural Science", label: "Natural Science" },
  ]}
  value={subject3}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>
                              <Input
                                placeholder={"Completed Year"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Completed Year"}
                              />
                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Percentage"
  name="percentage"
  options={Array.from({ length: 18 }, (_, i) => ({
    value: `${33 + i}`,
    label: `${33 + i}`,
  }))}
  value={percentage}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Grade"
  name="grade"
  options={[
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ]}
  value={grade}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                          </div>
                        </form>
                      </div>

                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                          <i class="fa tw-text-white fa-building tw-pt-1"></i>
                          <p className=" m-0 tw-text-white tw-font-semibold tw-uppercase">
                            Under Graduate (B.A, B.Com, BBA, BCS, BIT,BSc, BE,
                            BS, DVM, LLB)
                          </p>
                        </div>

                        <form>
                          <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Subject"
  name="subject"
  options={[
    { value: "Science", label: "Science" },
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "IT", label: "IT" },
    { value: "Business", label: "Business" },
    { value: "Management", label: "Management" },
    { value: "Art Design Media", label: "Art Design Media" },
    { value: "Education", label: "Education" },
    { value: "Journalism", label: "Journalism" },
    { value: "Natural Science", label: "Natural Science" },
  ]}
  value={subject}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>

                            <div className="col-md-3 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray "></label>
                              <Input
                                placeholder={"From"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"From"}
                              />
                            </div>

                            <div className="col-md-3 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                To
                              </label>

                              <Input
                                placeholder={"To"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"To"}
                              />
                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Percentage"
  name="percentage2"
  options={Array.from({ length: 18 }, (_, i) => ({
    value: `${33 + i}`,
    label: `${33 + i}`,
  }))}
  value={percentage2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Select Grade"
  name="grade2"
  options={[
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ]}
  value={grade2}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                          </div>
                        </form>
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
                      Higher Secondary Education (Matriculation)
                      </strong>
                    </h2>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="English Language Proficiency Test"
  name="languageTest"
  options={[
    { value: "IELTS", label: "IELTS" },
    { value: "TOFEL (Paper-based)", label: "TOFEL (Paper-based)" },
    { value: "TOFEL (Internet-based)", label: "TOFEL (Internet-based)" },
    { value: "CAMBRIDGE", label: "CAMBRIDGE" },
    { value: "PEARSON", label: "PEARSON" },
    { value: "LETTER OF PROFICIENCY", label: "LETTER OF PROFICIENCY" },
    { value: "OTHER", label: "OTHER" },
  ]}
  value={languageTest}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
/>

                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

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
              <div className="   md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-relative">
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

export default Student_assessments;
