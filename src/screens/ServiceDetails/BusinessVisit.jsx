import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/startup-business.jpg';
import banner2 from '../../assets/images/man-searching-air-ticket-for-summer-travel.png';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";


import Header from '../../components/Header_New/Header';


const BusinessVisit = () => {

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
      title: 'Direct Citizenship  ',
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
      title: 'Golden Visa   ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
    <Banner_Page 
    highlightText={t("Business Visit")}
    regularText={t("Plan your business visit to Sweden efficiently. We provide support to make your short-term stays hassle-free and productive.")}
    backgroundImage={homeBgImage} 
/>
      

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white tw-text-justify">
                <div className="  md:tw-pl-32 tw-pl-2">


                <div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p> 
    Documentation Requirements for Visa Application
  </span>

  <h2>
    <strong> A Comprehensive List of Required Documents </strong>
  </h2>

  <p className="tw-text-gray">
    For your visa application, certain documents must be submitted to ensure a smooth process. Below is a guide detailing all necessary documents, including those for both applicants and sponsoring companies:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Personal Document Requirements
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Bank Statement:</strong> Submit an original bank statement from the last six months or proof of other assets if bank statements aren’t available.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Passport Requirements:</strong> Your passport must:
        <ul>
          <li>Have at least two blank pages.</li>
          <li>Be valid for at least three months beyond the end of your planned trip.</li>
          <li>Include all previous passports from the past seven years.</li>
          <li>Include a photocopy of the biometric page and any recent Schengen visas.</li>
        </ul>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Invitation Letter:</strong> A formal invitation from the Swedish company or individual on official letterhead. The letter should include:
        <ul>
          <li>Full address and contact details of the inviting company.</li>
          <li>Name and position of the contact person or signatory.</li>
          <li>Purpose and expected duration of your visit.</li>
          <li>Details of who will bear travel and living expenses.</li>
          <li>A statement guaranteeing that the applicant will depart Sweden before visa expiration.</li>
        </ul>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Employment Certificate:</strong> Proof of employment, detailing:
        <ul>
          <li>Your employment start date.</li>
          <li>Current position, salary, and purpose of travel.</li>
          <li>Approval of leave for the duration of the visit.</li>
        </ul>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Medical Insurance:</strong> Travel insurance covering the entire Schengen area, valid for your entire stay. The policy should cover at least EUR 30,000 to cover expenses for emergency medical treatment, hospital care, repatriation, or death.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Travel Ticket Reservation:</strong> Provide round-trip flight reservations. Final tickets are not required but initial booking confirmation is mandatory.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Accommodation Proof:</strong> A confirmed hotel booking or another proof of accommodation (primary reservation required).
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Additional Requirements for Employers or Sponsoring Companies
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Commercial Registration and Tax Card:</strong> Original and copy of the company’s commercial registry and tax card, translated into English or Swedish, to confirm the legitimacy of the business.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Additional Documents that May Be Required
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Movement Certificate:</strong> Required if you are a first-time traveler, your passport doesn’t cover the last seven years, or there’s a gap of more than three months between your current and previous passports.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Other Embassy-Specified Documents:</strong> Additional paperwork may be requested by the embassy depending on individual circumstances.
      </p>
    </li>
  </ul>
</div>
<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    {" "}
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
    Business Visa for Foreign Investors
  </span>

  <h2>
    <strong>A Swedish Business Visa for Investors</strong>
  </h2>

  <p className="tw-text-gray">
    A Swedish business visa is ideal for foreign nationals who wish to invest in Sweden and make periodic visits to manage business interests. This visa allows multiple entries and is valid for short stays of up to 90 days within a 180-day period, renewable for up to five years. This flexibility is especially beneficial for investors who need to oversee business developments or make frequent visits without obtaining a residence permit.
  </p>

  <p className="tw-text-gray">
    For short-term business trips lasting less than three months, this visa is sufficient without the need for a residence permit. However, if you plan to stay longer or relocate for an extended period, a residence permit may be required.
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        How We Assist You
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Document Preparation and Submission:</strong> Assistance in gathering, verifying, and submitting all required documents to ensure a smooth process.
        <p>
          <br />
        </p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Guidance on Financial Requirements:</strong> Advising on the proof of funds and financial documentation needed to meet Swedish visa requirements.
      </p>
      <p>
        <br />
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Appointment Scheduling:</strong> Coordinating necessary appointments with the Swedish embassy or consulate for document submission and interviews.
        <p>
          <br />
        </p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Ongoing Support and Updates:</strong> Regular updates on your visa status and timely responses to any additional embassy requests.
        <p>
          <br />
        </p>
      </p>
    </li>
  </ul>

  <p className="tw-text-gray">
    Our comprehensive visa service allows you to focus on your business objectives while we take care of the paperwork. Contact us today to learn more about how we can facilitate your short-term business visa to Sweden and support your professional success.
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

export default BusinessVisit;
