import React, { useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button";
import { GoTriangleRight } from "react-icons/go";

import tick from "../../assets/iconscout/tick.svg";
import tick2 from "../../assets/iconscout/tick2.svg";
import help from "../../assets/iconscout/help.svg";
import info from "../../assets/iconscout/information.svg";
import cross from "../../assets/iconscout/cross.svg";



import assess1 from "../../assets/images/BusinessAssessment.png";
import assess2 from "../../assets/images/VisitVisaAssessment.png";
import assess3 from "../../assets/images/StudyAssesmment.png";

import assess4 from "../../assets/images/WorkPermit.png";
import assess5 from "../../assets/images/ass5.png";
import assess6 from "../../assets/images/ass6.png";



import as1 from "../../assets/iconscout/ass2.png";
import as2 from "../../assets/iconscout/ass1.png";
import as3 from "../../assets/iconscout/ass3.png";
import as4 from "../../assets/iconscout/ass4.png";

import _as1 from "../../assets/iconscout/_as1.png";
import _as2 from "../../assets/iconscout/_as2.png";


import ass5 from "../../assets/iconscout/ass5.png";

import FeatureSection from "../../components/AssessFeatured";

import camera from "../../assets/images/no-picture-taking.png";

import { Link } from "react-router-dom";
import Header from "../../components/Header_New/Header";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from "react-i18next";

const Assessment = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: t("Business Visa Assessment"),
      image: _as1,
      Icon: <i className="fa fa-building tw-mt-1" aria-hidden="true"></i>,
      Link: "/assessment_register",
    },
    {
      id: 2,
      title: t("Visit Visa Assessment"),
      image: assess2,
      Icon: <i className="fa fa-street-view tw-mt-1" aria-hidden="true"></i>,
      Link: "/visit_visa",
    },
    {
      id: 3,
      title: t("Study in Sweden Assesmment"),
      image: _as2,
      Icon: <i className="fa fa-male tw-mt-1" aria-hidden="true"></i>,
      Link: "/student_assessments",
    },
    {
      id: 4,
      title: t("Work Permit Assesmment"),
      image: assess4,
      Icon: <i className="fa fa-briefcase tw-mt-1" aria-hidden="true"></i>,
      Link: "/Work_permit",
    },
    {
      id: 5,
      title: t("Family Reunification Assessment"),
      image: assess5,
      Icon: <i className="fa fa-users tw-mt-1" aria-hidden="true"></i>,
      Link: "/family_reunification_assessment",
    },
    {
      id: 6,
      title: t("Long Term EU Status Assessment"),
      image: assess6,
      Icon: <i className="fa fa-home tw-mt-1" aria-hidden="true"></i>,
      Link: "/long_term_eu_status_assessment",
    },
  ];

  const data2 = [
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
        highlightText={t("Assessments")}
        regularText={t(
          "Relocating is easier with guidance tailored to your needs. Our assessments provide clarity and confidence for your move. Trust us to make every step simpler and more informed."
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" md:tw-pt-4 tw-pt-8">
        <div className="container-fluid ">
          <div className="row 2xl:tw-pl-[8%] md:tw-pl-[1%] tw-pl-3 tw-pr-[3.5%] 2xl:tw-pr-[8%] md:tw-pr-[1%] ">
            <div className="tw-px-0 tw-text-justify">
              <div className=" tw-bg-white  md:tw-pl-32 tw-pl-10 md:tw-pr-32 tw-pr-10 tw-pt-14">
                <div className=" ">
                  <span>
                    --Assessment
                    <br />
                  </span>
                  <h1 className="tw-mt-2 tw-items-center tw-font-bold tw-text-2xl md:tw-flex tw-block tw-gap-2  tw-text-gray-dark tw-m-0 ">
                    {" "}
                    <img
                      src={
                        tick2
                      }
                      className=" tw-w-10"
                      alt=""
                    />{" "}
                    Check Your Eligibility Before Proceeding with Our Services
                  </h1>

                  <div className="row tw-flex tw-items-center tw-justify-center tw-mb-6 tw-px-20">
                    <div className="col-md-4">
                      <div className="row ">
                        <div className="col-md-10 tw-mx-auto">
                          <img src={ass5} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <p className=" tw-text-gray">
                        Welcome to our fully digital eligibility assessment
                        tool! Designed to streamline the process of relocating
                        to Sweden, this tool helps you determine whether you
                        meet the basic requirements for your desired Visa or
                        Residence Permit. Our web portal and app offer a
                        completely online experience, ensuring that every step
                        of your relocation journey is convenient and
                        transparent.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="tw-mx-8 tw-my-4">
                    <div className="tw-flex tw-items-start">
                      <img src={as1} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Complete the Assessment</h5>
                        <p className="tw-text-gray">
                          Use our web portal or app to easily complete the
                          assessment and check if you meet the criteria for your
                          desired Visa or Residence Permit. You are allowed to
                          make up to five assessments to explore different
                          options and scenarios.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-mx-8 tw-my-4">
                    <div className="tw-flex tw-items-start">
                      <img src={as2} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Instant Results</h5>
                        <p className="tw-text-gray">
                          Receive your eligibility result instantly on your
                          screen, giving you immediate feedback on whether you
                          qualify.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-mx-8 tw-my-4">
                    <div className="tw-flex tw-items-start">
                      <img src={as3} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">Detailed Results Available</h5>
                        <p className="tw-text-gray">
                          Your assessment result will also be available in a
                          downloadable PDF file on both our portal and app. This
                          document will include your assessment number and a
                          complete summary of the information you provided in
                          the assessment forms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-mx-8 tw-my-4">
                    <div className="tw-flex tw-items-start">
                      <img src={as4} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">
                          Full Control and Transparency
                        </h5>
                        <p className="tw-text-gray">
                          Our platform puts you in control of your application.
                          Track your progress, manage your information, and stay
                          updated on every step of the process directly through
                          our app and web portal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tw-pt-4"></div>
                  <FeatureSection/>

                  <h1 className="tw-py-8 tw-mt-2 tw-items-center tw-font-bold tw-text-2xl md:tw-flex tw-block tw-gap-2  tw-text-gray-dark tw-m-0">
                    {" "}
                    <img
                      src={
                        help
                      }
                      className=" tw-w-10"
                      alt=""
                    />{" "}
                    Need help?
                  </h1>
                </div>

                <div className="tw-flex tw-flex-wrap tw-mx-8 tw-my-4">
                  <div className="tw-flex-1 tw-mx-4">
                    <div className="tw-flex tw-items-start">
                      <img src={tick} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">If Eligible</h5>
                        <p className="tw-text-gray">
                          If you meet the criteria, sign up and book an
                          appointment with our experts directly through the app
                          or portal to discuss the next steps in your journey.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="tw-flex-1 tw-mx-4">
                    <div className="tw-flex tw-items-start">
                      <img src={cross} alt="" className="tw-w-24" />
                      <div className="tw-ml-8">
                        <h5 className="tw-pt-2">
                          If Not Eligible or Uncertain
                        </h5>
                        <p className="tw-text-gray">
                          Even if the result is negative or unclear, don't
                          hesitate to reach out. We're here to help you explore
                          alternative options and find the best solution for
                          your situation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="tw-py-8 tw-mt-2 tw-font-bold tw-items-center tw-text-2xl md:tw-flex tw-block tw-gap-2  tw-text-gray-dark tw-m-0">
                  {" "}
                  <img
                    src={
                     info
                    }
                    className=" tw-w-10"
                    alt=""
                  />{" "}
                  Important Information:
                </h1>

                <div className=" tw-bg-white tw-shadow-lg tw-rounded-md tw-py-4  tw-mb-4  px-3">
                  <p className="  tw-text-black  text-sm tw-m-0">
                  <i class="fa fa-circle-exclamation" style={{color: '#807DFB'}}></i>
                 
                    <h5 className="tw-pl-1" style={{ display: "inline" }}>
                      Legal Changes
                    </h5>
                    <br />{" "}
                    <p className="tw-pt-4 tw-text-gray">
                      Please note that laws and regulations may change, which
                      could affect your eligibility assessment results.
                    </p>
                  </p>
                </div>

                <div className=" tw-bg-white tw-shadow-lg tw-rounded-md tw-py-4  tw-mb-4  px-3">
                  <p className="  tw-text-black text-sm tw-m-0">
                  <i class="fa fa-circle-exclamation" style={{color: '#807DFB'}}></i>
                    <h5 className="tw-pl-1" style={{ display: "inline" }}>
                      Cost-Effective Alternatives
                    </h5>
                    <br />{" "}
                    <p className="tw-pt-4 tw-text-gray">
                      While you can apply for visas or residence permits
                      directly through official government websites at a lower
                      cost, our services provide comprehensive support to
                      maximize your chances of success.
                    </p>
                  </p>
                </div>

                <div className=" tw-bg-white tw-shadow-lg tw-rounded-md tw-py-4  tw-mb-4  px-3">
                  <p className="  tw-text-black text-sm tw-m-0">
                  <i class="fa fa-circle-exclamation" style={{color: '#807DFB'}}></i>
                    <h5 className="tw-pl-1" style={{ display: "inline" }}>
                      Expert Guidance
                    </h5>
                    <br />{" "}
                    <p className="tw-pt-4 tw-text-gray">
                      Our experienced Migration and Relocation consultants will
                      guide you through each step, ensuring your documentation
                      is accurate and complete while helping you develop a solid
                      strategy for your application.
                    </p>
                  </p>
                </div>

<div className="tw-pt-8"></div>
                {/* <div className="row  g-4 tw-py-12">
                  {data?.map((item, index) => {
                    return (
                      <>
                        <div className="col-md-6">
                          <Link to={`${item?.Link}`}>
                            <div className="row">
                              <div className="col-md-10 tw-mx-auto">
                                <div className=" tw-h-56">
                                  <img
                                    src={item?.image}
                                    alt=""
                                    className="  tw-mx-auto tw-h-full"
                                  />
                                </div>
                              </div>
                            </div>
                            <Button
                              Icons={item?.Icon}
                              className={
                                " hover:tw-bg-blue hover:tw-text-white tw-text-black tw-font-semibold tw-w-full tw-py-3"
                              }
                              label={`${item?.title}`}
                            />
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </div> */}

            

               
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Assessment;
