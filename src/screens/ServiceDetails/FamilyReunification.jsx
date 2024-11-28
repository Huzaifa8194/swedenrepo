import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/family-time.png";
import banner2 from "../../assets/images/family-1.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header_New/Header";


import fr1 from "../../assets/iconscout/fr1.png";
import fr2 from "../../assets/iconscout/fr2.png";
import fr3 from "../../assets/iconscout/fr3.png";
import fr4 from "../../assets/iconscout/fr4.png";
import fr5 from "../../assets/iconscout/fr5.png";
import fr6 from "../../assets/iconscout/fr6.png";

const FamilyRenuification = () => {
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
      title: "Golden Visa    ",
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
        highlightText={t("Family Reunification")}
        regularText={t(
          "Reunite with your loved ones with ease. We assist you in navigating the requirements for family reunification in Sweden."
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
                      Comprehensive Guide Under Swedish National Law
                    </span>

                    <h2 className = "tw-text-left">
                      <strong> Family Reunification in Sweden:</strong>
                    </h2>
                    <br/>
                    <p className="tw-text-gray">
                      Sweden’s family reunification laws allow individuals
                      holding various types of residence permits—including work
                      permits, business permits, PhD and student permits, and
                      permanent residence permits—as well as refugees, to bring
                      family members to Sweden. Each case type has specific
                      requirements and is assessed under different provisions of
                      Swedish national law. This guide provides a comprehensive
                      overview of the requirements, laws, and application
                      processes involved, with specific details for each permit
                      type.
                    </p>

                  <br/>
                  <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Key Swedish laws
                    </span>

                    <h2 className = "tw-text-left">
                      <strong>Governing Family Reunification</strong>
                    </h2>
                    
                
                  
                    <br/>

                    <strong className="m-0 tw-mb-8 tw-text-gray">
                      2.1 Main Legislative Framework
                    </strong>

                      
                    <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <>Aliens Act (Utlänningslagen):</> The
                          main legislation governing residence permits and
                          family reunification for all non-Swedish citizens.
                         
                        </p>
                      </li>
                    <ul className="tw-p-0 tw-pl-0">
                    <div className="row tw-flex tw-pt-4 tw-items-center">
                      

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={fr1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                  
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>
                            Temporary Aliens Act (Tillfälliga Utlänningslagen):
                          </>{" "}
                          A temporary law affecting family reunification
                          requirements, primarily for refugees and individuals
                          needing subsidiary protection.
                        </p>
                       
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>
                            Swedish Nationality Act (Lag om Svenskt
                            Medborgarskap):
                          </>{" "}
                          Relevant for Swedish citizens and permanent residents
                          inviting family members.
                       
                        </p>
                      </li>
                      
                    
                   
                      </div>
                    </div>
                    <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>
                            Social Insurance Code (Socialförsäkringsbalken):
                          </>{" "}
                          Provides guidelines on acceptable income sources for
                          the maintenance requirement.
                         
                        </p>
                      </li>
                    </ul>

                 



                    


<br/>

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Eligibility for
                    </span>
                    <h2 className = "tw-text-left">
                      <strong> Family Reunification</strong>
                    </h2>

                
                  <br/>
                    
                        <strong className="m-0 tw-text-gray">
                          Eligible Family Members
                        </strong>
                   

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <>
                            Who Can Be Sponsored for Family Reunification?
                          </>{" "}
                          Family reunification is generally available to the
                          following family members:
                         

                          <ul className="tw-pl-0">
                          <div className="row tw-flex tw-items-center">
                    

                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={fr2}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-md-6"> 
                           
                           <li className=" tw-flex  tw-gap-3">
                               <div>
                                 <GoTriangleRight className=" tw-text-blue" />
                               </div>
                               <>Spouse or Registered Partner:</>{" "}
                               Legally married or registered partners.
                             </li>
                             
                           <li className=" tw-flex  tw-gap-3">
                               <div>
                                 <GoTriangleRight className=" tw-text-blue" />
                               </div>
                               <>Cohabiting Partner:</> Long-term,
                               unregistered partners may qualify if the
                               relationship is well-documented.
                             </li>
                           
                           
                            
                                       </div>
                  </div>
                  <li className=" tw-flex  tw-gap-3">
                               <div>
                                 <GoTriangleRight className=" tw-text-blue" />
                               </div>
                               <>Children under 18:</> Minor children
                               of the permit holder or their spouse/partner.
                             </li>
                  <li className=" tw-flex  tw-gap-3">
                               <div>
                                 <GoTriangleRight className=" tw-text-blue" />
                               </div>
                               <>
                                 Parents (for Minor Permit Holders):
                               </>{" "}
                               For permit holders under 18, parents or legal
                               guardians may be eligible.
                             </li>
                           </ul>
                         
                  
                         
                        
                        </p>
                      </li>
                    </ul>
                    <p><br></br></p>
                  
                        <strong className="m-0 tw-text-gray">
                          Maintenance and Housing Requirements:
                        </strong>
                    
                    

                    <ul className = "tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">
                          <>3.2 </> The Maintenance Requirement
                          (Försörjningskrav) is essential for most family
                          reunification applications, ensuring the primary
                          applicant has sufficient income and suitable housing
                          to support family members.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

<br/>
<span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      for Family Reunification
                    </span>

                    <h2 className = "tw-text-left">
                      <strong> Application Process </strong>
                    </h2>




                    
                    <br/>
                  
                        <strong className="m-0 tw-text-gray">
                          {" "}
                          Step-by-Step Guide
                        </strong>
                      
                        <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                      <ul className="tw-p-0 tw-pl-0">
                     
                    <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>Step 1: Prepare Documentation:</> Gather
                          all required documents, such as passports, proof of
                          relationship (marriage or birth certificates), housing
                          agreements, and income verification.
                       
                        </p>
                      </li>
                      
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>Step 2: Submit Application:</>{" "}
                          Applications are submitted online via the Swedish
                          Migration Agency’s portal or at a Swedish
                          embassy/consulate.
                        
                        </p>
                      </li>
                    
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>Step 3: Migration Agency Review:</> The
                          Swedish Migration Agency verifies that all
                          requirements are met, assessing the applicant's
                          income, housing, and family eligibility.
                       
                        </p>
                      </li>
                     
                      <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                        <p className="m-0 tw-text-gray">
                          <>Step 4: Decision and Notification:</>{" "}
                          After assessment, the agency issues a decision. If
                          approved, family members may receive residence permits
                          matching the sponsor’s permit duration.
                       
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
                              src={fr3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  
                    <br/>
{/* 

                    <div className="row tw-flex tw-items-center">
                    

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={fr4}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                     
                      </div>
                    </div> */}

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      for Family Reunification Cases
                    </span>
                    <h2 className = "tw-text-left">
                      <strong>Specific Legal Provisions </strong>
                    </h2>
                   
                    <br/>
                    

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong>Aliens Act (Utlänningslagen):</strong><br/> The
                          Aliens Act serves as the primary legal framework for
                          family reunification, covering income, housing, and
                          relationship verification.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong>
                            Temporary Aliens Act (Tillfälliga Utlänningslagen):
                          </strong>{" "}<br/>
                          Applies stricter maintenance requirements for
                          refugees, emphasizing financial independence for
                          sponsors beyond the three-month application period.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong>
                            Social Insurance Code (Socialförsäkringsbalken):
                          </strong>{" "}<br/>
                          Defines acceptable sources of income, especially
                          relevant for sponsors relying on benefits.
                         
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <br/>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Specific Legal Provisions for Family Reunification Cases
                    </span>
                    <h2 className = "tw-text-left">
                      <strong>Aliens Act (Utlänningslagen)</strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      The Aliens Act serves as the primary legal framework for
                      family reunification, covering income, housing, and
                      relationship verification.
                    </p>

                  
                        <strong className="m-0 tw-text-gray">
                          Maintenance and Housing Standards
                        </strong>
                    

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          Ensures financial stability and proper living
                          conditions.
                        </p>
                      </li>
                    </ul>

                  
                  
                        <strong className="m-0 tw-text-gray">Refugee Exemptions</strong>
                    

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          Refugees and those with subsidiary protection may be
                          exempt from some requirements.
                        </p>
                      </li>
                    </ul>


<br/>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Tillfälliga Utlänningslagen
                    </span>

                    <h2 className = "tw-text-left">
                      <strong>Temporary Aliens Act </strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      The Temporary Aliens Act applies stricter maintenance
                      requirements for refugees, emphasizing financial
                      independence for sponsors beyond the three-month
                      application period.
                    </p>

                   
                        <strong className="m-0 tw-text-gray">
                          Relationship and Timing Criteria
                        </strong>
                     

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          Refugees must apply within three months of receiving
                          status for certain exemptions.
                        </p>
                      </li>
                    </ul>

<br/>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Socialförsäkringsbalken
                    </span>

                    <h2 className = "tw-text-left">
                      <strong>Social Insurance Code</strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      The Social Insurance Code defines acceptable sources of
                      income, especially relevant for sponsors relying on
                      benefits.
                    </p>

                  
                        <strong className="m-0 tw-text-gray">
                          Unemployment and Social Benefits
                        </strong>
                     

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          For those relying on unemployment or social benefits,
                          income requirements apply to ensure they meet
                          financial criteria.
                        </p>
                      </li>
                    </ul>

<br/>

<span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Our
                    </span>
                    <h2 className = "tw-text-left">
                      <strong> Services Include:</strong>
                    </h2>
                    <br/>
                      </div>


                  

                  
                        <strong className="m-0 tw-text-gray">
                          Eligibility Assessment
                        </strong>
                    

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          We assess your specific permit type, income, housing,
                          and family eligibility to determine the best approach.
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
                              src={fr5}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <strong className="m-0 tw-text-gray">
                          Document Preparation
                        </strong>
                   

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          Assistance in gathering all necessary documents,
                          translating foreign documents if needed, and ensuring
                          all information is complete and accurate.
                        </p>
                      </li>
                    </ul>

                  
                        <strong className="m-0 tw-text-gray">
                          Application Submission and Monitoring
                        </strong>
                    

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          Submitting your application on your behalf and
                          following up with the Swedish Migration Agency.
                        </p>
                      </li>
                    </ul>

                      </div>
                    


                        
                 
                        <strong className="m-0 tw-text-gray">Appeals Support</strong>
                      

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          If your application is denied, we provide guidance
                          through the appeals process, strengthening your case
                          to meet Swedish legal standards.
                        </p>
                      </li>
                    </ul>

<br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
    {" "}
    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
    Why
  </span>
  <h2 className = "tw-text-left">
    <strong>  Choose Sweden Relocators?</strong>
  </h2>
  <br/>

                   

                    
                        <strong className="m-0 tw-text-gray">Expert Knowledge</strong>
                    

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          We have in-depth knowledge of Swedish family
                          reunification laws and requirements.
                        </p>
                      </li>
                    </ul>

                 
                        <strong className="m-0 tw-text-gray">
                          Personalized Support
                        </strong>
                     

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          We tailor our assistance to your specific permit type
                          and circumstances.
                        </p>
                      </li>
                    </ul>

                    
                        <strong className="m-0 tw-text-gray">
                          Efficient Processing
                        </strong>
                    
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          By ensuring accuracy and compliance, we help you avoid
                          delays or rejections, making the application process
                          smoother and more efficient.
                        </p>
                      </li>
                    </ul>

<br/>


<div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={fr6}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Contact Sweden Relocators
                    </span>
                    <h2 className = "tw-text-left">
                      <strong>Get in Touch Today</strong>
                    </h2>
                    <br/>

                    <p className="tw-text-gray">
                      If you are ready to bring your family to Sweden and need
                      guidance to navigate Swedish family reunification laws,
                      Sweden Relocators is here to help. Contact us today for
                      expert support, and let us guide you through the family
                      reunification process in Sweden, ensuring all legal
                      requirements are met for a successful application.
                    </p>
                    <Link to = '/register' className="tw-text-center tw-pt-4">
                    <h2 className = "tw-text-center tw-pt-4">
                    <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">Sign Up </strong><strong> Today!</strong>
                    </h2>
                    </Link>
                    <br/>
                    <p className="tw-text-gray">
                    Sign up today and simplify your journey! Whether you're seeking assistance with relocation, permits, visas, legal processes, or settling into a new life, we're here to help. Our comprehensive services cover everything from work and study opportunities to family reunifications, business support, and much more. Let us guide you every step of the way—start your seamless experience now!
                    </p>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="   md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-relative">

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

export default FamilyRenuification;
