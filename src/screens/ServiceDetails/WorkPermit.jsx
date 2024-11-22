import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/programmers-building-mobile-application.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from "react-i18next";
import Header from "../../components/Header_New/Header";

const WorkPermit = () => {
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

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Work Permit")}
        regularText={t(
          "Explore your career opportunities in Sweden. We facilitate your work permit application for a smooth transition."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify">
                <div className="2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Types of Work Permits in Sweden
                    </span>
                    <h2>
                      <strong>Overview of Work Permit Types</strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      Sweden offers a variety of work permits tailored to
                      different professional and personal needs. Below are the
                      main categories and their key requirements.
                    </p>

                   
                        <strong className="m-0 tw-text-gray">
                          Standard Work Permit for Employment
                        </strong>
                   
                    <ul className="tw-p-0 tw-pl-0">
                     
                    <li className=" tw-flex  tw-pt-4 tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Job Offer:</strong> Must have a confirmed job
                          offer from a Swedish employer.
                         
                        </p>
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Minimum Salary:</strong> SEK 30,000 before
                          taxes or as per industry standards.
                        </p>
                       
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Advertisement Requirement:</strong> Job must
                          be advertised in the EU/EEA for 10 days.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                   
                        <strong className="m-0 tw-text-gray">EU Blue Card</strong>
                    
                    <ul className="tw-p-0 tw-pl-0">
                      
                    <li className=" tw-flex tw-pt-4 tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Higher Education:</strong> Requires a
                          university degree or 5 years of experience.
                        
                        </p>
                      </li>
                    
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Salary Threshold:</strong> Must exceed the
                          minimum salary for EU Blue Card.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    
                        <strong className="m-0 tw-text-gray">
                          Seasonal Worker Permit (Berry Pickers and Plant
                          Workers)
                        </strong>
                     
                    <ul className="tw-p-0 tw-pl-0">
                    
                    <li className=" tw-flex tw-pt-4 tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Contract:</strong> Requires a contract for
                          seasonal work up to 6 months.
                       
                        </p>
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Wages and Benefits:</strong> Must comply with
                          collective agreements.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                   
                        <strong className="m-0  tw-text-gray">Au Pair Permit</strong>
                      

                    <ul className="tw-p-0  tw-pl-0">
                      
                    <li className=" tw-flex tw-pt-4  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className="m-0 tw-text-gray">
                          <strong>Age Requirement:</strong> Must be between 18
                          and 30 years old.
                        
                        </p>
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Language Study:</strong> Required to take
                          Swedish courses.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                   
                        <strong className="m-0 tw-text-gray">
                          Working Holiday Visa
                        </strong>
                      


                    <ul className="tw-p-0 ">
                      
                    <li className=" tw-flex tw-pt-4  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Eligible Countries:</strong> Includes
                          Australia, New Zealand, South Korea, etc.
                        
                        </p>
                      </li>

                    
                          <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Age Range:</strong> Typically for 18-30 years
                          old.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                   
                        <strong className="m-0 tw-text-gray">
                          Self-Employment Permit
                        </strong>
                    
                    <ul className="tw-p-0 tw-pt-4 ">
                    
                    <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Business Plan:</strong> Must show
                          profitability within 2 years.
                         
                        </p>
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Experience:</strong> Relevant business
                          experience is required.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                        <strong className="m-0 tw-text-gray">
                          Sports and Cultural Worker Permit
                        </strong>
                      
                    <ul className="tw-p-0 ">
                     
                    <li className=" tw-flex tw-pt-4 tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Employment:</strong> Must have a job offer
                          from a relevant Swedish organization.
                         
                        </p>
                      </li>
                    </ul>

                   
                        <strong className="m-0 tw-text-gray">Researcher Permit</strong>
                     

                    <ul className="tw-p-0 tw-pl-0">
                     
                    <li className=" tw-flex tw-pt-4 tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Host Agreement:</strong> Required with a
                          Swedish research institution.
                         
                        </p>
                      </li>
                    
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <strong>Funding:</strong> Proof of financial support
                          for the research duration.
                        </p>
                       
                      </li>
                    </ul>
                  </div>
                  <div>
                    <br/>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Application Process and Waiting Times
                    </span>
                    <h2>
                      <strong>
                        Overview of Application Process and Waiting Times
                      </strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      The application process and waiting times vary depending
                      on the type of permit, your circumstances, and the current
                      workload at the Swedish Migration Agency. General waiting
                      times are as follows:
                    </p>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Standard Work Permit:</strong> 1-4 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>EU Blue Card:</strong> 3-4 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Seasonal Worker Permit:</strong> 1-3 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Au Pair Permit:</strong> 1-2 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Working Holiday Visa:</strong> 1-2 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Self-Employment Permit:</strong> 3-6 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Sports and Cultural Worker Permit:</strong>{" "}
                          1-2 months
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Researcher Permit:</strong> 1-3 months
                        </p>
                      </li>
                    </ul>

                    <p className="tw-text-gray tw-pt-4">
                      Using our Work Permit Assessment Tool can help you
                      identify the right permit and provide estimated processing
                      times based on your case.
                    </p>

<br/>
                    <span className="tw-flex tw-items-center tw-gap-2 tw-pt-4">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Additional General Requirements for Work Permits
                    </span>
                    <h2>
                      <strong>Key General Requirements for Work Permits</strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      For all work permits, applicants must meet these core
                      requirements:
                    </p>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Valid Passport:</strong> Your passport must be
                          valid for the entire period of your intended stay.
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Insurance:</strong> Some permits, such as the
                          Working Holiday and Au Pair permits, require health
                          insurance.
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Clean Criminal Record:</strong> Applicants
                          with serious criminal records may face challenges in
                          obtaining a permit.
                        </p>
                      </li>
                    </ul>


<br/>
                    <span className="tw-flex tw-items-center tw-gap-2 tw-pt-4">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      How Sweden Relocators Can Assist You
                    </span>
                    <h2>
                      <strong>
                        Comprehensive Support from Sweden Relocators
                      </strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      Sweden Relocators provides full support for all types of
                      work permits, ensuring a smooth and efficient process:
                    </p>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Eligibility Assessment:</strong> Use our Work
                          Permit Assessment Tool to find the best permit for
                          your circumstances.
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Document Preparation:</strong> We assist in
                          compiling and preparing the required documents, such
                          as employment contracts, financial statements, and
                          health insurance proof.
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Application Submission and Tracking:</strong>{" "}
                          We handle the submission of your application and keep
                          you updated on its status through each stage.
                        </p>
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong>Post-Permit Support:</strong> Once your permit
                          is approved, we offer relocation support, including
                          housing assistance, bank account setup, and
                          registration with Swedish authorities.
                        </p>
                      </li>
                    </ul>

                    <p className="tw-text-gray tw-pt-4">
                      For more information or to begin your work permit
                      application, visit our Work Permit Section on our website.
                      Contact Sweden Relocators today, and let us help you start
                      your career journey in Sweden.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className=" md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-relative">
                  <ul className="  tw-flex tw-flex-col tw-gap-2.5">
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

export default WorkPermit;
