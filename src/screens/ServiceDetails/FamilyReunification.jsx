import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/family-time.png';
import banner2 from '../../assets/images/family-1.png';
import { imageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import Header from '../../components/Header_New/Header';


const FamilyRenuification = () => {
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
      title: 'Golden Visa    ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page title={`FAMILY REUNIFICATION`} />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-px-3">
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> EU CITIZEN
                  </span>

                  <h2>
                    <strong>Family Members</strong>
                  </h2>

                  <p className=" tw-text-gray">Family reunification is a recognized reason for the immigration of family members to a country where one or more family member already reside.</p>
                  <p className=" tw-text-gray">As a family member of an EU/EEA citizen exercising their right of free movement,you can get a visa through a facilitated process to travel with your family member or to join him/her in Sweden.</p>
                  <p className=" tw-text-gray">Family members are:</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">Spouse/partner/common law spouse.</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">The direct descendants (children) who are under the age of 21 or are dependents, and those of the spouse or partner.</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">The dependent direct relatives in the ascending line (e.g. parents) and those of the spouse or partner.</p>
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
                      <p className=" m-0 tw-text-gray">Once in Sweden you should apply for a residence card for a family member of a EU/EEA citizen within three months for a Residence Card of a family member of a EU/EEA citizen.</p>
                    </li>
                  </ul>

                  <div className="row">
                    <div className="col-md-10 tw-mx-auto">
                      <motion.img animate={imageVariants} className=" tw-w-full" src={banner} alt="" />
                    </div>
                  </div>

                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> SWEDISH-NORDIC FAMILY
                    </span>

                    <h2>
                      <strong>Reunification</strong>
                    </h2>

                    <p className=" tw-text-gray">If you are Swedish or Nordic citizen, then you can apply for residence permit under national Laws. Requirements are slightly different than the above-mentioned EU residence card.</p>
                    <p className=" tw-text-gray">
                      The person who wants to invite his family to the country he should be residing and have enough income resources to provide financial support to the family and a standard house to live in. However, these mentainence requirements
                      are not applicable in all cases.
                    </p>
                  </div>
                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> STUDENT-WORK-BUSINESS PERMIT FAMILY
                    </span>

                    <h2>
                      <strong>Reunification</strong>
                    </h2>

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> WHAT ARE
                    </span>

                    <h2>
                      <strong>Mentainence Requirements</strong>
                    </h2>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> HOUSING
                      </span>

                      <h2>
                        <strong>Requirements:</strong>
                      </h2>

                      <ul className=" tw-p-0  tw-list-disc    tw-pt-4">
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">The person who wants to invite his family to the country he should be residing and have enough income resources to provide financial support to the family and a standard house to live in.</p>
                        </li>
                        <li className=" ">
                          <p className=" m-0 tw-text-gray">If you rent your home, you have to send in a copy of your tenancy agreement. You must also enclose a rent invoice for the last month’s rent (1 month).</p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray tw-font-medium">The agreement has to contain:</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Monthly rent</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Number of rooms</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Name of tenant</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Name of landlord</p>
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Period of tenancy</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">Signature of landlord.</p>
                        </li>
                      </ul>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF YOU ARE A
                        </span>

                        <h2>
                          <strong>Sub-Tenant In Your Home</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          If you are a sub-tenant in your home, you also have to send in documents showing that your landlord, housing cooperative association or rent tribunal has approved the let. When you rent as a sub-tenant, it is the
                          property-owner who is the landlord, not the holder of the tenancy agreement. The agreement or contract must be signed.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF YOU
                        </span>

                        <h2>
                          <strong>Own Your Home</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          If you own your home, you have to send in a copy of your purchase agreement or some other transfer document showing that you own the home. If the number of rooms is not stated in the document, you can attach a layout plan, a
                          home specification or a similar document.
                        </p>
                        <p className=" tw-text-gray">
                          You also have to send in documents showing what housing cost you have. Irrespective of whether you live in a cooperative (‘tenant-owner’) or owner-occupied home, you have to send in documents showing what interest
                          expenditure you have and the size of your amortisation payments.
                        </p>
                        <p className=" tw-text-gray">
                          If you live in a cooperative home, you also have to send in copies of documents showing the monthly charge and any other operating costs not included in the monthly charge, such as for heating, electricity and water.
                        </p>

                        <p className=" tw-text-gray">
                          If you live in an owner-occupied home, you have to send in documents showing what operating costs you have. This can, for instance, be charges for heating, water, refuse collection, waste water, joint property management
                          charges, property charges or other costs linked to your housing.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF YOU
                        </span>

                        <h2>
                          <strong>Are Employed</strong>
                        </h2>

                        <p className=" tw-text-gray">If you are working, you need to send in a copy of your employment agreement or some other document showing your employment.</p>

                        <p className=" tw-text-gray">The document has to contain:</p>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Name of employee</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Form of employment (for example open-ended, fixed term, substitute)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Level of employment</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Wage</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Employer</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Signature of an authorised representative of your employer.</p>
                          </li>
                        </ul>
                        <p className=" tw-text-gray">You also need to send in a copy of your most recent pay slip.</p>

                        <p className=" tw-text-gray tw-font-semibold">It has to contain:</p>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Name of wage earner (employee)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Name of person paying the wage (employer)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Net wage</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Any wage supplements or wage deductions (leave or illness, for example).</p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF
                        </span>

                        <h2>
                          <strong>Temporary Employment</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          If your employment lasts for longer than one year, you need to send in a copy of your employment agreement and your most recent pay slip. If you have an hourly or on-call employment, you can send in a copy of your employment
                          agreement and your three most recent pay slips.
                        </p>
                        <p className=" tw-text-gray">If your employment lasts for less than one year and you have had previous fixed-term employment, you also need to send in previous employment agreements for the past year.</p>
                        <p className=" tw-text-gray">You can also send in documents to prove that you are a member of an unemployment benefit insurance fund, and that you will receive compensation from there in the event of unemployment.</p>

                        <p className=" tw-text-gray">Employment agreements, or other documents showing your employment, have to contain:</p>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Name of employee</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Form of employment (for example open-ended, fixed term, substitute)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Level of employment</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Wage</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Employer</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Signature of an authorised representative of your employer.</p>
                          </li>
                        </ul>
                        <p className=" tw-text-gray">You also need to send in a copy of your most recent pay slip.</p>

                        <p className=" tw-text-gray tw-font-semibold">Your pay slip has to contain:</p>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Name of wage earner (employee)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Name of person paying the wage (employer)</p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Net wage</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">Any wage supplements or wage deductions (leave or illness, for example).</p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF
                        </span>

                        <h2>
                          <strong>Unemployment Insu­rance Fund</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          You need to send in a copy of a decision from the unemployment insurance fund and account statements showing payments made to you. The documents should show how much benefit you receive and the period when you have the right
                          to benefit.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF
                        </span>

                        <h2>
                          <strong>You Are Receiving Benefit From Försäk­rings­kassan</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          You need to send in a copy of a decision from the Försäkringskassan [the Swedish Social Insurance Agency] showing what type of benefit and how much benefit you are receiving. The documents should show the period when you
                          have the right to benefit from Försäkringskassan.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF
                        </span>

                        <h2>
                          <strong>Pension</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          You need to send in a copy of a decision showing what type of pension you have and how much pension you receive each month or year. This can, for example, be a decision from the Swedish Pensions Agency.
                        </p>
                      </div>

                      <div>
                        <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                          {' '}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> IF
                        </span>

                        <h2>
                          <strong>You Are Self-Employed</strong>
                        </h2>

                        <p className=" tw-text-gray">
                          If you are a sole trader or are a partner in a trading partnership or limited partnership, your income consists of your share of the surplus from your company after deduction of social security contributions. This usually
                          means the surplus from business activities that you declare in your tax return.
                        </p>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <motion.img animate={imageVariants} className=" tw-w-full" src={banner2} alt="" />
                        </div>

                        <div className="col-md-6">
                          <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                            {' '}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> WHO CAN
                          </span>

                          <h2>
                            <strong>Move With You</strong>
                          </h2>

                          <p className=" tw-text-gray">
                            Only your immediate family members can move with you if you have a temporary residence permit. Your immediate family members mean your spouse, children under the age of 18, registered partners, and cohabiting partners.
                            Other family members and children who are above 18 are not eligible to move to Sweden or the EU on your behalf while you have a temporary residence permit. If you are under the age of 18, then your parents are counted as
                            your immediate family members.
                          </p>
                        </div>
                      </div>

                      <p className=" tw-text-gray">
                        In case you have a permanent residence permit or you are planning to get married to a person in Sweden, then that person can apply on your behalf for the residence permit. Persons other than your immediate family members like
                        parents or siblings can also move to Sweden with you.
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

export default FamilyRenuification;
