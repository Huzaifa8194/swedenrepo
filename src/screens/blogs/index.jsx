import React, { useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner_Page from '../../components/Common/Banner_Page';
import { LiaAngleRightSolid } from 'react-icons/lia';
import profile from '../../assets/images/profile.png';
import { Link, useNavigate } from 'react-router-dom';
import blog1 from '../../assets/images/blog/b1.png';
import blog2 from '../../assets/images/blog/b2.png';
import blog3 from '../../assets/images/blog/b3.png';
import blog4 from '../../assets/images/blog/b4.png';
import blog5 from '../../assets/images/blog/b5.png';
import blog6 from '../../assets/images/blog/b6.jpg';
import { GoTriangleRight } from 'react-icons/go';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";


import Header from '../../components/Header_New/Header';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: '5 Things To Keep In Mind If You Are Relocating To Sweden',
      des: '',
      image: blog1,
    },
    {
      id: 2,
      title: 'How To Build A Successful Strat-Up In Sweden',
      des: '',
      image: blog2,
    },

    {
      id: 3,
      title: 'A Guide About Student Fee And Admissions In Sweden',
      des: '',
      image: blog3,
    },
    {
      id: 2,
      title: 'How To Build A Successful Strat-Up In Sweden',
      des: '',
      image: blog4,
    },
    {
      id: 2,
      title: 'How To Build A Successful Strat-Up In Sweden',
      des: '',
      image: blog5,
    },
    {
      id: 6,
      title: 'How To Build A Successful Strat-Up In Sweden',
      des: '',
      image: blog6,
    },
  ];

  const navigate = useNavigate();

  const data2 = [
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
      title: 'Golden Visa    ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={("Blogs")}
        regularText={(
          "Stay Informed and Inspired – Explore Our Latest Articles."
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" md:tw-pt-0 tw-pt-0">
        <div className="container-fluid ">
          <div className="row g-5 ">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  2xl:tw-pl-[21.5%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                {data?.map((item, index) => {
                  return (
                    <div className="col-lg-6">
                      {/* featured-imagebox-post */}
                      <Link to={`/blog_details/${item?.id}`} className=" tw-shadow-lg">
                        <div className=" tw-relative">
                          <img width={720} height={630} className="img-fluid" src={item?.image} alt="image" />
                        </div>
                        <div className=" tw-p-4  tw-shadow-lg">
                          <div className="post-header">
                            <div className="post-title featured-title">
                              <p className=" tw-leading-2">
                                <a className=" tw-text-black tw-font-medium tw-text-xl " href="blog-single.html">
                                  5 Things To Keep In Mind If You Are Relocating To Sweden
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="  tw-flex tw-gap-2 tw-items-center">
                            <div className=" tw-flex tw-gap-2 tw-items-center">
                              <img src={profile} alt="" className=" tw-rounded-full" />
                              <p className="cmt-meta-line byline     tw-pl-2  tw-text-gray tw-m-0">Sweden Relocators</p>
                            </div>

                            <p className=" tw-text-gray m-0">
                              {' '}
                              <i class="fa fa-calendar-check"></i> 2024-07-06
                            </p>
                          </div>

                          <div className="post-desc featured-desc">
                            <p className=" tw-text-gray tw-pb-6 tw-pt-4">There are full service engage company is to provide solution for employees needs trai...</p>
                          </div>
                        </div>
                      </Link>
                      {/* featured-imagebox-post end*/}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 ">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data2?.map((item, index) => {
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
      <Footer />
    </>
  );
};

export default Blogs;
