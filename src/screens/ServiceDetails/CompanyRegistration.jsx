import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/online-contract-signing.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Sidebar from "../../components/ScrollableBar";


import { useTranslation } from '../../context/TranslationContext';
import Header from "../../components/Header_New/Header";

import cr1 from "../../assets/iconscout/cr1.png";
import cr2 from "../../assets/iconscout/cr2.png";

const CompanyRegistration = () => {
  const { t } = useTranslation();
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
      title: "Direct Citizenship   ",
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
      title: "Golden Visa     ",
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
        highlightText={t("Company Registration")}
        regularText={t(
          "Start your business in Sweden with confidence. We guide you through the company registration process for a smooth start."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify">
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Comprehensive Guide to`)}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Company Registration in Sweden`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Setting up a business in Sweden offers access to one of
                      Europe’s most stable economies, a supportive business
                      culture, and a highly skilled workforce. Company
                      registration is an essential step for anyone planning to
                      operate a business in Sweden, as it legally establishes
                      the company and allows it to engage in business
                      activities, enter contracts, and access essential
                      services.`)}</p>
                    <p className="tw-text-gray">{t(`This guide covers the various types of companies in
                      Sweden, the pros and cons of each, and why and when
                      company registration is necessary.`)}</p>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why
                    </span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`is Company Registration Important?`)}</strong>
                    </h2>
                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Legal Recognition:`)}</strong>
                          <br /> {t(`Registering your company gives it legal status
                          in Sweden, allowing it to enter contracts, open bank
                          accounts, and conduct business legally.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Tax Compliance:`)}</strong>
                          <br />{t(`Registered companies are eligible to apply for
                          VAT registration and must comply with Swedish tax
                          regulations, enabling transparent financial
                          operations.`)}</p>
                        <p>
                          <br />
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Access to Benefits:`)}</strong>
                          <br /> {t(`Registered companies can benefit from
                          government incentives, tax deductions, and access to
                          loans and financing from Swedish financial
                          institutions.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Credibility and Trust:`)}</strong>
                          <br /> {t(`Registered companies are more trusted by
                          customers, suppliers, and partners, as they
                          demonstrate a commitment to legal compliance and
                          transparency.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Limited Liability:`)}</strong>
                          <br /> {t(`Certain company types, like limited companies
                          (Aktiebolag), provide limited liability protection,
                          shielding the owner’s personal assets from business
                          debts and obligations.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-12 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={cr1}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <br />
                      <span className="tw-flex tw-items-center tw-gap-2">
                        <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Setting up`)}</span>
                      <h2 className="tw-text-left">
                        <strong className ='tw-text-black'>{t(`Your Business in Sweden`)}</strong>
                      </h2>
                      <br />
                      <p className="tw-text-gray">{t(`Setting up a business in Sweden offers access to one of
                        Europe’s most stable economies, a supportive business
                        culture, and a highly skilled workforce. Company
                        registration is an essential step for anyone planning to
                        operate a business in Sweden, as it legally establishes
                        the company and allows it to engage in business
                        activities, enter contracts, and access essential
                        services. This guide covers the various types of
                        companies in Sweden, the pros and cons of each, and why
                        and when company registration is necessary.`)}</p>
                    </div>
                  </div>
                  <div>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Types of`)}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Companies in Sweden`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Sweden offers several types of business structures, each
                      with specific advantages, disadvantages, and requirements.
                      The right structure depends on your business goals, scale,
                      and risk tolerance.`)}</p>

                    <strong className="tw-text-black">{t(`1. Sole Trader (Enskild Firma)`)}</strong>

                    <p className="tw-text-gray">{t(`A sole trader business is owned and managed by an
                      individual, making it the simplest business form in
                      Sweden. It is ideal for freelancers, consultants, and
                      small businesses with minimal capital requirements.`)}</p>
                    <p className="tw-text-gray">{t(`Advantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Simple to set up and maintain.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Full control over business decisions.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Lower administrative and regulatory requirements.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Profits are taxed as personal income, which can simplify
                        tax filing.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Unlimited liability: The owner is personally liable for
                        all business debts and obligations.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Limited access to capital: Often restricted to personal
                        funds or small loans.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`May lack credibility for large clients or investors
                        compared to incorporated entities.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`)}</strong>
                      <br />{t(`Ideal for individuals starting a small business or
                      working as freelancers. Registration is generally
                      recommended if you intend to trade under a business name
                      or need a VAT number.`)}</p>

                    <strong className="tw-text-black">{t(`2. Limited Company (Aktiebolag or AB)`)}</strong>

                    <p className="tw-text-gray">{t(`A limited company (AB) is a separate legal entity from its
                      shareholders, offering limited liability protection. This
                      is the most popular structure for start-ups, small
                      businesses, and large corporations alike.`)}</p>
                    <p className="tw-text-gray">{t(`Advantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Limited liability: Shareholders are not personally
                        liable for business debts beyond their investment.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Easier to attract investors: Credibility and potential
                        for issuing shares.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Flexibility in growth: Suitable for businesses with
                        plans to expand or seek external funding.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Tax benefits: Company profits are taxed at a corporate
                        rate, which can be more favorable for larger earnings.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Higher initial capital requirement: Minimum share
                        capital of SEK 25,000.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` More complex administration: Requires annual reports,
                        board meetings, and compliance with corporate
                        regulations.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Shareholder obligations: Shareholders have specific
                        responsibilities, such as attending annual general
                        meetings and approving financial statements.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`)}</strong>
                      <br />{t(`Registering a limited company is ideal when seeking
                      external investments, minimizing personal risk, or
                      planning to grow the business significantly. It is also a
                      suitable structure if you need to protect your personal
                      assets.`)}</p>

                    <strong className="tw-text-black">{t(`3. Trading Partnership (Handelsbolag)`)}</strong>

                    <p className="tw-text-gray">{t(`A trading partnership is a business owned by two or more
                      individuals. Each partner shares equal responsibility for
                      the business’s debts and obligations unless agreed
                      otherwise.`)}</p>
                    <p className="tw-text-gray">{t(`Advantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Simple to establish with minimal initial capital.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Shared decision-making and responsibility among
                        partners.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Profits are taxed as personal income, which can be
                        favorable depending on income level.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Unlimited liability: Partners are jointly and
                        individually liable for business debts.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Shared risk: One partner’s decisions can impact the
                        financial obligations of others.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Potential for disputes: Without a clear partnership
                        agreement, disagreements can disrupt the business.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`)}</strong> {t(`A trading partnership
                      is suitable for two or more individuals who wish to
                      collaborate on a business with shared control. Registering
                      is important to establish legal recognition and define
                      each partner’s roles and liabilities.`)}
                    </p>

                    <strong className="tw-text-black">{t(`4. Limited Partnership (Kommanditbolag)`)}</strong>

                    <p className="tw-text-gray">{t(`A limited partnership includes both general and limited
                      partners. General partners have full control and unlimited
                      liability, while limited partners have limited liability
                      and typically no involvement in management.`)}</p>
                    <p className="tw-text-gray">{t(`Advantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Flexibility: Allows for different levels of involvement
                        and risk among partners.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Limited liability for silent partners: Reduced financial
                        risk for limited partners.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Clear roles: Defined responsibilities for general and
                        limited partners.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Unlimited liability for general partners: Risk for those
                        with active control over business operations.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Shared control: Requires a strong partnership agreement
                        to prevent disputes.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Profits taxed as personal income: Can be less favorable
                        for high-revenue businesses.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`)}</strong> {t(`A limited partnership
                      is best for businesses with multiple partners where one or
                      more partners wish to limit their financial risk.
                      Registering establishes legal definitions of roles and
                      responsibilities, helping to prevent disputes.`)}
                    </p>

                    <strong className="tw-text-black">{t(`5. Economic Association (Ekonomisk Förening)`)}</strong>

                    <p className="tw-text-gray">{t(`An economic association is a cooperative entity formed by
                      at least three members who collaborate to promote shared
                      economic interests, such as housing cooperatives or joint
                      ventures.`)}</p>
                    <p className="tw-text-gray">{t(`Advantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Shared benefits and risk: Members share profits and
                        responsibilities.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Limited liability for members: Members are not
                        personally liable beyond their contributions.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Flexibility for cooperatives: Ideal for community-driven
                        projects and joint ventures.`)}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`)}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Minimum member requirement: Must have at least three
                        members, which can limit flexibility.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Administrative requirements: Requires annual reports,
                        member meetings, and compliance with cooperative
                        regulations.`)}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Potential conflict`)}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`The Company Registration Process in Sweden`)}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Step-by-Step Guide`)}</strong>
                    </h2>
                    <br />

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cr2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Setting up a company in Sweden involves several key
                          steps to ensure compliance with local regulations.
                          First, choose your business structure, such as a
                          limited liability company (AB) or sole proprietorship.
                          Register your business with the Swedish Companies
                          Registration Office (Bolagsverket) and obtain a
                          Swedish tax ID (organisationsnummer) from the Swedish
                          Tax Agency (Skatteverket). Depending on your business,
                          you may also need to register for VAT and social
                          security contributions. After registration, open a
                          corporate bank account and ensure compliance with
                          Swedish labor laws and business practices. These steps
                          ensure your company operates legally and efficiently
                          in Sweden.`)}</p>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Step 1: Choose the Business Structure`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                         {t(`Assess the advantages, disadvantages, and legal
                          requirements of different structures to choose the
                          best fit for your business goals and risk tolerance.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 2: Register the Company Name`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Ensure the chosen name adheres to Swedish conventions
                          and is distinct from existing businesses.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 3: File for Registration`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Submit necessary forms and documents to Bolagsverket,
                          including founder identification, proof of share
                          capital, and articles of association.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 4: Apply for Tax Registration`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Register with Skatteverket for VAT, employer taxes,
                          and other obligations post-registration.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 5: Apply for Necessary Permits`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Secure any required permits relevant to your sector,
                          such as those for food services or construction.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 6: Open a Business Bank Account`)}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Establish an account with a Swedish bank using
                          registration documents and VAT number to manage
                          finances and transactions.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Our`)}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Services Include:`)}</strong>
                    </h2>
                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Business Structure Advisory:`)}</strong> {t(`Expert
                          guidance on selecting the most suitable structure for
                          your business.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Registration Assistance:`)}</strong> {t(`Full
                          management of the application and documentation
                          process with Bolagsverket and Skatteverket.`)}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Tax Registration and Compliance:`)}</strong>{" "}
                          {t(`Support with VAT and tax filings to maintain legal
                          compliance.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Permit Application:`)}</strong> {t(`Assistance with
                          obtaining any necessary permits specific to your
                          industry.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Ongoing Support:`)}</strong> {t(`Continued advisory
                          and administrative help as your business grows.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Why Choose Sweden Relocators?`)}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Trusted Expertise`)}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Choose Sweden Relocators for a seamless, personalized, and
                      efficient company registration experience in Sweden.`)}</p>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Experienced Team:`)}</strong> {t(`Our specialists are
                          knowledgeable in Swedish corporate law and business
                          practices.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`All-In-One Service:`)}</strong> {t(`From document
                          preparation to travel arrangements and follow-up, we
                          manage every step of the application.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Simplified Future Applications:`)}</strong>{t(` Your
                          data remains securely stored, allowing you to apply
                          for visas to other countries with minimal additional
                          input, streamlining subsequent applications.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Real-Time Tracking and Updates:`)}</strong>{t(` Our
                          portal and app keep you updated at every stage, so
                          you’re always informed on the progress of your
                          application.`)}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Apply for`)}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Your Global Visit Visa Today`)}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray tw-pl-0">{t(`With Sweden Relocators, applying for a visit visa to any
                      country has never been easier. Simply sign up on our
                      portal or download our app to start the process. From the
                      UK to the USA, Canada, Australia, New Zealand, and beyond,
                      we provide a full-service solution, managing every aspect
                      of your visa application and ensuring a smooth experience.
                      Let Sweden Relocators handle the details, so you can focus
                      on planning your journey.`)}</p>
                    <Link to="/register" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t(`Sign Up`)}{" "}
                        </strong>
                        <strong className ='tw-text-black'>{t(`Today!`)}</strong>
                      </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`)}</p>
                  </div>
                </div>{" "}
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

export default CompanyRegistration;
