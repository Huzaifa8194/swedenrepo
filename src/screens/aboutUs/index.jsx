import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Our_specialization from '../../components/Our_specialization';
import { FaLongArrowAltRight } from 'react-icons/fa';
import VideoPlayer from '../../components/videoPlayer';
import video1 from '../../assets/images/video/about_video1.mp4';
import Header from '../../components/Header_New/Header';
import video2 from '../../assets/images/video/about_video2.mp4';
import { useTranslation } from 'react-i18next';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Banner_Page 
        highlightText= {t("About Us") }
        regularText= {t("Welcome to your reliable partner for relocating to Sweden. Our team brings expertise and commitment to ensure a seamless transition. Let us help you feel at home from day one.")}
        backgroundImage={homeBgImage} 
      />

      <div className="">
        <section className="tw-bg-[#F5FAFF]">
          <div className=" tw-py-14">
            <div className="row 2xl:tw-pl-[15%] md:tw-pl-[10%] tw-pl-3 2xl:tw-pr-[15%] md:tw-pr-[10%] tw-pr-[3.5%] ">
              <div className="col-md-6">
                <span className="tw-flex tw-items-center tw-gap-2">
                  <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                  {t('About Us')}
                </span>
                <h2>
                  {t('Welcome To')} <br/><strong>{t('SWEDEN RELOCATORS AB')}</strong>
                </h2>

                <p className="tw-text-gray ">
                  <strong>{t('SWEDEN RELOCATORS AB')}</strong> {t('was established in 2015.')}
                </p>

                <p className="tw-text-gray tw-text-justify">
                  {t(
                    'Founded in 2015, Sweden Relocators AB specializes in providing tailored relocation and mobility solutions for individuals and organizations moving to Nordic countries. We simplify the process of settling into a new country by offering comprehensive services that cater to both employers and employees. Whether you\'re relocating for work, education, or investment opportunities, we ensure a seamless transition with services like Destination Assistance, Global Mobility Solutions, Immigration Support, Move Management, and Property Management.'
                  )}
                </p>

                <p className="tw-text-gray tw-text-justify">
                  {t(
                    'Our web and app-based portal provides an innovative solution for managing relocations. Employers can oversee the progress of employee transfers, while employees can track applications, explore housing and schools, and manage expenses efficiently—all in one place.'
                  )}
                </p>

                <h4>{t('Employer Solutions')}</h4>
                <p className="tw-text-gray tw-text-justify">
                  {t(
                    'We assist employers in managing the complexities of relocating their workforce. Services include:'
                  )}
                </p>
                <ul className="tw-text-gray tw-list-disc tw-pl-5">
                  <li>{t('Global Mobility Program Design: Tailored strategies for employee relocation and compliance.')}</li>
                  <li>{t('Visa and Work Permit Assistance: Expert support to streamline immigration processes.')}</li>
                  <li>{t('Move Coordination: Handling logistics, household goods shipment, and housing for employees and their families.')}</li>
                  <li>{t('Cultural Integration Programs: Workshops and training to help employees adapt smoothly.')}</li>
                </ul>

                <h4>{t('Employee Solutions')}</h4>
                <p className="tw-text-gray tw-text-justify">
                  {t(
                    'For individuals and their families, we provide end-to-end support to ease their transition, including:'
                  )}
                </p>
                <ul className="tw-text-gray tw-list-disc tw-pl-5">
                  <li>{t('Immigration Services: Assistance with visa applications and residence permits.')}</li>
                  <li>{t('Housing and School Search: Access to housing options and schools based on location, budget, and preferences.')}</li>
                  <li>{t('Intercultural Communication Support: Language resources and cultural adaptation training.')}</li>
                  <li>{t('Digital Relocation Tools: Real-time updates and financial management through our app and portal.')}</li>
                </ul>

                <h4>{t('Nordic Relocators - Denmark')}</h4>
                <p className="tw-text-gray tw-text-justify">
                  {t(
                    'Expanding our expertise across the Nordic region, Nordic Relocators offers specialized services for moving to Denmark. Whether you\'re relocating an entire team or a single employee, we provide tailored solutions to address Denmark’s specific requirements. From visa applications to housing and cultural integration, our services are designed to ensure a successful move.'
                  )}
                </p>

                <p className="tw-text-gray tw-text-justify">
                  {t(
                    'At Sweden Relocators AB and Nordic Relocators, we’re committed to making every relocation efficient, stress-free, and rewarding, helping both employers and employees thrive in their new Nordic environment.'
                  )}
                </p>
              </div>
              <div className="col-md-6 tw-text-end">
                <div>
                  <VideoPlayer src={video1} />
                </div>
                <div className="tw-mt-10">
                  <VideoPlayer src={video2} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Our_specialization />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
