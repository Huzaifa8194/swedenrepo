import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/programmers-building-mobile-application.png';
import { imageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"


import { useTranslation } from "react-i18next";
import Header from '../../components/Header_New/Header';



const WorkPermit = () => {
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
      title: 'Direct Citizenship by Investments      ',
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
      title: 'Golden Visa (Greece - Portugal)      ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Work Permit")}
    regularText={t("Explore your career opportunities in Sweden. We facilitate your work permit application for a smooth transition.")}
    backgroundImage={homeBgImage} 
/>

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-pl-3">
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FOR EMPLOYEE-EMPLOYER
                  </span>

                  <h2>
                    <strong>Assistance</strong>
                  </h2>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FACING PROBLEMS WITH WORK PERMITS?
                  </span>

                  <h2>
                    <strong>We Will Help You With Preparing Work Permit Applications</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">
                    Whether you are a Swedish company or foreign employer who is facing problems with working permits inside Sweden we have easy solutions for you. You won’t be wasting enough time on how to apply for the Swedish work permit. We will
                    do it for you easily and conveniently. You will not have to wait for 12 months in case of incorrect or incomplete applications.
                  </p>

                  <p className=" tw-text-gray tw-font-medium">
                    You can signup as Company if you want to hire someone from outside of Sweden or Non-Eu Citizen in Sweden, similarly if you have a job offer from any Swedish company just signup on www.sweden4allab.se and we will take care rest of
                    the application process.
                  </p>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CITIZENS OF
                  </span>

                  <h2>
                    <strong>Non-EU Countries</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">You have to be in Sweden or on the Swedish border in order to apply for asylum. It’s not possible to apply for asylum before you arrive, or at a Swedish embassy in another country.</p>

                  <p className=" tw-text-gray tw-font-medium">Generally, citizens from countries outside the EU must apply for a work permit to work in Sweden.</p>
                  <p className=" tw-text-gray tw-font-medium">
                    There are a few exceptions to the rule. Citizens of Argentina, Australia, Chile, Canada, Hong Kong, New Zealand, South Korea and Uruguay aged 18–30 can also apply for a working holiday visa for up to one year.
                  </p>
                  <p className=" tw-text-gray tw-font-medium">
                    For employment that lasts less than three months, citizens of certain countries must have both a work permit and a visa. Also note that employees in certain fields may be exempt from work permit regulations.
                  </p>

                  <div className="row">
                    <div className="col-md-8 tw-mx-auto">
                      <motion.img animate={imageVariants} className=" tw-w-full" src={banner} alt="" />
                    </div>
                  </div>

                  <div>
                    <h2>
                      <strong>Citizens Of EU Countries</strong>
                    </h2>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PASSPORT
                    </span>

                    <h2>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ID Is Required
                      </span>
                    </h2>

                    <p className=" tw-text-gray">EU citizens can look for a job and work without a permit. Their family can accompany them and can also work. However, you should have a valid passport to show your identity.</p>
                  </div>
                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PERMITS FOR
                    </span>

                    <h2>
                      <strong>Family Members</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      If you are a non-EU citizen eligible to receive a work permit, your spouse/common law spouse/registered partner and children up to age 21 (as well as children over 21 who are financially dependent on you) have the right to join
                      you in Sweden. They must apply for residence permits, either as part of your application or separately.
                    </p>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> THE
                    </span>

                    <h2>
                      <strong>Application Processes</strong>
                    </h2>

                    <p className=" tw-text-gray">You will need to apply for your permit before entering Sweden, though in some cases you may be able to apply from within Sweden if you are already legally living in the country.</p>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> RECEIVE
                    </span>

                    <h2>
                      <strong>An Offer Of Employment</strong>
                    </h2>

                    <p className=" tw-text-gray">which must have been approved by a relevant trade union.</p>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> COMPILE AND
                    </span>

                    <h2>
                      <strong>Submit Your Application</strong>
                    </h2>

                    <p className=" tw-text-gray">either online or through a paper application submitted to your closest Swedish embassy or consulate. Your completed application must include</p>

                    <div>
                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">A completed application form</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">
                            Copies of the pages of your passport that show personal data, period of validity and whether you have permission to live in countries other than your country of origin (e.g. other visas or residence permits)
                          </p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Your offer of employment and the statement from the trade union</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>

                          <p className=" m-0 tw-text-gray">An application fees</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">The Migration Agency considers your application and informs you of its decision, see current waiting times.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Submit data for visa and residence permit card.</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> EXTENDING
                      </span>

                      <h2>
                        <strong>A Work Permit</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        You can apply to extend your permit before your current permit expires. You can continue working until you get the decision if you had a permit to work for six months. For extending your work permit the conditions of the work
                        permit should have been the same throughout the working period i.e salary equals 13000 SEK per month before taxes. You should also have health insurance, life insurance, occupational injury insurance, and occupational pension
                        insurance for the entire period. You need to show the job satisfies the requirement and conditions of a work permit.
                      </p>
                      <p className=" tw-text-gray">
                        You can apply for extension 4 months before your permit expires. If you change the conditions of your employment or change your workplace in the first 24 months of your work permit, your permit will not be valid and you will
                        have to apply for a new work permit.
                      </p>

                      <p className=" tw-text-gray">You can change your workplace or employer after working 24 months without changing the line of profession.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PERMANENT
                      </span>

                      <h2>
                        <strong>Residence Permit</strong>
                      </h2>

                      <p className=" tw-text-gray">International students with a residence permit in Sweden can work alongside their studies. If they want to stay and work in Sweden after completing their studies, they need a work permit.</p>
                      <p className=" tw-text-gray">If you have been working in same profession and working conditions as when you you applied for the first time for 4 years in last 7 years you can get permanent residence permit.</p>

                      <p className=" tw-text-gray">Residence permit for your family members</p>
                      <p className=" tw-text-gray">Your family members can also get the residence permit for the same duration as you. you will have to show that you can support them.</p>
                    </div>

                    <div>
                      <h2>
                        <strong>The Application Process</strong>
                      </h2>

                      <p className=" tw-text-gray">We provide you with a complete online transparent experience of your Sweden relocation process. All you have to do is to Sign Up to access your online portal from where your journey begins.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CASE
                      </span>

                      <h2>
                        <strong>History</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        We will study your background to determine whether you are suitable for the job offer you currently have. The company will also be investigated as per the requirements. We will suggest you with the most suitable service we can
                        provide or the company as our client.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PERMANENT
                      </span>

                      <h2>
                        <strong>Residence Permit</strong>
                      </h2>

                      <p className=" tw-text-gray">International students with a residence permit in Sweden can work alongside their studies. If they want to stay and work in Sweden after completing their studies, they need a work permit.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> SERVICE
                      </span>

                      <h2>
                        <strong>Charges</strong>
                      </h2>

                      <p className=" tw-text-gray">On My Page, you will find the total cost for the process with the service code. You can find your invoice under the Payment Section on the portal.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FILE
                      </span>

                      <h2>
                        <strong>Preparation</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        While preparing your file we take care of all the required documentation including the job offer/ anställningserbjudande, trade union’s opinion/ fackligt yttrande , insurances, etc. We take care of all these parts during the
                        entire application. When the application has been submitted to the Swedish Migration Agency, you will receive a receipt and a control number.
                      </p>
                      <p className=" tw-text-gray">During the processing of the application at Migrationsverket we will regularly update you about your case.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> GRANTED
                      </span>

                      <h2>
                        <strong>Work Permit</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        We inform and coordinate the above with you and with the applicant. We will help you through the whole process with our one window solution. We can even further assist you with settling in Sweden and relocating.
                      </p>
                      <p className=" tw-text-gray">The employment can begin as soon as the person arrives in Sweden.</p>
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

export default WorkPermit;
