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

import { useTranslation } from "react-i18next";

import Header from "../../components/Header_New/Header";

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
        highlightText={t("Asylum")}
        regularText={t(
          "Seek safety and a fresh start in Sweden. Our comprehensive support helps guide you through the asylum process smoothly."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className=" ">
          <div className="">
            <div className="">
              <div className="row g-4">
                <div className="col-md-9 tw-py-20 tw-bg-white tw-text-justify">
                  <div className="  md:tw-pl-[11.5%] tw-pl-3 tw-pr-[3.5%]">
                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Comprehensive Assistance to Overturn Decisions
                      </span>
                      <h2 className="tw-text-left">
                        <strong>
                          Appeal Process for a Denied Permit or Visa in Sweden
                        </strong>
                      </h2>

                      <p className=" tw-text-gray tw-">
                        If you have been denied entry or residency in
                        Sweden—whether it’s for family reunification, a
                        residence permit, business visa, citizenship, or other
                        types of permits you have the right to appeal the
                        decision made by the Swedish Migration Agency
                        (Migrationsverket). Navigating the appeal process can be
                        complex, and having an experienced professional by your
                        side can significantly increase your chances of a
                        positive outcome.
                        <br />
                        <br />
                        Sweden Relocators specializes in helping clients appeal
                        Migration Agency decisions. With our in-depth
                        understanding of the appeal process, we provide expert
                        guidance and support, giving you the best opportunity to
                        have your case reconsidered and, ideally, reversed.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Why Appeals are
                      </span>
                      <h2 className="tw-text-left">
                        <strong>Increasingly Necessary</strong>
                      </h2>

                      <p className=" tw-text-gray tw-">
                        Since the refugee crisis, Swedish authorities have
                        tightened the requirements for permits, making it more
                        challenging to gain entry or residence in Sweden. Many
                        applicants are denied permits due to increasingly
                        stringent documentation requirements or
                        misunderstandings in their initial application. Sweden
                        Relocators has successfully appealed numerous cases,
                        helping clients obtain permits even after initial
                        denials. Our aim is to assist you in challenging the
                        decision and restoring your opportunity to live or work
                        in Sweden.
                      </p>
                    </div>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          How to Start
                        </span>
                        <h2 className="tw-text-left">
                          <strong>The Appeal Process</strong>
                        </h2>
                        <p className=" tw-text-gray">
                          To appeal a denied decision, you must submit a written
                          appeal in Swedish or English. This document needs to
                          include specific information and must be signed by the
                          applicant or an authorized representative. Here’s how
                          to begin:
                        </p>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={banner}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        What to Include in
                      </span>
                      <h2 className="tw-text-left">
                        <strong>The Appeal Letter</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        In your appeal letter, you should clearly state:
                      </p>

                   
                          
                          <strong className="tw-text-gray">
                            Decision to be Appealed:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Specify the exact decision you are challenging.
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Requested Change:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Clearly state how you would like the decision to be
                            changed (e.g., approval of the permit).
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Personal Information:
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Include your full name, date of birth, postal
                            address, email, and phone number.
                          </p>
                        </li>
                      </ul>

                   
                          
                          <strong className="tw-text-gray">
                            New Evidence or Arguments:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Any new circumstances, supporting evidence, or
                            arguments that you did not initially submit should
                            be included in your appeal.
                          </p>
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
                              src={banner}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          Authorization
                        </span>
                        <h2 className="tw-text-left">
                          <strong>For a Representative </strong>
                        </h2>
                        <p className=" tw-text-gray">
                          If someone else is submitting the appeal on your
                          behalf (for instance, a legal representative from
                          Sweden Relocators), you must provide a signed Power of
                          Attorney (fullmakt) allowing them to act on your
                          behalf. This document should be included with your
                          appeal and must be an original copy.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        by Migrationsverket
                      </span>
                      <h2 className="tw-text-left">
                        <strong>Appeal Submission and Initial Review </strong>
                      </h2>

                      <p className=" tw-text-gray tw-">
                        Once your appeal is submitted, Migrationsverket will
                        initially review the case again to determine if the
                        decision can be changed based on the new information
                        provided. The agency will verify that your appeal was
                        submitted on time (within three weeks of the decision)
                        and assess whether the initial decision may have
                        overlooked any key information.
                      </p>

                  
                          
                          <strong className="tw-text-gray">
                            Timely Submission:
                          </strong>
                        

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If the appeal is not submitted within three weeks,
                            Migrationsverket may dismiss it, and you may need to
                            submit a new application instead.
                          </p>
                        </li>
                      </ul>

                 
                          
                          <strong className="tw-text-gray">
                            Reconsideration:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If Migrationsverket finds that new evidence or
                            arguments justify a change in the decision, they
                            will inform you and may grant the permit.
                          </p>
                        </li>
                      </ul>

                     
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        at This Stage
                      </span>
                      <h2 className="tw-text-left">
                        <strong>Possible Outcomes </strong>
                      </h2>

                     
                          
                          <strong className="tw-text-gray">
                            Positive Outcome:
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If Migrationsverket determines that the original
                            decision can be changed, they will inform you, and
                            the visa, permit, or other document will be issued.
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Forwarding the Appeal:
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If the agency upholds the initial decision, your
                            appeal will be forwarded to the Administrative Court
                            in Gothenburg for further review.
                          </p>
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
                              src={banner}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          Next Steps
                        </span>
                        <h2 className="tw-text-left">
                          <strong>If the Appeal is Forwarded to Court</strong>
                        </h2>
                        <p className=" tw-text-gray">
                          If Migrationsverket does not alter the decision, your
                          case will be sent to the Administrative Court
                          (Förvaltningsrätten) in Gothenburg, along with all
                          application documents and the appeal. The court will
                          review the case independently and make a ruling.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Administrative
                      </span>
                      <h2 className="tw-text-left">
                        <strong> Court Review</strong>
                      </h2>

                      <p className=" tw-text-gray tw-">
                        The court will examine the initial application, the
                        reasons for the denial, and any new information or
                        arguments presented in your appeal. The court may
                        require additional documents or clarification to make a
                        fair ruling.
                      </p>

                      
                          
                          <strong className="tw-text-gray">
                            Decision Notification:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Once the court has reached a decision, you will be
                            notified at the address you specified in your
                            application or appeal.
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Potential for Further Appeals:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If the Administrative Court also denies the appeal,
                            there may be additional options to appeal to the
                            Migration Court of Appeal (Migrationsöverdomstolen)
                            in specific cases, particularly if the case involves
                            legal principles of wider importance.
                          </p>
                        </li>
                      </ul>

                     
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        for the Appeal Process
                      </span>
                      <h2 className="tw-text-left">
                        <strong>Estimated Timelines</strong>
                      </h2>

                      <p className=" tw-text-gray tw-">
                        The duration of the appeal process varies:
                      </p>

                    
                          
                          <strong className="tw-text-gray">
                            Initial Review by Migrationsverket:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If Migrationsverket decides to change its decision,
                            you will generally be informed within a few days.
                          </p>
                        </li>
                      </ul>

                   
                          
                          <strong className="tw-text-gray">
                            Forwarding to the Administrative Court:
                          </strong>
                     

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If the decision is not altered, the case is
                            typically forwarded to the Administrative Court
                            within a few weeks.
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Court Decision Timeline:
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            The Administrative Court's review can take several
                            months, depending on the complexity of the case and
                            the court’s workload.
                          </p>
                        </li>
                      </ul>

                     
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                       SERVICES
                      </span>
                      <h2 className="tw-text-left">
                        <strong> Our Services Include:</strong>
                      </h2>

                   
                          
                          <strong className="tw-text-gray">
                            Case Analysis and Consultation
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            We review your case and provide a detailed
                            assessment of the reasons for the denial and the
                            best approach for the appeal. Understanding why the
                            permit was denied allows us to identify key points
                            to address in the appeal.
                           
                          </p>
                        </li>
                      </ul>

                     
                          
                          <strong className="tw-text-gray">
                            Document Preparation and Gathering Evidence
                          </strong>
                      
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Our legal team drafts a comprehensive appeal letter
                            that addresses each aspect of the denial and
                            presents compelling reasons for reconsideration. We
                            ensure that all necessary documentation, including
                            any required Power of Attorney, is complete and
                            accurately presented.
                           
                          </p>
                        </li>
                      </ul>

                 
                          <strong className="tw-text-gray">
                            Representation and Follow-Up
                          </strong>
                     
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If the appeal is forwarded to the Administrative
                            Court, we act as your representative, managing all
                            communication with the court and keeping you
                            informed throughout the process.
                          </p>
                        </li>
                      </ul>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            We provide ongoing follow-up with Migrationsverket
                            or the court to ensure your case moves forward
                            smoothly.
                           
                          </p>
                        </li>
                      </ul>

                   
                          
                          <strong className="tw-text-gray">
                            Legal Support for Further Appeals
                          </strong>
                     
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            If necessary, we guide you through the process of
                            appealing to the Migration Court of Appeal in cases
                            where this option is available.
                          </p>
                        </li>
                      </ul>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong className="tw-text-gray">
                              Our Services with Swedish Authorities
                            </strong>
                           
                            <p>
                              We understand that decisions from Swedish
                              authorities can have a significant impact on your
                              life, finances, and ability to work or reside in
                              Sweden. Here’s how we can assist with appeals,
                              applications, and communications with several key
                              agencies:
                            </p>
                           

                            <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        (Skatteverket)
                      </span>
                      <h2 className="tw-text-left">
                        <strong>  1. Swedish Tax Agency </strong>
                      </h2>

                           
                            <p>
                              Skatteverket plays a central role in matters
                              related to tax registration, personnummer (social
                              security numbers), and residence permits for tax
                              purposes. If you are facing issues with
                              Skatteverket, such as rejected applications for a
                              personnummer, tax disputes, or concerns regarding
                              tax residency status, our team can help.
                            </p>

                           
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Personnummer Applications:
                          </strong>
                        
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Assistance in gathering required documents,
                            completing applications, and ensuring timely
                            submission for personnummer or coordination numbers.
                           
                          </p>
                        </li>
                      </ul>

                   
                          
                          <strong className="tw-text-gray">
                            Tax Residency and Income Tax Disputes:
                          </strong>
                       
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Support in challenging tax residency status
                            determinations or disputes related to income tax
                            filings.
                           
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Property Tax and Business Tax Matters:
                          </strong>
                       
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Guidance on property or business tax filings,
                            especially for entrepreneurs or individuals with
                            complex tax situations.
                            <br />
                            <br />

                            

                            <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        (Försäkringskassan)
                      </span>
                      <h2 className="tw-text-left">
                        <strong>2. Swedish Social Insurance Agency</strong>
                      </h2>


                           
                            <p>
                              Försäkringskassan manages social insurance
                              benefits, including health insurance, parental
                              leave, child benefits, and pensions. If you are
                              struggling to access or appeal decisions related
                              to these benefits, we can provide comprehensive
                              support.
                            </p>
                           
                          </p>
                        </li>
                      </ul>

                   <div>
                          

                          
                          <strong className="tw-text-gray">
                            Parental Leave and Child Benefits:
                          </strong>


                          </div>
                       
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Assistance with applications, appeals, and
                            compliance to ensure you receive the benefits you’re
                            entitled to.
                           
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Sickness and Disability Benefits:
                          </strong>
                    
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Support in gathering medical documentation and
                            challenging benefit denials.
                           
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Pension Eligibility:
                          </strong>
                      
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Guidance on navigating the Swedish pension system
                            and appealing decisions on pension eligibility or
                            amounts.
                            <br />
                            <br />



                            <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        (Arbetsförmedlingen)
                      </span>
                      <h2 className="tw-text-left">
                        <strong>  3. Swedish Public Employment Service</strong>
                      </h2>


                          
                            <p>
                              3. Swedish Public Employment Service
                              (Arbetsförmedlingen) If you are receiving
                              unemployment benefits or support from
                              Arbetsförmedlingen, you may face requirements or
                              conditions to remain eligible. We help ensure that
                              you meet these requirements and provide assistance
                              if you encounter issues.
                            </p>
                           
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Activity Requirements:
                          </strong>
                       
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Assistance in meeting activity requirements,
                            including documentation and verification.
                           
                          </p>
                        </li>
                      </ul>

                   
                    
                          
                          <strong className="tw-text-gray">
                            Appeals for Unemployment Support:
                          </strong>
                      
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Support for those who believe they have been
                            unfairly denied benefits or faced incorrect
                            decisions regarding their eligibility.
                           
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Job Search Assistance:
                          </strong>
                       
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Guidance on Arbetsförmedlingen procedures and
                            requirements to maintain benefits while seeking
                            employment.
                            <br />
                            <br />


                            <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        (Tullverket)
                      </span>
                      <h2 className="tw-text-left">
                        <strong>  4. Swedish Customs Agency </strong>
                      </h2>

                            
                            <p>
                              Tullverket handles customs and import/export
                              regulations in Sweden, and decisions by this
                              authority can significantly impact individuals or
                              businesses involved in international trade.
                            </p>
                           
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Customs Disputes:
                          </strong>
                       
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Assistance in resolving disputes related to customs
                            duties, classifications, and import/export
                            procedures.
                           
                          </p>
                        </li>
                      </ul>

                   
                          
                          <strong className="tw-text-gray">
                            Personal Belongings and Vehicles:
                          </strong>
                     
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Guidance on importing personal belongings or
                            vehicles, including compliance with customs
                            regulations and addressing tax implications.
                           
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Business Import/Export Compliance:
                          </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Support for businesses with complex customs needs,
                            ensuring compliance and avoiding costly penalties.
                            <br /><br />

                            <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        (A-Kassa)
                      </span>
                      <h2 className="tw-text-left">
                        <strong> 5. Unemployment Insurance </strong>
                      </h2>
                           
                            <p>
                              A-Kassa, or unemployment insurance funds, provides
                              essential financial support for individuals who
                              have lost their jobs. If you’re facing issues with
                              your A-Kassa application, eligibility, or
                              payments, our team can help.
                            </p>
                           
                          </p>
                        </li>
                      </ul>

                          
                          <strong className="tw-text-gray">
                            Eligibility Disputes:
                          </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Assistance with challenges related to qualifying for
                            A-Kassa benefits, including compliance with job
                            search or activity requirements.
                           
                          </p>
                        </li>
                      </ul>

                          
                          <strong className="tw-text-gray">
                            Income-Related Benefit Appeals:
                          </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Help in resolving disputes over income-based
                            benefits and ensuring you receive the correct
                            amounts.
                           
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Contract Services 
                      </span>
                      <h2 className="tw-text-left">
                        <strong> Include:</strong>
                      </h2>

                     
                          
                          <strong className="tw-text-gray">
                            Contract Review and Explanation
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Detailed review of employment contracts, rental
                            agreements, business contracts, and other legally
                            binding documents.
                            <br />
                            Explanation of terms, obligations, and potential
                            risks, ensuring you fully understand the contract’s
                            implications.
                           
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Negotiation Support
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Advice on renegotiating terms that may not be in
                            your favor, especially in employment, rental, or
                            business agreements.
                            <br></br>
                            Assistance in drafting counteroffers or proposing
                            changes to terms, with a focus on protecting your
                            interests.
                           
                          </p>
                        </li>
                      </ul>

                     
                          
                          <strong className="tw-text-gray">
                            Drafting and Customizing Contracts
                          </strong>
                        

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Help in creating contracts tailored to your needs,
                            whether for business partnerships, freelance work,
                            or personal agreements.
                            <br></br>
                            Legal review and customization of standard templates
                            to ensure compliance with Swedish law.
                           
                          </p>
                        </li>
                      </ul>

                      
                          
                          <strong className="tw-text-gray">
                            Dispute Resolution and Mediation
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Support in resolving contract disputes through
                            negotiation, mediation, or, if necessary, legal
                            action.
                            <br></br>
                            Assistance in gathering evidence, understanding your
                            rights, and presenting your case in disputes related
                            to employment, rentals, or business contracts.
                           
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Why Choose
                      </span>
                      <h2 className="tw-text-left">
                        <strong>Sweden Relocators?</strong>
                      </h2>

                    
                          
                          <strong className="tw-text-gray">
                            Experience with Swedish Immigration Law:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Our team has successfully handled numerous appeals
                            and is highly familiar with Swedish migration laws
                            and policies, giving us a clear advantage in
                            challenging decisions.
                           
                          </p>
                        </li>
                      </ul>

                     
                          
                          <strong className="tw-text-gray">
                            Comprehensive Case Management:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            From consultation to representation, we handle every
                            aspect of the appeal process, providing you with a
                            single point of contact and peace of mind.
                           
                          </p>
                        </li>
                      </ul>

                    
                          
                          <strong className="tw-text-gray">
                            Personalized Approach:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Every case is unique. We take the time to understand
                            your situation, ensure that your appeal is tailored
                            to your specific needs, and focus on presenting the
                            strongest possible case.
                           
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Sweden Relocators for
                      </span>
                      <h2 className="tw-text-left">
                        <strong>Expert Appeal Assistance</strong>
                      </h2>

                      <p className=" tw-text-gray tw-">
                        If you’ve been denied a family reunification permit,
                        residence permit, business visa, citizenship, or another
                        document, Sweden Relocators is here to help you take the
                        next steps. Our experienced team will work closely with
                        you to build a strong case and guide you through the
                        appeal process with professionalism and care. Contact us
                        today to discuss your situation, and let us help you
                        turn the decision around.
                      </p>

                     
                    </div>

                    {/* END OF NEW CONTENT */}
                  </div>
                </div>

                <div className="col-md-3  tw-pt-16  tw-bg-[#F5FAFF] " style={{ position: 'sticky', top: '300px' }}>
                  <div className="  sm:tw-pr-20 tw-pr-4 tw-relative">
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
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;
