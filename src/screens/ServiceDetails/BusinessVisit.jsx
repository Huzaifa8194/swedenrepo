import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/startup-business.jpg";
import banner2 from "../../assets/images/man-searching-air-ticket-for-summer-travel.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from '../../context/TranslationContext';

import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import bv1 from "../../assets/iconscout/bv1.png";
import bv2 from "../../assets/iconscout/bv2.png";
import bv3 from "../../assets/iconscout/bv3.png";
import Sidebar from "../../components/ScrollableBar";

import Header from "../../components/Header_New/Header";

const BusinessVisit = () => {
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
      title: "Golden Visa   ",
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
        highlightText={t("Business Visit")}
        regularText={t(
          "Plan your business visit to Sweden efficiently. We provide support to make your short-term stays hassle-free and productive."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify">
                <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                     {t(` Documentation`)}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`Requirements for Visa Application`)}{" "}
                      </strong>
                    </h2>
                    <br></br>
                    <p className="tw-text-gray">
                     {t(` For your visa application, certain documents must be
                      submitted to ensure a smooth process. Below is a guide
                      detailing all necessary documents, including those for
                      both applicants and sponsoring companies:`)}
                    </p>
                    <br></br>
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t(` Personal`)}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                       {t(` Document Requirements`)}{" "}
                      </strong>
                    </h2>
                    <br></br>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">
                            {t(`Bank Statement:`)}
                          </strong>
                          <br /> {t(`To complete your application or prove your
                          financial stability, you may be required to submit an
                          original bank statement from the last six months. This
                          document should clearly show your account activity,
                          balance, and transactions during that period. If bank
                          statements are unavailable, you can alternatively
                          provide proof of other assets, such as investment
                          portfolios, property ownership, or other financial
                          documents that demonstrate your financial capacity.`)}
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={bv1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <br />
                              <strong className="tw-text-black">
                                {t(`Passport Requirements:`)}
                              </strong>
                              <br /> Your passport must:
                              <ul className="tw-pl-0">
                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                   {t(` Have at least two blank pages.`)}
                                  </p>
                                </li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                    {t(`Be valid for at least three months beyond
                                    the end of your planned trip.`)}
                                  </p>
                                </li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                    {t(`Include all previous passports from the past
                                    seven years.`)}
                                  </p>
                                </li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                    {t(`Include all previous passports from the past
                                    seven years.`)}
                                  </p>
                                </li>
                              </ul>
                            </p>
                          </li>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />{" "}
                          <strong className="tw-text-black">
                            {t(`Invitation Letter:`)}
                          </strong>
                          <br />{t(` A formal invitation from the Swedish company or
                          individual on official letterhead. The letter should
                          include:`)}
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Full address and contact details of the inviting
                              company.`)}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Name and position of the contact person or
                              signatory.`)}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Purpose and expected duration of your visit.`)}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`Details of who will bear travel and living
                              expenses.`)}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`A statement guaranteeing that the applicant will
                              depart Sweden before visa expiration.`)}
                            </li>
                          </ul>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />
                          <strong className="tw-text-black">
                           {t(` Employment Certificate:`)}
                          </strong>
                          <br /> {t(`Proof of employment, detailing:`)}
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`Your employment start date.`)}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Current position, salary, and purpose of travel.`)}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`Approval of leave for the duration of the visit.`)}
                            </li>
                          </ul>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />
                          <strong className="tw-text-black">
                            {t(`Medical Insurance:`)}
                          </strong>
                          <br /> {t(`Travel insurance covering the entire Schengen
                          area, valid for your entire stay. The policy should
                          cover at least EUR 30,000 to cover expenses for
                          emergency medical treatment, hospital care,
                          repatriation, or death.`)}
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />
                          <strong className="tw-text-black">
                            {t(`Travel Ticket Reservation:`)}
                          </strong>
                          <br /> {t(`Provide round-trip flight reservations. Final
                          tickets are not required but initial booking
                          confirmation is mandatory.`)}
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />{" "}
                          <strong className="tw-text-black">
                            {t(`Accommodation Proof:`)}
                          </strong>
                          <br /> {t(`A confirmed hotel booking or another proof of
                          accommodation (primary reservation required).`)}
                        </p>
                      </li>
                    </ul>
                    <br></br>
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Additional Requirements`)}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t(`for Employers or Sponsoring Companies`)}{" "}
                      </strong>
                    </h2>
                    <br></br>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">
                            {t(`Commercial Registration and Tax Card:`)}
                          </strong>{" "}
                          {t(`Original and copy of the company’s commercial registry
                          and tax card, translated into English or Swedish, to
                          confirm the legitimacy of the business.`)}
                        </p>
                      </li>
                    </ul>
                    <br></br>{" "}
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Additional Documents`)}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`that May Be Required`)}
                      </strong>
                    </h2>
                    <br></br>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">
                           {t(` Movement Certificate:`)}
                          </strong>
                          <br /> {t(`A movement certificate is required in specific
                          circumstances, such as when you are a first-time
                          traveler to Sweden, your passport does not cover the
                          last seven years, or there is a gap of more than three
                          months between your current and previous passports.
                          This document helps the Swedish authorities track your
                          travel history and verify your eligibility for entry
                          or a visa. It serves as proof of your movement between
                          countries, ensuring that you meet the necessary
                          requirements for visa processing.`)}
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={bv2}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <br />
                              <strong className="tw-text-black">
                                {t(`Other Embassy-Specified Documents:`)}
                              </strong>{" "}
                              <br />
                              {t(`Depending on your individual situation, the
                              embassy may request additional paperwork to
                              process your visa or permit application. These
                              documents could include, but are not limited to,
                              proof of accommodation, travel insurance,
                              employment contracts, or financial documentation.
                              The specific requirements will vary based on the
                              type of visa or permit you are applying for, as
                              well as your personal circumstances. It is
                              important to carefully review the embassy's
                              guidelines and provide any additional
                              documentation as requested to ensure a smooth
                              application process.`)}
                            </p>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div>
                    <br></br>

                    <span className="tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Business Visa for Foreign Investors`)}
                    </span>

                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                       {t(` A Swedish Business Visa for Investors`)}
                      </strong>
                    </h2>

                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <p className="tw-text-gray">
                       {t(` A Swedish business visa is ideal for foreign nationals
                        who wish to invest in Sweden and make periodic visits to
                        manage their business interests. This visa allows
                        entrepreneurs and investors to enter Sweden for
                        short-term stays, enabling them to oversee operations,
                        meet with business partners, and participate in key
                        business activities without the need for long-term
                        residency. While the business visa does not grant
                        permission to work in Sweden, it provides flexibility
                        for individuals involved in the management, development,
                        or oversight of a Swedish business.`)}
                      </p>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={bv3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <p className="tw-text-gray">
                          {t(`This visa allows multiple entries and is valid for
                          short stays of up to 90 days within a 180-day period,
                          renewable for up to five years. This flexibility is
                          especially beneficial for investors who need to
                          oversee business developments or make frequent visits
                          without obtaining a residence permit. Additionally,
                          the visa provides the opportunity to plan business
                          trips around key events and projects in Sweden,
                          ensuring ongoing engagement with local operations
                          while maintaining compliance with visa regulations.
                          This makes it a practical solution for those managing
                          investments or business interests in Sweden on a
                          regular basis.`)}
                        </p>
                      </div>
                    </div>

                    <p className="tw-text-gray">
                      {t(`For short-term business trips lasting less than three
                      months, this visa is sufficient without the need for a
                      residence permit. However, if you plan to stay longer or
                      relocate for an extended period, a residence permit may be
                      required.`)}
                    </p>

                    <strong className="m-0 tw-text-gray">
                     {t(` How We Assist You`)}
                    </strong>
                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                         {t(` Document Preparation and Submission: Assistance
                          in gathering, verifying, and submitting all required
                          documents to ensure a smooth process.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          {t(`Guidance on Financial Requirements: Advising on
                          the proof of funds and financial documentation needed
                          to meet Swedish visa requirements.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          {t(`Appointment Scheduling: Coordinating necessary
                          appointments with the Swedish embassy or consulate for
                          document submission and interviews.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          {t(`Ongoing Support and Updates: Regular updates on
                          your visa status and timely responses to any
                          additional embassy requests.`)}
                        </p>
                      </li>
                    </ul>

                    <p className="tw-text-gray">
                      {t(`Our comprehensive visa service allows you to focus on your
                      business objectives while we take care of the paperwork.
                      Contact us today to learn more about how we can facilitate
                      your short-term business visa to Sweden and support your
                      professional success.`)}
                    </p>
                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t(`Sign Up`)}{" "}
                        </strong>
                        <strong className="tw-text-black"> {t(`Today!`)}</strong>
                      </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">
                    {t(`  Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`)}
                    </p>
                  </div>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BusinessVisit;
