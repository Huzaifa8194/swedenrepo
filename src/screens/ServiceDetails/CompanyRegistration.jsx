import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/online-contract-signing.png';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

import { useTranslation } from "react-i18next";
import Header from '../../components/Header_New/Header';


const CompanyRegistration = () => {

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
      title: 'Direct Citizenship   ',
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
      title: 'Golden Visa     ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Company Registration")}
    regularText={t("Start your business in Sweden with confidence. We guide you through the company registration process for a smooth start.")}
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
    Comprehensive Guide to Company Registration in Sweden
  </span>
  <h2>
    <strong>Setting Up Your Business in Sweden</strong>
  </h2>
  <p className="tw-text-gray">
    Setting up a business in Sweden offers access to one of Europe’s most stable economies, a supportive business culture, and a highly skilled workforce. Company registration is an essential step for anyone planning to operate a business in Sweden, as it legally establishes the company and allows it to engage in business activities, enter contracts, and access essential services.
  </p>
  <p className="tw-text-gray">
    This guide covers the various types of companies in Sweden, the pros and cons of each, and why and when company registration is necessary.
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Why is Company Registration Important?</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Legal Recognition:</strong> Registering your company gives it legal status in Sweden, allowing it to enter contracts, open bank accounts, and conduct business legally.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Tax Compliance:</strong> Registered companies are eligible to apply for VAT registration and must comply with Swedish tax regulations, enabling transparent financial operations.
      </p>
      <p><br /></p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Access to Benefits:</strong> Registered companies can benefit from government incentives, tax deductions, and access to loans and financing from Swedish financial institutions.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Credibility and Trust:</strong> Registered companies are more trusted by customers, suppliers, and partners, as they demonstrate a commitment to legal compliance and transparency.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Limited Liability:</strong> Certain company types, like limited companies (Aktiebolag), provide limited liability protection, shielding the owner’s personal assets from business debts and obligations.
        <p><br /></p>
      </p>
    </li>
  </ul>
</div>




<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Comprehensive Guide to Company Registration in Sweden
  </span>
  <h2><strong>Setting Up Your Business in Sweden</strong></h2>
  <p className="tw-text-gray">
    Setting up a business in Sweden offers access to one of Europe’s most stable economies, a supportive business culture, and a highly skilled workforce. Company registration is an essential step for anyone planning to operate a business in Sweden, as it legally establishes the company and allows it to engage in business activities, enter contracts, and access essential services.
  </p>
  <p className="tw-text-gray">
    This guide covers the various types of companies in Sweden, the pros and cons of each, and why and when company registration is necessary.
  </p>

  <h2><strong>Types of Companies in Sweden</strong></h2>
  <p className="tw-text-gray">
    Sweden offers several types of business structures, each with specific advantages, disadvantages, and requirements. The right structure depends on your business goals, scale, and risk tolerance.
  </p>

  <h2><strong>1. Sole Trader (Enskild Firma)</strong></h2>
  <p className="tw-text-gray">
    A sole trader business is owned and managed by an individual, making it the simplest business form in Sweden. It is ideal for freelancers, consultants, and small businesses with minimal capital requirements.
  </p>
  <strong>Advantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Simple to set up and maintain.</li>
    <li className="tw-text-gray">Full control over business decisions.</li>
    <li className="tw-text-gray">Lower administrative and regulatory requirements.</li>
    <li className="tw-text-gray">Profits are taxed as personal income, which can simplify tax filing.</li>
  </ul>
  <strong>Disadvantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Unlimited liability: The owner is personally liable for all business debts and obligations.</li>
    <li className="tw-text-gray">Limited access to capital: Often restricted to personal funds or small loans.</li>
    <li className="tw-text-gray">May lack credibility for large clients or investors compared to incorporated entities.</li>
  </ul>
  <p className="tw-text-gray">
    <strong>When to Register:</strong> Ideal for individuals starting a small business or working as freelancers. Registration is generally recommended if you intend to trade under a business name or need a VAT number.
  </p>

  <h2><strong>2. Limited Company (Aktiebolag or AB)</strong></h2>
  <p className="tw-text-gray">
    A limited company (AB) is a separate legal entity from its shareholders, offering limited liability protection. This is the most popular structure for start-ups, small businesses, and large corporations alike.
  </p>
  <strong>Advantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Limited liability: Shareholders are not personally liable for business debts beyond their investment.</li>
    <li className="tw-text-gray">Easier to attract investors: Credibility and potential for issuing shares.</li>
    <li className="tw-text-gray">Flexibility in growth: Suitable for businesses with plans to expand or seek external funding.</li>
    <li className="tw-text-gray">Tax benefits: Company profits are taxed at a corporate rate, which can be more favorable for larger earnings.</li>
  </ul>
  <strong>Disadvantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Higher initial capital requirement: Minimum share capital of SEK 25,000.</li>
    <li className="tw-text-gray">More complex administration: Requires annual reports, board meetings, and compliance with corporate regulations.</li>
    <li className="tw-text-gray">Shareholder obligations: Shareholders have specific responsibilities, such as attending annual general meetings and approving financial statements.</li>
  </ul>
  <p className="tw-text-gray">
    <strong>When to Register:</strong> Registering a limited company is ideal when seeking external investments, minimizing personal risk, or planning to grow the business significantly. It is also a suitable structure if you need to protect your personal assets.
  </p>

  <h2><strong>3. Trading Partnership (Handelsbolag)</strong></h2>
  <p className="tw-text-gray">
    A trading partnership is a business owned by two or more individuals. Each partner shares equal responsibility for the business’s debts and obligations unless agreed otherwise.
  </p>
  <strong>Advantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Simple to establish with minimal initial capital.</li>
    <li className="tw-text-gray">Shared decision-making and responsibility among partners.</li>
    <li className="tw-text-gray">Profits are taxed as personal income, which can be favorable depending on income level.</li>
  </ul>
  <strong>Disadvantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Unlimited liability: Partners are jointly and individually liable for business debts.</li>
    <li className="tw-text-gray">Shared risk: One partner’s decisions can impact the financial obligations of others.</li>
    <li className="tw-text-gray">Potential for disputes: Without a clear partnership agreement, disagreements can disrupt the business.</li>
  </ul>
  <p className="tw-text-gray">
    <strong>When to Register:</strong> A trading partnership is suitable for two or more individuals who wish to collaborate on a business with shared control. Registering is important to establish legal recognition and define each partner’s roles and liabilities.
  </p>

  <h2><strong>4. Limited Partnership (Kommanditbolag)</strong></h2>
  <p className="tw-text-gray">
    A limited partnership includes both general and limited partners. General partners have full control and unlimited liability, while limited partners have limited liability and typically no involvement in management.
  </p>
  <strong>Advantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Flexibility: Allows for different levels of involvement and risk among partners.</li>
    <li className="tw-text-gray">Limited liability for silent partners: Reduced financial risk for limited partners.</li>
    <li className="tw-text-gray">Clear roles: Defined responsibilities for general and limited partners.</li>
  </ul>
  <strong>Disadvantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Unlimited liability for general partners: Risk for those with active control over business operations.</li>
    <li className="tw-text-gray">Shared control: Requires a strong partnership agreement to prevent disputes.</li>
    <li className="tw-text-gray">Profits taxed as personal income: Can be less favorable for high-revenue businesses.</li>
  </ul>
  <p className="tw-text-gray">
    <strong>When to Register:</strong> A limited partnership is best for businesses with multiple partners where one or more partners wish to limit their financial risk. Registering establishes legal definitions of roles and responsibilities, helping to prevent disputes.
  </p>

  <h2><strong>5. Economic Association (Ekonomisk Förening)</strong></h2>
  <p className="tw-text-gray">
    An economic association is a cooperative entity formed by at least three members who collaborate to promote shared economic interests, such as housing cooperatives or joint ventures.
  </p>
  <strong>Advantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Shared benefits and risk: Members share profits and responsibilities.</li>
    <li className="tw-text-gray">Limited liability for members: Members are not personally liable beyond their contributions.</li>
    <li className="tw-text-gray">Flexibility for cooperatives: Ideal for community-driven projects and joint ventures.</li>
  </ul>
  <strong>Disadvantages:</strong>
  <ul className="tw-pl-10">
    <li className="tw-text-gray">Minimum member requirement: Must have at least three members, which can limit flexibility.</li>
    <li className="tw-text-gray">Administrative requirements: Requires annual reports, member meetings, and compliance with cooperative regulations.</li>
    <li className="tw-text-gray">Potential conflict</li>
</ul>

</div>



<div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    The Company Registration Process in Sweden
  </span>
  <h2><strong>Step-by-Step Guide</strong></h2>

  <p className="tw-text-gray">
    Setting up a company in Sweden involves several key steps to ensure your business is compliant with local regulations. Here’s how the process works:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Step 1: Choose the Business Structure</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Evaluation:</strong> Assess the advantages, disadvantages, and legal requirements of different structures to choose the best fit for your business goals and risk tolerance.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Step 2: Register the Company Name</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Unique Naming:</strong> Ensure the chosen name adheres to Swedish conventions and is distinct from existing businesses.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Step 3: File for Registration</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Documentation:</strong> Submit necessary forms and documents to Bolagsverket, including founder identification, proof of share capital, and articles of association.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Step 4: Apply for Tax Registration</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>VAT and Taxes:</strong> Register with Skatteverket for VAT, employer taxes, and other obligations post-registration.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Step 5: Apply for Necessary Permits</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Industry-Specific Permits:</strong> Secure any required permits relevant to your sector, such as those for food services or construction.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Step 6: Open a Business Bank Account</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Account Setup:</strong> Establish an account with a Swedish bank using registration documents and VAT number to manage finances and transactions.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    How Sweden Relocators Can Help with Company Registration
  </span>
  <h2><strong>Comprehensive Assistance</strong></h2>

  <p className="tw-text-gray">
    Sweden Relocators offers end-to-end company registration services to simplify the process and ensure compliance.
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">Our Services Include:</h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Business Structure Advisory:</strong> Expert guidance on selecting the most suitable structure for your business.
        <p><br /></p>
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Registration Assistance:</strong> Full management of the application and documentation process with Bolagsverket and Skatteverket.
      </p>
      <p><br /></p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Tax Registration and Compliance:</strong> Support with VAT and tax filings to maintain legal compliance.
        <p><br /></p>
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Permit Application:</strong> Assistance with obtaining any necessary permits specific to your industry.
        <p><br /></p>
      </p>
    </li>
    <li>
      <p className="m-0 tw-text-gray">
        <strong>Ongoing Support:</strong> Continued advisory and administrative help as your business grows.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Why Choose Sweden Relocators?
  </span>
  <h2><strong>Trusted Expertise</strong></h2>

  <p className="tw-text-gray">
    Choose Sweden Relocators for a seamless, personalized, and efficient company registration experience in Sweden.
  </p>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Experienced Team:</strong> Our specialists are knowledgeable in Swedish corporate law and business practices.
        <p><br /></p>
      </p>
    </li>


    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>All-In-One Service: </strong> From document preparation to travel arrangements and follow-up, we manage every step of the application.

        <p><br /></p>
      </p>
    </li>


    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Simplified Future Applications: </strong> Your data remains securely stored, allowing you to apply for visas to other countries with minimal additional input, streamlining subsequent applications.

        <p><br /></p>
      </p>
    </li>

    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Real-Time Tracking and Updates: </strong> Our portal and app keep you updated at every stage, so you’re always informed on the progress of your application.

        <p><br /></p>
      </p>
    </li>
    </ul>
    </div>

    <div>
      <h2><strong>Apply for Your Global Visit Visa Today
      </strong></h2>

      <p className="tw-text-gray tw-pl-8">With Sweden Relocators, applying for a visit visa to any country has never been easier. Simply sign up on our portal or download our app to start the process. From the UK to the USA, Canada, Australia, New Zealand, and beyond, we provide a full-service solution, managing every aspect of your visa application and ensuring a smooth experience. Let Sweden Relocators handle the details, so you can focus on planning your journey.
      </p>
    </div>














</div>              </div>

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

export default CompanyRegistration;
