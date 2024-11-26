import { Flex, Image, Navbar, NavListDesktop, Typography } from "../StyledComponents/Header";
import logo from "../../assets/images/SwedenRelocators.png";
import Button from "../Button";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import { useLocation } from "react-router-dom";  // Import useLocation hook
import LanguageSelector from "../language/LanguageSelector";
import './style.css'; // Import the CSS file

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [isScreenTab, setIsScreenTab] = useState(window.innerWidth);
  const [isBelow1300px, setIsBelow1300px] = useState(window.innerWidth < 1320);


  useEffect(() => {
    const translateElement = document.getElementById("google_translate_element");
    const targetContainer = document.querySelector(".langtest");

    if (translateElement && targetContainer) {
      targetContainer.appendChild(translateElement);
    }
  }, []); // Empt

  const location = useLocation(); // Detect route changes


  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsScreenTab(width);
      setIsBelow1300px(width < 1320);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

 
  
 

  return (
    <>

    
      {isBelow1300px ? (
        <MobileHeader />
      ) : (
        <div className="tw-relative tw-w-full">
          <Navbar>
            <Flex direction={"flex-direction-column "}>
              {/* Top bar section */}
              <div
                className={`tw-z-20 top-bar ${isTop ? "visible" : "hidden"} tw-pt-[10px] tw-px-[7%]   tw-bg-[#1f2437]`}
              >
                <Flex className="langtest" gap={"gap-large"} spaceBetween={"space-between"}>
                  <div className="tw-ml-2">
                    <Flex gap={"gap-small"}>
                      <Typography variant={"p"} color={"white"} fontSize={"base-small"}>
                        Mon - Fri 10.00 - 18.00
                      </Typography>
                      <div className="tw-w-[1px] tw-h-6 tw-bg-[#363a4b] mx-2"></div>
                      <Typography variant={"p"} color={"white"} fontSize={"base-small"}>
                        Amiralsgatan 86E 214 37 Malmö, Sweden
                      </Typography>
                      {/* Google Translate container */}

                    
                      

                    </Flex>
                  </div>
                
                </Flex>
              </div>

              {/* Navbar section */}
              <div
                className={`tw-fixed tw-pb-[20px]  tw-pt-[70px]  tw-px-[5.6%]  tw-bg-[#1f2437] tw-w-full  tw-transition-all tw-duration-500 tw-ease-in-out ${
                  isTop ? "tw-translate-y-[0px]" : "tw-translate-y-[-52px] tw-pt-2 tw-bg-[#fff]"
                }`}
              >
                <Flex spaceBetween={"space-between"}>
                  <div className="tw-flex tw-justify-center tw-items-center tw-gap-0">
                    <Image
                      link={logo}
                      alt="Sweden Relocators Logo"
                      imageType={"brand-image-small"}
                      href="/"
                    />
                    <NavListDesktop isTop={isTop} />
                  </div>
                  <div className="tw-flex tw-justify-center tw-items-center tw-gap-1">
                
                    <Button
                      className={isTop ? "btn-Plain" : "btn-dark"}
                      label="Book an Appointment"
                      onClick={() => (window.location.href = "/book_an_appointment")}
                    />
                    <Button
                      className={isTop ? "btn-Transparent" : "btn-light"}
                      label="Login"
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
