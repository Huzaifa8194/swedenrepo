import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/credit-card.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from '../../context/TranslationContext';

import Sidebar from "../../components/ScrollableBar";

import pn1 from "../../assets/iconscout/pn1.png";
import pn2 from "../../assets/iconscout/pn2.png";
import pn3 from "../../assets/iconscout/pn3.png";
import pn4 from "../../assets/iconscout/pn4.png";
import pn5 from "../../assets/iconscout/pn5.png";

import pn6 from "../../assets/iconscout/pn6.png";

import Header from "../../components/Header_New/Header";

const PersonnumerSweden = () => {
  const { t, language } = useTranslation();
  const isleftlangue = language === 'ur';
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
      title: "Direct Citizenship     ",
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
      title: "Golden Visa       ",
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
        highlightText={t("Relocate to Sweden")}
        regularText={t(
          "Get your unique Swedish identity number to unlock essential services. Let us simplify the registration process for you."
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
                <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`(Personnummer)`)}</span>

                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Applying for a Swedish Social Security Number
                     :`)}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`A personnummer is the personal identification number
                      assigned by the Swedish Tax Agency (Skatteverket) to
                      individuals registered as residents in Sweden. This unique
                      identifier is essential for everyday life in Sweden, as it
                      provides access to healthcare, banking, education, and
                      various government services. Without a personnummer,
                      navigating Swedish systems can be challenging, as it is
                      the foundation for receiving a Swedish ID card and other
                      vital services.`)}</p>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t(" Why You")}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t("Need a Personnummer")}
                      </strong>
                    </h2>

                    {/* <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                 
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn1}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`Access to Healthcare:`)}</strong>
                          <br /> {t(`The personnummer is required to register with
                          the healthcare system, enabling you to receive medical
                          care at the standard rates for Swedish residents.`)}
                          <br />
                          <br />
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`Opening a Bank Account:`)}</strong>
                          <br /> {t(`In Sweden, having a personnummer is typically a
                          prerequisite for opening a bank account. This account
                          is essential for managing everyday financial
                          activities, such as receiving salary payments, paying
                          household bills, and handling personal finances.
                          Without a bank account, it can be challenging to
                          navigate Sweden’s largely cashless economy, as most
                          transactions—both personal and professional—are
                          conducted electronically.`)}
                          <br />
                          <br />
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className="tw-justify-self-center tw-w-full"
                                src={pn6}
                                alt=""
                                style={{ maxWidth: "300px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-pt-4 tw-text-black">{t(`Education and Social Services:`)}</strong>{" "}
                              <br />
                             {t(` A personnummer plays a crucial role in accessing
                              both educational and social welfare systems in
                              Sweden. For children, it is essential for school
                              enrollment, enabling them to participate in
                              Sweden’s comprehensive education system. For
                              adults, the personnummer serves as a gateway to a
                              wide range of social services, such as applying
                              for unemployment benefits.`)}
                              <br />
                              <br />
                            </p>
                          </li>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`Swedish ID Card:`)}</strong>{" "}
                          <br />
                         {t(` Swedish ID Card: After obtaining a personnummer, you
                          become eligible to apply for a Swedish ID card, which
                          serves as an official form of identification. This
                          card significantly simplifies various aspects of daily
                          life, such as verifying your identity when shopping,
                          collecting packages from postal services, or accessing
                          public facilities and services.`)}
                          <br />
                        </p>
                      </li>
                    </ul>
                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Structure of
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        The Personnummer{" "}
                      </strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`First Six Digits:`)}</strong>
                          <br /> {t(`The first six digits of the personnummer
                          represent the individual’s birthdate in the format
                          YYMMDD. This means the numbers correspond to the year,
                          month, and day of birth, providing a clear and
                          standardized way to identify a person's date of birth
                          at a glance. This structure makes the personnummer
                          both practical and easy to interpret across various
                          systems and services in Sweden.`)}
                          <br />
                          <br />
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={pn2}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-pt-4 tw-text-black">{t(`Last Four Digits:`)}</strong>{" "}
                              <br />
                            {t(`  Serve as a unique identifier, which also includes
                              information about gender. Odd numbers designate
                              males, while even numbers designate females.`)}
                              <br />
                              <br />
                            </p>
                          </li>

                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-pt-4 tw-text-black">{t(`Century Marker:`)}</strong>
                              <br /> {t(`A hyphen ("-") is used between the
                              birthdate and the unique identifier. When a person
                              turns 100, the hyphen is replaced with a plus sign
                              (“+”) to distinguish their century of birth.`)}
                              <br />
                              <br />
                            </p>
                          </li>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Coordination Number (samordningsnummer):`)}</strong>{" "}
                          <br />
                          {t(`For individuals who are staying temporarily in Sweden
                          or do not have a registered residence, a Coordination
                          Number, known as a samordningsnummer, is issued. This
                          number serves as an alternative to the personnummer,
                          enabling access to essential services and integration
                          into administrative systems. It is structured
                          similarly to the personnummer, with the key difference
                          being that 60 is added to the day of birth.`)}
                          <br />
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Steps to Apply for a Personnummer`)}</span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        A Step-by-Step Guide{" "}
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`If you are planning to stay in Sweden for more than one
                      year, you can apply for a personnummer at the local
                      Skatteverket office. The requirements include:`)}</p>
                    <strong className="m-0 tw-text-black">{t(`Proof of Residence in Sweden`)}</strong>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`You need to present documentation that confirms you’ll
                          be living in Sweden for a year or longer, such as a
                          residence permit.`)}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">{t(`Identification Documents`)}</strong>
                        <ul className="tw-p-0 tw-pl-0">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`A passport or national ID card is typically
                              required. For non-EU citizens, additional
                              documentation such as a residence permit is often
                              necessary.`)}</p>
                          </li>
                        </ul>
                        <strong className="m-0 tw-text-black">{t(`Supporting Documents for Family Members`)}</strong>
                        <ul className="tw-p-0 tw-pl-0">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`If you’re moving with your family, each family
                              member will need their identification documents
                              and proof of relationship (such as marriage or
                              birth certificates).`)}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="tw-text-gray">{t(`The approval process can vary, and it may take several
                      weeks for your application to be processed. Once approved,
                      you will receive your personnummer by post.`)}</p>
                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Swedish ID Card
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        Your Key to Accessing Services{" "}
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`Once you have your personnummer, you can apply for a
                      Swedish ID card, which further simplifies access to
                      various services and activities in Sweden. The ID card is
                      issued by Skatteverket and is recognized by banks,
                      healthcare providers, and other institutions.`)}</p>
                    <strong className="m-0 tw-text-black">{t(`Requirements for Obtaining an ID Card`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Personnummer:`)}</strong>{" "}
                         {t( `Only residents with a personnummer can apply for the
                          ID card.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Proof of Payment:`)}</strong>{" "}
                          {t(`A fee (currently around 400 SEK) must be paid before
                          your appointment.`)}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Proof of Identity:`)}</strong>{" "}
                          {t(`If you are a new resident, Skatteverket may require a
                          witness or additional documents to verify your
                          identity.`)}
                        </p>
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`The Swedish ID card provides a practical solution for
                      navigating daily life with ease. It allows you to verify
                      your identity in various situations, such as at banks,
                      when shopping, or signing important documents. It also
                      simplifies tasks like collecting packages from delivery
                      points or accessing healthcare services`)}</p>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">{t(`Open and Manage Bank Accounts`)}</strong>
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`Most banks in Sweden require the Swedish ID card
                              as primary identification.`)}</p>
                          </li>
                        </ul>
                        <strong className="m-0 tw-text-black">{t(`Sign Up for Services and Contracts`)}</strong>
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`From mobile phone plans to internet service,
                              having a Swedish ID card simplifies verification.`)}</p>
                          </li>
                        </ul>
                        <strong className="m-0 tw-text-black">{t(`Access Health Services Easily`)}</strong>
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`The ID card is commonly used for identity
                              verification in healthcare facilities.`)}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Challenges
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        Without a Personnummer and ID Card{" "}
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`Without a personnummer, integrating into Swedish society
                      can be difficult, as most institutions and services are
                      designed to rely on this system. Common challenges
                      include:`)}</p>
                    <strong className="m-0 tw-text-black">{t(`Banking Restrictions`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Most banks will not open an account for you without a
                          personnummer and Swedish ID, and foreign
                          identification is often insufficient. This can make it
                          difficult to receive a salary, pay bills, or access
                          financial services.`)}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn5}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">{t(`Limited Access to Healthcare`)}</strong>
                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`While emergency healthcare is available, many
                              regular services require a personnummer for full
                              access and standard rates.`)}</p>
                          </li>
                        </ul>

                        <strong className="m-0 tw-text-black">{t(`Difficulty in Renting Housing`)}</strong>
                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`Many landlords require a personnummer for signing
                              lease agreements.`)}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Educational Access for Children`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Enrolling children in school can be more complex
                          without a personnummer, as it’s often required for
                          school registration.`)}</p>
                      </li>
                    </ul>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      How
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        Sweden Relocators Can Assist You{" "}
                      </strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Navigating the personnummer application process can be
                      complex, especially for foreign nationals unfamiliar with
                      Swedish administrative procedures. Sweden Relocators
                      offers a full suite of services to simplify the process:`)}</p>
                    <strong className="m-0 tw-text-black">{t(`Document Preparation`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`We ensure that you have all required documents,
                          including identity proof, residence permits, and any
                          additional paperwork needed for family members.`)}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Application Assistance`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Our team provides step-by-step guidance for submitting
                          your personnummer application and follows up with
                          Skatteverket to address any issues or delays.`)}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Swedish ID Card Application`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Once your personnummer is approved, we help you apply
                          for your Swedish ID card, guiding you through the
                          required steps and appointment scheduling.`)}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Bank Account Setup`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`With your personnummer and ID card, we assist you in
                          opening a Swedish bank account, ensuring you meet all
                          necessary requirements for a smooth process.`)}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Coordination Number Assistance`)}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`If you are staying temporarily in Sweden, we also help
                          you obtain a Coordination Number, facilitating access
                          to services for short-term residents.`)}</p>
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`With Sweden Relocators, you’ll have the expert support
                      needed to navigate the personnummer and Swedish ID
                      processes, ensuring that you can access essential services
                      smoothly and start your new life in Sweden with ease.`)}</p>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Be sure to
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Contact Us`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Securing your personnummer and Swedish ID card is an
                      essential first step for anyone relocating to Sweden.
                      Contact Sweden Relocators today to learn more about how we
                      can assist you with the application process, ensuring a
                      smooth transition into the Swedish system and allowing you
                      to fully enjoy life in Sweden.`)}</p>

                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          Sign Up{" "}
                        </strong>
                        <strong className="tw-text-black">{t(`Today!`)}</strong>
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

export default PersonnumerSweden;
