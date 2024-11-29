import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/security-check-in-airport.png";
import banner2 from "../../assets/images/travel-vacation.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from '../../context/TranslationContext';
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Sidebar from "../../components/ScrollableBar";


import cp1 from "../../assets/iconscout/cp1.png";
import cp2 from "../../assets/iconscout/cp2.png";
import cp3 from "../../assets/iconscout/cp3.png";
import cp4 from "../../assets/iconscout/cp4.png";
import cp5 from "../../assets/iconscout/cp5.png";
import cp6 from "../../assets/iconscout/cp6.png";
import cp7 from "../../assets/iconscout/cp7.png";

import Header from "../../components/Header_New/Header";
import { MdHdrStrong } from "react-icons/md";

const Citizenship = () => {
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
      title: "Direct Citizenship      ",
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

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Citizenship")}
        regularText={t(
          "Take the final step to call Sweden your home. We guide you through the process of acquiring Swedish citizenship smoothly."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify">
                <div className="   2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Swedish Citizenship
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Requirements, Application Process,
                      and Waiting Times
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">
                      To qualify for Swedish citizenship, applicants must meet
                      several key requirements:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Age Requirement
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong></strong> You must be at least 18 years old to
                          apply independently. Children under 18 can apply
                          alongside a parent or guardian, with special
                          considerations for adopted children.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Permanent Residence or Right of Residence
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <>Residence Requirement:</> Applicants must hold
                          either a permanent residence permit (permanent
                          uppehållstillstånd) or permanent right of residence
                          (permanent uppehållsrätt) if they are EU/EEA citizens.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Residency Duration
                    </strong>

                    <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Non-EU/EEA Citizens: Must have lived continuously
                              in Sweden for at least five years.
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              EU/EEA Citizens: Typically, a minimum of five
                              years of continuous residence with a valid right
                              of residence.
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Nordic Citizens: Generally, two years of
                              continuous residence is sufficient.
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              People with Refugee Status: For recognized
                              refugees, the waiting period may be reduced to
                              four years.
                            </li>
                          </ul>
                        </p>
                      </li>
                    </ul>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cp1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">
                          Good Conduct
                        </strong>

                        <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">
                              <strong></strong> Applicants are expected to
                              demonstrate good conduct, meaning they should not
                              have a recent criminal record, significant debts,
                              or unresolved legal issues. Migrationsverket
                              considers factors such as past fines, prison
                              sentences, or financial obligations when assessing
                              the applicant’s eligibility. This requirement
                              ensures that individuals seeking to stay or invest
                              in Sweden maintain a positive legal and financial
                              standing, reflecting the country's commitment to
                              upholding the integrity of its immigration and
                              business systems. Applicants may be required to
                              provide documentation or disclosures related to
                              their legal history and financial status as part
                              of the application process.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">
                      Ability to Support Yourself
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong></strong> Generally, applicants should be
                          financially independent and not rely on social
                          assistance. This applies particularly to non-Nordic
                          and non-EU/EEA applicants.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Specific Paths to Citizenship
                    </span>

                    <h2 className="tw-text-left">
                      <strong>Citizenship for Nordic Citizens</strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">
                      For citizens of Denmark, Finland, Iceland, and Norway, the
                      process for Swedish citizenship is streamlined:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Residency Requirement
                    </strong>

                    <p className="tw-text-gray">
                      {" "}
                      Only two years of continuous residence in Sweden are
                      required to qualify for certain residency benefits or
                      permits. This relatively short period makes it easier for
                      individuals to establish themselves in Sweden and access
                      various opportunities,
                    </p>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cp2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">
                              such as applying for permanent residency or other
                              long-term residence options
                            </p>
                          </li>

                          <li className=" tw-flex tw-pt-4 tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>Simplified Application Process:</> Nordic
                              citizens can apply directly to Migrationsverket
                              or, if they meet the criteria, register at their
                              local Tax Agency (Skatteverket) for simplified
                              processing.
                            </p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>Automatic Naturalization:</> Some Nordic
                              citizens may qualify for automatic naturalization
                              under specific conditions.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p>
                      <br />
                    </p>
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Citizenship
                    </span>
                    <h2 className="tw-text-left">
                      <strong>For EU/EEA Citizens </strong>
                    </h2>

                    <p className="tw-text-gray">
                      EU/EEA citizens can apply for Swedish citizenship after
                      five years of continuous residence in Sweden. Requirements
                      include:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Permanent Right of Residence
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          After five years of residence, EU/EEA citizens
                          typically acquire a permanent right of residence
                          (permanent uppehållsrätt), which is essential for the
                          citizenship application.
                        </p>
                      </li>

                      <li className=" tw-flex tw-pt-4 tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0  tw-text-gray">
                          <>Simplified Process:</> EU/EEA citizens may
                          experience a slightly simplified process since they
                          are not required to hold a residence permit due to
                          their EU rights.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <>Proof of Good Conduct and Financial Independence:</>{" "}
                          Similar to other applicants, EU/EEA citizens must
                          demonstrate good conduct and generally be financially
                          self-sufficient.
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Citizenship for Individuals
                    </span>
                    <h2 className="tw-text-left">
                      <strong> With a Permanent Residence Permit </strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">
                      If you have been granted a permanent residence permit in
                      Sweden, you may apply for citizenship once you fulfill the
                      residency requirements:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Five-Year Residence Requirement
                    </strong>

                    <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          Most applicants need five years of continuous
                          residence in Sweden to qualify for permanent
                          residency. However, those with refugee status may
                          qualify after just four years, reflecting Sweden's
                          commitment to supporting individuals who have fled
                          conflict or persecution. This shorter residency
                          requirement for refugees is designed to help them
                          integrate into Swedish society more quickly and
                          establish stability after seeking asylum.
                        </p>
                      </li>
                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={cp3}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li className=" tw-flex tw-pt-4  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <strong>
                                Documentation of Residence and Income:
                              </strong>{" "}
                              You will need to provide evidence of your
                              residence and financial stability during your time
                              in Sweden.
                            </p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <strong>Commitment to Stay in Sweden:</strong>{" "}
                              Migrationsverket may consider factors like
                              employment and social ties to assess your
                              intention to remain in Sweden.
                            </p>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>

                  <div>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Specific Paths to Citizenship
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                        Application Process for Swedish Citizenship
                      </strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">
                      The application process for Swedish citizenship involves
                      several steps to ensure you meet the eligibility criteria.
                      Here’s an overview of the process:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Prepare Documentation
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4 ">
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong> </strong> Gather all necessary documents,
                          including a valid passport, proof of residence (such
                          as rental agreements), employment records, and proof
                          of income.
                        </p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cp4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">
                          Submit Application
                        </strong>

                        <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                          <li>
                            <p className="m-0 tw-text-gray">
                              Applications can be submitted online via
                              Migrationsverket’s e-service or in paper format.
                              Ensure all information is accurate, and
                              double-check for any required documents, as
                              incomplete applications may delay processing.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">
                      Application Review
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          Migrationsverket reviews the application and checks
                          your eligibility. This review includes confirming your
                          residence, examining your criminal record (if
                          applicable), and verifying financial self-sufficiency.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          Migrationsverket may contact you to request additional
                          documentation if necessary.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Decision and Notification
                    </strong>

                    <ul className="tw-p-0 tw-pl-10">
                      <li>
                        <p className="m-0 tw-text-gray">
                          Once the review is complete, Migrationsverket will
                          issue a decision. If approved, you will receive a
                          certificate of Swedish citizenship. If denied, you
                          have the right to appeal the decision.
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Waiting Time for
                    </span>
                    <h2 className="tw-text-left">
                      <strong>Citizenship Applications </strong>
                    </h2>

                    <br />

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <p className="tw-text-gray">
                          The waiting time for Swedish citizenship applications
                          can vary depending on your background and whether
                          additional information is required. As of the latest
                          data, the average processing time for straightforward
                          applications is typically between 12 to 24 months.
                          However, more complex cases, such as those involving
                          individuals with criminal records or unresolved legal
                          issues, may take longer due to the need for additional
                          checks and documentation. Applicants with refugee or
                          protected status may experience a slightly shorter
                          processing time, usually within 12 to 18 months.
                        </p>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cp5}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">
                      Standard Processing
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          Standard processing for non-EU/EEA citizens and those
                          without special exemptions typically takes 18-36
                          months.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Nordic Citizens
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          Nordic citizens typically experience shorter
                          processing times, often between 6-12 months due to
                          simplified requirements.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      EU/EEA Citizens
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          EU/EEA citizens often have similar processing times to
                          standard applicants, but cases are typically processed
                          more quickly if all documentation is in order.
                        </p>
                      </li>
                    </ul>

                    <br />

                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      How Sweden Relocators Can
                    </span>
                    <h2 className="tw-text-left">
                      <strong>
                        {" "}
                        Assist with Your Citizenship Application{" "}
                      </strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">
                      Navigating the Swedish citizenship application process can
                      be complex and time-consuming. Sweden Relocators offers
                      comprehensive services to help streamline your
                      application. Here’s how we can assist:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Eligibility Assessment
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          We evaluate your residency history, documentation, and
                          circumstances to confirm your eligibility and advise
                          on any additional requirements.
                        </p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cp6}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">
                          Document Preparation and Verification
                        </strong>

                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li>
                            <p className="m-0 tw-text-gray">
                              We ensure that all required documents are
                              accurate, complete, and up-to-date, including
                              translation of foreign documents if necessary.
                            </p>
                          </li>
                        </ul>

                        <strong className="m-0 tw-text-black">
                          Application Submission and Monitoring
                        </strong>

                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li>
                            <p className="m-0 tw-text-gray">
                              We submit your application and monitor its
                              progress with Migrationsverket, providing updates
                              and handling any requests for additional
                              information.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">
                      Support for Appeal
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          If your application is denied, we guide you through
                          the appeal process and help strengthen your case for
                          reconsideration.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Guidance on Additional Requirements
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          We provide personalized advice to address specific
                          issues such as criminal records, financial concerns,
                          or extended absences.
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why Choose
                    </span>
                    <h2 className="tw-text-left">
                      <strong>Sweden Relocators? </strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">
                      Sweden Relocators offers expert knowledge and personalized
                      services to ensure a smooth Swedish citizenship
                      application process. Here’s why you should choose us:
                    </p>

                    <strong className="m-0 tw-text-black">
                      Expert Knowledge of Swedish Citizenship Laws
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          Our team is well-versed in the latest citizenship
                          requirements, ensuring you have the best chance of
                          success.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Comprehensive, Personalized Support
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          We tailor our services to meet your specific needs,
                          whether you’re a Nordic citizen, EU resident, or
                          permanent residence permit holder.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      Streamlined Application Process
                    </strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li>
                        <p className="m-0 tw-text-gray">
                          We handle the details, so you can have peace of mind
                          knowing that every step is managed professionally and
                          efficiently.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <Link to="/register" className="tw-text-center tw-pt-4">
                  <h5 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1.2em'}}>
                      <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                        Sign Up{" "}
                      </strong>
                      <strong> Today!</strong>
                    </h5>
                  </Link>
                  <br />
                  <p className="tw-text-gray">
                    Sign up today and simplify your journey! Whether you're
                    seeking assistance with relocation, permits, visas, legal
                    processes, or settling into a new life, we're here to help.
                    Our comprehensive services cover everything from work and
                    study opportunities to family reunifications, business
                    support, and much more. Let us guide you every step of the
                    way—start your seamless experience now!
                  </p>
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

export default Citizenship;
