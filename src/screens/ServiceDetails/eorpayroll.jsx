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

import eor1 from "../../assets/iconscout/eor1.png";
import eor2 from "../../assets/iconscout/eor2.png";
import eor3 from "../../assets/iconscout/eor3.png";

import Header from "../../components/Header_New/Header";

const EORPayroll = () => {
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
        highlightText={"EOR Payroll"}
        regularText={
          "Seek safety and a fresh start in Sweden. Our comprehensive support helps guide you through the asylum process smoothly."
        }
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className=" ">
          <div className="container-fluid">
            <div className="">
              <div className="row g-4">
                <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify ">
                  <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Employer of Record (EOR) & Payroll Services
                    </span>
                    <h2 className="tw-text-left">
                      <strong>Simplified with Our Online Portal</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray  ">
                      Sweden Relocators provides a comprehensive, user-friendly
                      Employer of Record (EOR) and Payroll Service through our
                      advanced online portal, designed to make global workforce
                      management simple. With our EOR and payroll solutions,
                      your company can expand globally without navigating the
                      complexities of local employment laws, tax compliance, or
                      benefits administration.
                    </p>

                  

                    <div>
                      <br />



                      <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={eor1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        What is
                      </span>
                      <h2>
                        <strong>Employer of Record (EOR)?</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">
                        An Employer of Record (EOR) is a service provider that
                        acts as the legal employer for your staff in a foreign
                        country, handling all local employment, payroll, and
                        compliance obligations. With EOR, Sweden Relocators
                        legally employs your workforce on your behalf, allowing
                        you to operate in Sweden or other countries without
                        setting up a local legal entity.
                      </p>
                      </div>
                    </div>

                     

                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        How Our
                      </span>
                      <h2>
                        <strong>EOR Service Works</strong>
                      </h2>
                      <br />

                    
                          <strong className=" m-0 tw-text-gray">
                            Company Sign-Up on the Portal:
                          </strong>
                     

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Simply sign up on our portal as a company to get
                            started. Once registered, you can add employees and
                            provide relevant information, including roles,
                            salaries, and benefits.
                          </p>
                        </li>
                      </ul>

                  
                          <strong className=" m-0 tw-text-gray">
                            Local Compliance Management:
                          </strong>
                     

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Sweden Relocators handles all compliance aspects,
                            from employment contracts that align with Swedish
                            labor laws to adherence to local tax regulations,
                            protecting your business from potential legal risks.
                          </p>
                        </li>
                      </ul>

                    
                          <strong className=" m-0 tw-text-gray">
                            Employee Onboarding:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Our portal guides you through the employee
                            onboarding process, ensuring all necessary
                            documents, tax forms, and agreements are collected
                            and organized for smooth employment
                          </p>
                        </li>
                      </ul>

                    
                          <strong className=" m-0 tw-text-gray">
                            Payroll & Benefits Administration:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            We handle payroll processing, ensuring accurate and
                            timely salary payments that account for all required
                            deductions, benefits, and tax contributions.
                          </p>
                        </li>
                      </ul>

                   
                          <strong className=" m-0 tw-text-gray">
                            Termination and Offboarding:
                          </strong>
                  

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            In case of employment termination, our team ensures
                            all legal procedures are followed, providing full
                            support for smooth, compliant offboarding.
                          </p>
                        </li>
                      </ul>

                    
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        How Our Payroll Services Work
                      </span>
                      <h2>
                        <strong> A Step-by-Step Guide </strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">
                        Our Payroll Services are fully integrated with our EOR
                        platform, handling all aspects of salary payments, tax
                        compliance, and benefits administration. Here’s how it
                        works:
                      </p>

                     
                          <strong className=" m-0 tw-text-gray">
                            Employee Setup and Salary Processing
                          </strong>


                          <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Add Employee Details:
                          </strong>
                        </li>
                      </ul>
                      
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> Through our
                            online portal, you can add each employee’s salary,
                            benefits, and any other payroll-specific details.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>


                        <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Monthly Payroll Calculation:
                          </strong>
                        </li>
                      </ul>
                      
                        <li>
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> Every
                            pay period, our system calculates salaries with full
                            compliance, including all taxes, benefits, and
                            deductions. This ensures payroll accuracy and
                            consistency.
                          </p>
                          <p>
                            <br />
                          </p>
                        </li>

                        <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Timely Salary Payments:
                          </strong>
                        </li>
                      </ul>
                      

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> Salaries
                            are processed and deposited directly into employees’
                            bank accounts. Payslips with breakdowns of earnings,
                            deductions, and taxes are available for employees to
                            view online.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>
                      </ul>

                  

                      <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={eor2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <strong className=" m-0 tw-text-gray">
                            Tax Compliance and Filing
                          </strong>
                      


                          <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Tax Withholding:
                          </strong>
                        </li>
                      </ul>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> Our system
                            automatically withholds the correct taxes from each
                            employee’s salary, ensuring compliance with Swedish
                            tax laws.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>


                        <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Reporting and Filing:
                          </strong>
                        </li>
                      </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> Our team
                            handles monthly, quarterly, and annual tax filings,
                            so your business stays compliant with all local
                            regulations.
                          </p>
                          <p>
                            <br />
                          </p>
                        </li>


                        <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Transparency and Record-Keeping:
                          </strong>
                        </li>
                      </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <strong></strong>
                            All payroll transactions, tax filings, and reports
                            are securely stored in the portal, offering
                            real-time visibility for both employers and
                            employees.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>
                      </ul>
                      </div>
                    </div>

                  
                         
                      <strong className=" m-0 tw-text-gray">
                            Benefits Administration
                          </strong>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Employee Benefits Setup:
                          </strong>
                        </li>
                      </ul>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                       
                          <p className=" m-0 tw-text-gray">
                             Through
                            the portal, employers can define benefit plans,
                            including health insurance, retirement plans, and
                            other perks.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>



                        <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Automated Benefits Processing:
                          </strong>
                        </li>
                      </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            Our
                            system automatically calculates and administers
                            benefits, ensuring employees receive the correct
                            benefits each month.
                          </p>
                          <p>
                            <br />
                          </p>
                        </li>

                        <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">
                          Compliance with Swedish Standards: 
                          </strong>
                        </li>
                      </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <></>
                            We manage benefits in line with Swedish laws,
                            ensuring all requirements are met without additional
                            administrative burden on your part.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Key Advantages of
                      </span>
                      <h2>
                        <strong>
                          Using Sweden Relocators’ EOR & Payroll Portal
                        </strong>
                      </h2>
                      <br />

                    
                          <strong className=" m-0 tw-text-gray">
                            1. Simple Online Sign-Up and Employee Management
                          </strong>
                    
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Once registered, you can easily add employees,
                            manage payroll, and oversee benefits through our
                            portal. This allows you to focus on your business
                            operations, while we handle compliance and payroll
                            administration.
                          </p>
                        </li>
                      </ul>

                     
                          <strong className=" m-0 tw-text-gray">
                            2. Seamless Global Expansion
                          </strong>
                        

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Sweden Relocators handles all compliance aspects,
                            With Sweden Relocators as your EOR, your business
                            can operate in Sweden or other countries without the
                            need to set up a legal entity. Our EOR services
                            handle all local compliance, saving you time and
                            resources.
                          </p>
                        </li>
                      </ul>

                     
                          <strong className=" m-0 tw-text-gray">
                            3. Complete Compliance Assurance
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Our platform ensures compliance with Swedish labor
                            laws, tax regulations, and benefits standards. You
                            can confidently expand knowing your operations meet
                            all local requirements.
                          </p>
                        </li>
                      </ul>

                    
                          <strong className=" m-0 tw-text-gray">
                            4. Accurate, Timely Payroll Processing
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Through our portal, salary processing is automated,
                            ensuring accurate calculations that consider
                            deductions, benefits, and taxes. Employees are paid
                            on time, and payroll transparency is enhanced
                            through detailed payslips.
                          </p>
                        </li>
                      </ul>

                  
                          <strong className=" m-0 tw-text-gray">
                            5. Enhanced Employee Satisfaction
                          </strong>
                      

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Employees benefit from timely payments, transparent
                            benefits administration, and easily accessible
                            payslips, all through an intuitive online interface,
                            leading to improved satisfaction and retention.
                          </p>
                        </li>
                      </ul>

                   
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        How to
                      </span>
                      <h2>
                        <strong>
                          Get Started with Sweden Relocators’ EOR & Payroll
                          Portal
                        </strong>
                      </h2>
                      <br />

                  
                          <strong className=" m-0 tw-text-gray">
                            Sign Up as a Company on Our Portal:
                          </strong>
                       

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Visit our website to create an account as a company.
                            Once registered, you can start adding employees to
                            your portal and managing your international
                            workforce.
                          </p>
                        </li>
                      </ul>

                     
                          <strong className=" m-0 tw-text-gray">
                            Add Employee Information:
                          </strong>
                        

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Use our streamlined portal to add employee details,
                            including salaries, benefits, and contract terms.
                            Our system captures everything needed for compliant
                            payroll and benefits processing.
                          </p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">
                        <br />
                      </p>
                    </div>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-10 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={eor3}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <br />
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          All in One Place:
                        </span>
                        <h2 className=" tw-text-left">
                          <strong>Payroll, Benefits, and Compliance:</strong>
                        </h2>
                        <br />
                        <p className=" tw-text-gray">
                          With our platform, you can manage payroll, tax
                          compliance, and benefits administration from a single
                          dashboard, with real-time reporting and full
                          transparency.
                        </p>
                      </div>
                    </div>




                    <br />
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          Ongoing
                        </span>
                        <h2>
                          <strong>Support and Updates:</strong>
                        </h2>
                        <br />
                        <p className=" tw-text-gray">
                          Our expert team is always available for support,
                          ensuring that your business stays compliant and adapts
                          to any changes in local labor laws or tax regulations.
                        </p>

                   

                    <div>
                      <p className=" tw-text-gray">
                        By choosing Sweden Relocators, your business gains
                        access to a comprehensive{" "}
                        <strong>EOR & Payroll Portal</strong> that makes global
                        workforce management seamless. Whether you're expanding
                        to Sweden or managing a multinational team, our system
                        streamlines payroll processing, tax compliance, and
                        benefits administration—all from a single platform.
                        <br />
                        Contact us today to start your journey with Sweden
                        Relocators and see how easy managing a global workforce
                        can be with our EOR and payroll solutions.
                      </p>
                    </div>
                    <Link to="/register" className="tw-text-center tw-pt-4">
                      <h2 className="tw-text-center tw-pt-4">
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          Sign Up{" "}
                        </strong>
                        <strong> Today!</strong>
                      </h2>
                    </Link>
                    <br />
                    <p className="tw-text-gray">
                      Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!
                    </p>
                  </div>
                </div>

                <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                  <div className="  md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4">
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

export default EORPayroll;
