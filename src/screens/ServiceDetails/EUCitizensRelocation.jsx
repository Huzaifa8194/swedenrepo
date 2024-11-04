import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/images/family-playing-games-in-park.png';
import banner2 from '../../assets/images/happy-family-jumping-together.png';


import Header from '../../components/Header_New/Header';



const EUCitizensRelocation = () => {
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
      title: 'Golden Visa     ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        title={`EU FAMILY REUNIFICATION
`}
      />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-pl-2">
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> WHAT IS
                  </span>
                  <h2>
                    <strong>Family Reunification?</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    Family reunification means that a family that has been split up can apply to be allowed to live together in Sweden with the person who has been granted a permanent residence permit, EU citizenship or a three-year residence permit
                    as a refugee.
                  </p>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>EU CITIZEN
                  </span>
                  <h2>
                    <strong>Family Members</strong>
                  </h2>

                  <p className=" tw-text-gray">As a family member of an EU/EEA citizen exercising their right of free movement,you can get a visa through a facilitated process to travel with your family member or to join him/her in Sweden.</p>

                  <p className=" tw-text-gray tw-font-medium">Family members are:</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">Spouse/partner/common law spouse</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">The direct descendants (children) who are under the age of 21 or are dependents, and those of the spouse or partner.</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
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
                      <img src={banner} alt="" />
                    </div>
                  </div>

                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {' '}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>FAMILY
                    </span>
                    <h2>
                      <strong>Reunification For Refugees</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      If a person receives a permanent residence permit as a refugee or as an individual who needs subsidiary protection, then you may have the right to invite your family to that country. Family reunification is a step towards the
                      settlement of refugees to live with their families.
                    </p>
                    <p className=" tw-text-gray">The person who wants to invite his family to the country he is residing should have enough income resources to provide financial support to the family and a standard house to live in.</p>
                    <p className=" tw-text-gray">The possibilities for your family to live with you in Sweden if you have a temporary residence as a refugee or as a person needing subsidiary protection is governed by different things.</p>

                    <p className=" tw-text-gray tw-font-medium">Some of the important points regarding residence permits are listed below:</p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Valid Residence Permit</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Family Application</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">Permanent Residence Permit</p>
                      </li>
                    </ul>
                    <p className=" tw-text-gray">
                      Once the above-mentioned procedure is done and you have a fair chance for receiving the permanent residency status in Sweden, then the application of your family is checked for further requirements.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-10 tw-mx-auto">
                          <img src={banner2} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {' '}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>WHO CAN
                      </span>
                      <h2>
                        <strong>Move With You?</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Only your immediate family members can move with you if you have a temporary residence permit. Your immediate family members mean your spouse, children under the age of 18, registered partners, and cohabiting partners. Other
                        family members and children who are above 18 are not eligible to move to Sweden or the EU on your behalf while you have a temporary residence permit. If you are under the age of 18, then your parents are counted as your
                        immediate family members.
                      </p>
                    </div>
                  </div>

                  <p className=" tw-text-gray">
                    In case you have a permanent residence permit or you are planning to get married to a person in Sweden, then that person can apply on your behalf for the residence permit. Persons other than your immediate family members like
                    parents or siblings can also move to Sweden with you.
                  </p>

                  <span>AN</span>
                  <h2>
                    <strong>Identification</strong>
                  </h2>

                  <p className=" tw-text-gray">You must always be able to identify yourself.</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex  tw-gap-3">
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

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>FOREIGN
                  </span>
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
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">
                        If you do not have Swedish identification documents, you can identify yourself with a valid foreign passport or other photographic identification document that shows your citizenship. This must be issued by an authority or
                        some other authorised issuer. Note that the bank may request that you also present other documents.
                      </p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">An admission decision confirmation from your university, showing the duration of your studies.</p>
                    </li>
                  </ul>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>IN CERTAIN CASES
                  </span>
                  <h2>
                    <strong>The Bank Can Refuse You To Open An Account</strong>
                  </h2>

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

                  <p className=" tw-text-gray">The bank may also refuse you an account if you have previously acted dishonestly towards the bank.</p>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>BEAR
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

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {' '}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>DRIVING
                  </span>
                  <h2>
                    <strong>License</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">
                    If you have a driving license which was issued in an EU country is valid throughout your stay in Sweden. You can even exchange your driving license to Swedish license if you have permanent residence.
                  </p>
                  <p className=" tw-text-gray tw-font-medium">
                    A driving license that was issued in non-EEA countries (excluding Switzerland and Japan) is valid for a maximum of one year in Sweden. It cannot be exchanged to Swedish license and If you want to continue driving in Sweden you
                    will have to complete the risk education, and theory and practical examinations.
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

export default EUCitizensRelocation;
