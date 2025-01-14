import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/doctor-identification-card.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Sidebar from "../../components/ScrollableBar";

import { useTranslation } from '../../context/TranslationContext';

import cprimage from "../../assets/iconscout/cprimage.png";

import cprimage2 from "../../assets/iconscout/cprimage2.png";
import cprimage3 from "../../assets/iconscout/cprimage3.png";
import cprimage4 from "../../assets/iconscout/cprimage4.png";

import Header from "../../components/Header_New/Header";

const CPRNumberDenmark = () => {
  const { t , language} = useTranslation();
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
      title: "Direct Citizenship  ",
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
      title: "Golden Visa  ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  const isleftlangue = language === 'ur';
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Relocate to Denmark")}
        regularText={t(
          "Secure your Danish CPR number seamlessly. We provide guidance to ensure a smooth process for your official identification."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
            <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      What is a
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`CPR Number?`)}</strong>
                    </h2>
                    <br></br>

                    <p className=" tw-text-gray">{t(`A CPR (Centrale Personregister) number is a unique
                      identification number in Denmark. It is essential for
                      individuals residing in Denmark as it facilitates seamless
                      access to numerous public and private services. With a CPR
                      number, you can register for healthcare, open a bank
                      account, access insurance, and even borrow books at the
                      library.`)}</p>

                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          What is
                        </span>
                        <h2 className="tw-text-left">
                          <strong className='tw-text-black'>{t(`CPR Number Structure`)}</strong>
                        </h2>
                        <br></br>

                        <ul className=" tw-p-0 ">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <p className=" m-0 tw-text-gray">
                              <strong className='tw-text-black'>{t(`Ten-Digit Identifier:`)}</strong> {t(`The CPR
                              number is a ten-digit identifier used across
                              various Danish national systems and databases. The
                              first six digits correspond to your date of birth,
                              while the last four form your unique
                              identification. The last digit of the CPR number
                              also indicates gender: odd numbers denote male and
                              even numbers denote female.`)}
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cprimage}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why & When?
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`CPR Number Requirement`)}</strong>
                    </h2>
                    <br></br>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <p className=" m-0 tw-text-gray">
                          <strong className='tw-text-black'>{t(`Why Do You Need a CPR Number?`)}</strong>{" "}<br/>
                          Residents in Denmark are legally obligated to have a
                          CPR number as it is essential for:
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Accessing healthcare services.`)}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Opening a bank account.`)}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Registering for insurance.`)}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Borrowing books from libraries.`)}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Accessing most public services and signing up
                                for digital services such as e-Boks and NemID.`)}</p>
                            </li>
                          </ul>
                          <br />{t(`In Denmark, a CPR number is more than just an
                          identification number; it serves as the gateway to
                          integration into Danish society, allowing easy access
                          to necessary services and a secure connection to
                          national databases.`)}</p>
                      </li>

                      <li>
                        <p className=" m-0 tw-text-gray">
                          <strong className='tw-text-black'>
                            {" "}
                            <br />{t(`When is a CPR Number Required?`)}</strong>
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Non-EU/EEA Citizens: If you plan to stay in
                                Denmark for more than three months, you are
                                required to register with the Danish Civil
                                Registration System upon arrival to obtain a CPR
                                number.`)}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">
                               {t(` Nordic Citizens, EU/EEA, and Swiss Citizens: If
                                you are from a Nordic country, the EU, the EEA,
                                or Switzerland and plan to stay in Denmark for
                                more than six months, you must register with the
                                Danish Civil Registration System to obtain your
                                CPR number.`)}{" "}
                              </p>
                            </li>
                          </ul>
                        </p>
                      </li>
                    </ul>

                    <br></br>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      How to
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Obtain a CPR Number`)}</strong>
                    </h2>

                    <br></br>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <p className=" m-0 tw-text-gray">
                          <strong className='tw-text-black'>{t(`Required Documents:`)}</strong>
                          <br />{t(` When you visit the Citizen’s Service Center to
                          apply for your CPR number, be prepared with the
                          following:`)}
                          <ul className="tw-pl-0 tw-pt-4">
                            <li>{t(`Proof of Residence and Legal Documentation:`)}</li>

                            <ul className="tw-pl-0">
                              <li className=" tw-flex  tw-gap-3">
                                <div>
                                  <GoTriangleRight className=" tw-text-blue" />
                                </div>
                                <p className=" m-0 tw-text-gray">{t(`For EU/EEA and Swiss citizens: Present your
                                  registration certificate.`)}</p>
                              </li>

                              <li className=" tw-flex  tw-gap-3">
                                <div>
                                  <GoTriangleRight className=" tw-text-blue" />
                                </div>
                                <p className=" m-0 tw-text-gray">{t(`For Nordic citizens: Bring proof of
                                  identification, such as a passport or Nordic
                                  ID.`)}</p>
                              </li>
                            </ul>

                            <div className="row tw-flex tw-items-center">
                              <div className="col-md-6">
                                <div className="row ">
                                  <div className="col-md-9 tw-mx-auto">
                                    <motion.img
                                      animate={imageVariants}
                                      className=" tw-w-full"
                                      src={cprimage3}
                                      alt=""
                                      style={{ maxWidth: "450px" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <li>{t(`Marital Status Documentation:`)}</li>
                                <ul className="tw-pl-0">
                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`If you are married: Bring your marriage
                                      certificate or an official copy.`)}</p>
                                  </li>

                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`If you are divorced: Provide your divorce
                                      certificate.`)}</p>
                                  </li>

                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`If you are a widow/widower: Present the
                                      death certificate of your deceased spouse.`)}</p>
                                  </li>

                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`Birth Certificate for Children: If you
                                      have children, bring their birth
                                      certificate(s).`)}</p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <li></li>
                          </ul>
                        </p>
                      </li>
                    </ul>

                    <p className=" tw-text-gray">{t(`Our team is here to assist with any questions or
                      requirements as you navigate the process of relocating to
                      Denmark and obtaining your CPR number. With our help, you
                      can be assured of a smooth registration process so you can
                      quickly access all essential services in Denmark.`)}</p>
                  </div>
                  <div>
                    <br></br>

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      A Smooth Transition
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`to Denmark`)}</strong>
                    </h2>

                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Moving to a new country can be both exciting and
                          challenging. At Sweden Relocators, we provide
                          specialized relocation assistance to make your move to
                          Denmark as seamless as possible. Whether you're
                          relocating for work, study, or family, our team offers
                          a full range of services to help you settle
                          comfortably. From securing essential documentation to
                          finding housing, we cover every aspect of your
                          relocation process so you can focus on enjoying your
                          new start.`)}</p>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cprimage2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Our Services
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`For Relocation to Denmark`)}</strong>
                    </h2>

                    <br></br>

                    <strong className="m-0 tw-text-black">{t(`EU Residence Card Assistance`)}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">{t(`Document Preparation: We ensure all necessary
                          documents are prepared, verified, and translated if
                          needed.`)}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Application Submission:`)}</>{t(`We manage your
                          application process, scheduling any necessary
                          appointments and handling paperwork to reduce delays.`)}</p>
                      </li>

                      <li className="tw-flex tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Ongoing Support:`)}</>{t(`From understanding eligibility
                          requirements to addressing any inquiries from
                          immigration authorities, our team is here to assist.`)}</p>
                      </li>
                    </ul>
                    <br></br>
                    <strong className="m-0 tw-text-black">{t(`CPR (Danish ID) Number Assistance`)}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Eligibility Assessment:`)}</>{t(`We help determine when
                          and how you should apply for a CPR number, depending
                          on your citizenship and planned duration of stay.`)}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Document Verification:`)}</>{t(`Our team ensures that all
                          required documents (residence permit, marriage
                          certificates, children’s birth certificates, etc.) are
                          complete and accurately translated if necessary.`)}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Application Facilitation:`)}</>{t(`We guide you through
                          the process, from booking appointments at Citizen
                          Service Centers to submitting your application.`)}</p>
                      </li>
                    </ul>

                    <br></br>
                    <strong className="m-0 tw-text-black">{t(`EU Certificate Assistance`)}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong className='tw-text-gray'>{t(`Requirements Guidance:`)}</strong>{t(` We clarify
                          which documents are needed based on your employment
                          status, purpose of stay, and other personal factors.`)}
                        </p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong className='tw-text-gray'>{t(`Application Submission:`)}</strong> {t(`We facilitate
                          a swift submission process, coordinating appointments
                          and completing necessary paperwork to meet all
                          regulatory standards.`)}
                        </p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong className='tw-text-gray'>{t(`Follow-Up and Support:`)}</strong> {t(`Our team
                          monitors your application status and liaises with
                          Danish authorities if additional information or
                          documentation is needed.`)}
                        </p>
                      </li>
                    </ul>

                    <br></br>
                    <strong className="m-0 tw-text-black">{t(`Housing Assistance`)}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Personalized Housing Search:</>{t(`We identify rental
                          options based on your preferences, whether you’re
                          looking for an apartment in the city, family housing,
                          or short-term rental options.`)}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Lease Negotiation and Contract Review:</>{t(`We review
                          rental contracts to ensure fair terms and assist with
                          any negotiations to make the rental agreement
                          beneficial to you.`)}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Move-In Coordination:</>{t(`We help arrange move-in
                          dates, utilities setup, and any other logistics to
                          make your transition into your new home smooth and
                          convenient.`)}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Temporary Housing Solutions:</>{t(`For those needing
                          immediate accommodation, we can arrange short-term
                          housing options, so you have a comfortable place to
                          stay while searching for a permanent home.`)}</p>
                      </li>
                    </ul>

                    <br></br>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why Choose
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Sweden Relocators?`)}</strong>
                    </h2>
                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cprimage4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Relocating to a new country involves more than just
                          packing your bags. Each step of the process—securing
                          legal documents, finding housing, and registering for
                          local services—requires careful attention and local
                          expertise. Sweden Relocators brings a wealth of
                          knowledge and experience to ensure you settle into
                          Denmark with ease.`)}</p>
                      </div>
                    </div>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Comprehensive Service`)}</strong>
                      <br />{t(`From visa assistance to housing, we cover all
                      aspects of your relocation, offering you a one-stop
                      solution.`)}</p>
                    <br></br>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Expert Guidance`)}</strong>
                      <br />{t(`Our team of professionals is well-versed in Danish
                      regulations, ensuring you meet every requirement and avoid
                      common pitfalls.`)}</p>
                    <br></br>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Personalized Support`)}</strong>
                      <br />{t(`We understand that each move is unique. Our team
                      tailors our services to fit your individual needs,
                      preferences, and circumstances.`)}</p>
                    <br></br>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Prompt Communication`)}</strong>
                      <br />{t(`We prioritize clear, timely communication, keeping
                      you informed at every stage of the process and available
                      to answer your questions.`)}</p>
                    <br></br>

                    <p className="tw-text-gray">{t(`At Sweden Relocators, we are dedicated to making your
                      relocation to Denmark as simple and successful as
                      possible. Contact us today to begin your journey with
                      reliable support and expert guidance.`)}</p>
                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          Sign Up{" "}
                        </strong>
                        <strong className='tw-text-black'>{t(`Today!`)}</strong>
                      </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`)}</p>
                  </div>
                </div>
              </div>

             <Sidebar/>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CPRNumberDenmark;
