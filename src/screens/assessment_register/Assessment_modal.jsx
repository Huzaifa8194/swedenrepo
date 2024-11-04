import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/SwedenRelocators.png';
import Modal from '../../components/Modal';

const Assessment_modal = ({ isModalOpen, setIsModalOpen, closeModal, setUsers }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Modal isOpen={isModalOpen} className={'md:tw-w-[60%] tw-w-[100%] tw-rounded-md border tw-border-gray'} onClose={closeModal}>
        {/* Modal Content */}
        <div className="">
          <div className=" md:p-4 p-3 tw-rounded-md">
            <div className=" tw-flex md:tw-flex-row tw-flex-col tw-justify-between ">
              <img src={logo} alt="" className=" tw-w-44" />

              <div>
                <h6 className=" tw-font-light"> ONLINE ASSESSMENT RESULT</h6>
                <h6 className="  tw-font-bold tw-text-blue">FAMILY REUNIFICATION ASSESSMENT</h6>
              </div>
            </div>

            <div className=" tw-bg-[#d0e8d6] tw-my-4 border tw-py-3 tw-px-6 tw-rounded-md tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-between ">
              <div>
                <h5 className=" tw-m-0 tw-text-[green]">You are ELIGLE!</h5>
                <p className=" m-0 tw-text-blue">Assessment No: 24042189</p>
              </div>

              <div>
                <h6 className="  tw-font-normal tw-text-center">
                  AS PER YOUR PROVIDED INFORMATION'S <br /> YOU ARE ELIGIBLE TO APPLY
                </h6>
              </div>
            </div>

            <p className="  tw-m-0 tw-leading-3  tw-text-[green] text-lg tw-font-semibold tw-text-center">
              A positive assessment does not guarantee eligibility, but it does <br /> satify the basic criteria required by the relevant Departments.
            </p>

            <h6 className=" tw-text-gray tw-mb-2 tw-text-sm tw-font-normal tw-mt-2">
              SWEDEN RELOCATORS AB is Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. Company was established in 2014 and offers fully Integrated Relocation Solutions for international corporations and
              their employees and Families. Company offers quality guidance, effective advice and provides information to its clients to settle down in the country. We provide solutions within Destination Services, Global Mobility Services,
              Immigration Services, Move Management, Intercultural Communication, Invest in Sweden, Property Management. Additional Services includes assistance in Study Permit, Work Permit, Business Permits, EU Residence Permits, Family Permits and
              Global Visa Applications, registering a new business or branch of an existing business, Import & Export to or from Europe. Company affiliated with the (EuRA-European Relocation Association) and (IIA-Immigration Industry Association)
            </h6>
            <h6 className=" tw-text-gray tw-text-sm tw-font-normal tw-mt-2">
              Any sort of visa and residence permit for any country are available at lower cost when you apply directly on their official website. Our comprehensive visa and Immigration-Relocation services are provided by Migration Agents who have
              experience to advise on visa strategy, right documentation and they ensure your application is successful and we charge for our services.
            </h6>

            <div className="border tw-rounded-md  tw-w-full tw-my-3 p-2">
              <table className=" tw-w-full">
                <thead className="tw-w-full">
                  <tr className="tw-flex tw-justify-between">
                    <th className="tw-text-gray">Field</th>
                    <th className="tw-text-gray">Information</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Company Name</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">SWEDEN RELOCATORS</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Address</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">Amiralsgatan 86E, 214 37 Malmö, Sweden</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Phone</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">+46 723 276 276, +45 53 766 276</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Bankgiro</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">5026-2229</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Org.nr.</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">559025-2648</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Website</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">https://swedenrelocators.se</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Email</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">info@swedenrelocators.se</td>
                  </tr>
                  <tr className="tw-my-3 tw-flex tw-justify-between tw-items-center">
                    <td className="tw-text-sm tw-text-gray tw-font-light">Additional Details</td>
                    <td className="tw-text-sm tw-text-gray tw-font-light">Additional Locations: Malmö, Copenhagen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="  tw-flex tw-justify-end">
              <div></div>
              <div className=" tw-flex md:tw-flex-row tw-flex-col  tw-items-center tw-gap-2">
                <button className=" tw-bg-blue  tw-rounded-sm tw-text-xs px-2 tw-py-1.5 tw-text-white">
                  {' '}
                  <i class="fa tw-m-0 fa-download" aria-hidden="true"></i> Download/View Report
                </button>
                <button className=" tw-bg-blue tw-rounded-sm tw-text-xs px-2 tw-py-1.5 tw-text-white">
                  {' '}
                  <i class="fa fa-step-forward tw-m-0 tw-mt-1" aria-hidden="true"></i> Book an Appointment
                </button>
                <button onClick={() => setIsModalOpen(false)} className=" tw-bg-[#1F2437]  tw-rounded-sm  tw-text-xs px-2 tw-py-1.5 tw-text-white">
                  {' '}
                  <i class="fa fa-times-circle  tw-m-0  tw-mt-1" aria-hidden="true"></i> close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Assessment_modal;
