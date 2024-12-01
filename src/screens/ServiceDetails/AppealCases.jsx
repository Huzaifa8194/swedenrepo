import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/work-agreement-between-employers.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";



import Header from "../../components/Header_New/Header";

import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import ap1 from "../../assets/iconscout/ap1.png";
import ap2 from "../../assets/iconscout/ap2.png";
import ap3 from "../../assets/iconscout/ap3.png";

import asa1 from "../../assets/iconscout/asa1.png";
import asa2 from "../../assets/iconscout/asa2.png";
import asa3 from "../../assets/iconscout/asa3.png";


import Sidebar from "../../components/ScrollableBar";









import { useTranslation } from '../../context/TranslationContext';









const AppealCases = () => {
  const { t } = useTranslation();

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
      title: "Golden Visa",
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
        highlightText={t("Asylum")}
        regularText={t(
          "Receive expert support for your appeal cases. We provide guidance to help you present a strong case during the review process."
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
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("Asylum in Sweden")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("What We Offer")}</strong>
                    </h2>

                    <p className="tw-text-gray">{t (`If you are seeking asylum in Sweden, understanding the
  legal process and meeting requirements can be
                      overwhelming. At Sweden Relocator, our team of
                      experienced immigration specialists is here to guide you
                      through each stage of the asylum process at the Swedish
                      Migration Agency, ensuring that your case is handled with
                      the utmost care and professionalism.`)}</p>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                    {t("  Why")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Choose an Expert?")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Navigating the asylum process in Sweden can be complex,
                      with specific rules and timelines. Here’s how our expert
                      team can make a difference for you:`)}</p>

                    <strong className="m-0 tw-text-black">{t("Peace of Mind")}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`With our professional team managing your case, you can
                          focus on other aspects of settling into Sweden. We are
                          committed to ensuring your asylum application is
                          handled effectively and with compassion.`)}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      {t("Clear and Transparent Guidance")}
                    </strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Our specialists simplify complex legal requirements,
                          ensuring you understand every step. No matter how
                          complicated your case may seem, our team is prepared
                          to help you clarify and effectively present your
                          grounds for asylum.`)}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                     {t(" Immediate Access to a Legal Expert")}
                    </strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Our immigration lawyers will begin working on your
                          case as soon as you reach out, providing an immediate
                          response to your concerns and ensuring that your case
                          is prioritized and processed swiftly.`)}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("Who")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Can Apply for Asylum?")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`To apply for asylum in Sweden, you must be physically
                      present within the country or at its border. It is not
                      possible to apply from another country or at a Swedish
                      embassy abroad.`)}</p>

                    <p className="tw-text-gray">{t(`Every asylum seeker’s case is reviewed individually, with
                      the Swedish Migration Agency granting a residence permit
                      only if the applicant meets the criteria to be considered
                      a refugee under both Swedish law and the United Nations
                      Refugee Convention.`)}</p>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                     {t(" Refugee")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Definition and Criteria")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Under Swedish law and international guidelines, a person
                      qualifies as a refugee if they face persecution or severe
                      threats in their home country based on:`)}</p>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={asa1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 tw-pl-0">
                          <li className="tw-text-gray">{t("Race")}</li>
                          <li className="tw-text-gray">
                            {t("Nationality, Language, or Ethnic Group")}
                          </li>
                          <li className="tw-text-gray">{t("Religion")}</li>
                          <li className="tw-text-gray">
                            {t("Political Belief or Activism")}
                          </li>
                          <li className="tw-text-gray">{t("Gender Identity")}</li>
                          <li className="tw-text-gray">{t("Sexual Orientation")}</li>
                          <li className="tw-text-gray">
                            {t("Membership in a Particular Social Group")}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="tw-text-gray">{t(`If groups or individuals in your home country threaten you
                      or your loved ones, this can impact your application.
                      However, a positive decision requires clear evidence of
                      persecution related to one of these factors. During the
                      application process, you will be asked to describe the
                      risks you face if you were to return to your country.`)}</p>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("Possible")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Outcomes of Your Application")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`If your case is accepted, you may receive a residence
                      permit valid for either three years or 13 months,
                      depending on the specifics of your situation.`)}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      <p className=" tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("Step-by-Step")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong> {t("Process")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Follow these essential steps to apply for asylum in Sweden
                      and begin your journey toward protection and settlement.`)}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Step 1: Presence in Sweden")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`You must be physically in Sweden or at the Swedish
                          border to apply for asylum.`)}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={asa2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <strong className=" m-0 tw-text-black">
                          {t("Step 2: Initial Meeting with Swedish Migration Agency")}
                        </strong>

                        <ul className=" tw-p-0 tw-pl-0">
                          <li>
                            <p className=" m-0 tw-text-gray">{t(`Once you submit your application, you will be
                              invited to an initial meeting at the Swedish
                              Migration Agency. During this meeting, you will
                              have the opportunity to select your legal
                              representative or lawyer. At this stage, you can
                              choose our experienced team to support you.`)}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className=" m-0 tw-text-black">
                     {t(" Step 3: Role of Your Legal Representative")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`If you select us as your representative, we will be
                          contacted by the Migration Agency to assist with your
                          case. Our team will schedule a call with you to gather
                          details about your background and reasons for seeking
                          asylum. We will also prepare you for future interviews
                          and document submissions.`)}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("Our")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Role as Your Legal Representative")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`As your legal representative, we will provide ongoing
                      support and legal advice throughout the asylum process.
                      Here’s how we help:`)}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Support and Legal Advice")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`We provide ongoing support and legal advice to ensure
                          that your rights are protected throughout the asylum
                          process.`)}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={asa3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className=" m-0 tw-text-black">
                          {t("Clarifying Grounds for Asylum")}
                        </strong>

                        <ul className=" tw-p-0 tw-pl-0">
                          <li>
                            <p className=" m-0 tw-text-gray">{t(`We will help clarify your grounds for asylum to
                              the Migration Agency, ensuring a smooth
                              application process.`)}</p>
                          </li>
                        </ul>

                        <strong className=" m-0 tw-text-black">
                          {t("Navigating Appeals")}
                        </strong>

                        <ul className=" tw-p-0 tw-pl-0">
                          <li>
                            <p className=" m-0 tw-text-gray">{t(`If your initial application is denied, we can
                              assist with appeals to both the Migration Court
                              and the Migration Court of Appeal.`)}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("Family")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Reunification for Refugees")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Sweden recognizes family reunification as an essential
                      right for refugees. Here’s what you need to know:`)}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Who Can Qualify for Family Reunification?")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`Your family may be eligible for family reunification
                          if you hold a permanent or eligible temporary
                          residence permit in Sweden.`)}</p>
                      </li>
                    </ul>

                    <strong className=" m-0 tw-text-black">
                      {t("For EU/EEA Citizens")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`If you are an EU/EEA citizen, you may benefit from a
                          simplified family reunification process based on the
                          right of free movement within Europe.`)}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``)}</p>
                      {t("How")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("We Assist You with Family Reunification")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Our team provides complete support for the family
                      reunification process, ensuring a smooth and efficient
                      journey:`)}</p>

                    <strong className=" m-0 tw-text-black">
                     {t(" Application Preparation")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`We assist with preparing and submitting the residence
                          permit application for your family members, ensuring
                          all necessary documents are included.`)}</p>
                      </li>
                    </ul>

                    <strong className=" m-0 tw-text-black">
                      {t("Additional Support Services for Asylum Seekers")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`In addition to asylum and family reunification, we
                          provide relocation assistance, translation services,
                          legal aid, and counseling.`)}</p>
                      </li>
                    </ul>

                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t("Sign Up")}{" "}
                        </strong>
                        <strong className="tw-text-black"> {t("Today!")}</strong>
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

export default AppealCases;
