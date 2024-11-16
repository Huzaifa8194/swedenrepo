import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/man-searching-air-ticket-for-summer-travel.png';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";
import Header from '../../components/Header_New/Header';


const GlobalVisitVisas = () => {
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
      title: 'Direct Citizenship    ',
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
      title: 'Golden Visa ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Global Visit Visas")}
    regularText={t("Travel with confidence. We provide guidance for global visit visas tailored to your destination and needs.")}
    backgroundImage={homeBgImage} 
/>
      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white tw-text-justify">
                <div className="  md:tw-pl-32 tw-px-3">
                







                <div>
      <span className="tw-flex tw-items-center tw-gap-2">
        <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
        Golden Visa Programs: Greece and Portugal – Your Pathway to European Residency
      </span>
      <h2>
        <strong> A Comprehensive Guide </strong>
      </h2>
      <p className="tw-text-gray">
        Golden Visa programs in Greece and Portugal provide a unique opportunity for non-EU investors to secure residency in these countries through investment. These programs allow investors and their families to enjoy the many benefits of European residency, including visa-free travel within the Schengen Zone, access to quality education and healthcare, and, after a certain period, eligibility for citizenship. Here’s a comprehensive guide to both programs, designed to help you make an informed decision about investing in Greece or Portugal.
      </p>

      <ul className="tw-p-0 tw-pt-4">
        <li className="tw-flex tw-items-center tw-gap-3">
          
          <h2 className="m-0 tw-text-gray"></h2><GoTriangleRight className="tw-text-blue" /><h2 className="m-0 tw-text-gray"><strong>Greece Golden Visa Program</strong></h2>
        </li>
      </ul>

      <ul className="tw-p-0 tw-pl-10">
        <li className="tw-flex tw-items-center tw-gap-3">
          <p className="m-0 tw-text-gray">
            <strong>Why Choose Greece?</strong> Greece, with its rich historical legacy, Mediterranean climate, and vibrant culture, has become one of the most desirable locations for investors seeking residency in Europe. The Golden Visa program in Greece is one of the most accessible and affordable in Europe, requiring a minimum investment of €250,000. This program offers not only a gateway to the European Union but also the potential to enjoy Greece’s cosmopolitan cities, pristine beaches, and high quality of life.
            <p><br /></p>
          </p>
        </li>
        <li>
          <p className="m-0 tw-text-gray">
            <strong>Key Benefits of the Greece Golden Visa:</strong> 
            <ul className="tw-list-disc tw-list-inside">
              <li>Affordable Investment Threshold: A minimum investment of €250,000 in real estate, one of the lowest investment thresholds in Europe.</li>
              <li>Residency for Family Members: The main applicant’s spouse, children under 21, and dependent parents of both the investor and spouse can also be included under the same visa.</li>
              <li>Fast Processing Time: Residency permits are typically issued within 2-3 months after the investment.</li>
              <li>No Minimum Stay Requirement: Unlike many other residency programs, Greece does not impose a minimum stay requirement for Golden Visa holders, allowing flexibility.</li>
              <li>Visa-Free Schengen Travel: Residency in Greece allows visa-free travel to all 27 Schengen countries.</li>
              <li>Pathway to Citizenship: Apply for Greek citizenship after seven years of residence, provided specific requirements are met.</li>
            </ul>
            <p><br /></p>
          </p>
        </li>
        <li>
          <p className="m-0 tw-text-gray">
            <strong>Investment Options for the Greek Golden Visa:</strong> The primary route for obtaining a Greek Golden Visa is through real estate investment, with a minimum required amount of €250,000. Eligible investments include:
            <ul className="tw-list-disc tw-list-inside">
              <li>Real Estate: Purchase residential or commercial property, or a plot of land for construction.</li>
              <li>Property Lease: Enter into a 10-year lease agreement for hotel accommodation or furnished tourist residences.</li>
              <li>Other potential options include capital contributions to Greek businesses and investments in government bonds or stocks, though real estate remains the most popular route.</li>
            </ul>
            <p><br /></p>
          </p>
        </li>
      </ul>

      <ul className="tw-p-0 tw-pt-4">
        <li className="tw-flex tw-items-center tw-gap-3">
          <GoTriangleRight className="tw-text-blue" />
          <h2 className="m-0 tw-text-gray"><strong>Portugal Golden Visa Program</strong></h2>
        </li>
      </ul>

      <ul className="tw-p-0 tw-pl-10">
        <li className="tw-flex tw-items-center tw-gap-3">
          <p className="m-0 tw-text-gray">
            <strong>Why Choose Portugal?</strong> Portugal offers a high standard of living, a mild climate, excellent infrastructure, and a strong, stable economy, making it one of Europe’s top destinations for residency by investment. The Golden Visa program is renowned for its flexibility and its pathway to European citizenship. With a minimum investment of €280,000, it provides access to the Schengen Zone, quality healthcare, education, and the opportunity to become a Portuguese citizen after five years.
            <p><br /></p>
          </p>
        </li>
        <li>
          <p className="m-0 tw-text-gray">
            <strong>Key Benefits of the Portugal Golden Visa:</strong> 
            <ul className="tw-list-disc tw-list-inside">
              <li>Flexible Investment Amount: Options start from €280,000, depending on type and location of the investment.</li>
              <li>Residency for Family Members: Includes spouse, children under 18, dependent children over 18 (if financially dependent), and parents in the same application.</li>
              <li>Pathway to Citizenship: Apply for citizenship after five years without renouncing existing citizenships.</li>
              <li>Low Minimum Stay Requirement: Only requires an average of 7 days per year in Portugal.</li>
              <li>Visa-Free Schengen Travel: Grants visa-free access to all Schengen countries.</li>
              <li>High Quality of Life: Portugal ranks high for safety, healthcare, education, and quality of life, ideal for families and retirees.</li>
            </ul>
            <p><br /></p>
          </p>
        </li>
        <li>
          <p className="m-0 tw-text-gray">
            <strong>Investment Options for the Portuguese Golden Visa:</strong> 
            <ul className="tw-list-disc tw-list-inside">
              <li>Real Estate Investment:
                <ul className="tw-list-disc tw-list-inside tw-pl-5">
                  <li>€500,000: Minimum investment in real estate anywhere in Portugal.</li>
                  <li>€350,000: Investment in properties older than 30 years or in urban renewal areas.</li>
                  <li>€280,000: Investment in low-density areas.</li>
                </ul>
              </li>
              <li>Capital Transfer: €1 million for bank deposits or other investments.</li>
              <li>Business Investment: €350,000 for job-creating businesses or €250,000 for cultural heritage.</li>
              <li>Fund Investment: €500,000 in approved investment funds.</li>
            </ul>
            <p><br /></p>
          </p>
        </li>
      </ul>
      <div>
  <span className="tw-flex tw-items-center tw-gap-2">
    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
    Steps to Apply for a Golden Visa
  </span>
  <h2>
    <strong> A Comprehensive Overview </strong>
  </h2>

  <p className="tw-text-gray">
    Applying for a Golden Visa involves several important steps to ensure a smooth and successful process. Here’s what to expect:
  </p>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Consultation and Investment Selection
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Decide on the investment option:</strong> Work with professional advisors to choose the investment that aligns with your financial goals and lifestyle.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Document Preparation and Due Diligence:</strong> Collect necessary documents, such as proof of funds, background checks, and identification.
      </p>
      <p><br /></p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Investment Completion:</strong> Finalize your chosen investment (e.g., real estate purchase or capital transfer).
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Application Submission:</strong> Submit the Golden Visa application through the official government channels.
      </p>
      <p><br /></p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Biometric Appointment:</strong> Schedule and attend an appointment for biometric data collection to complete the residency process.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Residence Permit Issuance:</strong> Once approved, receive your Golden Visa residence permit.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Renewal and Maintenance:</strong> Both Greece and Portugal require periodic renewals and maintaining minimum residency to keep the permit active.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pt-4">
    <li className="tw-flex tw-items-center tw-gap-3">
      <GoTriangleRight className="tw-text-blue" />
      <h4 className="m-0 tw-text-gray">
        Additional Considerations for Investors
      </h4>
    </li>
  </ul>

  <ul className="tw-p-0 tw-pl-10">
    <li className="tw-flex tw-items-center tw-gap-3">
      <p className="m-0 tw-text-gray">
        <strong>Tax Benefits and Planning:</strong> Greece and Portugal both offer tax advantages for foreign residents. Portugal’s Non-Habitual Resident (NHR) program is especially appealing, with significant tax breaks for up to 10 years on foreign income and some local income exemptions.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Healthcare and Education:</strong> Both countries provide high-quality healthcare and educational options. Portugal stands out for its international and private schools with English programs, while Greece offers international schooling primarily in Athens.
        <p><br /></p>
      </p>
    </li>

    <li>
      <p className="m-0 tw-text-gray">
        <strong>Lifestyle and Language:</strong> Greece is known for its rich cultural heritage, Mediterranean climate, and active social life. Basic Greek can be beneficial, though English is commonly used in tourist and business settings. Portugal, with its scenic beauty and mild weather, offers a relaxed lifestyle where English is widely spoken, especially in urban centers.
        <p><br /></p>
      </p>
    </li>
  </ul>

  <h3 className="tw-text-center tw-mt-8">Sign Up Today!</h3>
  <p className="tw-text-gray tw-mb-6">
    Sweden Relocators provides expert assistance for those pursuing Golden Visa programs in Greece and Portugal. Contact us now for personalized guidance through each step, from selecting investments to submitting your application. Begin your European residency journey today!
  </p>
</div>
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

export default GlobalVisitVisas;
