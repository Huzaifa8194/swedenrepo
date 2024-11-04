// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import styles from "./Language.module.css";

// import eng from "../../assets/images/uk.webp";
// import ge from "../../assets/images/ge.webp";
// import da from "../../assets/images/da.png";
// import sw from "../../assets/images/sw.png";
// import pe from "../../assets/images/pe.png";
// import sp from "../../assets/images/sp.jpeg";
// import po from "../../assets/images/po.png";
// import ab from "../../assets/images/ab.png";

// import { FaAngleUp, FaArrowDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const languageIcons = {
//   en: eng,
//   de: ge,
//   da: da,
//   sv: sw,
//   es: sp,
//   pt: po,
//   ar: ab,
//   fa: pe,  // Persian (Farsi)
// };

// const LanguageSelector = () => {
//   const { t, i18n } = useTranslation();  // Use the translation hook
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);  // Change language dynamically
//     setIsOpen(!isOpen);  // Close the dropdown after selection
//     console.log("Current language:", lang);
//   };
//   return (
//     <>
//       <div className="tw-flex  tw-items-center tw-z-101">
//         <button
//           onClick={handleLanguageChange}
//           type="button"
//           className="tw-inline-flex tw-gap-2 tw-z-101 tw-items-center border  tw-justify-between tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-1 tw-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
//           aria-haspopup="true"
//           style={{zIndex:"10"}}
//         >
//           <img
//             src={languageIcons[i18n.language] || eng}
//             className=" tw-w-5 tw-h-5 tw-rounded-full tw-object-cover"
//             alt=""
//           />
//           <p className=" m-0 tw-text-sm tw-text-white">{t("language")}</p>

//           <svg
//             className="-tw-mr-2  tw-mb-1 tw-h-5 tw-w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="white"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>

//         {isOpen && (
//           <div className=" tw-absolute  tw-z-[99999]    tw-right-12  sm:tw-top-20 md:tw-top-12  lg:tw-top-12 tw-top-32  tw-mt-2 tw-w-80 tw-rounded-md tw-shadow-lg tw-bg-white tw-pb-3 tw-ring-1 tw-ring-black tw-ring-opacity-5">
//             <div
//               className="tw-py-1 tw-grid tw-grid-cols-2  tw-gap-3 p-2"
//               role="none"
//             >
//               <div className=" ">
//                 <div className=" tw-flex  tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={eng}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">English</p>
//                 </div>
//               </div>
//               <div className="  ">
//                 <div className=" tw-flex  tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={ge}
//                     className=" tw-w-7 tw-h-7 tw-object-cover tw-rounded-full"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">German</p>
//                 </div>
//               </div>

//               <div className="  ">
//                 <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={sw}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">Swedish</p>
//                 </div>
//               </div>
//               <div className="  ">
//                 <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={da}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">Danish</p>
//                 </div>
//               </div>

//               <div className="  ">
//                 <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={po}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">Portugesse</p>
//                 </div>
//               </div>
//               <div className="  ">
//                 <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={sw}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">Spainish</p>
//                 </div>
//               </div>
//               <div className="  ">
//                 <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={ab}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">Arabic</p>
//                 </div>
//               </div>
//               <div className="  ">
//                 <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
//                   <img
//                     src={pe}
//                     className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className=" m-0 tw-text-black">Persian</p>
//                 </div>
//               </div>


              
//             </div>
            
//             <div className=" ">


// {/* <Link to={"#"} className=" tw-text-sm  tw-border-b ">More Languages  </Link> */}

// </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default LanguageSelector;


// import React, { useState, useRef } from "react";
// import { useTranslation } from "react-i18next";

// import eng from "../../assets/images/uk.webp";
// import ge from "../../assets/images/ge.webp";
// import da from "../../assets/images/da.png";
// import sw from "../../assets/images/sw.png";
// import pe from "../../assets/images/pe.png";
// import sp from "../../assets/images/sp.jpeg";
// import po from "../../assets/images/po.png";
// import ab from "../../assets/images/ab.png";

// import { FaAngleUp, FaArrowDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const languageIcons = {
//   en: eng,
//   de: ge,
//   da: da,
//   sv: sw,
//   es: sp,
//   pt: po,
//   ar: ab,
//   fa: pe,  // Persian (Farsi)
// };

// const LanguageSelector = () => {
//   const { t, i18n } = useTranslation();  // Use the translation hook
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef(null);
//   const dropdownRef = useRef(null);

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);  // Change language dynamically
//     setIsOpen(false);  // Close the dropdown after selection
//     console.log("Current language:", lang);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);  // Open the dropdown
//   };

//   const handleMouseLeave = (e) => {
//     // Close the dropdown only if the mouse is outside the button and dropdown
//     if (
//       buttonRef.current &&
//       dropdownRef.current &&
//       !buttonRef.current.contains(e.relatedTarget) &&
//       !dropdownRef.current.contains(e.relatedTarget)
//     ) {
//       setIsOpen(false);  // Close the dropdown
//     }
//   };

//   return (
//     <>
//       <div
//         className="tw-flex tw-items-center tw-z-101"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <button
//           ref={buttonRef}
//           type="button"
//           className="tw-inline-flex tw-gap-2 tw-z-101 tw-items-center border tw-justify-between tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-1 tw-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
//           aria-haspopup="true"
//           style={{ zIndex: "10" }}
//         >
//           <img
//             src={languageIcons[i18n.language] || eng}
//             className="tw-w-5 tw-h-5 tw-rounded-full tw-object-cover"
//             alt=""
//           />
//           <p className="m-0 tw-text-sm tw-text-white">{t("language")}</p>

