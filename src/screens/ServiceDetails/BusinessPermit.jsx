import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/business-startup.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from '../../context/TranslationContext';

import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import bp1 from "../../assets/iconscout/bp1.png";
import bp2 from "../../assets/iconscout/bp2.png";
import bp3 from "../../assets/iconscout/bp3.png";
import bp4 from "../../assets/iconscout/bp4.png";
import bp5 from "../../assets/iconscout/bp5.png";
import Sidebar from "../../components/ScrollableBar";

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

  const { t, language } = useTranslation();
  const isleftlangue = language === 'ur';

  return (
    <>{t(``)}<Header />{t(``)}<Banner_Page
      highlightText={t("Business Permit")}
      regularText={t(
        "Launch your entrepreneurial journey in Sweden. Our experts help you with all the necessary paperwork for a business permit."
      )}
      backgroundImage={homeBgImage}
    />{t(``)}<div className=" ">{t(``)}<section className="  ">{t(``)}<div className="container-fluid">{t(``)}<div className="row g-4">{t(``)}<div
    className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
    style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
  >{t(``)}<div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">{t(``)}<div>{t(``)}<span className="tw-flex tw-items-center tw-gap-2">{t(``)}<p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Self-Employment`)}</span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
      {" "}
      Residence Permit in Sweden
    </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<p className="tw-text-gray">{t(`If you’re a non-EU/EEA citizen aiming to start or expand a
                      business in Sweden, you will need a self-employment
                      residence permit from the Swedish Migration Agency
                      (Migrationsverket). This permit allows non-EU
                      entrepreneurs to live in Sweden while building and running
                      a business. Known for its strong economy, Sweden fosters
                      an open business environment with a thriving start-up
                      culture, robust infrastructure, and a skilled workforce,
                      making it an ideal destination for entrepreneurs.`)}</p>{t(``)}<br />{t(``)}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
        {" "}
        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
       {t(` Why Choose`)}
      </span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
        {" "}
        {t(`Sweden for Your Business?`)}{" "}
      </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<ul className="tw-p-0 tw-pl-0 tw-pt-0">{t(``)}<li className="tw-flex tw-items-center tw-gap-3">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Innovative Environment:`)}</strong>{t(``)}<br />{t(`Sweden has a collaborative and transparent
                          business culture that fosters innovation and
                          creativity. The country's emphasis on open
                          communication, mutual respect, and a flat
                          organizational structure allows for free flow of ideas
                          and encourages teamwork. Swedish businesses often
                          prioritize sustainability, ethical practices, and
                          long-term value, which aligns with a broader societal
                          focus on innovation and social responsibility. The
                          culture supports entrepreneurial initiatives and
                          offers a strong ecosystem of resources.`)}</p>{t(``)}</li>{t(``)}<div className="row tw-flex tw-items-center">{t(``)}<div className="col-md-6">{t(``)}<div className="row ">{t(``)}<div className="col-md-9 tw-mx-auto">{t(``)}<motion.img
          animate={imageVariants}
          className=" tw-w-full"
          src={bp1}
          alt=""
          style={{ maxWidth: "450px" }}
        />{t(``)}</div>{t(``)}</div>{t(``)}</div>{t(``)}<div className="col-md-6">{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`Access to EU Markets:`)}</strong>{t(``)}<br />{t(`As an EU member, Sweden offers businesses
                              the significant advantage of access to a large and
                              stable market. Companies operating in Sweden can
                              freely trade within the European Union, benefiting
                              from the absence of trade barriers, customs
                              duties, and tariffs.`)}</p>{t(``)}</li>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`Supportive Financial Ecosystem:`)}</strong>{" "}
              <br />{t(`Sweden’s financial ecosystem is highly supportive
                              of entrepreneurs and startups, offering a wide
                              range of financing options to help businesses grow
                              and thrive. Swedish institutions, both public and
                              private, provide various loans, grants, and
                              investment opportunities.`)}</p>{t(``)}</li>{t(``)}</div>{t(``)}</div>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`High-Quality Infrastructure:`)}</strong>{t(``)}<br />{t(`Sweden’s advanced infrastructure and digital
                          capabilities make it a global hub for tech start-ups.`)}</p>{t(``)}</li>{t(``)}</ul>{t(``)}<br />{t(``)}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
        {" "}
        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
       {t(` Types of`)}
      </span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
        {" "}
       {t(` Business Structures in Sweden`)}{" "}
      </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<ul className="tw-p-0 tw-pl-0">{t(``)}<li className="tw-flex tw-items-center tw-gap-3">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Sole Trader (Enskild Firma):`)}</strong>{t(``)}<br />{t(`Ideal for single entrepreneurs who want a
                          simple business setup.`)}</p>{t(``)}</li>
        {/* 
                      <div className="row tw-flex tw-items-center">{t(``)}<div className="col-md-6">{t(``)}<div className="row ">{t(``)}<div className="col-md-9 tw-mx-auto">{t(``)}<motion.img
                          animate={imageVariants}
                          className=" tw-w-full"
                          src={bp2}
                          alt=""
                          style={{ maxWidth: "450px" }}
                        />{t(``)}</div>{t(``)}</div>{t(``)}</div>{t(``)}<div className="col-md-6">{t(``)}</div>{t(``)}</div> */}

        <li className="tw-pt-4">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Trading Partnership or Limited Partnership
                            (Handelsbolag/Kommanditbolag):`)}</strong>{" "}
          <br />{t(`Suitable for businesses with more than one owner.`)}</p>{t(``)}</li>{t(``)}<li className="tw-pt-4">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Limited Company (Aktiebolag):`)}<br />{t(``)}</strong>{" "}
           {t(` A popular choice for those seeking limited liability
            and tax benefits.`)}
          </p>{t(``)}</li>{t(``)}<li className="tw-pt-4">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Economic Association (Ekonomisk Förening):`)}</strong>{" "}
            <br />{t(``)}<p className="">
              {" "}
             {t(` Best for cooperatives and businesses focused on
              shared economic interests.`)}
            </p>{t(``)}</p>{t(``)}</li>{t(``)}</ul>{t(``)}</div>{t(``)}<br />{t(``)}<div>{t(``)}<br />{t(``)}<span className="tw-flex tw-items-center tw-gap-2">{t(``)}<p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Key`)}</span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">{t(`Requirements for a Self-Employment Residence Permit`)}</strong>{t(``)}</h2>{t(``)}<br />{t(``)}<div className="row tw-flex tw-items-center">{t(``)}<div className="col-md-6">{t(``)}<div className="row ">{t(``)}<div className="col-md-9 tw-mx-auto">{t(``)}<motion.img
              animate={imageVariants}
              className=" tw-w-full"
              src={bp3}
              alt=""
              style={{ maxWidth: "450px" }}
            />{t(``)}</div>{t(``)}</div>{t(``)}</div>{t(``)}<div className="col-md-6">{t(``)}<strong className="tw-text-black">{t(`1. Valid Passport`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`You must hold a valid passport for the entire duration
                          of the permit. The permit’s validity will not exceed
                          the passport’s expiration date. Include copies of
                          relevant passport pages to confirm identity, validity,
                          and residence permits in any other countries.`)}</p>{t(``)}</div>{t(``)}</div>{t(``)}<strong className="tw-text-black">{t(`1
                      2. Ownership and Business Control`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`You must own at least 50% of the business and have full
                      decision-making authority over its operations. You should
                      also be actively involved in the day-to-day running of the
                      business and have primary responsibility for its
                      management and direction.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      3. Financial Requirements for Business and Personal
                      Support`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-gray">{t(`Initial Capital:`)}</strong>{" "}
         {t(` You must provide bank statements showing sufficient funds
          to establish and operate the business for at least two
          years.`)}
        </p>{t(``)}<p className="tw-text-gray">{t(``)}<strong className="tw-text-gray">{t(`Personal Support:`)}</strong>{" "}
          <br />{t(``)}<p className="tw-text-gray tw-pt-4">{t(`You need sufficient personal income to support yourself
                        and any accompanying family members for the first two
                        years. Minimum estimated requirements are:`)}</p>{t(``)}<ul className="tw-list-disc tw-ml-5">{t(``)}<li className=" tw-flex tw-pt-4 tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`SEK 200,000 for yourself`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`SEK 100,000 for a spouse/partner`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`SEK 50,000 for each accompanying child`)}</li>{t(``)}</ul>{t(``)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      4. Viable Business Plan`)}</strong>{t(``)}<p className="tw-text-gray">{t(`A detailed business plan is essential. Migrationsverket
                      will assess your business plan for feasibility and
                      profitability. Include:`)}<ul className="tw-list-disc tw-ml-5">{t(``)}<li className=" tw-flex tw-pt-4  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Contracts with suppliers and clients`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Premises lease agreements, if relevant`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Necessary industry permits`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Financial projections, such as an investment budget,
                          liquidity budget, and a projected balance sheet
                          (profit and loss)`)}</li>{t(``)}</ul>{t(`The business must be expected to generate sufficient
                      profits to cover both business operations and personal
                      living expenses.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      5. Relevant Experience and Skills`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`Migrationsverket requires evidence that you have the
                      necessary experience in the sector and skills to manage
                      your business effectively. Provide documentation of
                      previous work experience, education, or prior business
                      ownership relevant to the industry you plan to enter.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      6. Language Proficiency`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`While not strictly required, it’s recommended to have
                      proficiency in Swedish or English to facilitate
                      communication within the Swedish business environment and
                      with regulatory authorities.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      7. Application Fee Payment`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`The application fee for a self-employment residence permit
                      must be paid, and a receipt of this payment should be
                      included with your application.`)}</p>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`If you plan to live in Sweden for more than one year, you
                      must also apply for a personnummer (Swedish personal
                      identity number) by registering with the Swedish Tax
                      Agency. This number is essential for accessing healthcare,
                      opening bank accounts, and other essential services.`)}</p>{t(``)}<br />{t(``)}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
         {t(` Step-by-Step Application`)}
        </span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
          {" "}
          {t(`Process for a Self-Employment Permit`)}{" "}
        </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<strong className="tw-text-black">{t(`1
                      Step 1: Gather Required Documentation`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`Compile all necessary documents, including a valid
                      passport, proof of business ownership, and your business
                      plan. Ensure that all documents meet Migrationsverket’s
                      standards and include translated copies if they’re not in
                      Swedish or English.`)}</p>{t(``)}<div className="row tw-flex tw-items-center">{t(``)}<div className="col-md-6">{t(``)}<div className="row ">{t(``)}<div className="col-md-9 tw-mx-auto">{t(``)}<motion.img
          animate={imageVariants}
          className=" tw-w-full"
          src={bp4}
          alt=""
          style={{ maxWidth: "450px" }}
        />{t(``)}</div>{t(``)}</div>{t(``)}</div>{t(``)}<div className="col-md-6">{t(``)}<strong className="tw-text-black">{t(`1
                          Step 2: Submit the Application`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`Submit your application online through the
                          Migrationsverket e-service or at a Swedish embassy or
                          consulate in your home country. Attach all supporting
                          documents as required by Migrationsverket.`)}</p>{t(``)}<p className="tw-text-gray">{t(``)}<>{t(`Applicant Information:`)}</>{t(`Include personal details,
                          business information, and financial documentation.`)}</p>{t(``)}<p className="tw-text-gray ">{t(``)}<>{t(`Business Plan and Financial Proof:`)}</>{t(`Ensure that
                          the business plan and bank statements are accurate and
                          reflect your ability to run a sustainable business in
                          Sweden.`)}</p>{t(``)}</div>{t(``)}</div>{t(``)}<strong className="tw-text-black">{t(`1
                      Step 3: Migrationsverket Review and Evaluation`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`The Migration Agency will evaluate your application based
                      on:`)}<ul className="tw-pl-0 tw-pt-4">{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Financial Feasibility: Ensuring that you have enough
                          capital to sustain the business.`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Business Viability: Reviewing your business plan to
                          determine if it can reasonably generate enough profit.`)}</li>{t(``)}<li className=" tw-flex  tw-gap-3">{t(``)}<div>{t(``)}<GoTriangleRight className=" tw-text-blue" />{t(``)}</div>{t(`Personal and Business Background: Assessing your
                          industry experience, language proficiency, and
                          understanding of the Swedish business environment.`)}</li>{t(``)}</ul>{t(``)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Step 4: Decision Notification`)}</strong>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`Once the application has been reviewed, Migrationsverket
                      will issue a decision. If approved, you will receive a
                      residence permit for self-employment, valid for up to two
                      years. Extensions may be granted based on the business’s
                      financial success and your continued eligibility.`)}</p>{t(``)}<br />{t(``)}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
        {(t`  Other`)}
        </span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
         {t(` Business Structures in Sweden`)}{" "}
        </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<strong className="tw-text-black">{t(`1
                      Sole Trader (Enskild Firma)`)}</strong>{t(``)}<p className="tw-text-gray">{t(`Ideal for individual entrepreneurs without partners.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Trading Partnership or Limited Partnership
                      (Handelsbolag/Kommanditbolag)`)}</strong>{t(``)}<p className="tw-text-gray">{t(`Suitable for partnerships or small family businesses.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Limited Company (Aktiebolag)`)}</strong>{t(``)}<p className="tw-text-gray">{t(`Commonly chosen by those seeking to grow and scale their
                      business, offering limited liability protection.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Economic Association (Ekonomisk Förening)`)}</strong>{t(``)}<p className="tw-text-gray">{t(`Generally used by cooperatives or community-driven
                      initiatives.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1`)}<strong className="tw-text-black">{t(`Advantages of Sweden’s Business Environment`)}</strong>{t(``)}</strong>{t(``)}<strong className="tw-text-black">{t(`1Innovative Culture`)}</strong>{t(``)}<p className="tw-text-gray">{t(`With low corruption levels and minimal bureaucracy, Sweden
                      encourages entrepreneurial innovation.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Financial Accessibility`)}</strong>{t(``)}<p className="tw-text-gray">{t(`Sweden offers a variety of financing options, including
                      bank loans, government grants, and angel investors.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Access to Skilled Talent`)}</strong>{t(``)}<p className="tw-text-gray">{t(`The country has a highly educated workforce, with strong
                      technical and managerial skills, particularly beneficial
                      for technology and innovation-focused ventures.`)}</p>{t(``)}<strong className="tw-text-black">{t(`1
                      Established Infrastructure`)}</strong>{t(``)}<p className="tw-text-gray">{t(`Sweden’s advanced infrastructure, efficient logistics, and
                      extensive digital networks make it ideal for both domestic
                      and international business operations.`)}</p>{t(``)}</div>{t(``)}<div>{t(``)}<br />{t(``)}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
        {" "}
        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
        {t(`Our`)}
      </span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
        {" "}
       {t(` Services Include`)}{" "}
      </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<ul className="tw-p-0 tw-pl-0">{t(``)}<li className="tw-flex tw-items-center tw-gap-3">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Application Guidance:`)}</strong>{t(``)}<br />{t(`We assist with gathering and organizing
                          required documentation, ensuring that all requirements
                          are met according to Migrationsverket’s standards.`)}</p>{t(``)}</li>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`Business Plan Development:`)}</strong>{t(``)}<br />{t(`Our team helps you create a compelling business
                          plan that not only demonstrates financial viability
                          but also aligns with Swedish market expectations. We
                          work closely with you to develop a detailed strategy
                          that highlights your business model.`)}</p>{t(``)}</li>{t(``)}<div className="row tw-flex tw-items-center">{t(``)}<div className="col-md-6">{t(``)}<div className="row ">{t(``)}<div className="col-md-9 tw-mx-auto">{t(``)}<motion.img
            animate={imageVariants}
            className=" tw-w-full"
            src={bp5}
            alt=""
            style={{ maxWidth: "450px" }}
          />{t(``)}</div>{t(``)}</div>{t(``)}</div>{t(``)}<div className="col-md-6">{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`Financial and Income Proof:`)}</strong>{" "}
            <br />{t(`We assist you in documenting your financial assets
                              to demonstrate your ability to support both your
                              business and your family in Sweden. This includes
                              preparing detailed financial statements, such as
                              bank account balances, investment records, and
                              proof of income, to show that you have sufficient
                              resources to cover your living expenses, business
                              operations, and any associated costs. We help you
                              compile the necessary documentation to meet
                              Swedish immigration requirements, ensuring that
                              you can demonstrate financial stability and
                              sustainability.`)}</p>{t(``)}</li>{t(``)}</div>{t(``)}</div>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`Ongoing Support:`)}</strong>{t(``)}<br />{t(`We offer support throughout the application
                          process, responding to inquiries from Migrationsverket
                          and guiding you through any additional requirements.`)}</p>{t(``)}</li>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray tw-pt-4">{t(``)}<strong className="tw-text-black">{t(`Appeals Assistance:`)}</strong>{t(``)}<br />{t(`If your application is denied, we provide
                          guidance on the appeals process, helping you
                          strengthen your case for reconsideration.`)}</p>{t(``)}</li>{t(``)}</ul>{t(``)}<br />{t(``)}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
         {t(` Why`)}
        </span>{t(``)}<h2 className="tw-text-left">{t(``)}<strong className="tw-text-black">
          {" "}
         {t(` Work with Sweden Relocators?`)}{" "}
        </strong>{t(``)}</h2>{t(``)}<br />{t(``)}<ul className="tw-p-0 tw-pl-0">{t(``)}<li className="tw-flex tw-items-center tw-gap-3">{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Expert Knowledge:`)}</strong>{" "}
         {t(` Our team stays updated on the latest requirements from
          Migrationsverket, providing accurate and effective
          guidance.`)}
          <p>{t(``)}<br />{t(``)}</p>{t(``)}</p>{t(``)}</li>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Personalized Service:`)}</strong>{" "}
            {t(`We understand that every business is unique, and we
            tailor our support to meet the specific needs of your
            industry and personal situation.`)}
          </p>{t(``)}<p>{t(``)}<br />{t(``)}</p>{t(``)}</li>{t(``)}<li>{t(``)}<p className="m-0 tw-text-gray">{t(``)}<strong className="tw-text-black">{t(`Streamlined Process:`)}</strong>{" "}
           {t(` By managing the complexities of the application
            process, we help you avoid delays and increase your
            likelihood of success.`)}
            <p>{t(``)}<br />{t(``)}</p>{t(``)}</p>{t(``)}</li>{t(``)}</ul>{t(``)}<p className="tw-text-gray tw-pt-4">{t(`If you’re ready to establish your business in Sweden and
                      need support with the self-employment residence permit
                      application, Sweden Relocators is here to help. Contact us
                      today to start your business journey in Sweden with
                      confidence, knowing that every aspect of your application
                      is in good hands.`)}</p>{t(``)}<Link to="/register" className="tw-text-center tw-pt-4">{t(``)}<h5 className="tw-text-center tw-pt-4" style={{ fontSize: '1em' }}>{t(``)}<strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
          {t(`Sign Up`)}{" "}
        </strong>{t(``)}<strong className="tw-text-black">{t(`Today!`)}</strong>{t(``)}</h5>{t(``)}</Link>{t(``)}<br />{t(``)}<p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`)}</p>{t(``)}</div>{t(``)}</div>{t(``)}</div>{t(``)}<Sidebar />{t(``)}</div>{t(``)}</div>{t(``)}</section>{t(``)}</div>{t(``)}<Footer />{t(``)}</>
  );
};

export default BusinessPermit;
