import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/credit-card.png';
import { imageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { useTranslation } from "react-i18next";

import Header from '../../components/Header_New/Header';



const PersonnumerSweden = () => {
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
      title: 'Golden Visa       ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Personnummer Sweden")}
    regularText={t("Get your unique Swedish identity number to unlock essential services. Let us simplify the registration process for you.")}
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
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> APPLYING FOR A
                  </span>

                  <h2>
                    <strong>SWEDISH SOCIAL SECURITY NUMBER (Personnummer)</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden to spot them with, among other authorities. It is easy to distinguish a person with their personnummer, it is unique for
                    everybody. The foundations for obtaining a Swedish social insurance number are constantly changing. This can be why we keep ourselves up to date and that we know exactly what you wish to emphasize in your application – From the
                    time you submit it until you’re finally approved. If you reside in Sweden without a social insurance number, it may be quite difficult. If you’re moving to Sweden for over a year, you’ll get a private number.If you are registered
                    in Sweden you will get a personnummer as your identity number.The social security number consists of six digits with your date of birth in addittion to four digits at th end. Your social security number remains same throughout
                    your life. There is a Coordination number for those who are not registered in Sweden.It needs a unique identification designation and is structured in the same format as a social security number (XXXXXX-XXXX) but where you add 60
                    on the person’s birthday.
                  </p>

                  <div className="row">
                    <div className="col-md-10 tw-mx-auto">
                      <motion.img animate={imageVariants} className=" tw-w-full" src={banner} alt="" />
                    </div>
                  </div>

                  <div>
                    <p className=" tw-text-gray">When a person turns 100 The hyphen which is usually a minus sign is replaced by a plus sign in the system to distinguish from a newborn. Hence, the personnummer doesnt contain any century figures.</p>
                  </div>
                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> BECOMING
                    </span>

                    <h2>
                      <strong>A Bank Customer</strong>
                    </h2>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> AN
                    </span>

                    <h2>
                      <strong>Identification</strong>
                    </h2>

                    <p className=" tw-text-gray">You must always be able to identify yourself.</p>
                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          You can identify yourself with a valid Swedish identification document, such as a passport, a national identity card or a BankID. You can also identify yourself with a Swedish driving license.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                          If you do not have Swedish identification documents, you can identify yourself with a valid foreign passport or other photographic identification document that shows your citizenship. This must be issued by an authority or
                          some other authorised issuer. Note that the bank may request that you also present other documents.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">If you do not have valid identity documents, you must prove who you are and your citizenship by means of other documents from an independent and reliable source.</p>
                      </li>
                    </ul>

                    <div>
                      <span>FOREIGN</span>

                      <h2>
                        <strong>Students</strong>
                      </h2>

                      <p className=" tw-text-gray">If you are a foreign student, you must always be able to identify yourself as above.</p>
                      <p className=" tw-text-gray tw-font-medium">You also need:</p>
                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">A residence permit or a visa (does not apply to EU citizens).</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">An admission decision confirmation from your university, showing the duration of your studies.</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IN CERTAIN CASES
                      </span>

                      <h2>
                        <strong>The Bank Can Refuse You To Open An Account</strong>
                      </h2>

                      <p className=" tw-text-gray tw-font-medium">The bank may not open an account if :</p>
                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">The bank cannot identify you in a sufficiently secure manner.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">The bank determines that the reason you provided for wanting to open an account is inadequate.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">The bank, by opening an account, would be acting in breach of a legal regulation or directive.</p>
                        </li>
                      </ul>
                      <p className="  tw-text-gray">The bank may also refuse you an account if you have previously acted dishonestly towards the bank.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> BEAR
                      </span>

                      <h2>
                        <strong>In Mind That…</strong>
                      </h2>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">You must be able to understand the bank’s questions and answer them.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">You must also be able to understand the information that the bank gives you.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">If you need someone to translate for you, you should bring such a person with you to the meeting with the bank.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">The bank will ask you where your money is being sent from.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Your account and other bank services may not be used by anyone else unless an agreement for this is held with the bank.</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">The bank may ask you additional questions or stipulate other requirements.</p>
                        </li>
                      </ul>
                      <p className="  tw-text-gray">The bank may also refuse you an account if you have previously acted dishonestly towards the bank.</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> DRIVING
                      </span>

                      <h2>
                        <strong>License</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        If you have a driving license which was issued in an EU country is valid throughout your stay in Sweden. You can even exchange your driving license to Swedish license if you have permanent residence.
                      </p>
                      <p className=" tw-text-gray">
                        A driving license that was issued in non-EEA countries (excluding Switzerland and Japan) is valid for a maximum of one year in Sweden. It cannot be exchanged to Swedish license and If you want to continue driving in Sweden you
                        will have to complete the risk education, and theory and practical examinations.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> SCHOOLS IN
                      </span>

                      <h2>
                        <strong>SWEDEN</strong>
                      </h2>

                      <p className=" tw-text-gray">In Swedish preschools, play is a key component. There is a focus on basic values such as playing together, tolerance and consideration for others. Preschool is for children aged 1 to 5.</p>
                      <p className=" tw-text-gray">
                        The year the child turns 6, he or she can participate in a non-compulsory preschool class (sexårsverksamhet) designed to help children meet future classmates and prepare for primary school without the stress of heavy studies
                        or homework.
                      </p>
                      <p className=" tw-text-gray">
                        From the ages of 7 to 16, all children in Sweden are required to attend the compulsory school (grundskola), where they are taught a core group of basic subjects. Families can apply for before/after-school care for their
                        children (fritids).
                      </p>
                      <p className=" tw-text-gray">
                        There is a charge for preschools and after-school care, but from the age of 6, all schooling in Sweden is free of charge and includes a hot lunch. Note, there is usually a fee for private schools and international schools.
                      </p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PREGNANCY
                      </span>

                      <h2>
                        <strong>AND MATERNITY</strong>
                      </h2>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PARENTAL
                      </span>

                      <h2>
                        <strong>Leave(Föräldraledighet)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        In Sweden a parent is entitled to take parental leave until their child is 8 years old in order to take care of them. During the leave parents are paid allowance from (Försäkringskassan) in accordance with the law.
                        www.forsakringskassan.se.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PARENTAL
                      </span>

                      <h2>
                        <strong>Benefits</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Parental benefit is money you receive to be able to be at home with your child instead of working, seeking work or studying. Parents are granted 480 days of leave per child. 390 of these days are income based and 90 days are
                        at the minimum level. It is not your employer who covers the cost of your parent benefit but the Swedish Social Insurance Agency (Försäkringskassan).
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> MATERNITY
                      </span>

                      <h2>
                        <strong>Clinics</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        The maternity clinic (MVC) mödravårdscentralen, is primarily for pregnant women. You go to the maternity clinic throughout your pregnancy to check that both the child and you yourself are doing well. Visits to the maternity
                        clinic are free.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CHILD
                      </span>

                      <h2>
                        <strong>Health Centre</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        As a parent, you can get help here. At the child health centre, or barnavårdscentralen (BVC), you can get tips about your child’s development, breast-feeding, food and illnesses. When you come home after the childbirth, you
                        can contact the child health centre yourself to make an appointment for a first meeting. The first meeting is often held at home. At the meeting the nurse tells you about the child health centre and looks to see how your baby
                        is doing.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> CHILD
                      </span>

                      <h2>
                        <strong>Allowance</strong>
                      </h2>

                      <p className=" tw-text-gray">Children who live in Sweden start receiving a child allowance the month after their birth. The allowance is paid until the child turns 16.</p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> REGISTER
                      </span>

                      <h2>
                        <strong>With Försäkringskassan</strong>
                      </h2>

                      <p className=" tw-text-gray">You need to register with Försäkringskassan (the Swedish Social Insurance Agency) to qualify for benefits. Read more at www.forsakringskassan.se</p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> HEALTH AND
                      </span>

                      <h2>
                        <strong>Medical Care</strong>
                      </h2>

                      <p className=" tw-text-gray">The official website 1177.se offers extensive advice on healthcare topics in several languages as well as a search function (in Swedish) for nearby healthcare centers.</p>

                      <p className=" tw-text-gray">It is a 24-hour provider of free healthcare information and consulting. Phone 1177, or if you call from outside Sweden the number is: +46 771 11 77 00.</p>
                      <p className=" tw-text-gray">
                        Once you are registered in Sweden (have received a personal identification number), you are entitled to healthcare under the same conditions as other residents of Sweden. This means that you pay the regular Swedish patient fee
                        for medical care in the public healthcare system.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> ID
                      </span>

                      <h2>
                        <strong>Card</strong>
                      </h2>

                      <p className=" tw-text-gray">You can get ID cards issued by tax agency. You need to visit one of the Skatteverket’s office and pay the fee i.e 400 SEK before you visit them.</p>

                      <p className=" tw-text-gray">
                        To be able to apply for an ID card, you must be registered as living in Sweden (having received the personal identification number), be able to show a receipt for the application fee payment and be able to show who you are
                        (prove your identity).
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> UNEMPLOYMENT
                      </span>

                      <h2>
                        <strong>Insurance</strong>
                      </h2>

                      <p className=" tw-text-gray">Payouts of unemployment insurance take two forms, a basic benefit or an income-related benefit.</p>

                      <p className=" tw-text-gray">
                        Unemployment insurance is not a part of the social insurance system in Sweden. Unemployment insurance is connected closely to the trade unions but is legally independent. When you start working in Sweden, investigate which
                        unemployment insurance fund (widely known as A-Kassa) is available.
                      </p>

                      <p className=" tw-text-gray">
                        In order to receive an income-based benefit, you must have been a member of a voluntary unemployment insurance fund (A-kassa) for 12 months and have worked (been employed) for at least six months. In addition, some trade
                        unions offer additional insurance against loss of income.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> LEARN
                      </span>

                      <h2>
                        <strong>Swedish In Sweden</strong>
                      </h2>

                      <p className=" tw-text-gray">Depending on the location of your stay, there are different options for learning Swedish while in the country. More information at: www.sweden.se.</p>

                      <p className=" tw-text-gray">Folkuniversitetet offers Swedish courses at different levels.</p>

                      <p className=" tw-text-gray">Study associations also offer language courses and a wide range of other courses. See a list of study associations.</p>
                      <p className=" tw-text-gray">
                        SFI-courses (Swedish for immigrants). Once you have become a resident in Sweden and have been issued a personal identity number (personnummer) you can contact your local municipality for information about Swedish lessons for
                        immigrants (SFI). SFI is basic training in the Swedish language for adults who do not have Swedish as their first language. You can study SFI full-time or part-time. The training is free of charge.
                      </p>

                      <p className=" tw-text-gray">
                        SFI-courses (Swedish for immigrants). Once you have become a resident in Sweden and have been issued a personal identity number (personnummer) you can contact your local municipality for information about Swedish lessons for
                        immigrants (SFI). SFI is basic training in the Swedish language for adults who do not have Swedish as their first language. You can study SFI full-time or part-time. The training is free of charge.
                      </p>

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> RECOGNITION OF
                      </span>

                      <h2>
                        <strong>Higher Education Qualifications</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        The European Commission has devised a system known as ECTS (European Credit Transfer System) . It allows for the transfer of higher education credits between European countries. The Swedish Council for Higher Education (UHR)
                        evaluates foreign qualifications in order to provide support for people looking for work in Sweden, people who wish to continue studying, or for employers who wish to employ someone with foreign qualifications.
                      </p>
                    </div>
                  </div>
                  <div></div>
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

export default PersonnumerSweden;
