


















import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/work-agreement-between-employers.png';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

import { useTranslation } from "react-i18next";

import Header from '../../components/Header_New/Header';


const AppealCases = () => {
  const { t } = useTranslation();


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
      title: 'Golden Visa',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Appeal Cases")}
    regularText={t("Receive expert support for your appeal cases. We provide guidance to help you present a strong case during the review process.")}
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
    Asylum in Sweden: Professional Support for a Secure Future
  </span>
  
  <h2>
    <strong>What We Offer</strong>
  </h2>
  
  <p className="tw-text-gray">
    If you are seeking asylum in Sweden, understanding the legal process and meeting requirements can be overwhelming. At [Your Company Name], our team of experienced immigration specialists is here to guide you through each stage of the asylum process at the Swedish Migration Agency, ensuring that your case is handled with the utmost care and professionalism.
  </p>

  <h2>
    <strong>Why Choose an Expert?</strong>
  </h2>

  <p className="tw-text-gray">
    Navigating the asylum process in Sweden can be complex, with specific rules and timelines. Here’s how our expert team can make a difference for you:
  </p>
  
  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Peace of Mind</h4>
    </li>
  </ul>
  
  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        With our professional team managing your case, you can focus on other aspects of settling into Sweden. We are committed to ensuring your asylum application is handled effectively and with compassion.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Clear and Transparent Guidance</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        Our specialists simplify complex legal requirements, ensuring you understand every step. No matter how complicated your case may seem, our team is prepared to help you clarify and effectively present your grounds for asylum.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Immediate Access to a Legal Expert</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        Our immigration lawyers will begin working on your case as soon as you reach out, providing an immediate response to your concerns and ensuring that your case is prioritized and processed swiftly.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Eligibility for Asylum in Sweden</strong>
  </h2>

  <h2>
    <strong>Who Can Apply for Asylum?</strong>
  </h2>
  
  <p className="tw-text-gray">
    To apply for asylum in Sweden, you must be physically present within the country or at its border. It is not possible to apply from another country or at a Swedish embassy abroad.
  </p>
  
  <p className="tw-text-gray">
    Every asylum seeker’s case is reviewed individually, with the Swedish Migration Agency granting a residence permit only if the applicant meets the criteria to be considered a refugee under both Swedish law and the United Nations Refugee Convention.
  </p>

  <h2>
    <strong>Refugee Definition and Criteria</strong>
  </h2>
  
  <p className="tw-text-gray">
    Under Swedish law and international guidelines, a person qualifies as a refugee if they face persecution or severe threats in their home country based on:
  </p>
  
  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-text-gray">Race</li>
    <li className="tw-text-gray">Nationality, Language, or Ethnic Group</li>
    <li className="tw-text-gray">Religion</li>
    <li className="tw-text-gray">Political Belief or Activism</li>
    <li className="tw-text-gray">Gender Identity</li>
    <li className="tw-text-gray">Sexual Orientation</li>
    <li className="tw-text-gray">Membership in a Particular Social Group</li>
  </ul>
  
  <p className="tw-text-gray">
    If groups or individuals in your home country threaten you or your loved ones, this can impact your application. However, a positive decision requires clear evidence of persecution related to one of these factors. During the application process, you will be asked to describe the risks you face if you were to return to your country.
  </p>

  <h2>
    <strong>Possible Outcomes of Your Application</strong>
  </h2>

  <p className="tw-text-gray">
    If your case is accepted, you may receive a residence permit valid for either three years or 13 months, depending on the specifics of your situation.
  </p>
</div>


<div>
  <span className=" tw-flex tw-items-center tw-gap-2">
    <p className=" tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Steps to Apply for Asylum in Sweden
  </span>
  
  <h2>
    <strong>Step-by-Step Process</strong>
  </h2>

  <p className=" tw-text-gray">
    Follow these essential steps to apply for asylum in Sweden and begin your journey toward protection and settlement.
  </p>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Step 1: Presence in Sweden</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        You must be physically in Sweden or at the Swedish border to apply for asylum.
      </p>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Step 2: Initial Meeting with Swedish Migration Agency</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        Once you submit your application, you will be invited to an initial meeting at the Swedish Migration Agency. During this meeting, you will have the opportunity to select your legal representative or lawyer. At this stage, you can choose our experienced team to support you.
      </p>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Step 3: Role of Your Legal Representative</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        If you select us as your representative, we will be contacted by the Migration Agency to assist with your case. Our team will schedule a call with you to gather details about your background and reasons for seeking asylum. We will also prepare you for future interviews and document submissions.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Our Role as Your Legal Representative</strong>
  </h2>

  <p className=" tw-text-gray">
    As your legal representative, we will provide ongoing support and legal advice throughout the asylum process. Here’s how we help:
  </p>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Support and Legal Advice</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        We provide ongoing support and legal advice to ensure that your rights are protected throughout the asylum process.
      </p>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Clarifying Grounds for Asylum</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        We will help clarify your grounds for asylum to the Migration Agency, ensuring a smooth application process.
      </p>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Navigating Appeals</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        If your initial application is denied, we can assist with appeals to both the Migration Court and the Migration Court of Appeal.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Family Reunification for Refugees</strong>
  </h2>

  <p className=" tw-text-gray">
    Sweden recognizes family reunification as an essential right for refugees. Here’s what you need to know:
  </p>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Who Can Qualify for Family Reunification?</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        Your family may be eligible for family reunification if you hold a permanent or eligible temporary residence permit in Sweden.
      </p>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">For EU/EEA Citizens</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        If you are an EU/EEA citizen, you may benefit from a simplified family reunification process based on the right of free movement within Europe.
      </p>
    </li>
  </ul>

  <h2>
    <strong>How We Assist You with Family Reunification</strong>
  </h2>

  <p className=" tw-text-gray">
    Our team provides complete support for the family reunification process, ensuring a smooth and efficient journey:
  </p>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Application Preparation</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        We assist with preparing and submitting the residence permit application for your family members, ensuring all necessary documents are included.
      </p>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pt-4">
    <li className=" tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className=" tw-text-blue" />
      <h4 className=" m-0 tw-text-gray">Additional Support Services for Asylum Seekers</h4>
    </li>
  </ul>

  <ul className=" tw-p-0 tw-pl-10">
    <li>
      <p className=" m-0 tw-text-gray">
        In addition to asylum and family reunification, we provide relocation assistance, translation services, legal aid, and counseling.
      </p>
    </li>
  </ul>
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

export default AppealCases;
