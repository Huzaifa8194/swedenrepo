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
                <span className=" tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> Global visit visas
                  </span>

                  <p className=" tw-text-gray">
                    For visiting Sweden for a short period you will need a visit visa . Visiting for a short tour, meeting your relatives, visiting friends or business meeting you need to consider short visit to Sweden which is as Schengen tourist
                    visa Sweden follows the same visa rules as other European country because it is also the part of Schengen agreement.
                  </p>

                  <div className="row">
                    <div className="col-md-6 tw-mx-auto">
                      <img src={banner} alt="" />
                    </div>
                  </div>
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF YOU WANT
                  </span>

                  <h2>
                    <strong>To Visit You Need To</strong>
                  </h2>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">have a passport that is valid for at least three months after the visa has expired, was issued in the last ten years and has at least two empty pag-es</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">be able to describe the purpose of your visit</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">have received an invitation from the person you want to visit</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">
                        have an individual medical travel insurance that covers all costs that may arise in connection with emergency medical treatment, urgent med-ical care or transportation to your home country for medical reasons (the insurance
                        must cover costs of at least 30,000 EUR and be valid for all Schengen countries)
                      </p>
                    </li>

                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">
                        have money to support yourself and for the return trip home (Sweden al-so requires you to have 450 SEK for each day you stay in Sweden, which can also be paid for by the person who has invited you)
                      </p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">show that you intend to leave Sweden and the Schengen area on the last day before the visa expires</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">a photograph that is in passport format and taken with you facing the camera and which is not older than six months</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">other documents that the embassy may require</p>
                    </li>
                  </ul>

                  <p className=" tw-text-gray">
                    You can apply for a visit visa directly from our <Link to={'https://globalvisa.eu/'}>website.</Link>
                  </p>

                  <p className="  tw-text-gray tw-pt-4">
                    For visiting Sweden for a short period you will need a visit visa . Visiting for a short tour, meeting your relatives, visiting friends or business meeting you need to consider short visit to Sweden which is as Schengen tourist
                    visa Sweden follows the same visa rules as other European country because it is also the part of Schengen agreement.
                  </p>
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
