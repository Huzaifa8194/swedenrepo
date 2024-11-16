import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/security-check-in-airport.png';
import banner2 from '../../assets/images/travel-vacation.png';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";

import Header from '../../components/Header_New/Header';



const Citizenship = () => {

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
      title: 'Direct Citizenship      ',
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
      title: 'Golden Visa  ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Citizenship")}
    regularText={t("Take the final step to call Sweden your home. We guide you through the process of acquiring Swedish citizenship smoothly.")}
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
    Swedish Citizenship: Requirements, Application Process, and Waiting Times
  </span>

  <h2><strong>General Requirements for Swedish Citizenship</strong></h2>
  <p className="tw-text-gray">
    To qualify for Swedish citizenship, applicants must meet several key requirements:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Age Requirement</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Age:</strong> You must be at least 18 years old to apply independently. Children under 18 can apply alongside a parent or guardian, with special considerations for adopted children.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Permanent Residence or Right of Residence</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Residence Requirement:</strong> Applicants must hold either a permanent residence permit (permanent uppehållstillstånd) or permanent right of residence (permanent uppehållsrätt) if they are EU/EEA citizens.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Residency Duration</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Residency Duration:</strong> 
        <ul>
          <li>Non-EU/EEA Citizens: Must have lived continuously in Sweden for at least five years.</li>
          <li>EU/EEA Citizens: Typically, a minimum of five years of continuous residence with a valid right of residence.</li>
          <li>Nordic Citizens: Generally, two years of continuous residence is sufficient.</li>
          <li>People with Refugee Status: For recognized refugees, the waiting period may be reduced to four years.</li>
        </ul>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Good Conduct</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Good Conduct:</strong> Applicants are expected to demonstrate good conduct, meaning they should not have a recent criminal record, significant debts, or unresolved legal issues. Migrationsverket considers factors such as past fines, prison sentences, or financial obligations.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Ability to Support Yourself</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Self-Sufficiency:</strong> Generally, applicants should be financially independent and not rely on social assistance. This applies particularly to non-Nordic and non-EU/EEA applicants.
      </p>
    </li>
  </ul>
</div>
<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p> 
    Specific Paths to Citizenship
  </span>
  
  <h2>
    <strong>Citizenship for Nordic Citizens</strong>
  </h2>

  <p className="tw-text-gray">
    For citizens of Denmark, Finland, Iceland, and Norway, the process for Swedish citizenship is streamlined:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Residency Requirement
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Only two years of continuous residence in Sweden are required.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Simplified Application Process:</strong> Nordic citizens can apply directly to Migrationsverket or, if they meet the criteria, register at their local Tax Agency (Skatteverket) for simplified processing.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Automatic Naturalization:</strong> Some Nordic citizens may qualify for automatic naturalization under specific conditions.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Citizenship for EU/EEA Citizens</strong>
  </h2>

  <p className="tw-text-gray">
    EU/EEA citizens can apply for Swedish citizenship after five years of continuous residence in Sweden. Requirements include:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Permanent Right of Residence
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        After five years of residence, EU/EEA citizens typically acquire a permanent right of residence (permanent uppehållsrätt), which is essential for the citizenship application.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Simplified Process:</strong> EU/EEA citizens may experience a slightly simplified process since they are not required to hold a residence permit due to their EU rights.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Proof of Good Conduct and Financial Independence:</strong> Similar to other applicants, EU/EEA citizens must demonstrate good conduct and generally be financially self-sufficient.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Citizenship for Individuals with a Permanent Residence Permit</strong>
  </h2>

  <p className="tw-text-gray">
    If you have been granted a permanent residence permit in Sweden, you may apply for citizenship once you fulfill the residency requirements:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Five-Year Residence Requirement
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Most applicants need five years of continuous residence. However, those with refugee status may qualify after four years.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Documentation of Residence and Income:</strong> You will need to provide evidence of your residence and financial stability during your time in Sweden.
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Commitment to Stay in Sweden:</strong> Migrationsverket may consider factors like employment and social ties to assess your intention to remain in Sweden.
      </p>
    </li>
  </ul>
</div>


<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Specific Paths to Citizenship
  </span>

  <h2>
    <strong>Application Process for Swedish Citizenship</strong>
  </h2>

  <p className="tw-text-gray">
    The application process for Swedish citizenship involves several steps to ensure you meet the eligibility criteria. Here’s an overview of the process:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Prepare Documentation</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Gather Documents:</strong> Gather all necessary documents, including a valid passport, proof of residence (such as rental agreements), employment records, and proof of income.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Submit Application</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Submit the Application:</strong> Applications can be submitted online via Migrationsverket’s e-service or in paper format. Ensure all information is accurate, and double-check for any required documents, as incomplete applications may delay processing.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Application Review</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Eligibility Check:</strong> Migrationsverket reviews the application and checks your eligibility. This review includes confirming your residence, examining your criminal record (if applicable), and verifying financial self-sufficiency.
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Additional Information:</strong> Migrationsverket may contact you to request additional documentation if necessary.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Decision and Notification</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Final Decision:</strong> Once the review is complete, Migrationsverket will issue a decision. If approved, you will receive a certificate of Swedish citizenship. If denied, you have the right to appeal the decision.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Waiting Time for Citizenship Applications</strong>
  </h2>

  <p className="tw-text-gray">
    The waiting time for Swedish citizenship applications can vary depending on your background and whether additional information is required. As of the latest data, the average processing times are:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Standard Processing</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        Standard processing for non-EU/EEA citizens and those without special exemptions typically takes 18-36 months.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Nordic Citizens</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        Nordic citizens typically experience shorter processing times, often between 6-12 months due to simplified requirements.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">EU/EEA Citizens</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        EU/EEA citizens often have similar processing times to standard applicants, but cases are typically processed more quickly if all documentation is in order.
      </p>
    </li>
  </ul>

  <h2>
    <strong>How Sweden Relocators Can Assist with Your Citizenship Application</strong>
  </h2>

  <p className="tw-text-gray">
    Navigating the Swedish citizenship application process can be complex and time-consuming. Sweden Relocators offers comprehensive services to help streamline your application. Here’s how we can assist:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Eligibility Assessment</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        We evaluate your residency history, documentation, and circumstances to confirm your eligibility and advise on any additional requirements.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Document Preparation and Verification</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        We ensure that all required documents are accurate, complete, and up-to-date, including translation of foreign documents if necessary.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Application Submission and Monitoring</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        We submit your application and monitor its progress with Migrationsverket, providing updates and handling any requests for additional information.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Support for Appeal</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        If your application is denied, we guide you through the appeal process and help strengthen your case for reconsideration.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Guidance on Additional Requirements</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        We provide personalized advice to address specific issues such as criminal records, financial concerns, or extended absences.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Why Choose Sweden Relocators?</strong>
  </h2>

  <p className="tw-text-gray">
    Sweden Relocators offers expert knowledge and personalized services to ensure a smooth Swedish citizenship application process. Here’s why you should choose us:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Expert Knowledge of Swedish Citizenship Laws</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        Our team is well-versed in the latest citizenship requirements, ensuring you have the best chance of success.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Comprehensive, Personalized Support</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        We tailor our services to meet your specific needs, whether you’re a Nordic citizen, EU resident, or permanent residence permit holder.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Streamlined Application Process</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        We handle the details, so you can have peace of mind knowing that every step is managed professionally and efficiently.
      </p>
    </li>
  </ul>
</div>



<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p> A Selection of Prime Citizenship-by-Investment Programs
  </span>

  <h2>
    <strong>Citizenship-by-Investment Programs Overview</strong>
  </h2>

  <p className="tw-text-gray">
    Citizenship-by-investment programs offer affluent individuals and families a second or even third passport, granting them expanded global mobility, business opportunities, and the same rights as local citizens. Here are some of the most credible and successful programs available, each providing unique benefits:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇦🇬 Antigua and Barbuda
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> USD 100,000
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Visa-free or visa-on-arrival access to 151 destinations, including popular business and lifestyle hubs. Quick processing times and multiple investment options. Favorable tax environment with no taxes on worldwide income or inheritance.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇦🇹 Austria
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> EUR 3 million
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        One of the world’s strongest passports with visa-free access to 187 destinations. Settlement rights in all EU member states. High standards of living and security, ideal for business and family life.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇨🇾 Cyprus
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> EUR 2.15 million
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Visa-free access to 174 countries, including all EU states. Right to live, work, and study in all EU member countries. Strong legal and tax system, beneficial for business and family relocation.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇲🇹 Malta
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> Approximately EUR 1 million
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Access to the entire EU with the right to live, work, and study in all member states. Visa-free or visa-on-arrival access to over 180 countries. High-quality healthcare and education systems, ideal for family settlement.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇲🇪 Montenegro
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> EUR 350,000
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Visa-free or visa-on-arrival access to 124 countries, including Schengen Area countries. Exclusive program limited to 2,000 applicants. Gateway to Europe with favorable tax rates and growing economy.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇰🇳 St. Kitts and Nevis
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> USD 150,000
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Visa-free or visa-on-arrival access to 156 destinations, including the UK and Schengen countries. Flexible and quick application process. No personal income tax, making it ideal for wealth preservation.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇱🇨 St. Lucia
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> USD 100,000
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Visa-free or visa-on-arrival access to 146 countries worldwide. Fast processing, with citizenship granted in as little as four months. Attractive business environment with tax incentives and financial flexibility.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        🇹🇷 Turkey
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Minimum Investment:</strong> USD 250,000 in real estate
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Advantages:</strong>
        Access to key Western markets and growing economic opportunities. Visa-free or visa-on-arrival access to 111 destinations, including parts of Asia, Africa, and the Middle East. Option to acquire dual citizenship, with passports granted within six to nine months.
      </p>
    </li>
  </ul>
</div>



<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Why Choose Citizenship by Investment?
  </span>
  
  <h2>
    <strong>Benefits of Citizenship by Investment</strong>
  </h2>

  <p className="tw-text-gray">
    Each of these citizenship-by-investment programs offers distinct benefits tailored to the global elite:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Enhanced Global Mobility
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Freedom to travel visa-free or with visa-on-arrival to numerous destinations.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Security and Stability
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Citizenship in politically stable countries with secure legal systems.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Business Opportunities
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Access to markets across the EU, Schengen Area, and beyond, fostering international business opportunities.
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Lifestyle Benefits
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        High standards of living, tax efficiency, access to quality healthcare and education, and diverse cultural experiences.
      </p>
    </li>
  </ul>

  <h2>
    <strong>Why Work With Sweden Relocators?</strong>
  </h2>

  <p className="tw-text-gray">
    At Sweden Relocators, we help you select the right citizenship program based on your needs, guiding you through the entire application process for a smooth and efficient journey toward a second citizenship.
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Contact Sweden Relocators for Citizenship Assistance
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        Swedish citizenship offers a host of benefits and opportunities, and our team is here to make your application journey as smooth as possible. Contact Sweden Relocators today to discuss your path to citizenship in Sweden, and let us guide you through every step with confidence and clarity.
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

export default Citizenship;
