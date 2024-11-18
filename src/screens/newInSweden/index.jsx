import React, { useEffect, useState } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import mobile from '../../assets/images/business-person-opening-bank-account.png';
import mobile2 from '../../assets/images/family-doctor-consultation.png';
import mobile3 from '../../assets/images/girl-purchased-car-insurance.png';
import mobile4 from '../../assets/images/family-purchasing-new-home.png';
import mobile5 from '../../assets/images/writing_image.png';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"


import Header from '../../components/Header_New/Header';


const New_In_sweden = () => {
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
      title: ' Citizenship       ',
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

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomSpace = document.documentElement.offsetHeight - (window.scrollY + window.innerHeight);
      setIsSticky(window.scrollY > 1100 && bottomSpace > 685);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Banner_Page 
        highlightText= {"New in Sweden"}
        regularText= {"Starting fresh in Sweden? We’re here to make your transition smoother. From settling in to navigating local systems, we’ve got you covered. Embrace your new life with confidence and ease."}
        backgroundImage={homeBgImage} 
      />


   

      <div className=" ">
        <section className=" ">
          <div className=" ">
            <div className="row g-4">
              <div className="col-md-9 tw-py-20 tw-bg-white tw-text-justify">
                <div className="   tw-pl-[11.5%] tw-pr-[3.5%]">
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>SOCIAL SECURITY NUMBER
                  </span>

                  <h2>
                    <strong>Personnummer</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    If you are new in Sweden then the first thing you must to do is to register yourself with swedish tax authority ‘Skatteverket’ to get your social security number also called as personal identity number or personnummer. As an
                    EU/EEA-citizen you are entitled to live, work and study in Sweden with or without a personnummer.
                  </p>
                  <p className=" tw-text-gray">It is a 12-digit number issued by Skatteverket to the persons registered in Sweden when they are convinced that you can support yourself and your family during the first year of your stay.</p>
                  <p className=" tw-text-gray">
                    Personnummer is not only required to be a part of the social security and health care systems in Sweden, which is otherwise quite expensive to arrange through private insurance companies, but is often used as identification proof
                    at all government offices, banks, insurances, subscriptions, collection of postal items at the post office etc.
                  </p>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>TAKE
                    </span>

                    <h2>
                      <strong>All These Into Consideration</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Employment contract(s),</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Proof of savings ex. Bank statement.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Number of members in the family</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Place of residence(must be in Sweden). You can NOT apply for a personnummer while still living abroad. Neither is a holiday address enough. You must have a residential address in Sweden.</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">You need to go in person (all the persons in the family) to an office of Skatteverket to apply for a personnummer.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">A legal ID-certificate, preferably a passport for every person applying.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>IDENTIFICATION CARD
                    </span>

                    <h2>
                      <strong>Swedish ID Card</strong>
                    </h2>

                    <p className=" tw-text-gray">Once you have received your Social Security number, you need to book an appointment with Swedish tax authority-Skatteverket to apply for a Swedish ID card.</p>
                    <p className=" tw-text-gray">
                      Anyone who is at least 13 years old and registered for population purposes in Sweden may apply to the Swedish Tax Agency for Swedish ID card. You must be able to identify yourself, in other words prove who you are, with approved
                      ID documentation or via an attester.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>OPENING OF A
                    </span>

                    <h2>
                      <strong>Bank Account</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      <strong>General requirements:</strong>
                    </p>

                    <p className=" tw-text-gray">In order to open a bank account, you must always be able to identify yourself.</p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <div>
                          <p className=" m-0 tw-text-gray">
                            You can identify yourself with a valid Swedish identification document, such as a passport, a national identity card or a BankID. You can also identify yourself with a Swedish driving license.
                          </p>
                        </div>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div className="">
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <div>
                          <p className=" m-0 tw-text-gray">
                            If you do not have Swedish identification documents, you can identify yourself with a valid foreign passport or other photo identification document that clearly shows your citizenship and is issued by an authority or some
                            other authorised issuer. Note that the bank may request that you also present other documents.
                          </p>
                        </div>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <div>
                          <p className=" m-0 tw-text-gray">If you do not have any valid identity documents, you must be able to prove who you are and your citizenship by means of other documents issued by a competent authority.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>OPENING OF A
                    </span>

                    <h2>
                      <strong>Bank Account</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      <strong>Specific requirements:</strong>
                    </p>

                    <p className=" tw-text-gray">If you are a foreign student and willing to open a bank account, you must also be able to identify yourself like all others. In addition, you need</p>

                    <div className="row">
                      <div className=" col-md-5">
                        <img src={mobile} className="" alt="" />
                      </div>
                      <div className=" col-md-7">
                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">A residence permit or a visa (does not apply to EU citizens).</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">An admission decision confirmation from your university, showing the duration of your studies.</p>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-12">
                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">The bank is not satisfied with the identity document submitted.</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">The bank determines that the reason given by you to open an account is inadequate.</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">The bank, by opening an account, would be in breach of a legal regulation or directive.</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">You have previously acted dishonestly towards the bank.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>BEFORE
                    </span>

                    <h2>
                      <strong>Visiting A Bank …</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">You must be able to understand the bank’s questions as well as answer them.</p>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">You must also be able to understand the information that the bank gives you.</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">In case you need someone to translate for you then you should bring such a person with you while visiting the bank.</p>
                      </li>

                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">The bank will ask you about the source of income.</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Your account and other bank services must not be used by anyone else unless an agreement for this is held with the bank.</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">The bank may ask you additional questions or stipulate other requirements.</p>
                      </li>
                    </ul>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>HOW TO GET A
                    </span>

                    <h2>
                      <strong> Driving License</strong>
                    </h2>

                    <div className="row">
                      <div className=" col-md-5">
                        <img src={mobile3} className="" alt="" />
                      </div>
                      <div className=" col-md-7">
                        <p className=" m-0 tw-text-gray">
                          In case you have a driving license issued by any EU country then it is valid throughout your stay in Sweden. You can even exchange your driving license with a Swedish license if you have permanent residence(PR).
                        </p>

                        <p className=" m-0 tw-text-gray">
                          A driving license which is issued by any non-EEA country (excluding Switzerland and Japan) is valid for maximum one year in Sweden. It cannot be exchanged with a Swedish license. So if you want to continue driving in Sweden
                          you must avail a swedish driving licence. For which you will have to complete the risk education, theoritical and practical driving exam.
                        </p>
                      </div>
                    </div>
                    <p className=" tw-text-gray tw-pt-6">
                      <strong>For more details, please visit:</strong> <Link to={'https://www.transportstyrelsen.se/en/road/Driving-licences/'}>https://www.transportstyrelsen.se/en/road/Driving-licences/</Link>
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    {/* <span>BEFORE</span> */}

                    <h2>
                      <strong>Steps To Get A License</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Apply for a learning permit</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Start your driving practice</p>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Study the theory of driving</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Take the risk training – riskutbildning</p>
                      </li>

                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Book a time for a driving test.</p>
                      </li>
                    </ul>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>LOOKING
                    </span>

                    <h2>
                      <strong>For Work In Sweden</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      {' '}
                      <Link to={''}>The Swedish Public Employment Service</Link> (Arbetsförmedlingen) offers support to people looking for work. You can register either online using your Bank-ID or by personally visiting the nearest
                      Arbetsförmedlingen office. Apart from arbetrsförmedlingen, there are many other privately run job websites like LinkedIn, Indeed, etc. commonly used to find a job in Sweden. These websites usually include job listings and
                      functions where you can upload your CV.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>SWEDISH EDUCATION SYSTEM
                    </span>

                    <h2>
                      <strong>School Admissions</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Swedish preschools emphasises the importance of play in child’s developement. There is a great focus on basic values and individual needs such as playing together, tolerance and being considerate for others. Preschool is
                      provided for children aged 1 to 5 years.
                    </p>

                    <p className=" tw-text-gray">
                      The year your child turns 6, he or she can participate in a non-compulsory preschool class (sexårsverksamhet) designed to help children meet future classmates and prepare for primary school without the stress of heavy studies or
                      homework. Swedish compulsory schooling is divided ino four stages: förskoleklass (‘preschool year’ or year 0), lågstadiet (years 1–3), mellanstadiet (years 4–6) and högstadiet (years 7–9).
                    </p>

                    <p className=" tw-text-gray">
                      From the ages of 7 to 16, all children in Sweden are required to attend the compulsory school (grundskola), where they are taught a core group of basic subjects. Families of children between ages six and thirteen are also
                      offered out-of-school care before and after school hours called fritids.
                    </p>

                    <p className=" tw-text-gray">
                      Although preschools and after-school care are paid services, but from the age of 6 years all schooling in Sweden is free of charge and one hot meal during the day is also included. However if you want your child to study in
                      private schools then private and international schools do exist in sweden and there is usually a fee for such schools.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>PARENTAL
                    </span>

                    <h2>
                      <strong>Allowance</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Parental benefit/allowance is the money you receive to be able to be at home with your child instead of working, seeking work, or studying after childbirth. Both the parents are granted 480 days of leave per child in total(240
                      days each). 390 of these days are income-based and 90 days are at the minimum level. If you were working in Sweden during the pregnancy or at the time of childbirth, then you might get up to 80% of your salary as parental
                      allowance otherwise a fixed minimum amount decided by the government will be paid. It is not your employer who bears the cost of your parent benefit but it is the Swedish Social Insurance Agency (Försäkringskassan) who pays it.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>MOTHER AND CHILD CARE
                    </span>

                    <h2>
                      <strong>Maternity Clinics</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      The maternity clinic (barnmorskemottagningen) is primary health care facility for pregnant women which are responsible for women’s health care throughout the pregnancy and for child’s health care before, during and after birth.
                      Visits to the government maternity clinics are free, but not in case of private care.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>CHILD
                    </span>

                    <h2>
                      <strong>Health Care Centre</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      At the child health centre or barnavårdscentralen (BVC), you can get tips about your child’s development, breastfeeding, food and illnesses. When you come home after childbirth, you can contact the child health centre to make an
                      appointment for a first meeting. The first meeting is often held at home. At the meeting, the nurse tells you about the child health centre and looks to see how your baby is doing.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>CHILD
                    </span>

                    <h2>
                      <strong>Care Allowance (Barnbidrag)</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Children who are born in Sweden or started living in Sweden before their first birthday are entitled to receive child allowance starting from one month after their birth. The allowance is paid to both parents until the child
                      turns 16.
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>REGISTER
                    </span>

                    <h2>
                      <strong>With Försäkringskassan</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      You need to register with Försäkringskassan (the Swedish Social Insurance Agency) to qualify for various benefits for eg. child care allowance, unemployment benefit, parental benefit, etc. Read more at www.forsakringskassan.se
                    </p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>HEALTH CARE
                    </span>

                    <h2>
                      <strong>Health Centre</strong>
                    </h2>

                    <div className="row tw-items-center">
                      <div className="col-md-5">
                        <img src={mobile2} alt="" />
                      </div>
                      <div className="col-md-7">
                        <p className=" tw-text-gray">
                          You can visit your local health centre – vårdcentral. These centres provide a starting point for most medical treatments in Sweden.The staff can help you with health related matters and write referrals – remisser, which you
                          need in order to see a specialist.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>COSTS
                    </span>

                    <h2>
                      <strong>And Fees</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      The costs and fees for visiting a vårdcentral vary from county to county. But the costs of a visit is usually between 100 – 300 SEK and normally free for everyone under 20. Don’t forget to cancel an appointment if you don’t need
                      it, as you will otherwise have to pay the full costs of the defaulted visit.
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>COSTS
                    </span>

                    <h2>
                      <strong>Is Covered?</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Anyone, registered as resident in Sweden, is entitled to free dental care up to and including the 31 of December of the year you turn 23. Adults on the other hand, pay a large part of their dental care costs themselves, starting
                      on the 1 January of the year they turn 23.
                    </p>

                    <p className=" tw-text-gray">For asylum seekers and undocumented immigrants: you have the right to receive dental care free of charge until your 18th birthday.</p>
                    <p className=" tw-text-gray">You are, as an adult, entitled to a dental care grant of 300 or 600 SEK a year. You can save the grant for two years and use it on one occasion, but you can’t save more than two grants at the time.</p>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>WHERE DO
                    </span>

                    <h2>
                      <strong>I Find A Dentist?</strong>
                    </h2>

                    <p className=" tw-text-gray">You will get a list with all the dentists affiliated with the public dental service – Folktandvården.</p>
                  </div>

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>LANGUAGE
                    </span>

                    <h2>
                      <strong>Courses</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      <strong>Learn Swedish in Sweden</strong>
                    </p>

                    <div className="row">
                      <div className=" col-md-5">
                        <img src={mobile5} className="" alt="" />
                      </div>
                      <div className=" col-md-7">
                        <p className=" tw-text-gray">Depending on the location of your stay, there are different options for learning Swedish while in the country. More information at: www.sweden.se.</p>

                        <p className=" tw-text-gray">Folkuniversitetet offers Swedish courses at different levels.</p>
                        <p className=" tw-text-gray">Study associations also offer language courses and a wide range of other courses. See a list of study associations.</p>
                        <p className=" tw-text-gray">
                          SFI-courses (Swedish for immigrants). Once you have become a resident in Sweden and have been issued a personal identity number (personnummer) you can contact your local municipality for information about
                        </p>
                      </div>

                      <div className="col-md-12">
                        <p className=" tw-text-gray">
                          Swedish lessons for immigrants (SFI). SFI is basic training in the Swedish language for adults who do not have Swedish as their first language. You can study SFI full-time or part-time. The training is free of charge.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>UNEMPLOYMENT
                    </span>

                    <h2>
                      <strong>Insurance</strong>
                    </h2>

                    <p className=" tw-text-gray">Payouts of unemployment insurance take two forms, a basic benefit or an income-related benefit. Registered yourself for A-Kassa as soon you start your work.</p>

                    <p className=" tw-text-gray">
                      Unemployment insurance is not a part of the social insurance system in Sweden. Unemployment insurance is connected closely to the trade unions but is legally independent. When you start working in Sweden, investigate which
                      unemployment insurance fund (widely known as A-Kassa) is available.
                    </p>

                    <p className=" tw-text-gray">
                      In order to receive an income-based benefit, you must have been a member of a voluntary unemployment insurance fund (A-kassa) for 12 months and have worked (been employed) for at least six months. In addition, some trade unions
                      offer additional insurance against loss of income.
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>RECOGNITION OF
                    </span>

                    <h2>
                      <strong>Higher Education Qualifications</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      The European Commission has devised a system known as ECTS (European Credit Transfer System) . It allows for the transfer of higher education credits between European countries. The Swedish Council for Higher Education (UHR)
                      evaluates foreign qualifications in order to provide support for people looking for work in Sweden, people who wish to continue studying, or for employers who wish to employ someone with foreign qualifications.
                    </p>

                    <p className=" tw-text-gray tw-font-medium">
                      Figuring out the responsibilities of the different authorities isn’t all that easy. Who is responsible for what? Whom should you turn to with your questions, applications and concerns?
                    </p>

                    <p className=" tw-text-gray">This guide gives you a brief overview of the different authorities and their main responsibilities.</p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Migrationsverket (Migration Agency)</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Skatteverket (Tax Agency)</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Arbetsförmedlingen (Public Employment Service)</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Försäkringskassan (Social Insurance Agency)</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Skolverket (National Agency for Education)</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Jordbruksverket (Swedish Board of Agriculture)</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Tullverket (Swedish Customs)</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Transportstyrelsen (Transport Agency) & Trafikverket (Transport Administration)</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Länsstyrelserna (the County administrative boards)</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">Landstingen (County councils)</p>
                      </li>
                    </ul>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>MIGRATIONSVERKET
                      </span>

                      <h2>
                        <strong>(Migration Agency)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Migrationsverket (Migration Agency) is the authority to turn to if you want to visit, live in or seek asylum in Sweden, or if you want to become a Swedish citizen. Migrationsverket is also responsible for the settlement of
                        certain new arrivals and decides on compensation to municipalities and counties.
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>SKATTEVERKET
                      </span>

                      <h2>
                        <strong>(Tax Agency)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Skatteverket (The Tax Agency) is in charge of tax matters but is also responsible for Sweden’s population register. Skatteverket does your folkbokföring (registration), You can als apply for a Swedish ID card
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>ARBETSFÖRMEDLINGEN
                      </span>

                      <h2>
                        <strong>(Public Employment Service)</strong>
                      </h2>

                      <p className=" tw-text-gray">Arbetsförmedlingen (the Public Employment Service) is mainly responsible for labor related issues.</p>
                      <p className=" tw-text-gray tw-font-semibold">Arbetsförmedlingen has three main services for Newly arrived people:</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Nystartsjobb</p>
                        </li>
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Instegsjobb</p>
                        </li>
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Etableringspaket(for peple covered by the law 2010: 197)</p>
                        </li>
                      </ul>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>FÖRSÄKRINGSKASSAN
                      </span>

                      <h2>
                        <strong>(Social Insurance Agency)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Försäkringskassan (the social insurance Agency) is in charge for the social insurance in Sweden and their main task is to ensure you get the benefits and allowances you are entitled to. The social insurance covers everyone who
                        lives and works in Sweden.
                      </p>
                      <p className=" tw-text-gray">
                        Försäkringskassan is not always the determining authority (the one taking the actual decision whether or not you are entitled to a benefit or allowance), but is usually the one who pays out the benefits and allowances.
                      </p>
                      <p className=" tw-text-gray tw-font-semibold">Newbie relevant benefits and allowances (among many):</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Etableringsersättning(introduction supplement) Information in Swedish, English, Arabic, Dari, Tingrinja, Somali)</p>
                        </li>
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Etableringstillägg(financial supplement that can be added to the introduction supplement if you have children) Information in Swedish</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Bostadsersättning(housing allowance)</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">Föräldraförsäkring(parental leave)</p>
                        </li>
                      </ul>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>SKOLVERKET
                      </span>

                      <h2>
                        <strong>(National Agency For Education)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Skolverket (National Agency for Education) is the central authority for education in Sweden. They offer an English- language guide to the Swedish school system. They also process applications for teachers with foreign
                        qualifications that wish to work in Sweden.
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>JORDBRUKSVERKET
                      </span>

                      <h2>
                        <strong>(Board Of Agriculture)</strong>
                      </h2>

                      <p className=" tw-text-gray">Jordbruksverket is in charge of agricultural and horticultural matters in Sweden. They are the authority to turn to if you want to bring your dog or cat to Sweden.</p>
                    </div>

                    <div className=" tw-pt-6">
                      <span>TULLVERKET</span>
                      <h2>
                        <strong>(Customs)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Tullverket (Customs) is charge of the flows of goods in and out of Sweden. Check with Tullverket when bringing or shipping goods in and out of Sweden. They have a guide in English especially for Newbies.
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>TRANSPORTSTYRELSEN (TRANSPORT AGENCY)
                      </span>

                      <h2>
                        <strong>& Trafikverket (Transport Administration)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Transportstyrelsen and Trafikverket are in charge of everything concerning driving licenses as well as other transport- and traffic-related rules and regulations in Sweden. If you want to find out more visit their common
                        website – körkortsportalen –
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>KOMMUNERNA
                      </span>

                      <h2>
                        <strong>(The Municipalities)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Kommunerna (the municipalities) fill an important and complex task in Sweden. They are responsible for the SFI teaching, Komvux (adult education) and samhällsorientering (social orientation). Yet, they are also responsible for
                        the receiving and housing of Newbies covered by the law (2000: 1383), and shall, if necessary, provide practical assistance in connection with the settlement.
                      </p>

                      <p className=" tw-text-gray">
                        The municipalities are furthermore responsible for the financial support of Newbies who are not covered by law (2010:197). You belong to the municipality where you made your registration (folkbokföring).
                      </p>

                      <p className=" tw-text-gray tw-font-semibold">Your municipality is in charge for:</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">SFI(Swedish teaching)</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Komvux(Adult education)</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Samhällsorientering(Social Orientation)</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Education (child care, preschool, school etc.)</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Financial support for Newbies who aren’t covered by the law (2010:197)</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Receiving and Housing of Newbies (covered by the law 200: 1383)</p>
                        </li>
                      </ul>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>LÄNSSTYRELSERNA
                      </span>

                      <h2>
                        <strong>(The County Administrative Boards)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Länsstyrelserna (the county administrative boards) represent the government in the county. Their task is to coordinate and supervise the work of the different actors and authorities and thereby ensure that national goals and
                        objects are achieved. It is Länsstyrelserna’s task to ensure that the municipalities are prepared to receive Newbies, but also help the municipalities coordinate the SFI teaching and the society orientation.
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>LANDSTINGEN
                      </span>

                      <h2>
                        <strong>(The County Councils)</strong>
                      </h2>

                      <p className=" tw-pt-8 tw-text-gray">Landstingen (the county councils) are in charge of everything concerning healthcare matters in Sweden.</p>
                      <p className="  tw-text-gray tw-pt-6   tw-font-semibold">Länsstyrelserna (The County administrative boards)</p>

                      <p className=" tw-text-gray">
                        Länsstyrelserna (the county administrative boards) represent the government in the county. Their task is to coordinate and supervise the work of the different actors and authorities and thereby ensure that national goals and
                        objects are achieved. It is Länsstyrelserna’s task to ensure that the municipalities are prepared to receive Newbies, but also help the municipalities coordinate the SFI teaching and the society orientation.
                      </p>
                      <p className="  tw-text-gray   tw-font-semibold">Länsstyrelserna (The County administrative boards)</p>
                    </div>

                    <div>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>ACCOMODATION
                      </span>

                      <h2>
                        <strong>Finding Home</strong>
                      </h2>

                      <div className="row tw-items-center">
                        <div className="col-md-6">
                          <img src={mobile4} alt="" />
                        </div>
                        <div className="col-md-6">
                          <p className=" tw-text-gray">
                            Perhaps you arranged temporary lodging or rented a room before arriving in Sweden and may want to move as temporary arrangements come to an end. Looking for your own place to stay can be a challenging task in larger cities
                            such as Stockholm, Gothenburg and Malmö, where available housing remains relatively scarce.
                          </p>
                          <p className=" tw-text-gray">
                            You can rent ‘first-hand’ or ‘second-hand’ in Sweden. First-hand (första hand) means you sign an agreement with the owner of the building, while second-hand (andra hand) means you sign an agreement with someone who owns
                            the flat or has the first-hand contract on the flat.
                          </p>
                        </div>

                        <p className=" tw-text-gray">
                          To get a first-hand contract, you need to register to be put on the municipal waiting list (bostadskö) and it can take anywhere from a few days in some municipalities to up to ten years for central locations in cities like
                          Stockholm for a first-hand contract to become available.
                        </p>
                        <p className=" tw-text-gray">
                          As a new resident, you’ll probably be renting a flat from someone who sublets in a second-hand arrangement. It is extremely important to make sure that the tenant co-operation board of the building (bostadsrättsföreningen)
                          or the landlord has signed off on second-hand leasing. If you rent a flat from a subletter who doesn’t have permission, you run the risk of being evicted (to make a long story short).
                        </p>

                        <p className=" tw-text-gray">Useful websites for finding flats in cities around the country are</p>
                      </div>
                    </div>

                    <div className=" tw-pt-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>USEFULL
                      </span>

                      <h2>
                        <strong>LINKS</strong>
                      </h2>
                      <ul className=" tw-p-0">
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Personnummer & ID card</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.skatteverket.se
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Application for Swedish Language</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              (https://malmo.se/…/Sfi—svenska…/Sfi-intensivkurs.html)
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Apartments Search</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.boplats.se
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Registration for Job Search</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.arbetsförmedlingen.se
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Business Registration</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.verksamt.se
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Driving Test</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://www.trafikverket.se/korkort/boka-prov/
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Change you EU B-Driving License</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://transportstyrelsen.se/…/ansokan-om-utbyte-av…/
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Change your Taxi License</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://transportstyrelsen.se/…/taxi…/
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Buy/Sell Everything</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.blocket.se
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Buy Sell House</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.hemnet.se
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Furniture</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.ikea.se
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Residence Permit</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.migrationsverket.se
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Foreign Educational Document evaluation</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.Uhr.se
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Applying for Study in Sweden-English</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              www.universityadmisisons.se
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Apply for study in Sweden-Swedish</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://www.antagning.se/se/start https://www.utbyten.se/
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">PHD Search</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://www.euraxess.se/
                            </Link>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Apply for Children’s Playgroup and School</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://malmo.se/…/Utbildning-och-forskola/Forskola.html
                            </Link>
                          </div>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://malmo.se/…/Utbildni…/Utbildningar-for-vuxna.html
                            </Link>
                          </div>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">Social Rights</p>
                          <div className=" tw-py-2">
                            <Link className="  tw-font-normal" to={''}>
                              https://www.forsakringskassan.se
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3  tw-pt-16   tw-bg-[#F5FAFF]   " style={{ position: 'sticky', top: '300px' }}>
                <div className={`sm:tw-pr-20 tw-pr-0 ${isSticky ? ' md:tw-fixed tw-flex-initial  tw-bottom-0  md:tw-w-[30%] tw-w-full' : 'tw-relative'} `}>
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

export default New_In_sweden;
