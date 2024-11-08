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
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> REQUIREMENTS FOR BECOMING
                  </span>

                  <h2>
                    <strong>A Swedish Citizen By Application</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">To be able to become a Swedish citizen, you have to</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">be able to prove your identity</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">be 18 years of age or older</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">have a permanent residence permit (a temporary residence permit is not applicable) or</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">You can apply for a short-stay Schengen visa (type C-Joining a Family Member) which will permit you to enter Sweden and the Schengen area.</p>
                    </li>

                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">have a right of residence or residence card (applies to you if you are an EU citizen or a close relative of an EU citizen)</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">lived in Sweden for a certain amount of time</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">have conducted yourself well while in Sweden.</p>
                    </li>
                  </ul>

                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> YOU MUST HAVE LIVED
                    </span>
                    <h2>
                      <strong>In Sweden For A Certain Period</strong>
                    </h2>

                    <p className=" tw-text-gray">For becoming a Swedish citizen, you need to live in Sweden for a certain period of time.</p>

                    <div className="row tw-flex tw-items-center tw-mb-6">
                      
                    <div className="col-md-5">
                        
                        <p className=" tw-text-gray">The required period can vary from case to case. Some people have to live for 5 year continuously. Other rules apply for those who are stateless or refugees.</p>
                   
                          
                        </div>
                      
                      <div className="col-md-7">
                        <div className="row ">
                          <div className="col-md-10 tw-mx-auto">
                          <img src={banner} alt="" />
                          </div>
                        </div>
                      </div>
                      
                    </div>





                   </div>

                 

                  <div>
                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>CITIZENSHIP
                      </span>

                      <h2>
                        <strong>For Adults</strong>
                      </h2>

                      <p className=" tw-text-gray ">When you have lived in Sweden for a specified period and meet the other requirements, you can apply for a Swedish citizenship.</p>

                      <div className="">
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>PERIOD OF
                        </span>
                        <h2>
                          <strong>Residence</strong>
                        </h2>

                        <p className=" tw-text-gray ">
                          To become a Swedish citizen, you need to live in Sweden for 5 years continuously and you want to continue living in future aswell. The time of the residence permit that leads to a permanent residence permit is counted as a
                          period of habitual residence.
                        </p>
                        <p className=" tw-text-gray ">
                          If you had a permanent residence permit or a residence permit for settlement when you entered Sweden, you count the duration of stay from your date of arrival. Otherwise, the duration of stay is calculated from the date on
                          which you submitted your application for a residence permit and were approved. If your application was initially rejected and you then submitted a new application, the time is counted from the date on which you received
                          approval.
                        </p>
                      </div>

                      <div className="">
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>EU/EEA CITIZENS
                        </span>
                        <h2>
                          <strong>And Their Family Members</strong>
                        </h2>


                        <div className="row tw-flex tw-items-center tw-mb-6">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-10 tw-mx-auto">
                          <img src={banner2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        
                      <p className=" tw-text-gray ">EU/EEA citizens and their family members should complete and fulfill the requirements of residence permit in order to get the Swedish citizenship.</p>
                      </div>
                        
                      </div>
                    </div>




                       

                     

                      <div className=" tw-pt-5">
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>RECORDS
                        </span>

                        <h2>
                          <strong>Related You</strong>
                        </h2>

                        <p className=" tw-text-gray ">You need to conduct yourself well. Your past will be checked by the authorities. Any information about your debts and crimes will be checked by the Swedish Migration Agency.</p>

                        <p className=" tw-text-gray tw-font-medium">The information is requested from:</p>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">The Enforcement Authority (if you have debts)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">The Police (if you committed a crime or are suspected of doing so) </p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">The Security Service (security checks).</p>
                          </li>
                        </ul>
                      </div>

                      <div className=" tw-pt-5">
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>YOU CAN GET YOUR CITIZENSHIP
                        </span>

                        <h2>
                          <strong>Application Refused In The Situations Mentioned Below If You</strong>
                        </h2>

                        <p className=" tw-text-gray ">You need to conduct yourself well. Your past will be checked by the authorities. Any information about your debts and crimes will be checked by the Swedish Migration Agency.</p>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">have not paid taxes, fines or other charges</p>
                          </li>

                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">have not paid maintenance.</p>
                          </li>
                        </ul>
                        <p className=" tw-text-gray">Having debts in private companies also lead to rejection in your application. You have to remain debt free at least for 2 years before you can apply for a Swedish citizenship.</p>
                      </div>

                      <div className=" tw-pt-5">
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>DUAL
                        </span>

                        <h2>
                          <strong>Nationality</strong>
                        </h2>

                        <p className=" tw-text-gray ">Swedish law allow a person to have dual nationality or even multiple nationalities. Having multiple or dual nationalities would not affect on the rights of being a Swede.</p>
                      </div>
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

export default Citizenship;
