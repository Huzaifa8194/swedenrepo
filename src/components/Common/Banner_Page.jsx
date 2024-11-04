import React from "react";
const Banner_Page = ({ title }) => {
  return (
    <>
      <div className={"  lg:tw-pt-44 md:tw-pt-56  tw-pt-72 tw-bg-common tw-bg-center tw-bg-cover  tw-absolute tw-top-20 -tw-z-10 tw-bg-[#4D5160] tw-w-full tw-flex tw-justify-center tw-items-end"}>
        <div className=" tw-pb-7">
          <h1 className=" tw-font-bold text-white tw-uppercase">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner_Page;
