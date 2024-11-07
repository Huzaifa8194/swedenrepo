import React, { useEffect, useState } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Tabs from '../../components/Tabs';
import san from '../../assets/images/san.webp';
import san2 from '../../assets/images/san2.webp';
import p1 from '../../assets/images/p1.jpg';
import { GoArrowUpRight } from 'react-icons/go';
import available1 from '../../assets/images/available1.webp';
import available2 from '../../assets/images/available2.webp';
import available3 from '../../assets/images/available3.webp';
import available4 from '../../assets/images/available4.webp';
import available5 from '../../assets/images/available5.webp';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import { useTranslation } from "react-i18next";


import Header from '../../components/Header_New/Header';
const Available_housing = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [curr, setCurr] = useState(0);
  const [modal, setModal] = useState(false);
  const sliders = [san, p1, p1, p1];

  const prev = () => setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  const tabData = [
    {
      title: 'Apartments',
      content: (
        <>
          {/* <div className=" tw-flex md:tw-flex-row  tw-shadow-xl tw-bg-white p-4 tw-rounded-lg tw-flex-col tw-w-full  tw-gap-4">
            <div className=" md:tw-w-[45%] tw-w-full ">
              <Carousel/>
              
            </div>
            <div className=" md:tw-w-[65%]  w-[100%]">
              <div className=" tw-text-gray-dark ">
              
                 
                  ADDRESS: SKOLGATAN 2 LGH 1402, 22361 LUND, LUND, SWEDEN
               
              </div>

              <div>
                <div className="  tw-py-4 tw-gap-4  tw-flex  md:tw-flex-row tw-flex-col tw-w-full tw-justify-between">
                  <ul className=" tw-flex tw-flex-col tw-gap-2 tw-w-full p-0 w-[50%]">
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Rent:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        23000
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Rooms:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        3
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Floor:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        4
                      </button>
                    </li>

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        People can Stay:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        4
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Contract Type:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        First Hand
                      </button>
                    </li>
                  </ul>

                  <ul className=" p-0 tw-w-full tw-flex   tw-flex-col tw-gap-2  w-[50%]">
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Available From:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        2024-02-19
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Rentout Duration:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        2 Years
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Property Type:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        Own Property
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Deposit Required:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        Yes
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Deposit For:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        2 Months
                      </button>
                    </li>
                  </ul>
                </div>

                <p className=" m-0 tw-text-primary tw-font-extrabold">
                  BASIC NECESSITIES
                </p>

                <div className="  tw-py-4   tw-flex tw-w-full tw-justify-between">
                  <ul className=" tw-flex tw-flex-col tw-gap-1 tw-w-full p-0 w-[50%]">
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Furnished:</p>
                      <button className=" tw-text-black ">Flexible</button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Electricity:</p>
                      <button className=" tw-text-black ">Included</button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Pets:</p>
                      <button className=" tw-text-black ">Allowed </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Internet:</p>
                      <button className=" tw-text-black ">Included </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Heat Water:</p>
                      <button className=" tw-text-black ">Included </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Washing Machine:</p>
                      <button className=" tw-text-black ">Available </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                  </ul>

                  <ul className=" tw-flex tw-flex-col tw-gap-1 tw-w-full p-0 w-[50%]">
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className="  tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Balcony/Terrace:</p>
                      <button className=" tw-text-black ">Available</button>
                    </li>

                    <hr className=" tw-m-0  tw-border-gray" />

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Parking:</p>
                      <button className=" tw-text-black ">Not Included</button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Smoking:</p>
                      <button className=" tw-text-black ">Allowed </button>
                    </li>

                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Lift:</p>
                      <button className=" tw-text-black ">Available </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">	Dishwasher:</p>
                      <button className=" tw-text-black ">Available
 </button>
                    </li>
                  
                  </ul>
                </div>

                <div className=" tw-flex tw-justify-between ">
                  <div>
                    <p className=" tw-m-0 tw-text-gray  text-sm">
                      Apartment Id: 475
                    </p>
                    <p className=" tw-m-0 tw-text-gray  text-sm">
                      Apartment Status: Available
                    </p>
                  </div>
                  <div>
                    <p className=" tw-m-0 tw-text-gray  text-sm">
                      Uploaded Date: 2024-01-17
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
            <Link to={'/property_details'} className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-relative tw-h-96 tw-w-full">
                <img src={available1} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.2)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Apartments</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-flex tw-gap-3 tw-flex-col">
                <Link to={'/property_details'} className=" tw-relative  tw-h-48 tw-w-full">
                  <img src={available2} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Vilas</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
                <Link to={'/property_details'} className=" tw-relative tw-h-48 tw-w-full">
                  <img src={available3} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Radhus</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-flex tw-gap-3 tw-flex-col">
                <Link to={'/property_details'} className=" tw-relative  tw-h-48 tw-w-full">
                  <img src={available4} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Shared Rooms</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
                <Link to={'/property_details'} className=" tw-relative tw-h-48 tw-w-full">
                  <img src={available5} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Shared Beds</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
        </>
      ),
    },
    {
      title: 'Villas',
      content: (
        <>
          <div className=" tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
            <Link to={'/property_details'} className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-relative tw-h-96 tw-w-full">
                <img src={available1} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.2)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-flex tw-gap-3 tw-flex-col">
                <Link to={'/property_details'} className=" tw-relative  tw-h-48 tw-w-full">
                  <img src={available2} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
                <Link to={'/property_details'} className=" tw-relative tw-h-48 tw-w-full">
                  <img src={available3} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <Link to={'/property_details'} className=" tw-relative tw-h-96 tw-w-full">
                <img src={available5} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Radhus',
      content: (
        <>
          <div className=" tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
            <Link to={'/property_details'} className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-relative tw-h-96 tw-w-full">
                <img src={available1} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.2)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-flex tw-gap-3 tw-flex-col">
                <Link to={'/property_details'} className=" tw-relative  tw-h-48 tw-w-full">
                  <img src={available2} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
                <Link to={'/property_details'} className=" tw-relative tw-h-48 tw-w-full">
                  <img src={available3} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <Link to={'/property_details'} className=" tw-relative tw-h-96 tw-w-full">
                <img src={available4} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Shared Rooms',
      content: (
        <>
          <div className=" tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
            <Link to={'/property_details'} className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-relative tw-h-96 tw-w-full">
                <img src={available1} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.2)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-flex tw-gap-3 tw-flex-col">
                <Link to={'/property_details'} className=" tw-relative  tw-h-48 tw-w-full">
                  <img src={available2} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
                <Link to={'/property_details'} className=" tw-relative tw-h-48 tw-w-full">
                  <img src={available3} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <Link to={'/property_details'} className=" tw-relative tw-h-96 tw-w-full">
                <img src={available4} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Shared Beds',
      content: (
        <>
          <div className=" tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
            <Link to={'/property_details'} className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-relative tw-h-96 tw-w-full">
                <img src={available1} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.2)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <div className=" tw-flex tw-gap-3 tw-flex-col">
                <Link to={'/property_details'} className=" tw-relative  tw-h-48 tw-w-full">
                  <img src={san2} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
                <Link to={'/property_details'} className=" tw-relative tw-h-48 tw-w-full">
                  <img src={available3} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                  <div className="  tw-flex  tw-rounded-2xl   tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                    <div>
                      <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                      <p className=" tw-text-white text-2xl">188,288 properties</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
              <Link to={'/property_details'} className=" tw-relative tw-h-96 tw-w-full">
                <img src={available4} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
                <div className="  tw-flex  tw-rounded-2xl  tw-items-end  tw-bg-[rgba(0,0,0,0.4)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">
                  <div>
                    <h5 className=" tw-text-white tw-text-xl">Enjoy the great cold</h5>
                    <p className=" tw-text-white text-2xl">188,288 properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ),
    },
  ];
  const defaultTab = 'Apartments';

  return (
    <>
      <Header />
      <Banner_Page 
    highlightText={t("Available Housing")}
    regularText={t("Explore the best housing options available in Sweden. We help you find a place that meets your needs and preferences.")}
    backgroundImage={homeBgImage} 
/>

      <div className="  tw-bg-[#f5f8fb]">
        <div className=" ">
          <div className="container tw-py-12">
          <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Housing Solutions
                    </span>
            <div className=" tw-relative">
              <Tabs tabs={tabData} defaultTab={defaultTab} />
            </div>

            <div className=" tw-flex md:tw-flex-row   tw-gap-2 tw-flex-col  tw-my-4  tw-justify-end tw-items-center">
              {/* <div className="md:tw-w-[25%]  tw-w-[100%] ">
                <button className=" tw-uppercase  tw-rounded-md tw-bg-primary tw-text-white tw-font-semibold tw-py-3.5 tw-px-12 tw-w-full">
                  Submit interest
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <section className=" tw-flex  tw-items-center tw-bg-Journey tw-bg-fixed tw-bg-center tw-bg-cover  tw-h-[60vh]">
        <div className=" container">
          <div className=" row">
            <div className=" col-md-6">
              <div>
                <h2 className=" text-white h2">Start your Journey As a Retailer.</h2>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-w-full tw-relative">
                <input placeholder="Email address" className=" tw-bg-white  tw-h-20 tw-outline-none  tw-pl-4 tw-rounded-xl tw-w-full" />
                <Button label={'Get Started'} className={' tw-bg-blue tw-py-4 tw-rounded-xl tw-text-white tw-absolute tw-top-3 tw-right-3'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Available_housing;
