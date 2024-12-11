import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/couple-hanging-a-picture.png";
import banner2 from "../../assets/images/office-interior-design.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Sidebar from "../../components/ScrollableBar";


import ho1 from "../../assets/iconscout/ho1.png";
import ho2 from "../../assets/iconscout/ho2.png";

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from '../../context/TranslationContext';
import Header from "../../components/Header_New/Header";

const HouseOffices = () => {
  const { t, language } = useTranslation();
  const isleftlangue = language === 'ur';
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
      title: "Direct Citizenship    ",
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
      title: "Golden Visa    ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Houses & Offices")}
        regularText={t(
          "Find your perfect space in Sweden. We assist you in securing residential and commercial properties seamlessly."
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
                <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-10 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={ho2}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Simplifying
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Your Housing Journey`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`We offer housing assistance. We look at the person’s
                        income and character before we handle their application
                        and we have our own online system for this purpose. We
                        make sure you get your apartment through a smooth
                        process.`)}</p>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Relocation
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Made Easy Across Four Countries`)}</strong>
                  </h2>

                  <p className=" tw-text-gray tw-pt-8">{t(`We are a relocation company based in four different
                    countries Sweden, Denmark, Pakistan and India. Our head
                    office is in Malmö. Buying and renting requires a lot of
                    research and is associated with uncertainty. That’s why we
                    offer you an easy and painless solution where you can get a
                    place to live without any worries.`)}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Navigating
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Sweden’s Competitive Housing Market`)}</strong>
                  </h2>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <p className=" tw-text-gray tw-pt-8">{t(`Finding housing in Sweden is much more difficult than in
                        other EU countries. Renting a house is having so much
                        competition in Sweden that there is a specific black
                        market for leasing the house or apartment on a long-term
                        basis. You will have to struggle in finding the
                        apartment in Malmö or Stockholm as these are the busiest
                        cities. Foreigners who intend to live in Sweden for a
                        longer period of time may opt for buying a house rather
                        than being a part of this renting fray.`)}</p>
                    </div>

                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={ho1}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Understanding
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`First-Hand and Second-Hand Rentals`)}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`While you start to search for a house or apartment in
                    Sweden, you will come across the terms known as first-hand
                    and second-hand rentals. These two terms refer to the
                    apartments rented directly from the landlord (first-hand
                    rentals) or rented and/or sublet through a tenant
                    (second-hand rentals). First-hand rentals are really scarce
                    and in some famous areas, there might be years’ long waiting
                    lists. Sublets or second-hand rentals may be the best option
                    in this case, but you should know that you can be allowed to
                    stay in that unit or house for only one year.`)}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Sweden’s
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Diverse Housing Options`)}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`A great benefit of Swedish housing is that you can hardly go
                    wrong with any type of housing situation. There are a lot of
                    options in any area of the country to choose from, whether
                    you are looking for an apartment in the countryside or in
                    the city. You will have a lot of different options like
                    standalone homes or high-rise apartments depending upon your
                    choice. You can also find furnishes as well as unfurnished
                    house and it depends upon the duration of your stay in
                    Scandinavian or Nordic countries.Rental process in Sweden.`)}</p>

                  <br />

                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Tackling
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Housing Challenges in Sweden`)}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`Whether you are looking for a house on rent as a foreigner
                    in Sweden or you are a native Swede, the biggest problem, in
                    any case, is the lack of housing opportunities. This is the
                    case in most of the Scandinavian countries and specifically
                    in Swedish cities causing serious problems for students and
                    expats.`)}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Essential
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Requirements for Renting in Sweden`)}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`You may find a first-hand lease or second-hand rentals. You
                    need to have the personummer, an employment contract, and
                    proof of enough income to afford the house in order to get
                    the house on rent. If your income is too low according to
                    the lender, then you may have to provide a guarantor.`)}</p>

                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Short-Term
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Rental Solutions`)}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`A subletting rental will have similar requirements and
                    procedures as that of the landlords. However, you need to
                    ensure that second-hand leasing has been approved by the
                    landlord otherwise it will be considered as illegal. If you
                    caught in violation of this rule, then you may find yourself
                    evicted.`)}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    How
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`We Can Help`)}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`In the meantime, while looking for a house on rent, you can
                    opt for short-term rentals as the average price won’t vary
                    much from annual rental prices in Sweden.`)}</p>
                  <p className=" tw-text-gray">{t(`This is where we come to help you finding your new house .`)}</p>
                  <Link to="/register" className="tw-text-center tw-pt-4">
                  <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                      <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                        Sign Up{" "}
                      </strong>
                      <strong className="tw-text-gray">{t(`Today!`)}</strong>
                    </h5>
                  </Link>
                  <br />
                  <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                    seeking assistance with relocation, permits, visas, legal
                    processes, or settling into a new life, we're here to help.
                    Our comprehensive services cover everything from work and
                    study opportunities to family reunifications, business
                    support, and much more. Let us guide you every step of the
                    way—start your seamless experience now!`)}</p>
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

export default HouseOffices;
