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


                <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> appeal cases
                    </span>
                  <p className=" tw-text-gray">
                    Have you been denied family reunification? Residence permit? business visa? Citizenship? Identity card/personnummer? Visa? Or something completely different? let’s take a look at your case so that the decision can hopefully be
                    overturned.
                  </p>
                  <p className=" tw-text-gray">
                    It has become much more difficult to enter Sweden. After the refugee crisis, the authorities have tightened the requirements violently, and you may have been caught in that regard. We have appealed many cases to our clients and
                    they have won their cases. We hope that we can help you as well.
                  </p>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> HOW TO
                    </span>

                    <h2>
                      <strong>Appeal?</strong>
                    </h2>


                    <div className="row tw-flex tw-items-center tw-mb-6">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-10 tw-mx-auto">
                          <img src={banner} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        
                        <p className=" tw-text-gray">
                        To appeal against the decision made on your visa case, you should write a letter in Swedish or English. You must sign the appeal. </p>
                
                        
                      </div>
                    </div>




                   
                  </div>

                
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>AFTER
                    </span>

                    <h2>
                      <strong>Sending The Appeal</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      After receiving your appeal, it is the Embassy that initially decides whether to review the decision. The Embassy will verify that the appeal came in on time and will go over the case again. If more than 3 weeks have passed, the
                      appeal will be rejected; in that case you will have to submit a new visa application.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>IF THE
                    </span>

                    <h2>
                      <strong>Embassy Changes The Decision</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      If the Embassy finds that the decision could be changed, you will be contacted. The decision can be changed if new information comes in or if the Embassy considers the decision to be wrong. In that case you will be notified, and
                      the entry visa placed in your passport.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>IF THE
                    </span>

                    <h2>
                      <strong>Embassy Does Not Change The Decision, It Will Be Forwarded</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      If the appeal came in on time and the Embassy sees no reason to change the decision, the case will be forwarded as soon as possible. Your application, the decision, and all other documents submitted in the case will be sent to
                      the Administrative Court in Göteborg. The Administrative Court then makes a decision and notifies you at the address you specified in the application or in the appeal.
                    </p>
                    <p className=" tw-text-gray">After the case has been handed over to the court, all questions about the case should be addressed to them</p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>HOW
                    </span>

                    <h2>
                      <strong>Long Will It Take</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      After receiving the appeal, if the Embassy wants to change its decision, you will be contacted in a few days. But if the Embassy decides not to change its decision and forwards it to the Migration Court in Sweden, the waiting
                      time would be longer.
                    </p>
                    <p className=" tw-text-gray">
                      After receiving your appeal, it is the Embassy that initially decides whether to review the decision. The Embassy will verify that the appeal came in on time and will go over the case again. If more than 3 weeks have passed, the
                      appeal will be rejected; in that case you will have to submit a new visa application.
                    </p>
                    <p className=" tw-text-gray">
                      Have you been denied family reunification? Residence permit? business visa? Citizenship? Identity card/personnummer? Visa? Or something completely different? let’s take a look at your case so that the decision can hopefully be
                      overturned.
                    </p>
                    <p className=" tw-text-gray">
                      It has become much more difficult to enter Sweden. After the refugee crisis, the authorities have tightened the requirements violently, and you may have been caught in that regard. We have appealed many cases to our clients and
                      they have won their cases. We hope that we can help you as well.
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

export default AppealCases;
