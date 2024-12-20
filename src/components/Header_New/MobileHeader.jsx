/* eslint-disable no-unused-vars */
import {
  CancelMenuButton,
  HamburgerButton,
  Image,
  NavListMobile,
} from "../StyledComponents/Header";
import logo from "../../assets/images/SwedenRelocators.png";
import { useEffect, useState } from "react";
import Button from "../Button";
const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  useEffect(() => {
    // Prevent horizontal scrolling by resetting scroll position
    const preventHorizontalScroll = () => {
      console.log("scrollX", window.scrollX);
      if (window.scrollX !== 0) {
        window.scrollTo({ left: 0 });
      }
    };

    // Add listener to prevent horizontal movement
    window.addEventListener("scroll", preventHorizontalScroll);

    return () => {
      window.removeEventListener("scroll", preventHorizontalScroll);
    };
  }, []);
  
  return (
    <>
      <div className="tw-relative tw-w-full tw-z-[999] maindivscroll">
        <div className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-[999]  tw-py-[10px] tw-px-[20px] tw-w-full tw-shadow-md tw-bg-[#fff] ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Image
              link={logo}
              alt={"Brand Logo"}
              imageType={"brand-image-extra-small"}
            />
            {openMenu ? (
              <CancelMenuButton setOpenMenu={setOpenMenu} />
            ) : (
              <HamburgerButton setOpenMenu={setOpenMenu} />
            )}
          </div>
          <div className="maindiv">
            <NavListMobile
              openMenu={openMenu}
              selectedNavItem={selectedNavItem}
              setSelectedNavItem={setSelectedNavItem}
              setOpenMenu={setOpenMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