//           <svg
//             className="-tw-mr-2 tw-mb-1 tw-h-5 tw-w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="white"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>

//         {isOpen && (
//           <div
//             ref={dropdownRef}
//             className="tw-absolute tw-z-[99999] tw-right-12 sm:tw-top-20 md:tw-top-12 lg:tw-top-12 tw-top-32 tw-mt-2 tw-w-80 tw-rounded-md tw-shadow-lg tw-bg-white tw-pb-3 tw-ring-1 tw-ring-black tw-ring-opacity-5"
//           >
//             <div
//               className="tw-py-1 tw-grid tw-grid-cols-2 tw-gap-3 p-2"
//               role="none"
//             >
//               {/* Language options here */}
//               <div>
//                 <div
//                   className="tw-flex tw-gap-4 hover:tw-bg-gray-light p-2 tw-rounded-md"
//                   onClick={() => handleLanguageChange('en')}
//                 >
//                   <img
//                     src={eng}
//                     className="tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
//                     alt=""
//                   />
//                   <p className="m-0 tw-text-black">English</p>
//                 </div>
//               </div>
//               <div>
//                 <div
//                   className="tw-flex tw-gap-4 hover:tw-bg-gray-light p-2 tw-rounded-md"
//                   onClick={() => handleLanguageChange('de')}
//                 >
//                   <img
//                     src={ge}
//                     className="tw-w-7 tw-h-7 tw-object-cover tw-rounded-full"
//                     alt=""
//                   />
//                   <p className="m-0 tw-text-black">German</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default LanguageSelector;

import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

// Import images for the languages
import eng from "../../assets/images/uk.webp";//english
import ge from "../../assets/images/ge.webp";//german
import da from "../../assets/images/da.png";//danish
import sw from "../../assets/images/sw.png";//swedish
import pe from "../../assets/icons/flags/Flag_of_Iran.svg.png";//persian
import sp from "../../assets/images/sp.jpeg";//spanish
import ab from "../../assets/images/ab.png";//arabic
import gr from "../../assets/icons/flags/flag_of_Greece.svg";//greek
import ur from "../../assets/icons/flags/flag_of_Pakistan.svg";//urdu
import pn from "../../assets/icons/flags/flag_of_India.png";//urdu

const languageIcons = {
  English: eng,
  German: ge,
  Danish: da,
  Swedish: sw,
  Spanish: sp,
  Arabic: ab,
  Persian: pe,
  Greek: gr,
  Urdu: ur,
  Punjabi: pn
};

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State for selected language
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    let langCode;
    switch (lang) {
      case 'English':
        langCode = 'en';
        break;
      case 'German':
        langCode = 'de';
        break;
      case 'Danish':
        langCode = 'da';
        break;
      case 'Swedish':
        langCode = 'sv';
        break;
      case 'Spanish':
        langCode = 'es'; 
        break;
      case 'Greek':
        langCode = 'gr';
        break;
      case 'Persian':
        langCode = 'pr';
        break;
      case 'Arabic':
        langCode = 'ar';
        break;
      case 'Urdu':
        langCode = 'ur';
        break;
      case 'Punjabi':
        langCode = 'pn';
        break;
      default:
        console.error('Language not recognized:', lang);
    }

    i18n.changeLanguage(langCode);
    setSelectedLanguage(lang); // Update the selected language state
    setIsOpen(false);
    console.log("Current language:", langCode);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (e) => {
   
   console.log("testing");
    // if (
    //   buttonRef.current &&
    //   dropdownRef.current &&
    //   //!buttonRef.current.contains(e.relatedTarget) &&
    //   //!dropdownRef.current.contains(e.relatedTarget)
    // ) {
    //   setIsOpen(false);
    // }
  };

  return (
    <>
      <div
        className="tw-flex tw-items-center tw-z-101"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        <button
          ref={buttonRef}
          type="button"
          className="tw-inline-flex tw-gap-2 tw-z-101 tw-items-center border tw-justify-between tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-1 tw-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
          aria-haspopup="true"
          style={{ zIndex: "10" }}
        >
          <img
            src={languageIcons[selectedLanguage] || eng}
            className="tw-w-5 tw-h-5 tw-rounded-full tw-object-cover"
            alt=""
          />
          <p className="m-0 tw-text-sm tw-text-white">{t(selectedLanguage)}</p>

          <svg
            className="-tw-mr-2 tw-mb-1 tw-h-5 tw-w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="tw-absolute tw-z-[99999] tw-right-12 sm:tw-top-20 md:tw-top-12 lg:tw-top-12 tw-top-32 tw-w-80 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5"
          >
            <div className="tw-py-1 tw-grid tw-grid-cols-2 tw-gap-3 p-2">
              {Object.entries(languageIcons).map(([key, icon]) => (
                <div key={key}>
                  <div
                    className="tw-flex tw-gap-4 hover:tw-bg-gray-light p-2 tw-rounded-md"
                    onClick={() => handleLanguageChange(key)}
                  >
                    <img
                      src={icon}
                      className="tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                      alt={key}
                    />
                    <p className="m-0 tw-text-black">
                      {t(key)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
