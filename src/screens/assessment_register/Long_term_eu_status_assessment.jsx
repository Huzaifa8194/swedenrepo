import React, { useEffect, useState } from 'react';
import blog1 from '../../assets/images/single-img-04.png';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner_Page from '../../components/Common/Banner_Page';
import { LiaAngleRightSolid } from 'react-icons/lia';
import profile from '../../assets/images/profile.png';
import { FaFacebookF } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { GoTriangleRight } from 'react-icons/go';
import { TfiAngleLeft } from 'react-icons/tfi';
import { Link, useParams } from 'react-router-dom';
import Assessment_modal from './Assessment_modal';

import { useTranslation } from "react-i18next";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

import Header from '../../components/Header_New/Header';

const Long_term_eu_status_assessment = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: 'Asylum',
      description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>,
      Link: '/asylum',
    },
    {
      id: 2,
      title: 'Family Reunification',
      description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>,
      Link: '/family-reunification',
    },
    {
      id: 3,
      title: 'Personnummer Sweden',
      description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>,

      Link: '/personnumer-sweden',
    },
    {
      id: 4,
      title: 'CPR Number Denmark',
      description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>,
      Link: '/cpr-number-denmark',
    },
    {
      id: 5,
      title: 'Work Permit',
      description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>,
      Link: '/work-permit',
    },
    {
      id: 5,
      title: 'Business Permit',
      description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>,

      Link: '/business-permit',
    },
    {
      id: 6,
      title: 'Business Visit',
      description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>,

      Link: '/business-visit',
    },
    {
      id: 7,
      title: 'Citizenship',
      description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>,
      Link: '/citizenship',
    },
    {
      id: 8,
      title: 'Study in EU',
      description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>,
      Link: '/study-in-eu',
    },
    {
      id: 9,
      title: 'Global Visit Visas',
      description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>,
      Link: '/global-visit-visas',
    },
    {
      id: 10,
      title: 'EEA Permits',
      description: 'Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>,
      Link: '/eea-permits',
    },
    {
      id: 11,
      title: 'Parents EU Permit',
      description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>,
      Link: '/parents-eu-permit',
    },
    {
      id: 12,
      title: 'Marriage & Divorce      ',
      description: 'Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>,
      Link: '/marriage-divorce',
    },
    {
      id: 13,
      title: 'Company Registration      ',
      description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/company-registration',
    },
    {
      id: 14,
      title: 'House & Offices',
      description: 'we offer you an easy and painless solution where you can get a place to live without any worries.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/house-offices',
    },
    {
      id: 15,
      title: 'Appeal Cases',
      description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>,
      Link: '/appeal-cases',
    },
    {
      id: 16,
      title: 'EU Citizens Relocation',
      description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>,
      Link: '/eu-family-reunification',
    },
    {
      id: 17,
      title: 'Investment',
      description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>,
      Link: '/investment',
    },
    {
      id: 18,
      title: 'Direct Citizenship by Investments      ',
      description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>,
      Link: '/direct-citizenship-by-investments',
    },
    {
      id: 19,
      title: 'Permanent Residence',
      description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>,
      Link: '/permanent-residence',
    },
    {
      id: 20,
      title: 'Golden Visa (Greece - Portugal)      ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  const [location, setLocation] = useState('');
  const [personalStatus, setPersonalStatus] = useState('');
  const [assesment_family, setAssesmentFamily] = useState('');
  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === 'personalStatus') {
      setPersonalStatus('');
    }

    if (e.target.name === 'location') {
      setLocation('');
    }

    switch (e.target.name) {
      case 'location':
        setLocation(value);
        break;
      case 'personalStatus':
        setPersonalStatus(value);
        break;
      case 'assesment_family':
        setAssesmentFamily(value);
        break;
      default:
        break;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isSingle, setIsSingle] = useState(true);

  const handleCheckboxChange = () => {
    setIsSingle(!isSingle);
  };

  return (
    <>
      <Header />





      
    
<Banner_Page 
    highlightText={t("Long Term EU Status")}
    regularText={t("Secure your long-term EU residence status confidently. We guide you through the process for a seamless experience.")}
    backgroundImage={homeBgImage} 
/>

      <section className="">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  {/* user info */}

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Long-Term EU Residence Status

                    </span>

                    <h2>
                      <strong className = "tw-text-left">
                      Find Out Your Eligibility for Moving to Sweden with a Long-Term EU Residence Permit

                      </strong>
                    </h2>
                    <br/>
                    <strong className = "tw-text-gray">Who Should Use This Tool?</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Long-term EU Permanent Residence Permit Holders from any EU country (except Denmark and Ireland) who are planning to move to Sweden or have already moved.

                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        	Families of long-term EU residence permit holders who wish to join them in Sweden.

                        </p>
                      </li>
                      

                      
                    </ul>

<br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Why
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Use the Eligibility Tool?
                      </strong>
                    </h2>
                    <br/>


                  
                    <p className="tw-text-gray">
                    This tool is designed to help you understand the requirements and eligibility criteria for relocating to Sweden with a long-term EU residence permit by gathering important details, such as:

                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Your Current Residence Status: Information about your existing long-term EU residence permit from another EU country.

                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Relocation Plans: Whether you’re planning to move to Sweden or have already relocated.

                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Family Information: Details about family members who will be joining you in Sweden.

                        </p>
                      </li>
                    </ul>

                    <strong className = "tw-text-gray">Complete Visa and Permit Application Support </strong>

                    <p className="tw-text-gray">
                    We offer comprehensive support for your move to Sweden through our web portal and app:
                    </p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Comprehensive Documentation: We prepare all the necessary documents for your application, ensuring full compliance with Swedish regulations
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Appointment Scheduling: We handle the booking of appointments with relevant authorities to streamline your application process.

                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Digital Access: Access your complete application file directly through our web portal or app, where you can view, download, and print all required documents with ease.

                        </p>
                      </li>
                    </ul>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      How
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      We Use the Information
                      </strong>
                    </h2>

                    
                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        We will evaluate your details to provide a clear assessment of your eligibility for relocating to Sweden.

                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        Our team will guide you through each step of the application process via the portal or app.

                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">
                        We’ll ensure you and your family meet all the requirements to successfully obtain residence in Sweden.

                        </p>
                      </li>
                    </ul>

                  
<br/>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Get
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Started
                      </strong>
                    </h2>
                    <br/>


                
                    <p className=" tw-text-gray">
                    Use the eligibility tool on our web portal or app to take the first step toward relocating to Sweden with your long-term EU residence permit, ensuring a smooth and seamless experience for both you and your family!

                    </p>
                  </div>




                  <div>
                  {/* <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                  <h5 className=" tw-text-black  ">Personal Details</h5>

                  <h6 className=" tw-text-black ">
                    {" "}
                    <i class="fa fa-user"> </i>FILL UP THE PERSONAL DETAILS 
                  </h6>
                </div> */}
                    <Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      // setUsers={setUsers}
                    />

                    {/* <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        <div className="col-md-6 tw-pt-4">
                          <Input placeholder={'You Full Name'} star={'*'} className={' tw-w-full border tw-rounded-lg  tw-py-3.5 tw-px-3'} label={'Full Name'} />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input placeholder={'Contact No with Country'} star={'*'} className={' tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg'} label={'Contact No'} />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input placeholder={'your Address'} star={'*'} className={' tw-w-full border tw-py-3.5  tw-px-3 tw-rounded-lg'} label={'Your Email'} />
                        </div>
                      </div>
                    </form> */}
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                  

                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        
                      <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                      Main Applicant Assesment
                      </strong>
                    </h2>
                        <div className="col-md-6 tw-pt-4">


                          <label className=" tw-text-sm  tw-text-gray ">Select Citizenship</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2" value={location} name="location" onChange={handleSelectChange}>
                            <option>Select Citizenship</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Do you have permanent Residence?</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option value="">Select Country</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                          </select>
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Do you have job offer in Sweden?</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option value="">Do you have job offer in Sweden?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div className="col-md-12 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Do you want to start your own business in Sweden?</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option value="">Do you want to start your own business in Sweden?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div className="col-md-12 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Are you already moved to Sweden or planning to move in coming 90 Days Period?</label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Are you already moved to Sweden or planning to move in coming 90 Days Period?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                  

                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        
                      <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                      Fill in your
                    </span>

                    <h2 className="tw-text-left">
                      <strong>
                     Family Assessment
                      </strong>
                    </h2>
                        
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">Do you want to move to Sweden with family?</label>
                          <select name="assesment_family" value={assesment_family} onChange={handleSelectChange} className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Do you want to move to Sweden with family?</option>
                            <option value={'yes'}>Yes</option>
                            <option value={'no'}>No</option>
                          </select>
                        </div>

                        {assesment_family === 'yes' && (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Do you have marriage certificate?</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Do you have marriage certificate?</option>
                                <option value={'yes'}>Yes</option>
                                <option value={'no'}>No</option>
                              </select>
                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Is your marriage registered in your home country?</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Is your marriage registered in your home country?</option>
                                <option value={'yes'}>Yes</option>
                                <option value={'no'}>No</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">Do you have family registration certificate?</label>
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Do you have family registration certificate?</option>
                                <option value={'yes'}>Yes</option>
                                <option value={'no'}>No</option>
                              </select>
                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">How many children do you have?</label>
                              <select name="personalStatus" value={personalStatus} onChange={handleSelectChange} className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>How many children do you have?</option>
                                <option value={'N/A'}>N/A</option>
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'3'}>3</option>
                                <option value={'4'}>4</option>
                                <option value={'5'}>5</option>
                                <option value={'6'}>6</option>
                                <option value={'7'}>7</option>
                                <option value={'8'}>8</option>
                              </select>
                            </div>

                            {personalStatus === '1' || personalStatus === '2' || personalStatus === '3' || personalStatus === '4' || personalStatus === '5' ? (
                              <>
                                <div className="col-md-6 tw-pt-4">
                                  <label className=" tw-text-sm  tw-text-gray ">Do you have birth certificates for childrens?</label>
                                  <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                    <option>Do you have birth certificates for childrens?</option>
                                    <option value={'yes'}>Yes</option>
                                    <option value={'no'}>No</option>
                                  </select>
                                </div>
                              </>
                            ) : null}
                          </>
                        )}
                      </div>
                    </form>
                  </div>

                  <Button onClick={openModal} label={'Submit'} className={'  tw-w-full tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10'} />
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="   md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4 tw-relative">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data?.map((item, index) => {
                    return (
                      <Link to={`${item?.Link}`} className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">{item?.title}</p>
                        <GoTriangleRight className="tw-text-gray" />
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Long_term_eu_status_assessment;
