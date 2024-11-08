import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import d1 from '../../assets/images/antigua-barbuda.jpg';
import d2 from '../../assets/images/austria.jpg';
import d3 from '../../assets/images/cyprus.jpg';
import d4 from '../../assets/images/Malta.jpg';
import d5 from '../../assets/images/Montenegro.jpg';
import d6 from '../../assets/images/Saint_Kitts_and_Nevis.jpg';
import d7 from '../../assets/images/Saint_Lucia.jpg';
import d8 from '../../assets/images/Turkey.jpg';
import { imageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

import { useTranslation } from "react-i18next";

import Header from '../../components/Header_New/Header';


const DirectCitizenship = () => {

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
      title: 'Direct Citizenship     ',
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
      title: 'Golden Visa    ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Direct Citizenship by Investments")}
    regularText={t("Fast-track your path to citizenship through strategic investments. Our services make the process seamless and efficient.")}
    backgroundImage={homeBgImage} 
/>

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white tw-text-justify">
                <div className="  md:tw-pl-32 tw-px-3">
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>A SELECTION OF
                  </span>

                  <h2>
                    <strong>Prime Citizenship Programs</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    Citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport, which affords them all the internal rights enjoyed by residents. Listed below are the details of the most credible
                    and successful citizenship programs offered by Henley & Partners.
                  </p>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>Antigua And Barbuda</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d1} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        Antigua and Barbuda offers one of the most competitive citizenship programs in the Caribbe-an. Options start from USD 100,000 and citizens of Antigua and Barbuda have visa-free access to 151 destinations, including top
                        business and lifestyle destinations.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>Austria</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d2} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        Austria has one of the world’s strongest passports providing its holders with visa-free access to 187 destinations worldwide, along with settlement rights in all EU member states. Options for obtaining Austrian citizenship
                        start from a minimum investment of EUR 3 million.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>Cyprus</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d3} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        The Cyprus Investment Programme is one of the most sought-after citizenship programs that provides successful applicants with an attractive balance between the capital contribution they make and the benefits they receive. For
                        a minimum contribution of EUR 2.15 million, successful applicants can travel visa-free to 174 destinations worldwide.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>Malta</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d4} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        The Malta Individual Investor Program is the world’s leading citizenship program. For a minimum contribution of approximately EUR 1 million, successful applicants can acquire Maltese citizen-ship that offers safety and
                        security by providing a better quality of life and the right to live, work, and study in all EU member states.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>Montenegro</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d5} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        The Montenegro Citizenship-by-Investment Program offers increased global mobility with visa-free or visa-on-arrival access to 124 destinations including the countries of Europe’s Schengen Area, as well as Russia and the UAE.
                        The program is exclusively limited to 2,000 applicants and a minimum contribution of EUR 350,000 is required.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>St. Kitts And Nevis</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d6} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        St. Kitts and Nevis has one of the strongest passports among all the Caribbean citizenship programs. For a minimum contribution of USD 150,000, the St. Kitts and Nevis Citizenship-by-Investment Program provides visa-free or
                        visa-on-arrival access to 156 destina-tions.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>St. Lucia</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d7} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        The St. Lucia Citizenship-by-Investment Program offers increased global mobility and oppor-tunity by providing visa-free or visa-on-arrival access to 146 destinations around the world. For a contribution of USD 100,000,
                        applicants can acquire their passports in as little as four months.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>Turkey</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img animate={imageVariants} className=" tw-w-full tw-my-3" src={d8} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">
                        The Turkey Citizenship-by-Investment Program offers European citizenship and access to the Western markets. The Turkish passport provides visa-free or visa-on-arrival access to 111 des-tinations around the world. For a real
                        estate investment of USD 250,000, passports can be ac-quired in six to nine months.
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

export default DirectCitizenship;
