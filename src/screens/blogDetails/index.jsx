import React, { useEffect } from 'react';
import blog1 from '../../assets/images/single-img-04.png';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner_Page from '../../components/Common/Banner_Page';
import { LiaAngleRightSolid } from 'react-icons/lia';
import profile from '../../assets/images/profile.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Sidebar from "../../components/ScrollableBar";


import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";


import Header from '../../components/Header_New/Header';


const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        highlightText={("Blogs")}
        regularText={(
          "5 Swedish Foods You Must Try"
        )}
        backgroundImage={homeBgImage}
      />
      <section className="">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6   md:tw-pl-32 tw-pl-3 ">
                <div className="col-lg-12">
                  {/* featured-imagebox-post */}
                  <div className=" tw-shadow-lg">
                    <div className=" tw-relative">
                      <img className="img-fluid tw-mx-auto" src={blog1} alt="image" />
                      <div className="    tw-bg-blue tw-w-20   tw-flex tw-justify-center tw-items-center tw-h-20 tw-rounded-md tw-absolute tw-top-0 tw-right-0">
                        <div>
                          <strong className=" tw-text-white tw-m-0 tw-uppercase tw-text-2xl">06</strong>
                          <p className=" tw-text-white  tw-m-0">JUL</p>
                        </div>
                      </div>
                    </div>
                    <div className=" tw-p-4">
                      <p className=" tw-text-gray">
                        Are you planning to visit Sweden in the near future? Sweden has scrumptious and unique dishes and recipes that you must try while you visit. Swedish food is more than just fish, coffee, or meatballs. With a diet rich in
                        proteins, whole grains, and omega-3, Swedish food has been hailed for its amazing health benefits. Being a visitor or foreigner, it can be difficult for you to find the food items and places in Sweden as most of the people eat
                        at home. The restaurant culture in Sweden is much more different than in other countries. If you want to try some traditional and finger-licking Swedish food, then you must look for these 5 delicious dishes from Sweden:
                      </p>
                      <div>
                        <p className=" tw-text-gray  tw-font-semibold">1. Herring/Sill</p>
                        <p className=" tw-text-gray">
                          This will be the dish that you will either love or hate depending upon your taste buds. There are a lot of varieties of sills and you can even eat pickled or fried herrings. Pickled Swedish herring is a classic Swedish dish
                          derived from the times when preserving was the only way to get through the winter months. It is now an important part of all three basic traditional celebrations; Christmas, Easter, and off-course midsummer/midsummer.
                        </p>
                        <p className=" tw-text-gray">
                          The pickling juice used to cook herring is made from vinegar, salt, spices, and water. No matter what type of herring you will see in the menu, it will be generally served with boiled potato, finely chopped chives, and
                          gräddfil.
                        </p>

                        <p className=" tw-text-gray">
                          The pickling juice used to cook herring is made from vinegar, salt, spices, and water. No matter what type of herring you will see in the menu, it will be generally served with boiled potato, finely chopped chives, and
                          gräddfil.
                        </p>

                        <p className=" tw-text-gray  tw-font-semibold">2. Falukorv</p>
                        <p className=" tw-text-gray">
                          This dish is a firm favorite among kids of all ages across Sweden. Falukorv’s origin can be traced back to the sixteenth century when Falu copper mines used horse and ox skin to make strong ropes to pullover the copper ores.
                          At first, the meat was simply salted and smoked to make this dish. When the Germans came into the mines, then Swedes learn to make sausage out of meat. Now falukorv is made out of meat and pork by boiling it, frying it,
                          roasting it in cream or grilling it. This is served with rice, mashed potatoes or macaroni depending upon your choice.
                        </p>

                        <p className=" tw-text-gray  tw-font-semibold">3. Kroppkakor</p>
                        <p className=" tw-text-gray">
                          Hearty mashed potato dumplings with mushroom fillings are known as kroppkakor. There are many different versions of kroppkakor all over the country and have different names. Potatoes and flour are mixed and then wrapped by
                          the dough and pork. Potatoes can be used either raw or boiled depending upon your choice. These are most commonly served with melted butter, double cream, different sauces, and milk.
                        </p>

                        <p className=" tw-text-gray  tw-font-semibold">4. Raggmunk</p>
                        <p className=" tw-text-gray">
                          Raggmunk is the name of a Swedish dish made of potato pancakes. These pancakes, however, cannot be cooked using new potatoes as these potatoes don’t contain enough starch to hold the pancake together. This dish is mostly
                          cooked in winters so this is not an issue. The butterier and crispier the pancake is around the edges, the better it will be in taste. The trick to this is not to spread the batter too thinly. If you will add some diced
                          onion in it, then it will be called “French” potato pancake.
                        </p>

                        <p className=" tw-text-gray  tw-font-semibold">5. Crayfish</p>
                        <p className=" tw-text-gray">
                          August in Sweden is known for the Crayfish season and people host crayfish parties with amazing décor. Get stuck in, rip off the claws and suck out the delicious juices. The crayfish are usually boiled in a brine bath with a
                          lot of spices and crown dill. All you need then is Västerbotten cheese pie, soft bread, cold beer, snaps, crispbread and you’re good to go!
                        </p>
                        <p className=" tw-text-gray">
                          As the month of August start, the shops are full of all kind of crayfish from different countries but Swedes prefer the Swedish signal crayfish. Besides this, both Chinese and Turkish crayfish are also good.
                        </p>
                        <hr className=" tw-border-gray" />

                        <div className=" tw-flex tw-items-center  tw-justify-between">
                          <div>
                            <Button label={'Visa'} className={' tw-bg-[#F5FAFF] tw-py-1 tw-rounded-sm  hover:tw-bg-blue hover:tw-text-white border tw-border-gray'} />
                          </div>
                          <div>
                            <ul className=" tw-flex tw-gap-4">
                              <li className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full">
                                <Link to="https://www.facebook.com/Swedenrelocators/">
                                  <FaFacebookF className="  tw-text-gray-dark" />
                                </Link>
                              </li>
                              <li className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full">
                                <Link to="https://twitter.com/swedenrelocator">
                                  <FaTwitter className="  tw-text-gray-dark" />
                                </Link>
                              </li>
                              <li className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full">
                                <Link to="https://www.instagram.com/sweden_relocators/">
                                  <FaInstagram className="  tw-text-gray-dark" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                       
                      </div>
                    </div>
                  </div>
                  {/* featured-imagebox-post end*/}
                </div>
              </div>
            </div>

            <Sidebar />
        
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
