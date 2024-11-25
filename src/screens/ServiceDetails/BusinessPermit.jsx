import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/business-startup.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from "react-i18next";


import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";


import bp1 from "../../assets/iconscout/bp1.png";
import bp2 from "../../assets/iconscout/bp2.png";
import bp3 from "../../assets/iconscout/bp3.png";
import bp4 from "../../assets/iconscout/bp4.png";
import bp5 from "../../assets/iconscout/bp5.png";

import Header from "../../components/Header_New/Header";

const BusinessPermit = () => {
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
      title: "Direct Citizenship ",
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

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Business Permit")}
        regularText={t(
          "Launch your entrepreneurial journey in Sweden. Our experts help you with all the necessary paperwork for a business permit."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify">
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Self-Employment Residence Permit in Sweden
                    </span>

                    <h2>
                      <strong>
                        {" "}
                        A Guide for Non-EU/EEA Entrepreneurs{" "}
                      </strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">
                      If you’re a non-EU/EEA citizen aiming to start or expand a
                      business in Sweden, you will need a self-employment
                      residence permit from the Swedish Migration Agency
                      (Migrationsverket). This permit allows non-EU
                      entrepreneurs to live in Sweden while building and running
                      a business. Known for its strong economy, Sweden fosters
                      an open business environment with a thriving start-up
                      culture, robust infrastructure, and a skilled workforce,
                      making it an ideal destination for entrepreneurs.
                    </p>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why Choose
                    </span>
                    <h2>
                      <strong> Sweden for Your Business? </strong>
                    </h2>
                    

                   
                    <br />

                    <ul className="tw-p-0 tw-pl-0 tw-pt-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong>Innovative Environment:</strong>
                          <br /> Sweden has a collaborative and transparent
                          business culture that encourages innovation.
                        </p>
                      </li>



                      <div className="row tw-flex tw-items-center">
                     

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={bp1}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                    
                    <li>
                      <p className="m-0 tw-text-gray tw-pt-4">
                        <strong>Access to EU Markets:</strong>
                        <br /> As an EU member, Sweden provides businesses
                        access to a large and stable market.
                      </p>
                    </li>

                    <li>
                      <p className="m-0 tw-text-gray tw-pt-4">
                        <strong>Supportive Financial Ecosystem:</strong>{" "}
                        <br />
                        Swedish institutions offer various financing options
                        for entrepreneurs, including public and private loans
                        and grants.
                      </p>
                    </li>
                    </div>
                    </div>



                      <li>
                        <p className="m-0 tw-text-gray tw-pt-4">
                          <strong>High-Quality Infrastructure:</strong>
                          <br /> Sweden’s advanced infrastructure and digital
                          capabilities make it a global hub for tech start-ups.
                        </p>
                      </li>
                    </ul>

                    <br />

                   

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Types of
                    </span>
                    <h2>
                      <strong> Business Structures in Sweden </strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong>Sole Trader (Enskild Firma):</strong>
                          <br /> Ideal for single entrepreneurs who want a
                          simple business setup.
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                  

                  <div className="col-md-6">
                    <div className="row ">
                      <div className="col-md-9 tw-mx-auto">
                        <motion.img
                          animate={imageVariants}
                          className=" tw-w-full"
                          src={bp2}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <li className="tw-pt-4">
                        <p className="m-0 tw-text-gray">
                          <strong>
                            Trading Partnership or Limited Partnership
                            (Handelsbolag/Kommanditbolag):
                          </strong>{" "}
                          <br />
                          Suitable for businesses with more than one owner.
                        </p>
                      </li>

                      <li className="tw-pt-4">
                        <p className="m-0 tw-text-gray">
                          <strong>
                            Limited Company (Aktiebolag):
                            <br />
                          </strong>{" "}
                          A popular choice for those seeking limited liability
                          and tax benefits.
                        </p>
                      </li>
                  </div>
                </div>


                    

                      <li className="tw-pt-4">
                        <p className="m-0 tw-text-gray">
                          <strong>
                            Economic Association (Ekonomisk Förening):
                          </strong>{" "}
                          <br />
                          <p className="">
                            {" "}
                            Best for cooperatives and businesses focused on
                            shared economic interests.
                          </p>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <br />
                  <div>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Self-Employment Residence Permit in Sweden
                    </span>

                    <h2>
                      <strong>
                        Key Requirements for a Self-Employment Residence Permit
                      </strong>
                    </h2>
                    

                  
                    <br />

                    <div className="row tw-flex tw-items-center">
                    

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={bp3}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <strong className="tw-text-gray">1. Valid Passport</strong>
                    <p className="tw-text-gray tw-pt-4">
                      You must hold a valid passport for the entire duration of
                      the permit. The permit’s validity will not exceed the
                      passport’s expiration date. Include copies of relevant
                      passport pages to confirm identity, validity, and
                      residence permits in any other countries.
                    </p>
                      </div>
                    </div>

                 

                    <strong className="tw-text-gray">
                      2. Ownership and Business Control
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      You must own at least 50% of the business and have full
                      decision-making authority over its operations. You should
                      also be actively involved in the day-to-day running of the
                      business and have primary responsibility for its
                      management and direction.
                    </p>

                    <strong className="tw-text-gray">
                      3. Financial Requirements for Business and Personal
                      Support
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      <strong>Initial Capital:</strong> You must provide bank
                      statements showing sufficient funds to establish and
                      operate the business for at least two years.
                    </p>
                    <p className="tw-text-gray">
                      <strong>Personal Support:</strong> <br />
                      <p className="tw-text-gray tw-pt-4">
                        You need sufficient personal income to support yourself
                        and any accompanying family members for the first two
                        years. Minimum estimated requirements are:
                      </p>
                      <ul className="tw-list-disc tw-ml-5">
                        <li className=" tw-flex tw-pt-4 tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          SEK 200,000 for yourself
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          SEK 100,000 for a spouse/partner
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          SEK 50,000 for each accompanying child
                        </li>
                      </ul>
                    </p>

                    <strong className="tw-text-gray">
                      4. Viable Business Plan
                    </strong>
                    <p className="tw-text-gray">
                      A detailed business plan is essential. Migrationsverket
                      will assess your business plan for feasibility and
                      profitability. Include:
                      <ul className="tw-list-disc tw-ml-5">
                        <li className=" tw-flex tw-pt-4  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Contracts with suppliers and clients
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Premises lease agreements, if relevant
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Necessary industry permits
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Financial projections, such as an investment budget,
                          liquidity budget, and a projected balance sheet
                          (profit and loss)
                        </li>
                      </ul>
                      The business must be expected to generate sufficient
                      profits to cover both business operations and personal
                      living expenses.
                    </p>

                    <strong className="tw-text-gray">
                      5. Relevant Experience and Skills
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      Migrationsverket requires evidence that you have the
                      necessary experience in the sector and skills to manage
                      your business effectively. Provide documentation of
                      previous work experience, education, or prior business
                      ownership relevant to the industry you plan to enter.
                    </p>

                    <strong className="tw-text-gray">
                      6. Language Proficiency
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      While not strictly required, it’s recommended to have
                      proficiency in Swedish or English to facilitate
                      communication within the Swedish business environment and
                      with regulatory authorities.
                    </p>

                    <strong className="tw-text-gray">
                      7. Application Fee Payment
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      The application fee for a self-employment residence permit
                      must be paid, and a receipt of this payment should be
                      included with your application.
                    </p>
                    <p className="tw-text-gray tw-pt-4">
                      If you plan to live in Sweden for more than one year, you
                      must also apply for a personnummer (Swedish personal
                      identity number) by registering with the Swedish Tax
                      Agency. This number is essential for accessing healthcare,
                      opening bank accounts, and other essential services.
                    </p>

                    <br />
                  
                    <span className=" tw-flex tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
          Step-by-Step Application
        </span>
        <h2>
          <strong> Process for a Self-Employment Permit </strong>
        </h2>



                    <br />

                    <strong className="tw-text-gray">
                      Step 1: Gather Required Documentation
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      Compile all necessary documents, including a valid
                      passport, proof of business ownership, and your business
                      plan. Ensure that all documents meet Migrationsverket’s
                      standards and include translated copies if they’re not in
                      Swedish or English.
                    </p>


                    <div className="row tw-flex tw-items-center">
                   

                   <div className="col-md-6">
                     <div className="row ">
                       <div className="col-md-9 tw-mx-auto">
                         <motion.img
                           animate={imageVariants}
                           className=" tw-w-full"
                           src={bp4}
                           alt=""
                         />
                       </div>
                     </div>
                   </div>
                   <div className="col-md-6">
                   <strong className="tw-text-gray">
                      Step 2: Submit the Application
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      Submit your application online through the
                      Migrationsverket e-service or at a Swedish embassy or
                      consulate in your home country. Attach all supporting
                      documents as required by Migrationsverket.
                    </p>
                    <p className="tw-text-gray">
                      <>Applicant Information:</> Include personal details,
                      business information, and financial documentation.
                    </p>
                    <p className="tw-text-gray ">
                      <>Business Plan and Financial Proof:</> Ensure that the
                      business plan and bank statements are accurate and reflect
                      your ability to run a sustainable business in Sweden.
                    </p>

     
       </div>
                 </div>

                  
                    <strong className="tw-text-gray">
                      Step 3: Migrationsverket Review and Evaluation
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      The Migration Agency will evaluate your application based
                      on:
                      <ul className="tw-pl-0 tw-pt-4">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Financial Feasibility: Ensuring that you have enough
                          capital to sustain the business.
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Business Viability: Reviewing your business plan to
                          determine if it can reasonably generate enough profit.
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          Personal and Business Background: Assessing your
                          industry experience, language proficiency, and
                          understanding of the Swedish business environment.
                        </li>
                      </ul>
                    </p>

                    <strong className="tw-text-gray">
                      Step 4: Decision Notification
                    </strong>
                    <p className="tw-text-gray tw-pt-4">
                      Once the application has been reviewed, Migrationsverket
                      will issue a decision. If approved, you will receive a
                      residence permit for self-employment, valid for up to two
                      years. Extensions may be granted based on the business’s
                      financial success and your continued eligibility.
                    </p>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Other
                    </span>
                    <h2>
                      <strong>Business Structures in Sweden </strong>
                    </h2>

                    <br />

                    <strong className="tw-text-gray">
                      Sole Trader (Enskild Firma)
                    </strong>
                    <p className="tw-text-gray">
                      Ideal for individual entrepreneurs without partners.
                    </p>

                    <strong className="tw-text-gray">
                      Trading Partnership or Limited Partnership
                      (Handelsbolag/Kommanditbolag)
                    </strong>
                    <p className="tw-text-gray">
                      Suitable for partnerships or small family businesses.
                    </p>

                    <strong className="tw-text-gray">
                      Limited Company (Aktiebolag)
                    </strong>
                    <p className="tw-text-gray">
                      Commonly chosen by those seeking to grow and scale their
                      business, offering limited liability protection.
                    </p>

                    <strong className="tw-text-gray">
                      Economic Association (Ekonomisk Förening)
                    </strong>
                    <p className="tw-text-gray">
                      Generally used by cooperatives or community-driven
                      initiatives.
                    </p>

                    <strong className="tw-text-gray">
                      <strong>
                        Advantages of Sweden’s Business Environment
                      </strong>
                    </strong>

                    <strong className="tw-text-gray">Innovative Culture</strong>
                    <p className="tw-text-gray">
                      With low corruption levels and minimal bureaucracy, Sweden
                      encourages entrepreneurial innovation.
                    </p>

                    <strong className="tw-text-gray">
                      Financial Accessibility
                    </strong>
                    <p className="tw-text-gray">
                      Sweden offers a variety of financing options, including
                      bank loans, government grants, and angel investors.
                    </p>

                    <strong className="tw-text-gray">
                      Access to Skilled Talent
                    </strong>
                    <p className="tw-text-gray">
                      The country has a highly educated workforce, with strong
                      technical and managerial skills, particularly beneficial
                      for technology and innovation-focused ventures.
                    </p>

                    <strong className="tw-text-gray">
                      Established Infrastructure
                    </strong>
                    <p className="tw-text-gray">
                      Sweden’s advanced infrastructure, efficient logistics, and
                      extensive digital networks make it ideal for both domestic
                      and international business operations.
                    </p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Our
                    </span>
                    <h2>
                      <strong> Services Include </strong>
                    </h2>
                   

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong>Application Guidance:</strong>
                          <br /> We assist with gathering and organizing
                          required documentation, ensuring that all requirements
                          are met according to Migrationsverket’s standards.
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray tw-pt-4">
                          <strong>Business Plan Development:</strong>
                          <br /> Our team helps you create a compelling business
                          plan that demonstrates financial viability and aligns
                          with Swedish market expectations.
                        </p>
                      </li>




                      <div className="row tw-flex tw-items-center">
                    

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={bp5}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <li>
                        <p className="m-0 tw-text-gray tw-pt-4">
                          <strong>Financial and Income Proof:</strong> <br />
                          Assistance in documenting financial assets to prove
                          your ability to support both the business and your
                          family.
                        </p>
                      </li>
                   
                      </div>
                    </div>


                    

                      <li>
                        <p className="m-0 tw-text-gray tw-pt-4">
                          <strong>Ongoing Support:</strong>
                          <br /> We offer support throughout the application
                          process, responding to inquiries from Migrationsverket
                          and guiding you through any additional requirements.
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray tw-pt-4">
                          <strong>Appeals Assistance:</strong>
                          <br /> If your application is denied, we provide
                          guidance on the appeals process, helping you
                          strengthen your case for reconsideration.
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why
                    </span>
                    <h2>
                      <strong> Work with Sweden Relocators? </strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong>Expert Knowledge:</strong> Our team stays
                          updated on the latest requirements from
                          Migrationsverket, providing accurate and effective
                          guidance.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong>Personalized Service:</strong> We understand
                          that every business is unique, and we tailor our
                          support to meet the specific needs of your industry
                          and personal situation.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong>Streamlined Process:</strong> By managing the
                          complexities of the application process, we help you
                          avoid delays and increase your likelihood of success.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <p className="tw-text-gray tw-pt-4">
                      If you’re ready to establish your business in Sweden and
                      need support with the self-employment residence permit
                      application, Sweden Relocators is here to help. Contact us
                      today to start your business journey in Sweden with
                      confidence, knowing that every aspect of your application
                      is in good hands.
                    </p>
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
      </div>

      <Footer />
    </>
  );
};

export default BusinessPermit;
