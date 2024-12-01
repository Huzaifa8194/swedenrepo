import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/psychological-problems-at-school.png";
import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from "../../context/TranslationContext";
import Header from "../../components/Header_New/Header";

import ap1 from "../../assets/iconscout/ap1.png";
import ap2 from "../../assets/iconscout/ap2.png";
import ap3 from "../../assets/iconscout/ap3.png";
import ap4 from "../../assets/iconscout/ap4.png";

import Sidebar from "../../components/ScrollableBar";

const ServiceDetails = () => {
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
        highlightText={t("Appeal Cases")}
        regularText={t(
          "Seek safety and a fresh start in Sweden. Our comprehensive support helps guide you through the asylum process smoothly."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" tw-relative">
        <section className=" tw-relative">
          <div className="tw-relative">
            <div className="container-fluid tw-relative">
              <div className="row g-4 tw-relative">
                <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify tw-relative">
                  <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                    <div>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t(`Comprehensive Assistance to Overturn Decisions`)}
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Appeal Process for a Denied Permit or Visa in Sweden`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray tw-">
                        {t(` If you have been denied entry or residency in
                        Sweden—whether it’s for family reunification, a
                        residence permit, business visa, citizenship, or other
                        types of permits you have the right to appeal the
                        decision made by the Swedish Migration Agency
                        (Migrationsverket). Navigating the appeal process can be
                        complex, and having an experienced professional by your
                        side can significantly increase your chances of a
                        positive outcome.`)}
                        <br />
                        <br />
                        {t(` Sweden Relocators specializes in helping clients appeal
                        Migration Agency decisions. With our in-depth
                        understanding of the appeal process, we provide expert
                        guidance and support, giving you the best opportunity to
                        have your case reconsidered and, ideally, reversed.`)}
                      </p>
                    </div>
                    <br />
                    <div>
                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={ap3}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                            {" "}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                            Why Appeals are
                          </span>
                          <h2 className="tw-text-left">
                            <strong>{t(`Increasingly Necessary`)}</strong>
                          </h2>
                          <br />
                          <p className=" tw-text-gray tw-">{t(`Since the refugee crisis, Swedish authorities have
                            tightened the requirements for permits, making it
                            more challenging to gain entry or residence in
                            Sweden. Many applicants are denied permits due to
                            increasingly stringent documentation requirements or
                            misunderstandings in their initial application.
                            Sweden Relocators has successfully appealed numerous
                            cases, helping clients obtain permits even after
                            initial denials. Our aim is to assist you in
                            challenging the decision and restoring your
                            opportunity to live or work in Sweden.`)}</p>
                        </div>
                      </div>

                      <br />
                    </div>

                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      How to Start
                    </span>
                    <h2 className="tw-text-left">
                      <strong>{t(`The Appeal Process`)}</strong>
                    </h2>
                    <br></br>
                    <p className=" tw-text-gray">{t(`To appeal a denied decision, you must submit a written
                      appeal in Swedish or English. This document needs to
                      include specific information and must be signed by the
                      applicant or an authorized representative. Here’s how to
                      begin:`)}</p>

                    {/* <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                      
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={ap1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div>
                      <br />
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        What to Include in
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`The Appeal Letter`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`In your appeal letter, you should clearly state:`)}</p>

                      <strong className="tw-text-black">{t(`Decision to be Appealed:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Clearly outline the specific decision you are
                            contesting, providing as much detail as possible.
                            This includes identifying the exact ruling, action,
                            or determination made by the responsible authority
                            or organization that you believe is incorrect or
                            unjust. Be sure to mention any relevant dates,
                            reference numbers, or case identifiers associated
                            with the decision to ensure clarity.`)}</p>
                        </li>
                      </ul>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={ap4}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <strong className="tw-text-black">{t(`Requested Change:`)}</strong>

                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">{t(`Clearly state how you would like the decision to
                                be changed (e.g., approval of the permit).`)}</p>
                            </li>
                          </ul>

                          <strong className="tw-text-black">{t(`Personal Information:`)}</strong>

                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">{t(`Include your full name, date of birth, postal
                                address, email, and phone number.`)}</p>
                            </li>
                          </ul>

                          <strong className="tw-text-black">{t(`New Evidence or Arguments:`)}</strong>

                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">{t(`Any new circumstances, supporting evidence, or
                                arguments that you did not initially submit
                                should be included in your appeal.`)}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <br />
                    <p>
                      <br />
                    </p>
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Authorization
                    </span>
                    <h2 className="tw-text-left">
                      <strong>{t(`For a Representative`)}</strong>
                    </h2>
                    <br />
                    <p className=" tw-text-gray">{t(`If someone else is submitting the appeal on your behalf
                      (for instance, a legal representative from Sweden
                      Relocators), you must provide a signed Power of Attorney
                      (fullmakt) allowing them to act on your behalf. This
                      document should be included with your appeal and must be
                      an original copy.`)}</p>
                    {/* <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={ap2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        
                      </div>
                    </div> */}

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        by Migrationsverket
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Appeal Submission and Initial Review`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray tw-">{t(`Once your appeal is submitted, Migrationsverket will
                        initially review the case again to determine if the
                        decision can be changed based on the new information
                        provided. The agency will verify that your appeal was
                        submitted on time (within three weeks of the decision)
                        and assess whether the initial decision may have
                        overlooked any key information.`)}</p>

                      <strong className="tw-text-black">{t(`Timely Submission:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If the appeal is not submitted within three weeks,
                            Migrationsverket may dismiss it, and you may need to
                            submit a new application instead.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Reconsideration:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If Migrationsverket finds that new evidence or
                            arguments justify a change in the decision, they
                            will inform you and may grant the permit.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        at This Stage
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Possible Outcomes`)}</strong>
                      </h2>
                      <br></br>

                      <strong className="tw-text-black">{t(`Positive Outcome:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If Migrationsverket determines that the original
                            decision can be changed, they will inform you, and
                            the visa, permit, or other document will be issued.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Forwarding the Appeal:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If the agency upholds the initial decision, your
                            appeal will be forwarded to the Administrative Court
                            in Gothenburg for further review.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={ap2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <br></br>
                        <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          Next Steps
                        </span>
                        <h2 className="tw-text-left">
                          <strong>{t(`If the Appeal is Forwarded to Court`)}</strong>
                        </h2>
                        <br></br>
                        <p className=" tw-text-gray">{t(`If Migrationsverket does not alter the decision, your
                          case will be sent to the Administrative Court
                          (Förvaltningsrätten) in Gothenburg, along with all
                          application documents and the appeal. The court will
                          review the case independently and make a ruling.`)}</p>
                      </div>
                    </div>

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Administrative
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Court Review`)}</strong>
                      </h2>
                      <br></br>
                      <p className=" tw-text-gray tw-">{t(`The court will examine the initial application, the
                        reasons for the denial, and any new information or
                        arguments presented in your appeal. The court may
                        require additional documents or clarification to make a
                        fair ruling.`)}</p>

                      <strong className="tw-text-black">{t(`Decision Notification:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Once the court has reached a decision, you will be
                            notified at the address you specified in your
                            application or appeal.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Potential for Further Appeals:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If the Administrative Court also denies the appeal,
                            there may be additional options to appeal to the
                            Migration Court of Appeal (Migrationsöverdomstolen)
                            in specific cases, particularly if the case involves
                            legal principles of wider importance.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        for the Appeal Process
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Estimated Timelines`)}</strong>
                      </h2>
                      <br></br>

                      <p className=" tw-text-gray tw-">{t(`The duration of the appeal process varies:`)}</p>

                      <strong className="tw-text-black">{t(`Initial Review by Migrationsverket:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If Migrationsverket decides to change its decision,
                            you will generally be informed within a few days.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Forwarding to the Administrative Court:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`If the decision is not altered, the case is
                            typically forwarded to the Administrative Court
                            within a few weeks.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Court Decision Timeline:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`The Administrative Court's review can take several
                            months, depending on the complexity of the case and
                            the court’s workload.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        SERVICES
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Our Services Include:`)}</strong>
                      </h2>
                      <br></br>

                      <strong className="tw-text-black">{t(`Case Analysis and Consultation`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`We review your case and provide a detailed
                            assessment of the reasons for the denial and the
                            best approach for the appeal. Understanding why the
                            permit was denied allows us to identify key points
                            to address in the appeal.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Document Preparation and Gathering Evidence`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Our legal team drafts a comprehensive appeal letter
                            that addresses each aspect of the denial and
                            presents compelling reasons for reconsideration. We
                            ensure that all necessary documentation, including
                            any required Power of Attorney, is complete and
                            accurately presented.`)}</p>
                        </li>
                      </ul>

                      <div className="row tw-flex  tw-items-center">
                        <div className="col-md-6 tw-justify-center">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full "
                                src={ap1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <strong className="tw-text-black">{t(`Representation and Follow-Up`)}</strong>

                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">{t(`If the appeal is forwarded to the Administrative
                                Court, we act as your representative, managing
                                all communication with the court and keeping you
                                informed throughout the process.`)}</p>
                            </li>
                          </ul>
                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">{t(`We provide ongoing follow-up with
                                Migrationsverket or the court to ensure your
                                case moves forward smoothly.`)}</p>
                            </li>
                          </ul>

                          <strong className="tw-text-black">{t(`Legal Support for Further Appeals`)}</strong>

                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">{t(`If necessary, we guide you through the process
                                of appealing to the Migration Court of Appeal in
                                cases where this option is available.`)}</p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong className="tw-text-black">{t(`Our Services with Swedish Authorities`)}</strong>

                            <p>{t(`We understand that decisions from Swedish
                              authorities can have a significant impact on your
                              life, finances, and ability to work or reside in
                              Sweden. Here’s how we can assist with appeals,
                              applications, and communications with several key
                              agencies:`)}</p>

                            <br></br>
                            <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                              {" "}
                              <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                              (Skatteverket)
                            </span>
                            <h2 className="tw-text-left">
                              <strong>{t(`1. Swedish Tax Agency`)}</strong>
                            </h2>
                            <br></br>

                            <p>{t(`Skatteverket plays a central role in matters
                              related to tax registration, personnummer (social
                              security numbers), and residence permits for tax
                              purposes. If you are facing issues with
                              Skatteverket, such as rejected applications for a
                              personnummer, tax disputes, or concerns regarding
                              tax residency status, our team can help.`)}</p>
                          </p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Personnummer Applications:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Assistance in gathering required documents,
                            completing applications, and ensuring timely
                            submission for personnummer or coordination numbers.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Tax Residency and Income Tax Disputes:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Support in challenging tax residency status
                            determinations or disputes related to income tax
                            filings.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Property Tax and Business Tax Matters:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Guidance on property or business tax filings,
                            especially for entrepreneurs or individuals with
                            complex tax situations.`)}<br />
                            <br />
                            <br></br>
                            <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                              {" "}
                              <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                              (Försäkringskassan)
                            </span>
                            <h2 className="tw-text-left">
                              <strong>{t(`2. Swedish Social Insurance Agency`)}</strong>
                            </h2>
                            <br></br>
                            <p>{t(`Försäkringskassan manages social insurance
                              benefits, including health insurance, parental
                              leave, child benefits, and pensions. If you are
                              struggling to access or appeal decisions related
                              to these benefits, we can provide comprehensive
                              support.`)}</p>
                          </p>
                        </li>
                      </ul>

                      <div>
                        <strong className="tw-text-black">{t(`Parental Leave and Child Benefits:`)}</strong>
                      </div>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Assistance with applications, appeals, and
                            compliance to ensure you receive the benefits you’re
                            entitled to.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Sickness and Disability Benefits:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Support in gathering medical documentation and
                            challenging benefit denials.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Pension Eligibility:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Guidance on navigating the Swedish pension system
                            and appealing decisions on pension eligibility or
                            amounts.`)}<br />
                            <br />
                            <br></br>
                            <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                              {" "}
                              <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                              (Arbetsförmedlingen)
                            </span>
                            <h2 className="tw-text-left">
                              <strong>
                                {" "}
                                3. Swedish Public Employment Service
                              </strong>
                            </h2>
                            <br></br>
                            <p>{t(`3. Swedish Public Employment Service
                              (Arbetsförmedlingen) If you are receiving
                              unemployment benefits or support from
                              Arbetsförmedlingen, you may face requirements or
                              conditions to remain eligible. We help ensure that
                              you meet these requirements and provide assistance
                              if you encounter issues.`)}</p>
                          </p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Activity Requirements:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Assistance in meeting activity requirements,
                            including documentation and verification.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Appeals for Unemployment Support:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Support for those who believe they have been
                            unfairly denied benefits or faced incorrect
                            decisions regarding their eligibility.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Job Search Assistance:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Guidance on Arbetsförmedlingen procedures and
                            requirements to maintain benefits while seeking
                            employment.`)}<br />
                            <br />
                            <br></br>
                            <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                              {" "}
                              <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                              (Tullverket)
                            </span>
                            <h2 className="tw-text-left">
                              <strong>{t(`4. Swedish Customs Agency`)}</strong>
                            </h2>
                            <br></br>
                            <p>{t(`Tullverket handles customs and import/export
                              regulations in Sweden, and decisions by this
                              authority can significantly impact individuals or
                              businesses involved in international trade.`)}</p>
                          </p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Customs Disputes:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Assistance in resolving disputes related to customs
                            duties, classifications, and import/export
                            procedures.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Personal Belongings and Vehicles:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Guidance on importing personal belongings or
                            vehicles, including compliance with customs
                            regulations and addressing tax implications.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Business Import/Export Compliance:`)}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Support for businesses with complex customs needs,
                            ensuring compliance and avoiding costly penalties.`)}<br />
                            <br />
                            <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                              {" "}
                              <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                              (A-Kassa)
                            </span>
                            <h2 className="tw-text-left">
                              <strong>{t(`5. Unemployment Insurance`)}</strong>
                            </h2>
                            <br></br>
                            <p>{t(`A-Kassa, or unemployment insurance funds, provides
                              essential financial support for individuals who
                              have lost their jobs. If you’re facing issues with
                              your A-Kassa application, eligibility, or
                              payments, our team can help.`)}</p>
                          </p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Eligibility Disputes:`)}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Assistance with challenges related to qualifying for
                            A-Kassa benefits, including compliance with job
                            search or activity requirements.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Income-Related Benefit Appeals:`)}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Help in resolving disputes over income-based
                            benefits and ensuring you receive the correct
                            amounts.`)}</p>
                        </li>
                      </ul>
                    </div>
                    <br></br>
                    <div>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Contract Services
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Include:`)}</strong>
                      </h2>
                      <br></br>

                      <strong className="tw-text-black">{t(`Contract Review and Explanation`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Detailed review of employment contracts, rental
                            agreements, business contracts, and other legally
                            binding documents.`)}<br />{t(`Explanation of terms, obligations, and potential
                            risks, ensuring you fully understand the contract’s
                            implications.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Negotiation Support`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Advice on renegotiating terms that may not be in
                            your favor, especially in employment, rental, or
                            business agreements.`)}<br></br>{t(`Assistance in drafting counteroffers or proposing
                            changes to terms, with a focus on protecting your
                            interests.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Drafting and Customizing Contracts`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Help in creating contracts tailored to your needs,
                            whether for business partnerships, freelance work,
                            or personal agreements.`)}<br></br>{t(`Legal review and customization of standard templates
                            to ensure compliance with Swedish law.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Dispute Resolution and Mediation`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Support in resolving contract disputes through
                            negotiation, mediation, or, if necessary, legal
                            action.`)}<br></br>{t(`Assistance in gathering evidence, understanding your
                            rights, and presenting your case in disputes related
                            to employment, rentals, or business contracts.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Why Choose
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Sweden Relocators?`)}</strong>
                      </h2>
                      <br></br>

                      <strong className="tw-text-black">{t(`Experience with Swedish Immigration Law:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Our team has successfully handled numerous appeals
                            and is highly familiar with Swedish migration laws
                            and policies, giving us a clear advantage in
                            challenging decisions.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Comprehensive Case Management:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`From consultation to representation, we handle every
                            aspect of the appeal process, providing you with a
                            single point of contact and peace of mind.`)}</p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">{t(`Personalized Approach:`)}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Every case is unique. We take the time to understand
                            your situation, ensure that your appeal is tailored
                            to your specific needs, and focus on presenting the
                            strongest possible case.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br></br>
                      <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Sweden Relocators for
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Expert Appeal Assistance`)}</strong>
                      </h2>
                      <br></br>

                      <p className=" tw-text-gray tw-">{t(`If you’ve been denied a family reunification permit,
                        residence permit, business visa, citizenship, or another
                        document, Sweden Relocators is here to help you take the
                        next steps. Our experienced team will work closely with
                        you to build a strong case and guide you through the
                        appeal process with professionalism and care. Contact us
                        today to discuss your situation, and let us help you
                        turn the decision around.`)}</p>
                      <Link to="/register" className="tw-text-center tw-pt-4">
                        <h5
                          className="tw-text-center tw-text-black tw-pt-4"
                          style={{ fontSize: "1.2em" }}
                        >
                          <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                            Sign Up{" "}
                          </strong>
                          <strong>{t(`Today!`)}</strong>
                        </h5>
                      </Link>
                      <br />
                      <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                        seeking assistance with relocation, permits, visas,
                        legal processes, or settling into a new life, we're here
                        to help. Our comprehensive services cover everything
                        from work and study opportunities to family
                        reunifications, business support, and much more. Let us
                        guide you every step of the way—start your seamless
                        experience now!`)}</p>
                    </div>

                    {/* END OF NEW CONTENT */}
                  </div>
                </div>

                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;
