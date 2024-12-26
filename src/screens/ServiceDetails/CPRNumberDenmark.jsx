import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/doctor-identification-card.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Sidebar from "../../components/ScrollableBar";

import { useTranslation } from 'react-i18next';

import cprimage from "../../assets/iconscout/cprimage.png";

import cprimage2 from "../../assets/iconscout/cprimage2.png";
import cprimage3 from "../../assets/iconscout/cprimage3.png";
import cprimage4 from "../../assets/iconscout/cprimage4.png";

import Header from "../../components/Header_New/Header";

const CPRNumberDenmark = () => {
  const { t , i18n} = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  const isleftlangue = i18n.language === 'ur';
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Relocate to Denmark")}
        regularText={t(
          "Secure your Danish CPR number seamlessly. We provide guidance to ensure a smooth process for your official identification."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
            <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      What is a
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`CPR Number?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br></br>

                    <p className=" tw-text-gray">{t(`A CPR (Centrale Personregister) number is a unique
                      identification number in Denmark. It is essential for
                      individuals residing in Denmark as it facilitates seamless
                      access to numerous public and private services. With a CPR
                      number, you can register for healthcare, open a bank
                      account, access insurance, and even borrow books at the
                      library.`.replace(/\s+/g, ' ').trim())}</p>

                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                          What is
                        </span>
                        <h2 className="tw-text-left">
                          <strong className='tw-text-black'>{t(`CPR Number Structure`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>
                        <br></br>

                        <ul className=" tw-p-0 ">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <p className=" m-0 tw-text-gray">
                              <strong className='tw-text-black'>{t(`Ten-Digit Identifier:`.replace(/\s+/g, ' ').trim())}</strong> {t(`The CPR
                              number is a ten-digit identifier used across
                              various Danish national systems and databases. The
                              first six digits correspond to your date of birth,
                              while the last four form your unique
                              identification. The last digit of the CPR number
                              also indicates gender: odd numbers denote male and
                              even numbers denote female.`.replace(/\s+/g, ' ').trim())}
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
                              src={cprimage}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why & When?
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`CPR Number Requirement`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br></br>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <p className=" m-0 tw-text-gray">
                          <strong className='tw-text-black'>{t(`Why Do You Need a CPR Number?`.replace(/\s+/g, ' ').trim())}</strong>{" "}<br/>
                          Residents in Denmark are legally obligated to have a
                          CPR number as it is essential for:
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Accessing healthcare services.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Opening a bank account.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Registering for insurance.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Borrowing books from libraries.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Accessing most public services and signing up
                                for digital services such as e-Boks and NemID.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>
                          </ul>
                          <br />{t(`In Denmark, a CPR number is more than just an
                          identification number; it serves as the gateway to
                          integration into Danish society, allowing easy access
                          to necessary services and a secure connection to
                          national databases.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li>
                        <p className=" m-0 tw-text-gray">
                          <strong className='tw-text-black'>
                            {" "}
                            <br />{t(`When is a CPR Number Required?`.replace(/\s+/g, ' ').trim())}</strong>
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">{t(`Non-EU/EEA Citizens: If you plan to stay in
                                Denmark for more than three months, you are
                                required to register with the Danish Civil
                                Registration System upon arrival to obtain a CPR
                                number.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className=" m-0 tw-text-gray">
                               {t(` Nordic Citizens, EU/EEA, and Swiss Citizens: If
                                you are from a Nordic country, the EU, the EEA,
                                or Switzerland and plan to stay in Denmark for
                                more than six months, you must register with the
                                Danish Civil Registration System to obtain your
                                CPR number.`.replace(/\s+/g, ' ').trim())}{" "}
                              </p>
                            </li>
                          </ul>
                        </p>
                      </li>
                    </ul>

                    <br></br>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      How to
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Obtain a CPR Number`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br></br>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <p className=" m-0 tw-text-gray">
                          <strong className='tw-text-black'>{t(`Required Documents:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br />{t(` When you visit the Citizen’s Service Center to
                          apply for your CPR number, be prepared with the
                          following:`.replace(/\s+/g, ' ').trim())}
                          <ul className="tw-pl-0 tw-pt-4">
                            <li>{t(`Proof of Residence and Legal Documentation:`.replace(/\s+/g, ' ').trim())}</li>

                            <ul className="tw-pl-0">
                              <li className=" tw-flex  tw-gap-3">
                                <div>
                                  <GoTriangleRight className=" tw-text-blue" />
                                </div>
                                <p className=" m-0 tw-text-gray">{t(`For EU/EEA and Swiss citizens: Present your
                                  registration certificate.`.replace(/\s+/g, ' ').trim())}</p>
                              </li>

                              <li className=" tw-flex  tw-gap-3">
                                <div>
                                  <GoTriangleRight className=" tw-text-blue" />
                                </div>
                                <p className=" m-0 tw-text-gray">{t(`For Nordic citizens: Bring proof of
                                  identification, such as a passport or Nordic
                                  ID.`.replace(/\s+/g, ' ').trim())}</p>
                              </li>
                            </ul>

                            <div className="row tw-flex tw-items-center">
                              <div className="col-md-6">
                                <div className="row ">
                                  <div className="col-md-9 tw-mx-auto">
                                    <motion.img
                                      animate={imageVariants}
                                      className=" tw-w-full"
                                      src={cprimage3}
                                      alt=""
                                      style={{ maxWidth: "450px" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <li>{t(`Marital Status Documentation:`.replace(/\s+/g, ' ').trim())}</li>
                                <ul className="tw-pl-0">
                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`If you are married: Bring your marriage
                                      certificate or an official copy.`.replace(/\s+/g, ' ').trim())}</p>
                                  </li>

                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`If you are divorced: Provide your divorce
                                      certificate.`.replace(/\s+/g, ' ').trim())}</p>
                                  </li>

                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`If you are a widow/widower: Present the
                                      death certificate of your deceased spouse.`.replace(/\s+/g, ' ').trim())}</p>
                                  </li>

                                  <li className=" tw-flex  tw-gap-3">
                                    <div>
                                      <GoTriangleRight className=" tw-text-blue" />
                                    </div>
                                    <p className=" m-0 tw-text-gray">{t(`Birth Certificate for Children: If you
                                      have children, bring their birth
                                      certificate(s).`.replace(/\s+/g, ' ').trim())}</p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <li></li>
                          </ul>
                        </p>
                      </li>
                    </ul>

                    <p className=" tw-text-gray">{t(`Our team is here to assist with any questions or
                      requirements as you navigate the process of relocating to
                      Denmark and obtaining your CPR number. With our help, you
                      can be assured of a smooth registration process so you can
                      quickly access all essential services in Denmark.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>
                  <div>
                    <br></br>

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      A Smooth Transition
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`to Denmark`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Moving to a new country can be both exciting and
                          challenging. At Sweden Relocators, we provide
                          specialized relocation assistance to make your move to
                          Denmark as seamless as possible. Whether you're
                          relocating for work, study, or family, our team offers
                          a full range of services to help you settle
                          comfortably. From securing essential documentation to
                          finding housing, we cover every aspect of your
                          relocation process so you can focus on enjoying your
                          new start.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cprimage2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Our Services
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`For Relocation to Denmark`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br></br>

                    <strong className="m-0 tw-text-black">{t(`EU Residence Card Assistance`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">{t(`Document Preparation: We ensure all necessary
                          documents are prepared, verified, and translated if
                          needed.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Application Submission:`.replace(/\s+/g, ' ').trim())}</>{t(`We manage your
                          application process, scheduling any necessary
                          appointments and handling paperwork to reduce delays.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Ongoing Support:`.replace(/\s+/g, ' ').trim())}</>{t(`From understanding eligibility
                          requirements to addressing any inquiries from
                          immigration authorities, our team is here to assist.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <br></br>
                    <strong className="m-0 tw-text-black">{t(`CPR (Danish ID) Number Assistance`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Eligibility Assessment:`.replace(/\s+/g, ' ').trim())}</>{t(`We help determine when
                          and how you should apply for a CPR number, depending
                          on your citizenship and planned duration of stay.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Document Verification:`.replace(/\s+/g, ' ').trim())}</>{t(`Our team ensures that all
                          required documents (residence permit, marriage
                          certificates, children’s birth certificates, etc.) are
                          complete and accurately translated if necessary.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>{t(`Application Facilitation:`.replace(/\s+/g, ' ').trim())}</>{t(`We guide you through
                          the process, from booking appointments at Citizen
                          Service Centers to submitting your application.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br></br>
                    <strong className="m-0 tw-text-black">{t(`EU Certificate Assistance`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong className='tw-text-gray'>{t(`Requirements Guidance:`.replace(/\s+/g, ' ').trim())}</strong>{t(` We clarify
                          which documents are needed based on your employment
                          status, purpose of stay, and other personal factors.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong className='tw-text-gray'>{t(`Application Submission:`.replace(/\s+/g, ' ').trim())}</strong> {t(`We facilitate
                          a swift submission process, coordinating appointments
                          and completing necessary paperwork to meet all
                          regulatory standards.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <strong className='tw-text-gray'>{t(`Follow-Up and Support:`.replace(/\s+/g, ' ').trim())}</strong> {t(`Our team
                          monitors your application status and liaises with
                          Danish authorities if additional information or
                          documentation is needed.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>

                    <br></br>
                    <strong className="m-0 tw-text-black">{t(`Housing Assistance`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-pt-4 tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Personalized Housing Search:</>{t(`We identify rental
                          options based on your preferences, whether you’re
                          looking for an apartment in the city, family housing,
                          or short-term rental options.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Lease Negotiation and Contract Review:</>{t(`We review
                          rental contracts to ensure fair terms and assist with
                          any negotiations to make the rental agreement
                          beneficial to you.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Move-In Coordination:</>{t(`We help arrange move-in
                          dates, utilities setup, and any other logistics to
                          make your transition into your new home smooth and
                          convenient.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className="tw-flex  tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          <>Temporary Housing Solutions:</>{t(`For those needing
                          immediate accommodation, we can arrange short-term
                          housing options, so you have a comfortable place to
                          stay while searching for a permanent home.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br></br>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why Choose
                    </span>
                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Sweden Relocators?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cprimage4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Relocating to a new country involves more than just
                          packing your bags. Each step of the process—securing
                          legal documents, finding housing, and registering for
                          local services—requires careful attention and local
                          expertise. Sweden Relocators brings a wealth of
                          knowledge and experience to ensure you settle into
                          Denmark with ease.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Comprehensive Service`.replace(/\s+/g, ' ').trim())}</strong>
                      <br />{t(`From visa assistance to housing, we cover all
                      aspects of your relocation, offering you a one-stop
                      solution.`.replace(/\s+/g, ' ').trim())}</p>
                    <br></br>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Expert Guidance`.replace(/\s+/g, ' ').trim())}</strong>
                      <br />{t(`Our team of professionals is well-versed in Danish
                      regulations, ensuring you meet every requirement and avoid
                      common pitfalls.`.replace(/\s+/g, ' ').trim())}</p>
                    <br></br>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Personalized Support`.replace(/\s+/g, ' ').trim())}</strong>
                      <br />{t(`We understand that each move is unique. Our team
                      tailors our services to fit your individual needs,
                      preferences, and circumstances.`.replace(/\s+/g, ' ').trim())}</p>
                    <br></br>

                    <p className="tw-text-gray">
                      <strong className='tw-text-black'>{t(`Prompt Communication`.replace(/\s+/g, ' ').trim())}</strong>
                      <br />{t(`We prioritize clear, timely communication, keeping
                      you informed at every stage of the process and available
                      to answer your questions.`.replace(/\s+/g, ' ').trim())}</p>
                    <br></br>

                    <p className="tw-text-gray">{t(`At Sweden Relocators, we are dedicated to making your
                      relocation to Denmark as simple and successful as
                      possible. Contact us today to begin your journey with
                      reliable support and expert guidance.`.replace(/\s+/g, ' ').trim())}</p>
                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          Sign Up Today!{" "}
                        </strong>
                       
                      </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`.replace(/\s+/g, ' ').trim())}</p>
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

export default CPRNumberDenmark;
