import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/credit-card.png';
import { imageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";

import Header from '../../components/Header_New/Header';



const PersonnumerSweden = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: 'Asylum',
      description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>,
      Link: '/asylum',
    },
    {
      id: 2,
      title: 'Family Reunification',
      description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>,
      Link: '/family-reunification',
    },
    {
      id: 3,
      title: 'Personnummer Sweden',
      description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>,

      Link: '/personnumer-sweden',
    },
    {
      id: 4,
      title: 'CPR Number Denmark',
      description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>,
      Link: '/cpr-number-denmark',
    },
    {
      id: 5,
      title: 'Work Permit',
      description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>,
      Link: '/work-permit',
    },
    {
      id: 5,
      title: 'Business Permit',
      description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>,

      Link: '/business-permit',
    },
    {
      id: 6,
      title: 'Business Visit',
      description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>,

      Link: '/business-visit',
    },
    {
      id: 7,
      title: 'Citizenship',
      description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>,
      Link: '/citizenship',
    },
    {
      id: 8,
      title: 'Study in EU',
      description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>,
      Link: '/study-in-eu',
    },
    {
      id: 9,
      title: 'Global Visit Visas',
      description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>,
      Link: '/global-visit-visas',
    },
    {
      id: 10,
      title: 'EEA Permits',
      description: 'Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>,
      Link: '/eea-permits',
    },
    {
      id: 11,
      title: 'Parents EU Permit',
      description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>,
      Link: '/parents-eu-permit',
    },
    {
      id: 12,
      title: 'Marriage & Divorce      ',
      description: 'Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>,
      Link: '/marriage-divorce',
    },
    {
      id: 13,
      title: 'Company Registration      ',
      description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/company-registration',
    },
    {
      id: 14,
      title: 'House & Offices',
      description: 'we offer you an easy and painless solution where you can get a place to live without any worries.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/house-offices',
    },
    {
      id: 15,
      title: 'Appeal Cases',
      description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>,
      Link: '/appeal-cases',
    },
    {
      id: 16,
      title: 'EU Citizens Relocation',
      description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>,
      Link: '/eu-family-reunification',
    },
    {
      id: 17,
      title: 'Investment',
      description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>,
      Link: '/investment',
    },
    {
      id: 18,
      title: 'Direct Citizenship     ',
      description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>,
      Link: '/direct-citizenship-by-investments',
    },
    {
      id: 19,
      title: 'Permanent Residence',
      description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>,
      Link: '/permanent-residence',
    },
    {
      id: 20,
      title: 'Golden Visa       ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Personnummer Sweden")}
    regularText={t("Get your unique Swedish identity number to unlock essential services. Let us simplify the registration process for you.")}
    backgroundImage={homeBgImage} 
/>

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white tw-text-justify">
                <div className="  md:tw-pl-32 tw-pl-3">

                <div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p> 
    Applying for a Swedish Social Security Number (Personnummer): Essential for Life in Sweden
  </span>

  <h2><strong>A Critical Overview</strong></h2>

  <p className="tw-text-gray">
    A personnummer is the personal identification number assigned by the Swedish Tax Agency (Skatteverket) to individuals registered as residents in Sweden. This unique identifier is essential for everyday life in Sweden, as it provides access to healthcare, banking, education, and various government services. Without a personnummer, navigating Swedish systems can be challenging, as it is the foundation for receiving a Swedish ID card and other vital services.
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Why You Need a Personnummer</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Access to Healthcare:</strong> The personnummer is required to register with the healthcare system, enabling you to receive medical care at the standard rates for Swedish residents.
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Opening a Bank Account:</strong> Banks generally require a personnummer to open an account, which is necessary for receiving salary payments, paying bills, and managing finances.
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Education and Social Services:</strong> Children need a personnummer to enroll in schools, and adults need it to access various social services, including unemployment benefits, parental leave, and pensions.
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Swedish ID Card:</strong> Once you have a personnummer, you can apply for a Swedish ID card, which simplifies daily activities like shopping, picking up packages, or accessing public services.
        <br />
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Structure of the Personnummer</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>First Six Digits:</strong> Represent the individual’s birthdate in the format YYMMDD.
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Last Four Digits:</strong> Serve as a unique identifier, which also includes information about gender. Odd numbers designate males, while even numbers designate females.
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Century Marker:</strong> A hyphen ("-") is used between the birthdate and the unique identifier. When a person turns 100, the hyphen is replaced with a plus sign (“+”) to distinguish their century of birth.
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Coordination Number (samordningsnummer):</strong> For those staying temporarily in Sweden or without a registered residence, a Coordination Number is available. It is structured similarly to the personnummer but with 60 added to the day of birth.
        <br />
      </p>
    </li>
  </ul>
</div>



<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Steps to Apply for a Personnummer
  </span>
  <h2>
    <strong> A Step-by-Step Guide </strong>
  </h2>

  <p className="tw-text-gray">
    If you are planning to stay in Sweden for more than one year, you can apply for a personnummer at the local Skatteverket office. The requirements include:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Proof of Residence in Sweden</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        You need to present documentation that confirms you’ll be living in Sweden for a year or longer, such as a residence permit.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Identification Documents</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        A passport or national ID card is typically required. For non-EU citizens, additional documentation such as a residence permit is often necessary.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Supporting Documents for Family Members</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        If you’re moving with your family, each family member will need their identification documents and proof of relationship (such as marriage or birth certificates).
      </p>
    </li>
  </ul>

  <p className="tw-text-gray">
    The approval process can vary, and it may take several weeks for your application to be processed. Once approved, you will receive your personnummer by post.
  </p>

  <h2>
    <strong> Swedish ID Card: Your Key to Accessing Services </strong>
  </h2>

  <p className="tw-text-gray">
    Once you have your personnummer, you can apply for a Swedish ID card, which further simplifies access to various services and activities in Sweden. The ID card is issued by Skatteverket and is recognized by banks, healthcare providers, and other institutions.
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Requirements for Obtaining an ID Card</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Personnummer:</strong> Only residents with a personnummer can apply for the ID card.
      </p>
    </li>

    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Proof of Payment:</strong> A fee (currently around 400 SEK) must be paid before your appointment.
      </p>
    </li>

    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Proof of Identity:</strong> If you are a new resident, Skatteverket may require a witness or additional documents to verify your identity.
      </p>
    </li>
  </ul>

  <p className="tw-text-gray">
    This ID card allows you to:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Open and Manage Bank Accounts</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Most banks in Sweden require the Swedish ID card as primary identification.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Sign Up for Services and Contracts</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        From mobile phone plans to internet service, having a Swedish ID card simplifies verification.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Access Health Services Easily</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        The ID card is commonly used for identity verification in healthcare facilities.
      </p>
    </li>
  </ul>

  <h2>
    <strong> Challenges Without a Personnummer and ID Card </strong>
  </h2>

  <p className="tw-text-gray">
    Without a personnummer, integrating into Swedish society can be difficult, as most institutions and services are designed to rely on this system. Common challenges include:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Banking Restrictions</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Most banks will not open an account for you without a personnummer and Swedish ID, and foreign identification is often insufficient. This can make it difficult to receive a salary, pay bills, or access financial services.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Limited Access to Healthcare</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        While emergency healthcare is available, many regular services require a personnummer for full access and standard rates.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Difficulty in Renting Housing</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
      Many landlords require a personnummer for signing lease agreements.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Educational Access for Children</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Enrolling children in school can be more complex without a personnummer, as it’s often required for school registration.
      </p>
    </li>
  </ul>

  <h2>
    <strong> How Sweden Relocators Can Assist You </strong>
  </h2>

  <p className="tw-text-gray">
    Navigating the personnummer application process can be complex, especially for foreign nationals unfamiliar with Swedish administrative procedures. Sweden Relocators offers a full suite of services to simplify the process:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Document Preparation</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        We ensure that you have all required documents, including identity proof, residence permits, and any additional paperwork needed for family members.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Application Assistance</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Our team provides step-by-step guidance for submitting your personnummer application and follows up with Skatteverket to address any issues or delays.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Swedish ID Card Application</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Once your personnummer is approved, we help you apply for your Swedish ID card, guiding you through the required steps and appointment scheduling.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Bank Account Setup</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        With your personnummer and ID card, we assist you in opening a Swedish bank account, ensuring you meet all necessary requirements for a smooth process.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Coordination Number Assistance</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        If you are staying temporarily in Sweden, we also help you obtain a Coordination Number, facilitating access to services for short-term residents.
      </p>
    </li>
  </ul>

  <p className="tw-text-gray">
    With Sweden Relocators, you’ll have the expert support needed to navigate the personnummer and Swedish ID processes, ensuring that you can access essential services smoothly and start your new life in Sweden with ease.
  </p>

  <h2>
    <strong> Contact Us </strong>
  </h2>

  <p className="tw-text-gray">
    Securing your personnummer and Swedish ID card is an essential first step for anyone relocating to Sweden. Contact Sweden Relocators today to learn more about how we can assist you with the application process, ensuring a smooth transition into the Swedish system and allowing you to fully enjoy life in Sweden.
  </p>
</div>




                                  </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  md:tw-pr-32 tw-pr-4">
                  <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                    {data?.map((item, index) => {
                      return (
                        <Link to={`${item?.Link}`} className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                          <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">{item?.title}</p>
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

export default PersonnumerSweden;
