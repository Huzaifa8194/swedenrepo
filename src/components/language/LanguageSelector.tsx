import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import eng from "../../assets/images/uk.webp"; // english
import ge from "../../assets/images/ge.webp"; // german
import da from "../../assets/images/da.png"; // danish
import sw from "../../assets/images/sw.png"; // swedish
import pe from "../../assets/icons/flags/Flag_of_Iran.svg.png"; // persian
import sp from "../../assets/images/sp.jpeg"; // spanish
import ab from "../../assets/images/ab.png"; // arabic
import gr from "../../assets/icons/flags/flag_of_Greece.svg"; // greek
import ur from "../../assets/icons/flags/flag_of_Pakistan.svg"; // urdu
import pn from "../../assets/icons/flags/flag_of_India.png"; // punjabi

const languageIcons = {
  en: eng,
  de: ge,
  da: da,
  sv: sw,
  es: sp,
  ar: ab,
  fa: pe,
  el: gr,
  ur: ur,
  pa: pn,
};

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ur"); // Default language code
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setSelectedLanguage(langCode);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (e) => {
    if (
      buttonRef.current &&
      dropdownRef.current &&
      !buttonRef.current.contains(e.relatedTarget) &&
      !dropdownRef.current.contains(e.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="tw-flex tw-items-center tw-z-101"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="tw-inline-flex tw-gap-2 tw-z-101 tw-items-center tw-justify-between tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-1 tw-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
        aria-haspopup="true"
        style={{ zIndex: "10" }}
      >
        <img
          src={languageIcons[selectedLanguage] || eng}
          className="tw-w-5 tw-h-5 tw-rounded-full tw-object-cover"
          alt={t(`language.${selectedLanguage}`)}
        />
        <p className="m-0 tw-text-sm tw-text-white">
          {t(`language.${selectedLanguage}`)}
        </p>
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
            {Object.entries(languageIcons).map(([langCode, icon]) => (
              <div key={langCode}>
                <div
                  className="tw-flex tw-gap-4 hover:tw-bg-gray-light p-2 tw-rounded-md"
                  onClick={() => handleLanguageChange(langCode)}
                >
                  <img
                    src={icon}
                    className="tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt={t(`language.${langCode}`)}
                  />
                  <p className="m-0 tw-text-black">
                    {t(`language.${langCode}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
