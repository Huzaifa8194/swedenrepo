import React, { useEffect, useState } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/startup-incubation.png';
import banner2 from '../../assets/images/study-material.png';
import banner3 from '../../assets/images/educational-books.png';
import flag from '../../assets/images/Denmark-1.png';
import flag1 from '../../assets/images/icons8-finland-80.png';
import flag2 from '../../assets/images/Norway.png';
import flag3 from '../../assets/images/icons8-czech-republic-80.png';
import flag4 from '../../assets/images/great-britain.png';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";

import Header from '../../components/Header_New/Header';


const StudyInEu = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const { id } = useParams();

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

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Study in EU")}
    regularText={t("Unlock academic opportunities across Europe. Our team assists you in finding the right path for your educational journey.")}
    backgroundImage={homeBgImage} 
/>

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-pl-3">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={flag} alt="" />
                    </div>
                    <div className="col-md-9">
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDY
                      </span>

                      <h2>
                        <strong>In Sweden</strong>
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 tw-mx-auto">
                      <img src={banner} alt="" />
                    </div>
                  </div>
                  <p className=" tw-text-gray">
                    If you are thinking about studying abroad, then visit Sweden. You probably want to know why Sweden is considered as a great destination. Let me notify you, Sweden has a fascinating history and culture, global businesses, delicious
                    food, and welcoming people; and is also well known for its world-class academic opportunities that rank among the top 100 in the world.
                  </p>

                  <p className=" tw-text-gray">Following are 6 reasons why Sweden is considered an ideal place to study:</p>

                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> VISION
                    </span>
                    <h2>
                      <strong>Enhancement Of One’s Mind</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Study in Sweden let you think independently and critically. It will enhance your ability to question the state of affairs by accessing information, seeking new perspectives and coming up with well-informed judgments. Because of
                      the informal and non-hierarchical nature of Swedish society, you will be able to think creatively. Where everyone is urged to bestow their ideas and opinions. This independence of mind and letting everyone’s voice heard are the
                      reasons why Sweden ranks among the world’s most innovative nations.
                    </p>
                  </div>
                  <div>
                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> RICH
                      </span>
                      <h2>
                        <strong>Swedish History</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Sweden has contributed a lot to the history books, and many museums allow free entrance on a daily basis or on specially marked days throughout the year. Swedish History Museum, the largest museum in Sweden; where millions of
                        visitors and students come to see Sweden’s foremost gold and silver treasures, and incomparable medieval art.
                      </p>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> LANGUAGE
                      </span>
                      <h2>
                        <strong>Proficiency</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Using Swedish, a rich and beautiful native language; in 2017, Swedes ranked second in the world for skills in English as an official language. As the world is getting more independent and businesses seek to extend the national
                        and linguistic boundaries, Sweden offers a marvelous location to learn and develop your English language skills. But knowing and trying to learn a little bit of Swedish language will make much easier to open your mind to your
                        new cultural surroundings. Also, Sweden is a car-free country with an extensive network of buses, trains, subways, trams, boats, planes, and many more that can take you anywhere you want to go.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> MALMÖ
                      </span>

                      <h2>
                        <strong>A Coastal City</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Malmö is among the top cities in Sweden having a free business environment and also a good place to live with outrageous rankings in housing, healthcare, and environmental quality. The University of Malmo founded in 1998,
                        attracts above 15,000 students every year. It’s not only a global city but also a commercial hub in the South of Sweden, as part of the Öresund region. The city has attracted a wide variety of companies in the technology
                        sector (for example bio, medical, environmental, information and communication), as well as digital media, transports, financial services, business, leisure, entertainment, and constructions. And, most importantly, the cost of
                        an apartment in Malmo is in the 139th place of all 248 Teleport cities.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDYING
                      </span>

                      <h2>
                        <strong>And Working In Sweden</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        International students can comfortably get Sweden work permit. Unlike other countries, there’s no legal limit to the number of hours international students can work during their studies. After the completion of studies, you
                        can apply to extend your residence permit to look for work for up to six months. (But for that learning Swedish is necessary – it’s often a job’s requirement.)
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> EU
                      </span>

                      <h2>
                        <strong>Citizen’s Right</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Unless you are a citizen of a neighboring Nordic country, every foreigner will need to contemplate the different types of Swedish visas. When applying for a Swedish visa, you are not allowed to be in the country. This largely
                        related to non-EU/EEA citizens and citizens of Sweden; because citizens with EU/EEA family visa Sweden have the rights of residence in Sweden and therefore can shift to the country with or without a job. However, they will
                        need to start the Swedish visa application process if they plan to continue their stay in a country for a long time.
                      </p>
                      <p className=" tw-text-gray">
                        If you are thinking about relocation Sweden; want to study abroad and also interesting in traveling, then Swedes are waiting for you. They are very friendly and like traveling very much. They are habitually open to know about
                        a new culture and also interested in hearing about international experiences.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-9 tw-mx-auto">
                        <img src={banner2} alt="" />
                      </div>
                    </div>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> VISA
                    </span>

                    <h2>
                      <strong>Requirements For Students</strong>
                    </h2>

                    <p className=" tw-text-gray">Students from the EU/EEA can study in Sweden without any visa requirements. If you are from outside the EU/EEA, you may need to obtain a student visa.</p>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> JOB MARKET
                    </span>
                    <h2>
                      <strong>For Graduates</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Sweden is home to several internationally successful corporations – think Volvo, IKEA or H&M – but also to some of the most exciting startups of recent years – think Skype or Spotify. The in-ternationality of such employers as
                      well as the high proficiency of English among Swedes make it fairly easy for qualified international graduates to get the foot in the door of the Swedish job market, even when their knowledge of Swedish is limited. Sweden’s
                      government has also put an effort into decreasing red tape for foreign nationals looking to join the local workforce.
                    </p>

                    <div className=" row tw-pt-5">
                      <div className="col-md-6">
                        <h2>
                          <strong>Bachelor Programs</strong>
                        </h2>

                        <p className="  tw-text-gray">
                          Application for <b>online first admission</b> of bachelor’s regarding different programs starts from <b>16th of October to 15th of January</b> every year. After enrolling, the classes start in August.
                        </p>

                        <p className="  tw-text-gray">
                          Application for <b>online second admission</b> of bachelor’s regarding different programs starts from <b>1st of June to 15th of August</b> of every year. The classes will start in January after enrolling.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h2>
                          <strong>Maters Programs</strong>
                        </h2>

                        <p className="  tw-text-gray">
                          Application for <b>online first admission</b> of bachelor’s regarding different programs starts from <b>16th of October to 15th of January</b> every year. After enrolling, the classes start in August.
                        </p>

                        <p className="  tw-text-gray">
                          Application for <b>online second admission</b> of bachelor’s regarding different programs starts from <b>1st of June to 15th of August</b> of every year. The classes will start in January after enrolling.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> LETTER OF
                      </span>
                      <h2>
                        <strong>English Proficiency</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        There are no requirements of the language test such as TOEF and IELTS for the students who have studied at the university with IT-Engineering-Medical background. Students from Pakistan and India with their Swedish
                        Kandidatexamen equivalent degree (Bachelors Hons) can provide letter of English proficiency from their Universities.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ENGLISH
                      </span>

                      <h2>
                        <strong>Requirement</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        There are no requirements of the language test such as TOEF and IELTS for the students who have studied at the university with IT-Engineering-Medical background. Students from Pakistan and India with their Swedish
                        Kandidatexamen equivalent degree (Bachelors Hons) can provide letter of English proficiency from their Universities.
                      </p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">IELTS score of 6.5 is required.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">TOEFL score of 4.5 in written test is required.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">English Language with Proficiency Certificate from Cambridge Michigan.</p>
                        </li>

                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Minimum score for Pearson is 47.</p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">
                        Use our <b>Student Assessment tool </b> to find out if you are eligible for admission in Sweden.
                      </p>

                      <div className="row tw-pt-4">
                        <div className="col-md-3">
                          <img src={flag} alt="" />
                        </div>
                        <div className="col-md-9">
                          <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                            {' '}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDY
                          </span>

                          <h2>
                            <strong>In Denmark</strong>
                          </h2>
                        </div>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FACTS AND FIGURES ABOUT
                        </span>

                        <h2>
                          <strong>Higher Education In Denmark</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          Denmark boasts an advanced educational system with many world-class institutions. At some 30 higher education institutions, you can find well over 500 English-taught study programmes to choose from. Like many other
                          countries, Denmark distinguishes between full research universities and more practice-oriented university colleges (elsewhere often known as “universities of applied sciences” or polytechnics). A locally special kind of
                          institution are the business academies, which offer practice-oriented associate’s and bachelor’s degrees in business-related fields.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> JOB MARKET
                        </span>

                        <h2>
                          <strong>For Graduates</strong>
                        </h2>

                        <p className=" tw-text-gray">In Denmark requirements vary from programme to programme. Here is what you need to know about how and when to apply.</p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ASSESSMENT OF
                        </span>

                        <h2>
                          <strong>Your Qualifications</strong>
                        </h2>

                        <p className=" tw-text-gray">Non-Danish citizens who do not have a Danish entrance examination are eligi-ble for admission if they have qualifications recognized as being comparable to Danish entrance qualifications.</p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                          FOR AN OFFICIAL ASSESSMENT OF
                        </span>

                        <h2>
                          <strong>Your Qualifications Visit Student Assessment Tool</strong>
                        </h2>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> GENERAL
                        </span>

                        <h2>
                          <strong>Admission Requirements</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          All higher education programmes in Denmark require a high standard of Eng-lish. Applicants to English-taught undergraduate and postgraduate programmes must, as a minimum, prove English proficiency comparable to ‘English B’
                          in the Danish upper secondary school (gymnasium). Some programmes require ‘Eng-lish A’, which is one level higher than ‘English B’.
                        </p>

                        <p className=" tw-text-gray">English language requirements</p>
                        <p className=" tw-text-gray">
                          To prove a satisfactory proficiency in English, the language tests TOEFL, IELTS and Cambridge ESOL examinations (CAE) are often used. The score equivalents are determined by the individual institution, so to be certain check
                          out their language requirements.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> BASED UPON A ROUGH AVERAGE OF PREVIOUS REQUIREMENTS
                        </span>

                        <h2>
                          <strong>Here Is An Estimate Of The Ranges You Can Expect</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          Applicants who are native English speakers must also submit proof of English proficiency equivalent to at least English B level in Denmark. Educational insti-tutions can offer a specially designed test for these applicants,
                          which can docu-ment the applicant’s English level.
                        </p>
                      </div>

                      <div className="row tw-pt-4">
                        <div className="col-md-3">
                          <img src={flag4} alt="" />
                        </div>
                        <div className="col-md-9">
                          <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                            {' '}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDY
                          </span>

                          <h2>
                            <strong>In United Kingdom</strong>
                          </h2>
                        </div>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> HOW TO
                        </span>

                        <h2>
                          <strong>Apply</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          In order to gain admission to an undergraduate program at a UK university, students need to apply between 1 September and 30 June in the year preceding the year which academic study is to commence. This must be done through
                          UCAS (The University and Colleges Admissions Services) which acts as the intermediator between universities and students.
                        </p>

                        <p className="  tw-text-gray">You will need to take an admission test and an interview if required by the course. So it will be advised for some early preparation</p>

                        <div className="row">
                          <div className="col-md-10 tw-mx-auto">
                            <img src={banner3} alt="" />
                          </div>
                        </div>

                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ENTRY
                        </span>

                        <h2>
                          <strong>Qualifications</strong>
                        </h2>

                        <p className=" tw-text-gray">As per the qualification guidelines provided by the UK National Agency, universities assess your application before offering a place on the course.</p>
                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">At least two subjects to be taken at A2. Sometimes grades are converted into UCAS Tariff points to compare the applicants</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">Many universities appreciate The Extended Project (EPQ) though it is not compulsory</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">Many universities appreciate The Extended Project (EPQ) though it is not compulsory</p>
                          </li>
                          <li className=" tw-flex t tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">SI-UK provides IELTS preparation classes so you can hit your target score. Sign up for the right IELTS course that suits your schedule.</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">A criminal record DBS check</p>
                          </li>
                          <li className=" tw-flex tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">A fitness to practice check as well as finance check</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">You will need to take an admission test and an interview if required by the course. So it will be advised for some early preparation</p>
                          </li>
                        </ul>
                      </div>

                      <div className="row tw-pt-4">
                        <div className="col-md-3">
                          <img src={flag3} alt="" />
                        </div>
                        <div className="col-md-9">
                          <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                            {' '}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDY
                          </span>

                          <h2>
                            <strong>In Czech Republic</strong>
                          </h2>
                        </div>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ADMISSION
                        </span>

                        <h2>
                          <strong>Requirements</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          The basic condition for entering studies is the successful completion of the previous level of study (certificate of graduation from a secondary school for Bachelor’s (3 years) and long-cycle Master’s degree programmes (5-6
                          years); Bachelor’s degree for a follow-up Master’s; Master’s degree for a Doctoral study programme).
                        </p>
                        <p className=" tw-text-gray">
                          If you want to study at university in the Czech Republic, you need to have your previous completed study recognized by the Czech recognition authority. Read more details about the process of recognition of your previous
                          studies
                        </p>
                        <p className=" tw-text-gray">
                          Besides certified copies of your educational qualifications, the minimum entry requirements usually include a completed and submitted application, proof of the admission procedure fee payment and compliance with the
                          conditions for the specific study programme (e.g. letter of motivation, letter of recommendation, portfolio, English proficiency test)
                        </p>
                      </div>

                      <div className="row tw-pt-4">
                        <div className="col-md-3">
                          <img src={flag2} alt="" />
                        </div>
                        <div className="col-md-9">
                          <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                            {' '}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDY
                          </span>

                          <h2>
                            <strong>In Norway</strong>
                          </h2>
                        </div>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> APPLICATION
                        </span>

                        <h2>
                          <strong>& Admission</strong>
                        </h2>

                        <p className=" tw-text-gray">Applications and admissions to higher education in Norway is handled by each institution, and the different institutions may have different requirements and deadlines.</p>
                        <p className=" tw-text-gray">
                          Make sure you obtain all necessary information about requirements, documenta-tion, and deadlines for the different study programmes and institutions. Below you will find the minimum requirements for admission to higher
                          education in Norway.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> DEGREE SEEKING STUDENTS
                        </span>

                        <h2>
                          <strong>Academic Requirements</strong>
                        </h2>

                        <p className=" tw-text-gray">Bachelor’s/ undergraduate studies</p>
                        <p className=" tw-text-gray">
                          Completion of secondary education at advanced level, equivalent to passing the ex-am at the end of Norwegian secondary school, is the general basic requirement for entry to Norwegian universities and university colleges set
                          by the Norwegian Agency for Quality Assurance in Education (NOKUT). For students from some countries at least one year of completed studies at the university level is required in addition.
                        </p>
                        <p className=" tw-text-gray">
                          Some study programmes have special admission requirements, usually related to specialist subjects or fields of study from secondary school. Please check with the institution for information about these special
                          qualifications.
                        </p>
                        <p className=" tw-text-gray">
                          Applicants for Masters programmes have normally obtained an undergraduate/Bachelor’s degree or equivalent of at least 3 years’ duration. The degree must include courses equal to at least 1 1/2 years of full-time studies in a
                          subject relevant to that of the programme applied for.
                        </p>
                        <p className=" tw-text-gray">
                          Please beware that for some countries the first (and sometimes the second) year of study at a foreign higher education institution will not be recognized as higher education in Norway (see above).
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> DEGREE SEEKING STUDENTS
                        </span>

                        <h2>
                          <strong>Language Requirements</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          For courses where the language of instruction is English all applicants should ex-pect to document their language skills according to the requirements set by the institutions. Beware that the requirements may vary from
                          institution to institution, and sometimes from study programme to study programme, and that different English tests and scores may be required by different institutions.
                        </p>
                        <p className=" tw-text-gray">For courses where the language of instruction is Norwegian, proficiency in the Norwegian language is required and should be documented.</p>
                        <p className=" tw-text-gray">Learn Norwegian outside Norway</p>
                        <p className=" tw-text-gray">Even though your study programme is taught in English a certain knowledge of the Norwegian language will help you both academically, but also socially.</p>
                      </div>

                      <div className="row tw-pt-4">
                        <div className="col-md-3">
                          <img src={flag1} alt="" />
                        </div>
                        <div className="col-md-9">
                          <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                            {' '}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDY
                          </span>

                          <h2>
                            <strong>In Finland</strong>
                          </h2>
                        </div>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> BACHELOR’S AND
                        </span>

                        <h2>
                          <strong>Master’s Admissions</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          Applying for higher education degree studies in Finland is done online at Studyin-fo.fi. That is also where you can search for the available English-taught degree programme options. There is no application fee, applying is
                          always free.
                        </p>
                        <p className=" tw-text-gray">
                          If you are a non-EU student and subject to tuition fees, you can usually apply for a scholarship from the university at the same time when you are applying for ad-mission. Check the fee and scholarship details with the
                          university you are applying to!
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> WHEN TO
                        </span>

                        <h2>
                          <strong>Apply</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          Applications for bachelor’s and master’s programmes are usually submitted at Studyinfo.fi between late November and mid-January, for studies starting in September. Some degree programmes can however have their application
                          periods outside this main application window. For example, some degree options may of-fer a January study start option. For these, applications would usually be open in September – or even earlier. It depends on the
                          university!
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> WHEN TO
                        </span>

                        <h2>
                          <strong>To Apply</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          When applying for bachelor’s programmes, you usually need to hold such school-leaving certificates that make you eligible to apply for higher education in your home country. You’ll need your upper secondary school
                          certificates, even if you have completed some higher education studies after that.
                        </p>
                        <p className=" tw-text-gray">For master’s level admissions, you need to have completed a university-level bachelor’s degree, or equivalent.</p>
                        <p className=" tw-text-gray">
                          The eligibility requirements may vary from one-degree programme to another, so remember to check the details with the university you are interested in. For example, if you are an eligible applicant, you may additionally be
                          required to complete an entrance exam or an interview.
                        </p>
                        <p className=" tw-text-gray">
                          If English is not your first language, you may need to demonstrate your English proficiency level. IELTS and TOEFL are the most accepted options, but many institutions also offer others. Check the English proficiency test
                          requirements and any possible exemption rules with the university you are applying to.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ADMISSION
                        </span>

                        <h2>
                          <strong>Results</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          After the application period and any entrance exams are over, the universities you have applied to will process your application and make a final admission decision. The admissions decision schedule is available in the
                          Studyinfo.fi programme description.
                        </p>
                        <p className=" tw-text-gray">
                          Once you have been accepted as a student, you will receive an official letter of ad-mission from the institution in question. Remember to follow the guidelines given by the university to confirm your study place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4  tw-pt-16   tw-bg-[#F5FAFF]  " style={{ position: 'sticky', top: '300px' }}>
                <div className={`tw-pr-28 ${isSticky ? ' md:tw-fixed tw-flex-initial  tw-bottom-0  md:tw-w-[30%] tw-w-full' : 'tw-relative'} `}>
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

export default StudyInEu;
