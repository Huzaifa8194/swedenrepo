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

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Banner_Page title={t('ABOUT US')} />

      <div className="md:tw-mt-36 tw-mt-36">
        <section className="tw-bg-[#F5FAFF]">
          <div className="container tw-py-14">
            <div className="row">
              <div className="col-md-6">
                <span className="tw-flex tw-items-center tw-gap-2">
                  <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                  {t('About Us')}
                </span>
                <h2>
                  {t('Welcome To')} <strong>{t('SWEDEN RELOCATORS AB')}</strong>
                </h2>

                <p className="tw-text-gray">
                  <strong>{t('SWEDEN RELOCATORS AB')}</strong> {t('was established in 2015.')}
                </p>

                <p className="tw-text-gray">
                  {t(
                    'We offer quality guidance, and effective advice and provide information to our clients to settle down in the country. We provide solutions with Destination Services, Global Mobility Services, Immigration Services, Move Management, Intercultural Communication, Investment in Sweden, Property Management, and IT Solutions.'
                  )}
                </p>
                <p className="tw-text-gray">
                  {t('We provide a portal and app-based solution for individuals and companies. Some key features of our portal and app-based solution are:')}
                </p>
                <p className="tw-text-gray">
                  {t(
                    'Online application and documentation submission: Clients can submit their visa and immigration applications, as well as any required documentation, through the portal or app, making the process more efficient and convenient.'
                  )}
                </p>
                <p className="tw-text-gray">
                  {t(
                    'Account management and tracking: Clients can create an account and track the progress of their applications and requests through the portal or app.'
                  )}
                </p>

                <p className="tw-text-gray">
                  {t(
                    'Housing and accommodation search: Clients can search for housing and accommodation options through the portal or app, including the ability to filter by location, price, and amenities.'
                  )}
                </p>
                <p className="tw-text-gray">
                  {t(
                    'School and education search: Clients can search for schools and education options for their children through the portal or app, including the ability to filter by location, curriculum, and language.'
                  )}
                </p>
                <p className="tw-text-gray">
                  {t(
                    'Digital Wallet: Clients can keep track of their expenses and invoices and make payments through the portal or app.'
                  )}
                </p>
              </div>
              <div className="col-md-6 tw-text-end">
                <div>
                  <VideoPlayer src={video1} />
                </div>
                <div className="tw-mt-6">
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
