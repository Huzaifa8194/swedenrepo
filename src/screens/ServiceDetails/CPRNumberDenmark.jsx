import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/doctor-identification-card.png';
import { imageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';



import Header from '../../components/Header_New/Header';



const CPRNumberDenmark = () => {
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
      <Banner_Page title={`CPR NUMBER DENMARK`} />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-pl-2">
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CPR NUMBER
                  </span>
                  <h2>
                    <strong>Danish ID Number</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    CPR (Centrale Personregister) number is unique to a person and is used as an ID in Denmark. A CPR number facilitates accurate linkage between all Danish national registers among all other things. Your CPR number consists of ten
                    digits. The primary six digits are your date of birth and the last four are your unique identification number. The last digit of your CPR number indicates your sex. If it’s an odd digit you’re male, and if it’s a fair digit you’re
                    female.
                  </p>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CPR NUMBER REQUIREMENT
                    </span>
                    <h2>
                      <strong>Why & When?</strong>
                    </h2>

                    <p className=" tw-text-gray tw-font-medium">WHY?</p>
                    <p className=" tw-text-gray">
                      Residents of Denmark are legally required to possess a CPR number. You may also notice that your CPR number grants you access to many services in Denmark. You may need it to open a checking account, get a Danish sign, borrow
                      books at the library, cast off insurance and so on.
                    </p>

                    <p className=" tw-text-gray tw-font-medium">WHYWHEN?</p>
                    <p className=" tw-text-gray">Non-EU/EEA citizens who intend to stay in Denmark for more than three months are required to register with the Danish Civil Registration System on arrival.</p>
                    <p className=" tw-text-gray">
                      Nordic citizens, citizens of EU and EEA countries and Switzerland are required to register with the Danish Civil Registration System and obtain a CPR number within six months of their arrival in Denmark.
                    </p>
                  </div>
                  <div>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-10 tw-mx-auto">
                            <motion.img animate={imageVariants} className=" tw-w-full" src={banner} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> HOW TO GET
                        </span>
                        <h2>
                          <strong>A CPR Number?</strong>
                        </h2>
                        <p className=" tw-text-gray">
                          To obtain a CPR number you must have an address in Denmark, also present a range of documents counting on your current civil status (see below). Please note that if your documents aren’t in Danish, Norwegian, Swedish,
                          English or German, you must bring an authorized translation of all these documents.
                        </p>
                
                        
                      </div>
                    </div>

                    <ul className=" tw-p-0 tw-pt-4">
                    <p className=" tw-text-gray tw-font-medium">At Citizens’ Services you’ll be asked for:</p>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          Your Danish residence and legal document (non-EU/EEA citizens), or certificate of registration (for EU/EEA and Swiss citizens). Nordic citizens must bring proof of their Nordic personal positive identification, e.g. your
                          passport.
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">In case, if you’re married, your marriage certificate or a licensed copy of it.</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">In case, if you have got children, your child/children’s birth certificate(s).</p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">In case, If you’re divorced your divorce certificate.</p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">In case, if you’re a widow/widower, the death certificate of your spouse.</p>
                      </li>
                    </ul>
                    <div></div>
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

export default CPRNumberDenmark;
