import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/happy-family-on-shopping.png";
import banner2 from "../../assets/images/removebg-preview.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import Sidebar from "../../components/ScrollableBar";

import Header from "../../components/Header_New/Header";
import { useTranslation } from '../../context/TranslationContext';

import ep1 from "../../assets/iconscout/ep1.png";
import ep2 from "../../assets/iconscout/ep2.png";

const EEAPermits = () => {
  const { t , language} = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link: "/asylum",
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link: "/family-reunification",
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link: "/personnumer-sweden",
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link: "/cpr-number-denmark",
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link: "/work-permit",
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link: "/business-permit",
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),

      Link: "/business-visit",
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link: "/citizenship",
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link: "/study-in-eu",
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link: "/global-visit-visas",
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link: "/eea-permits",
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link: "/parents-eu-permit",
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link: "/marriage-divorce",
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/company-registration",
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/house-offices",
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link: "/appeal-cases",
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link: "/eu-family-reunification",
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link: "/investment",
    },
    {
      id: 18,
      title: "Direct Citizenship  ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link: "/direct-citizenship-by-investments",
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link: "/permanent-residence",
    },
    {
      id: 20,
      title: "Golden Visa   ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];
  const isleftlangue = language === 'ur';

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("EEA Permits")}
        regularText={t(
          "Navigate EEA permits with ease. Our expertise ensures a smooth application process for your stay within the European Economic Area."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
            <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`EEA`)}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Family Permit`)}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Any EU citizen getting a residence in the UK according to
                    the EU rules, can bring their family with them. The EEA
                    permit allows the family member to work in the UK. The
                    permit is valid for only 6 months.`)}</p>

                  <div className="row tw-flex tw-items-center tw-mb-6">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-10 tw-mx-auto">
                          <img src={ep1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className=" tw-text-gray">{t(`You can get refused when entering the UK without a
                        permit. You can apply for the EU card which is valid for
                        5 years, once you are in the UK. The residence card
                        makes it easier for a person to work in the UK. However,
                        The extended family has to apply for a residence card.`)}</p>
                    </div>
                  </div>

                  <div>
                    <br />

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`HOW TO QUALIFY FOR THE`)}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`EEA Family Permit`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`You can apply for an EEA permit if you are a family member
                      of an EU citizen or a Swiss citizen. You can stay in Uk
                      for more than 3 months if your EU family member sponsors
                      you or has a permanent residence in the UK. It is also
                      possible when your EU family member is working, studying,
                      or running a business. Although you should have complete
                      health insurance.`)}</p>
                  </div>
                  <div>
                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`WHO IS A`)}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Family Member`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">{t(`You must be the EEA citizen’s spouse or civil partner,
                        or the child or grandchild under 21 of the EU national
                        or his spouse/civil partner. Dependent parents,
                        grandparents, children or grandchildren over 21 (of the
                        EU national or his spouse) can be taken as family at any
                        age if they can prove to be financially dependant on the
                        EU sponsor.`)}</p>
                    </div>

                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`EXTENDED`)}</span>

                      <h2 className="tw-text-left">
                        <strong>{t(`Family Member`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">{t(`It is also possible to apply as an extended family
                        member of the EU national. It can be, for example, an
                        unmarried partner who has been in a relationship with
                        the EU citizen and has, in general, lived with him/her
                        for at least 2 years, brother, sister, aunt, uncle,
                        cousin, or niece.`)}</p>
                      <p className=" tw-text-gray ">{t(`Except for unmarried partners, all other extended family
                        members must prove to be or have been dependent on the
                        EU citizen or being a member of their household. The
                        extended family member can also have to prove.`)}</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`DERIVATIVE`)}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Right Of Residence`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">{t(`It is possible to apply for an EEA Family Permit if you
                        have a derivative right of residence.`)}</p>
                      <p className=" tw-text-black  tw-font-medium ">{t(`You will have a derivative right of residence if you
                        are:`)}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`The primary caretaker of an EEA child in the UK, and
                            financially independent.`)}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`A child of an EEA former worker and you are
                            currently in education in the UK.`)}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`The primary caretaker of a child of an EEA former
                            worker. This child is currently in education in the
                            UK.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`A primary caretaker of a British child.`)}</p>
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`The primary caretaker of a British dependent adult;
                            or`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`A child of a primary caretaker who qualifies through
                            one of these categories.`)}</p>
                        </li>
                      </ul>

                      <p className=" m-0 tw-text-gray">{t(`The Home Office defines the primary caretaker as someone
                        who has the responsibility for the day-to-day care of
                        the person. This includes decision-making about
                        education, health, and finance.`)}</p>
                      <p className=" m-0 tw-text-gray">{t(`The primary caretaker must be a family member or the
                        legal guardian. This person can be the main caretaker or
                        can share the responsibility with someone else. You must
                        fulfill very strict requirements to qualify under this
                        route.`)}</p>

                      <div className="row">
                        <div className="col-md-7 tw-mx-auto">
                          <img src={ep2} alt="" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`RETAINED`)}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Right Of Residence`)}</strong>
                      </h2>
                      <br />
                      <p className=" tw-text-gray ">{t(`One can apply for an EEA Family Permit if you previously
                        had a right to reside in the UK as the family member of
                        an EEA national who either had a permanent right of
                        residence in the UK or was a worker, student,
                        self-employed person, self-sufficient person or someone
                        looking for work in the UK.`)}</p>
                    </div>

                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`YOU CAN RECEIVE A RETAINED`)}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Right Of Residence In One Of The Following Ways`)}</strong>
                      </h2>
                      <br />

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Your marriage or civil partnership to that person
                            has ended due to a divorce, annulment or
                            dissolution.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`The person died, and you have lived in the UK for at
                            least one year before their death.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You are the child of an EEA national who has died or
                            left the UK. Or you are the child of their spouse or
                            civil partner, or former spouse or civil partner,
                            and you were in education when that person left the
                            UK or died, and you continue to be in education.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You are the parent and have custody, of a child who
                            has a retained right of residence because they are
                            in education in the UK.`)}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SPECIFIC REQUIREMENTS`)}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`In Cases Of Divorces`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`It is only possible to apply if you were in the UK as
                        the EEA national’s family member on the date the
                        divorce/civil partnership was ended and one of the
                        following applies;`)}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`The civil partnership or marriage lasted 3 years
                            before legal proceedings began. The couple lived in
                            the UK for at least 1 year before the divorce,
                            annulment or dissolution was finalized.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You have custody of a child of the relevant EEA
                            national.`)}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You have access rights to the child of the relevant
                            EEA national. The judge ordered access to the child
                            in the UK, and the child is younger than 18 years of
                            age.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You, or a family member, have been a victim of
                            domestic violence during the marriage or civil
                            partnership.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Any other particularly difficult circumstances that
                            will justify the retaining right of residence.`)}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Indefinite Leave to Remain in the UK and the EEA
                            Family Permit`)}</p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">{t(`After spending five years in the UK, from the first date
                        of entry, with the EEA family visa, it is possible to
                        apply for Indefinite Leave to Remain in the UK. It is
                        important though to note that the EU citizen must
                        fulfill the requirements throughout the 5-year period.`)}</p>
                      <Link to="/register" className="tw-text-center tw-pt-4">
                      <h5 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1.2em'}}>
                          <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                            Sign Up{" "}
                          </strong>
                          <strong>{t(`Today!`)}</strong>
                        </h5>
                      </Link>
                      <br />
                      <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                        seeking assistance with relocation, permits, visas,
                        legal processes, or settling into a new life, we're here
                        to help. Our comprehensive services cover everything
                        from work and study opportunities to family
                        reunifications, business support, and much more. Let us
                        guide you every step of the way—start your seamless
                        experience now!`)}</p>
                    </div>
                  </div>
                </div>
              </div>

             <Sidebar/>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default EEAPermits;
