import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/psychological-problems-at-school.png';
import { motion } from 'framer-motion';
import { imageVariants } from '../../utils/motion';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"


import { useTranslation } from "react-i18next";



import Header from '../../components/Header_New/Header';


const ServiceDetails = () => {


  const { t} = useTranslation();

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
    highlightText={t("Asylum")}
    regularText={t("Seek safety and a fresh start in Sweden. Our comprehensive support helps guide you through the asylum process smoothly.")}
    backgroundImage={homeBgImage} 
/>


      <div className=" ">
        <section className=" ">
          <div className="container-fluid">
            <div className="">
              <div className="row g-4">
                <div className="col-md-8 tw-py-20 tw-bg-white tw-text-justify">
                  <div className="  md:tw-pl-32 tw-pl-3">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ASYLUM IN SWEDEN
                    </span>
                    <h2>
                      <strong>What We Offer</strong>
                    </h2>

                    <p className=" tw-text-gray">If you are an asylum seeker and need an expert to take care of your asylum process at the Swedish Migration Agency, we are here for you</p>
                    <p className=" tw-text-gray">WHY AN EXPERT?</p>
                    <p className=" tw-text-gray">It is a 12-digit number issued by Skatteverket to the persons registered in Sweden when they are convinced that you can support yourself and your family during the first year of your stay.</p>
                    <p className=" tw-text-gray">
                      Personnummer is not only required to be a part of the social security and health care systems in Sweden, which is otherwise quite expensive to arrange through private insurance companies, but is often used as identification
                      proof at all government offices, banks, insurances, subscriptions, collection of postal items at the post office etc.
                    </p>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ELIGIBILITY
                      </span>
                      <h2>
                        <strong>WHO CAN APPLY FOR ASYLUM?</strong>
                      </h2>

                      <p className=" tw-text-gray">You have to be in Sweden or on the Sweden’s border in order to apply for asylum. It’s not possible to apply for asylum before you arrive in Sweden or at a Swedish embassy in another country.</p>

                      <p className=" tw-text-gray">Asylum seeker’s application is examined individually and will be granted a residence permit only if one fulfills criteria of being a refugee.</p>
                      <p className=" tw-text-gray">According the UN Refugee Convention and Swedish law, a person can be considered as a refugee if the person is facing oppression due of any of the following reasons:</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Race</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Nationality (Language or Ethnic Group)</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Number of members in the family</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Religion</p>
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Political belief</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Gender</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Sexual orientation</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Membership of a particular social group</p>
                        </li>
                      </ul>

                      <p className="  tw-text-gray">
                        Sometime a group of people can be threatening to you as well, but this cannot be a sole reason for you to be granted a positive decision. You will be asked what can happen if you return to your country.
                      </p>
                      <p className="  tw-text-gray">If you are considered as a refugee, you get a residence permit for three years or 13 months.</p>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STEPS TO BE FOLLOWED
                      </span>
                      <h2>
                        <strong>HOW DO YOU APPLY FOR ASYLUM IN SWEDEN?</strong>
                      </h2>

                      <p className=" tw-text-gray">STEP 1: To be able to apply for asylum you must either be in Sweden, or on the border to the country.</p>
                      <p className=" tw-text-gray tw-py-2">
                        STEP 2: After you have registered your application, you will be called for an initial meeting at the Migration agency. During this meeting you will be given an opportunity to choose your representative/lawyer. You can then
                        choose us.
                      </p>
                      <p className=" tw-text-gray tw-py-2">
                        STEP 3: In case you choose us as your representative, we will then be contacted by the Migration Agency and asked to prove your claim. We will then schedule a call with you to know more about your situation.
                      </p>
                      <p className=" tw-text-gray tw-py-2  tw-font-medium">
                        As your representative, we will support you throughout the asylum process and act according to your interests. Our role becomes particularly important since you as an asylum seeker are not expected to have any knowledge of the
                        Swedish legal system and may find it difficult to clarify your grounds for asylum and refugee status on your own.
                      </p>
                      <p className=" tw-text-gray tw-py-2  ">And for that reason, it is really important that you have a knowledgeable person to help you throughout the process.</p>
                      <p className=" tw-text-gray tw-py-2  ">
                        We not only take care of appealing for your decision at the Migration Court and the Migration Court of Appeal but will also provide you with a fully integrated relocation solution for your reunification with your family as
                        well.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-md-6 tw-mx-auto">
                        <motion.img animate={imageVariants} className=" tw-w-full" src={banner} alt="" />
                      </div>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FAMILY REUNIFICATION
                      </span>
                      <h2>
                        <strong>Reunification For Refugees</strong>
                      </h2>

                      <p className=" tw-text-gray">Family reunification is a recognized reason for the immigration of family members to a country where one or more family members are already residing.</p>
                    </div>
                    <div>
                      <h2>
                        <strong>Who Have A Right To Family Reunification?</strong>
                      </h2>

                      <p className=" tw-text-gray">Your family can apply for residence permits to join you in Sweden if you have been granted:</p>

                      <ul className=" tw-p-0  tw-list-disc    tw-pt-4">
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">a permanent residence permit.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">a temporary residence permit as a refugee and have good chances of being granted a residence permit for a longer period</p>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray">
                            a temporary residence permit due to impediments to enforcement or particularly or exceptionally distressing circumstances, and have good chances of being granted a residence permit for a longer period.
                          </p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray tw-font-medium">For EU/EEA CITIZEN</p>
                      <p className=" tw-text-gray">
                        As a family member of an EU/EEA citizen exercising your right of free movement in Europe can get a visa through a facilitated process to travel with your family member or to join him/her in Sweden.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FAMILY REUNIFICATION
                      </span>
                      <h2>
                        <strong>In Case You Have A Temporary Residence Permit</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        At the time of applying for family reunification you must have a valid residence permit for the country which means, if your residence permit has expired and you have applied for its extension, then the Swedish Migration
                        Agency will first decide that whether you have the right to continue the residence permit or not. It isn’t enough for you to have the title of a temporary resident or having a previous valid residence permit.
                      </p>
                      <p className=" tw-text-gray">
                        Only you immediate family(your spouse, registered partner or cohabiting partner, and your children under the age of 18) can move to you if you have a temporary work permit. Only in exceptional cases it is possible to get a
                        residence permit for other family members.
                      </p>

                      <p className=" tw-text-gray">
                        One must fulfill maintainance requirement in order to apply for family reunification which means one should be able to financially support his/her family and also have a home of sufficient size and standard.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> OUR ROLE
                      </span>
                      <h2>
                        <strong>Who Have A Right To Family Reunification?</strong>
                      </h2>

                      <ul className=" tw-p-0   tw-list-decimal   tw-pt-4">
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">Assistance with residence permit application.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">Information on required documentation.</p>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray">Information on required Government fees to pay.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">Registration at the Migration Board.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">Follow up after registration.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">Booking of appointment at the Migration Board.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">accompanied visits to Migration Boad for biometrics.</p>
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
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;
