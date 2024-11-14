import Button from '../Button';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Link } from 'react-router-dom';
import VideoPlayer from '../videoPlayer';
import video1 from '../../assets/images/hero_video.mp4';
import { useTranslation } from 'react-i18next';



const Hero = () => {
  const containerVariants = staggerContainer(0.1, 0.1);

  const { t} = useTranslation();

  return (
    <section className="tw-relative  tw-bg-homeHero tw-bg-cover tw-bg-center md:tw-bg-left tw-bg-no-repeat tw-h-full xl:tw-py-24 2xl:tw-min-h-[900px] tw-py-10">
      <div className="tw-hidden xl:tw-block tw-absolute tw-left-[400px] tw-top-[150px] tw-z-20">
        <img src="/src/assets/images/slides/slider-02.png" alt="" />
      </div>
      <div className="tw-relative container md:tw-py-24 tw-py-10 tw-z-30">
        <div className="row tw-items-center g-4 md:tw-pt-20 tw-pt-20">
          <div className=" col-md-6">
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.h6 variants={fadeIn('up', 'tween', 0.2, 1)} className=" tw-text-gray tw-uppercase  tw-flex  tw-gap-2  ">
                {' '}
                <p className=" tw-w-5 tw-h-0.5 tw-mt-3  tw-bg-blue" /> {t("Relocation & Immigration Solutions for Individuals, Families, Employees, and Companies")}
              </motion.h6>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.h1 variants={fadeIn('up', 'tween', 0.4, 1)} className=" tw-leading-[60px] tw-text-5xl  tw-font-normal">
                {t("Relocate To")} <strong className=" tw-text-blue">{t("Sweden")}</strong> <br />
                {t("With an")} <strong className=" tw-text-blue">{t("Expert Advise")}</strong>
              </motion.h1>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <motion.p variants={fadeIn('up', 'tween', 0.6, 2)} className=" tw-text-gray">
                {t("We offer complete relocation services to our worldwide clients including residence & work permits, home finding, school pre-search, integration, and setting-in services.")}
              </motion.p>
            </motion.div>
            <div className="  tw-flex sm:tw-flex-row tw-flex-col tw-gap-5 tw-pt-5">
              <Link to={'/services'} className=" ">
                <Button className={'btn-warning'} label={t('Our Services')} />
              </Link>
              <Link to={'/book_your_appointment'} className=" ">
                <Button className={'btn-indigo '} label={t('Book an Appointment!')} />
              </Link>
            </div>
          </div>
          <div className=" col-md-6">
            {/* <motion.img  
                 animate={imageVariants}  src={hero} alt="" /> */}
            <VideoPlayer src={video1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
