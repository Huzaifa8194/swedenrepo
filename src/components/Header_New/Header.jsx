/* eslint-disable no-unused-vars */
import LanguageSelector from "../language/LanguageSelector";
import {
  Flex,
  Image,
  Navbar,
  NavListDesktop,
  Typography,
} from "../StyledComponents/Header";
import logo from "../../assets/images/SwedenRelocators.png";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [isTop, setIsTop] = useState(true);
  const [isScreenTab, setIsScreenTab] = useState(window.innerWidth);
  const [isBelow1300px, setIsBelow1300px] = useState(window.innerWidth < 1320);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsScreenTab(width);
      setIsBelow1300px(width < 1320);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isBelow1300px ? (
        <MobileHeader />
      ) : (
        <div className="tw-relative tw-w-full">
          <Navbar>
            <Flex direction={"flex-direction-column"}>
              {/* Top bar section */}
              <div
                className={`tw-z-20 top-bar ${
                  isTop ? "visible" : "hidden"
                } tw-pt-[10px] tw-px-[50px]  2xl:tw-px-[60px] tw-bg-[#1f2437]`}
              >
                <Flex gap={"gap-large"} spaceBetween={"space-between"}>
                  <div className="tw-ml-2">
                    <Flex gap={"gap-small"}>
                      <Typography
                        variant={"p"}
                        color={"white"}
                        fontSize={"base-small"}
                      >
                        {t("Mon - Fri 10.00 - 18.00")} {/*  */}
                      </Typography>
                      <div className="tw-w-[1px] tw-h-6 tw-bg-[#363a4b] mx-2"></div>
                      <Typography
                        variant={"p"}
                        color={"white"}
                        fontSize={"base-small"}
                      >
                        {t("Amiralsgatan 86E 214 37 Malmö, Sweden")} {/* */}
                      </Typography>
                    </Flex>
                  </div>
                  <div>
                    <LanguageSelector isTop={isTop} />
                  </div>
                </Flex>
              </div>

              {/* Navbar section */}
              <div
                className={`tw-fixed tw-pb-[20px] tw-px-[50px] tw-pt-[70px]  2xl:tw-px-[60px] tw-bg-[#1f2437] tw-w-full  tw-transition-all tw-duration-500 tw-ease-in-out ${
                  isTop
                    ? "tw-translate-y-[0px] "
                    : "tw-translate-y-[-52px] tw-pt-2 tw-bg-[#fff]"
                }`}
              >
                <Flex spaceBetween={"space-between"}>
                  <div className="tw-flex tw-justify-center tw-items-center tw-gap-5 ">
                    <Image
                      link={logo}
                      alt={t("header.logoAlt")} // Brand Logo
                      imageType={"brand-image-small"}
                    />
                    <NavListDesktop isTop={isTop} />
                  </div>
                  <div className="tw-flex tw-justify-center tw-items-center tw-gap-5">
                    <Button
                      className={isTop ? "btn-Plain" : "btn-dark"}
                      label={t("Book an Appointment")} // Book an Appointment
                    />
                    <Button
                      className={isTop ? "btn-Transparent " : "btn-light"}
                      label={t("Login")} // Login
                    />
                  </div>
                </Flex>
              </div>
            </Flex>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Header;
