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
  const [higherEducation, setHigherEducation] = useState("");
  const [intermediate, setIntermediate] = useState("");
  const [underGraduate, setUnderGraduate] = useState("");
  const [masters, setMasters] = useState("");
  const [others, setOthers] = useState("");
  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "higherEducation") {
      setHigherEducation("");
    }

    if (e.target.name === "intermediate") {
      setIntermediate("");
    }

    switch (e.target.name) {
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
                          <label className=" tw-text-sm  tw-text-gray ">Country</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Country</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">
                              British Indian Ocean Territory
                            </option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">
                              Congo, the Democratic Republic of the
                            </option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">
                              Holy See (Vatican City State)
                            </option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">
                              Iran, Islamic Republic of
                            </option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Select Level of Studies</label>
                          <select
                            name="chooseType"
                            value={chooseType}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Select Level of Studies</option>

                            <option value="Higher Secondary Education">
                              Higher Secondary Education
                            </option>
                            <option value="Intermediate / O-A Levels">
                              Intermediate / O-A Levels
                            </option>
                            <option value="Under Graduate">
                              Under Graduate
                            </option>
                            <option value="Masters/ M.Phil / Post Graduate">
                              Masters/ M.Phil / Post Graduate
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Total no of years of study</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Total no of years of study</option>
                            <option value="10 Year">10 Year</option>
                            <option value="12 Year">12 Year</option>
                            <option value="14 Year">14 Year</option>
                            <option value="16 Year">16 Year</option>
                            <option value="18 Year">18 Year</option>
                          </select>
                        </div>
                        {chooseType === "Other" ? (
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
                                    <label className=" tw-text-sm  tw-text-gray "> English Language Proficiency Test</label>
                                    <select
                                      onChange={handleSelectChange}
                                      name="others"
                                      value={others}
                                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                                    >
                                      <option>
                                        English Language Proficiency Test
                                      </option>

                                      <option value="IELTS">IELTS</option>
                                      <option value="TOFEL (Paper-based)">
                                        TOFEL (Paper-based)
                                      </option>
                                      <option value="TOFEL (Internet-based)">
                                        TOFEL (Internet-based)
                                      </option>
                                      <option value="CAMBRIDGE">
                                        CAMBRIDGE
                                      </option>
                                      <option value="PEARSON">PEARSON</option>
                                      <option value="LETTER OF PROFICIENCY">
                                        LETTER OF PROFICIENCY
                                      </option>
                                      <option value="OTHER">OTHER</option>
                                    </select>
                                  </div>

                                  {others === "IELTS" ? (
                                    <>
                                      <div className="col-md-6 tw-pt-4">
                                        <label className=" tw-text-sm  tw-text-gray ">Over all IELTS Score</label>
                                        <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                          <option>Over all IELTS Score</option>

                                          <option value="5">5</option>
                                          <option value="5.5">5.5</option>
                                          <option value="6">6</option>
                                          <option value="6.5">6.5</option>
                                          <option value="7">7</option>
                                          <option value="7.5">7.5</option>
                                        </select>
                                      </div>
                                    </>
                                  ) : null}

                                  {others === "OTHER" ? (
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

                  {chooseType === "Higher Secondary Education" ? (
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
                              <label className=" tw-text-sm  tw-text-gray ">Subject</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Subject</option>

                                <option value="Science">Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Management">Management</option>
                                <option value="Art Design Media">
                                  Art Design Media
                                </option>
                                <option value="Education">Education</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Natural Science">
                                  Natural Science
                                </option>
                              </select>
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
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Percentage</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Grade</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray "> English Language Proficiency Test</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>
                                  English Language Proficiency Test
                                </option>

                                <option value="IELTS">IELTS</option>
                                <option value="TOFEL (Paper-based)">
                                  TOFEL (Paper-based)
                                </option>
                                <option value="TOFEL (Internet-based)">
                                  TOFEL (Internet-based)
                                </option>
                                <option value="CAMBRIDGE">CAMBRIDGE</option>
                                <option value="PEARSON">PEARSON</option>
                                <option value="LETTER OF PROFICIENCY">
                                  LETTER OF PROFICIENCY
                                </option>
                                <option value="OTHER">OTHER</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {chooseType === "Intermediate / O-A Levels" ? (
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
                              <label className=" tw-text-sm  tw-text-gray ">Subject</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Subject</option>

                                <option value="Science">Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Management">Management</option>
                                <option value="Art Design Media">
                                  Art Design Media
                                </option>
                                <option value="Education">Education</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Natural Science">
                                  Natural Science
                                </option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Percentage</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Percentage</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Select Grade</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Subject</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Subject</option>

                                <option value="Science">Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Management">Management</option>
                                <option value="Art Design Media">
                                  Art Design Media
                                </option>
                                <option value="Education">Education</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Natural Science">
                                  Natural Science
                                </option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Percentage</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Percentage</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Select Grade</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">English Language Proficiency Test</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>
                                  {" "}
                                  English Language Proficiency Test
                                </option>

                                <option value="IELTS">IELTS</option>
                                <option value="TOFEL (Paper-based)">
                                  TOFEL (Paper-based)
                                </option>
                                <option value="TOFEL (Internet-based)">
                                  TOFEL (Internet-based)
                                </option>
                                <option value="CAMBRIDGE">CAMBRIDGE</option>
                                <option value="PEARSON">PEARSON</option>
                                <option value="LETTER OF PROFICIENCY">
                                  LETTER OF PROFICIENCY
                                </option>
                                <option value="OTHER">OTHER</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {chooseType === "Under Graduate" ||
                  chooseType === "Masters/ M.Phil / Post Graduate" ? (
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
                              <label className=" tw-text-sm  tw-text-gray ">Subject</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Subject</option>

                                <option value="Science">Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Management">Management</option>
                                <option value="Art Design Media">
                                  Art Design Media
                                </option>
                                <option value="Education">Education</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Natural Science">
                                  Natural Science
                                </option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Select Percentage</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Percentage</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Select Grade</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Subject</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Subject</option>

                                <option value="Science">Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Management">Management</option>
                                <option value="Art Design Media">
                                  Art Design Media
                                </option>
                                <option value="Education">Education</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Natural Science">
                                  Natural Science
                                </option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Select Percentage</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Percentage</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Select Grade</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Subject</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Subject</option>

                                <option value="Science">Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="Management">Management</option>
                                <option value="Art Design Media">
                                  Art Design Media
                                </option>
                                <option value="Education">Education</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Natural Science">
                                  Natural Science
                                </option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray ">Select Percentage</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Percentage</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Select Grade</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Select Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                              </select>
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
                              <label className=" tw-text-sm  tw-text-gray "> English Language Proficiency Test</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>
                                  {" "}
                                  English Language Proficiency Test
                                </option>

                                <option value="IELTS">IELTS</option>
                                <option value="TOFEL (Paper-based)">
                                  TOFEL (Paper-based)
                                </option>
                                <option value="TOFEL (Internet-based)">
                                  TOFEL (Internet-based)
                                </option>
                                <option value="CAMBRIDGE">CAMBRIDGE</option>
                                <option value="PEARSON">PEARSON</option>
                                <option value="LETTER OF PROFICIENCY">
                                  LETTER OF PROFICIENCY
                                </option>
                                <option value="OTHER">OTHER</option>
                              </select>
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
