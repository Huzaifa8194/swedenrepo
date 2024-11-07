import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/business-startup.png';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";


import Header from '../../components/Header_New/Header';

const BusinessPermit = () => {
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
      title: 'Direct Citizenship ',
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

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Business Permit")}
    regularText={t("Launch your entrepreneurial journey in Sweden. Our experts help you with all the necessary paperwork for a business permit.")}
    backgroundImage={homeBgImage} 
/>


      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-pl-2">
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STARTING YOUR OWN
                  </span>
                  <h2>
                    <strong>Business In Sweden</strong>
                  </h2>

                  <span className=" tw-pt-5 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF YOU ARE PLANNING ABOUT INVESTING
                  </span>
                  <h2>
                    <strong>In Sweden, You Need To Apply For The Residence Permit</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">
                    We have a complete solution for all your problems while starting a new business or opening a franchise of your existing business at Sweden. Our mobile app Sweden for all AB will deliver the service of providing the resident permit
                    that will align your plan easily. You will need a detailed plan for your business, bank statement which shows that you have enough capital to invest in your business along with other enough funds to show that you can support your
                    family and you while staying at Sweden during the first two years.
                  </p>

                  <p className=" tw-text-gray tw-font-medium">
                    Sweden is known as the land of start-ups because the economic conditions of the country are detrimental to entrepreneurship. Swedish business culture is open and innovative, and starting a business there is relatively simple.
                    Thus, Sweden excels in promoting the formation of ambitious start-ups on an unexpected level. After Silicon Valley, Stockholm is known for producing the second-highest revenues from tech companies per capita.
                  </p>

                  <p className=" tw-text-gray tw-font-medium">
                    Being the tech and innovation hub, there is a high survival rate for start-ups in Sweden with relatively fast growth. However, you can face some difficulties in understanding the business culture and the procedures for operating a
                    business in Sweden.
                  </p>
                  <p className=" tw-text-gray tw-font-medium">
                    Swedish market has been witnessing the growing number of foreign companies, especially in the past few years. Sweden has developed a strong and competitive capitalist economy with a generous and universal welfare system that is
                    known as the Nordic Model. With its diverse and stable market, investors are attracted to the country’s growing economy. There are so many opportunities for business in the country and Business Sweden can help you to connect with
                    other companies in the sector.
                  </p>
                  <p className=" tw-text-gray tw-font-medium">You can do business in different ways inside Sweden. Whether you can start your own business or become a partner with one or more other Firms/Corporations.</p>
                  <p className=" tw-text-gray tw-font-medium">Non-Profit Associations and foundations also engage in business activities, although they are usually not started up for this purpose.</p>
                  <p className=" tw-text-gray tw-font-medium">
                    Some of the reasons that businesses have chosen the Swedish market as their destination are the world-class infrastructure, Low-level of corruption, highly-skilled workforce, capitalistic economy, and friendly business culture.
                    Sweden’s business climate is very favorable and that’s why it is known as a country of innovation.
                  </p>

                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CBENEFIT
                  </span>
                  <h2>
                    <strong>From Business Culture</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">
                    Compared with many other cultures, the Swedish business culture is more relaxed and casual. There isn’t too much bureaucracy and the country is quite free from corruption. You will be inspired much by working in this much relaxed
                    and informal culture. You will learn a lot will build many fruitful business relationships. These cultural reforms can be beneficial for you as an entrepreneur in Sweden.
                  </p>

                  <p className=" tw-text-gray tw-font-medium">
                    Besides this, the Swedish government has made it a lot easier for people to borrow money from public or private lenders. Swedish are informal about names and being an expat, you should do the same. In short, the business culture,
                    here in Sweden, is much favourable for new business opportunities.
                  </p>

                  <div className="row">
                    <div className="col-md-10 tw-mx-auto">
                      <img src={banner} alt="" />
                    </div>
                  </div>

                  <div>
                    <h2>
                      <strong>RESIDENCE PERMIT FOR PEOPLE</strong>
                    </h2>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PASSPORT
                    </span>
                    <h2>
                      <strong>Who Have Their Own Business</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      People who start their business in Sweden or become a partner of a company, doing so if they have to stay for more than 3 months, they need a residence permit. You should apply and get a residence permit before you arrive in
                      Sweden.
                    </p>
                  </div>
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> RESIDENCE
                    </span>
                    <h2>
                      <strong>Permit Requirements</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">A valid passport. Note that the permit is only valid until the passport expiry date.</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Copies of the passport showing your identity, passport validity and permits to reside in any other countries.</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Proof that you own at least 50% of the company and have ultimate responsibility over any decisions.</p>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Bank statements proving that you have sufficient capital to buy or establish a business for at least the first two years in Sweden.</p>
                      </li>
                      <li className=" tw-flex t tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Your company must be expected to create sufficient profits to support the company, yourself and your family.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          A detailed account of your business plan, including contracts with customers / suppliers; a contract for business premises; business permits if required; an investment budget; a liquidity budget and a budgeted balance sheet
                          (profit / loss).
                        </p>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">You must have relevant experience in the sector, and in running your own business.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          You have sufficient income to support yourself and your family for at least the first two years of the permit. This is estimated to be SEK 200,000; for your spouse SEK 100,000; and SEK 50,000 for every child who accompanies
                          you.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Proof of sufficient English and or Swedish language skills.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Receipt of payment for the application.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">If you want to be registered in Sweden, you need to live in Sweden for more than a year and have a valid permit for that time period.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  md:tw-pr-32  tw-pr-4">
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

export default BusinessPermit;
