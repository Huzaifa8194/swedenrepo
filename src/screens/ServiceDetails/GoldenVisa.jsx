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
import Sidebar from "../../components/ScrollableBar";


import gold1 from "../../assets/iconscout/gold1.png";
import gold2 from "../../assets/iconscout/gold2.png";
import gold3 from "../../assets/iconscout/gold3.png";

import Header from "../../components/Header_New/Header";

const GoldenVisa = () => {
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
        highlightText={"Global Visit Visa"}
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
                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Global Visa Services
                      </span>
                      <h2 className = "tw-text-left">
                        <strong>
                          Your Gateway to Seamless International Travel
                        </strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">
                        At Sweden Relocators, we specialize in simplifying the
                        visa application process for travelers worldwide.
                        Whether you're planning a family vacation, attending a
                        business conference, visiting friends, or joining an EU
                        family member, our comprehensive services are tailored
                        to meet your unique needs. Through our intuitive web
                        portal and mobile app, we offer a streamlined,
                        efficient, and user-friendly experience.
                      </p>

                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Our 
                      </span>
                      <h2 className = "tw-text-left"><strong>Comprehensive Services</strong></h2>

                      <br />
                      <strong className=" m-0 tw-text-gray">
                        Personalized Client ID
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Upon registration, you'll receive a unique Client
                            ID, enabling you to manage multiple visa
                            applications for yourself and your family
                            simultaneously. This centralized system ensures
                            efficiency and convenience.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Complete Application Assistance
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Our experts guide you through every step of the visa
                            application process, ensuring all forms are
                            accurately completed and necessary documents are
                            compiled, reducing the risk of errors or omissions.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Appointment Scheduling
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            We handle the scheduling of appointments with
                            embassies or visa application centers (e.g., VFS
                            Global), ensuring timely submissions and adherence
                            to all procedural requirements.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Embassy Liaison
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Acting as your representative, we manage
                            communications with embassies, addressing any
                            queries or issues that may arise during the
                            application process.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Convenient Submission Process
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Access your complete application file through our
                            portal or app, or receive it via DHL. Submit your
                            application at the nearest embassy or visa
                            application center along with your original
                            passport.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Secure Digital File Management
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Your documents are securely stored in our system,
                            allowing for easy retrieval and reuse for future
                            applications. This feature is particularly
                            beneficial for frequent travelers or families
                            applying for multiple visas.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Eligibility Assessment Tool
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Utilize our Assessment Tool to determine the
                            criteria for applying for a visit visa. This feature
                            helps you understand the specific requirements and
                            increases the likelihood of a successful
                            application.
                          </p>
                        </li>
                      </ul>


<br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Additional
                      </span>



                      <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                      <h2 className = "tw-text-left">
                        <strong>Support Services</strong>
                      </h2>
                      <br/>

                      <strong className="tw-text-gray">
                        Travel Insurance Arrangements
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            We assist in obtaining the necessary travel
                            insurance policies required for your visa
                            application, ensuring compliance with all entry
                            requirements.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Travel and Accommodation Reservations
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Receive assistance with flight reservations and
                            hotel bookings, providing the necessary
                            confirmations to support your visa application.
                          </p>
                        </li>
                      </ul>
                        </div>
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={gold1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      
                    </div>

                    



                      <br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Visa
                      </span>
                      <h2 className = "tw-text-left">
                        <strong>Categories We Support</strong>
                      </h2>
                      <br/>



                      <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={gold2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        
                      <ul className=" tw-p-0 tw-pt-4">
  {/* List 2 */}
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Schengen Visa (Europe)</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">United Kingdom Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">United States Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Canada Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Australia Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">New Zealand Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Ireland Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Japan Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">South Korea Visa</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">China Visa</p>
  </li>
 
</ul>
                      </div>
                    </div>

<p className=" m-0 tw-text-gray">
      Contact us for assistance with other destinations
    </p>


<br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Application
                      </span>

                      <h2 className = "tw-text-left">
                        <strong>Purposes We Cover</strong>
                      </h2>
<br/>


<div className="row tw-flex tw-items-center">


<div className="col-md-6">
<ul className=" tw-p-0 tw-pt-4">
  {/* List 1 */}
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Tourism</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Visiting Family or Friends</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Joining an EU Family Member</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Attending Conferences</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Business Visits</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Short-Term Work Assignments</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Medical Treatment</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">Cultural or Sports Events</p>
  </li>
</ul>

                        </div>
                      <div className="col-md-6">
                        <div className="row ">


                       


                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={gold3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    
                    </div>




<br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        How to
                      </span>
                      <h2 className = "tw-text-left">
                        <strong>Get Started</strong>
                      </h2>
                      <br/>

                      <strong className=" m-0 tw-text-gray">Register</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Sign up on our website or mobile app to create your
                            account and receive your unique Client ID.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Submit Your Application Request
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Provide details about your travel plans and upload
                            the required documents through our secure platform.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        We Handle the Rest
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Our team will manage the entire application process,
                            from form completion to appointment scheduling and
                            embassy communications.
                          </p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">
                        Prepare for Your Journey
                      </strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            Focus on your travel preparations while we ensure a
                            smooth and efficient visa application experience.
                          </p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">
                        At Sweden Relocators, we are committed to making your
                        international travel aspirations a reality. Our
                        expertise and personalized approach ensure a hassle-free
                        visa application process, allowing you to focus on what
                        truly matters—your journey.
                      </p>
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
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!
                    </p>

                      <br />
                    </div>
                  </div>
                </div>

              <Sidebar/>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default GoldenVisa;
