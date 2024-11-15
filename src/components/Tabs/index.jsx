import React, { useState } from "react";

const Tabs = ({ tabs, defaultTab, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  console.log(tabs, "tabks");

  return (
    <div>
      <div className="tw-flex tw-gap-6 tw-py-5  tw-rounded-md tw-border-white tw-border-opacity-20 tw-backdrop-blur-md tw-scroll-container  tw-productOverflow  tw-overflow-x-auto tw-whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`tw-px-6 tw-py-2 tw-shadow-lg tw-text-md ${className} ${
              activeTab === tab.title
                ? "    tw-bg-blue tw-text-white   tw-rounded-full  "
                : "     tw-text-gray   tw-bg-white tw-rounded-full border  "
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className={activeTab === tab.title ? "" : "tw-hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
