import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/psychological-problems-at-school.png";
import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";


import log1 from "../../assets/iconscout/log1.png";
import log2 from "../../assets/iconscout/log2.png";


import Header from "../../components/Header_New/Header";

const Logistics = () => {
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
      title: "Golden Visa  ",
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
        highlightText={"Logistics"}
        regularText={
          "Seek safety and a fresh start in Sweden. Our comprehensive support helps guide you through the asylum process smoothly."
        }
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className=" ">
          <div className="container-fluid">
            <div className="">
              <div className="row g-4">
                <div className="col-md-8 tw-py-12 tw-bg-white tw-text-justify ">
                  <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Our
                      </span>
                      <h2>
                        <strong>
                          Logistics Management with Sweden Relocators Partner
                          Network
                        </strong>
                      </h2>
                      <br />

                      <p className="tw-text-gray">Sweden Relocators offers a seamless Logistics Management service to ensure that every aspect of your relocation or business expansion is handled with precision and care. Through our carefully selected 3rd-party logistics partners, we provide reliable, efficient, and cost-effective solutions tailored to meet the diverse needs of individuals and companies moving across borders.
                      </p>




                      <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Comprehensive
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Logistics Solutions for Every Need
                      </strong>
                    </h2>
                    <br/>

                     

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Packing and Shipping:</strong> Our partners
                            offer expert packing and shipping services to ensure
                            your belongings are securely packed, handled, and
                            transported. Whether moving personal items, office
                            equipment, or specialized cargo, we’ve got you
                            covered.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Customs and Compliance:</strong> Navigating
                            customs regulations can be challenging. Our
                            logistics partners are experienced in global customs
                            protocols, ensuring all necessary documentation is
                            in place and that shipments comply with
                            international and Swedish customs requirements.
                          </p>
                        </li>
                        <br/>



                        <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={log1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Warehouse and Storage Solutions:</strong> If
                            you require short- or long-term storage, we provide
                            safe, modern storage facilities through our
                            partners, with security systems and climate control
                            to protect valuable goods until you’re ready to
                            retrieve them.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Freight Management:</strong> Our logistics
                            network handles all freight types, from air and sea
                            to land, providing flexible options to meet
                            time-sensitive or cost-efficient needs. With
                            tracking capabilities, you’ll have real-time updates
                            on your shipment's progress.
                          </p>
                        </li>
                        <br/>
                      </div>
                    </div>


                       
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Last-Mile Delivery:</strong> We coordinate
                            last-mile delivery services to ensure that shipments
                            arrive on time, whether at your new home, office, or
                            business location. Our partners prioritize reliable,
                            timely deliveries to keep your plans on track.
                          </p>
                        </li>
                      </ul>

                      <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Why Choose 
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Our Logistics Management Services?
                      </strong>
                    </h2>
                    <br/>

                   

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Global Reach, Local Expertise:</strong> With
                            logistics partners around the world, we combine
                            local knowledge with global standards, ensuring
                            high-quality service wherever you’re moving to or
                            from.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>End-to-End Service Coordination:</strong>{" "}
                            From initial packing to final delivery, we manage
                            every step of the logistics process, providing you
                            with a single point of contact for all your shipping
                            and storage needs.
                          </p>
                        </li>
                        <br/>

                        <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={log2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Cost-Effective Solutions:</strong> By
                            working with a network of trusted 3rd-party
                            providers, we offer competitive rates for all
                            logistics services, ensuring efficient use of
                            resources without sacrificing quality.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Safe and Reliable Transport:</strong> Our
                            partners are equipped with the latest tools and
                            practices in secure packing, handling, and
                            transport, so your items are protected throughout
                            their journey.
                          </p>
                        </li>
                        <br/>
                      </div>
                    </div>

                    
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Transparent Tracking and Updates:</strong>{" "}
                            Stay informed about your shipment’s status with
                            real-time tracking and regular updates from our
                            logistics partners, giving you peace of mind every
                            step of the way.
                          </p>
                        </li>
                      </ul>


                      <br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      How Our
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Logistics Management Service Works
                      </strong>
                    </h2>
                    <br/>

                    

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Consultation and Planning:</strong> Start
                            with a consultation where we assess your logistics
                            needs, budget, and timeline. From there, we create a
                            customized logistics plan through our trusted
                            partner network.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Packing and Pickup:</strong> Our 3rd-party
                            partners handle packing and pickup, ensuring that
                            all items are prepared for safe transport according
                            to international standards.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Shipping and Tracking:</strong> Your
                            shipment is managed end-to-end, with tracking
                            details provided, so you’re always informed of your
                            cargo’s progress and estimated arrival times.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Customs Clearance and Compliance:</strong>{" "}
                            Our experts take care of customs documentation,
                            ensuring smooth entry through Swedish customs or any
                            other destination.
                          </p>
                        </li>
                        <br/>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong>Delivery and Unpacking:</strong> Once the
                            shipment arrives, we arrange for final delivery and,
                            if needed, unpacking services to make your
                            transition as smooth as possible.
                          </p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">
                        <br />
                        Partner with Sweden Relocators for stress-free
                        logistics. Connect with us to discuss your logistics
                        needs and let us handle the rest.
                      </p>
                      <Link to="/register" className="tw-text-center tw-pt-4">
                      <h2 className="tw-text-center tw-pt-4">
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          Sign Up{" "}
                        </strong>
                        <strong> Today!</strong>
                      </h2>
                    </Link>
                    <br />
                    <p className="tw-text-gray">
                      Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!
                    </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                  <div className="  md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4">
                    <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                      {data?.map((item, index) => {
                        return (
                          <Link
                            to={`${item?.Link}`}
                            className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
                          >
                            <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                              {item?.title}
                            </p>
                            <GoTriangleRight className="tw-text-gray" />
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
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

export default Logistics;
