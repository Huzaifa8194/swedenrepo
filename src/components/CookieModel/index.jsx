import React, { useState, useEffect } from 'react';
import './CookieModal.css';

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('Consent');

  useEffect(() => {
    // Check if cookies are already accepted
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', true);
    setShowModal(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Consent':
        return (
            <>

<strong>This website uses cookies</strong>
<p>
We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.

</p>


         
          </>
        );
      case 'Details':
        return (
          <div>
            <strong>Necessary</strong>
            <p>
              Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>
            <strong>Preferences</strong>
            <p>
              Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
            </p>
          </div>
        );
      case 'About':
        return (
            <>
            <p>
            Cookies are small text files that can be used by websites to make a user's experience more efficient.
            </p>
  
            <br/>
  
            <p>
              The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.
            </p>
            <br/>
  
            <p>
            This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.
            </p>
            <br/>
            <p>
            You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>
           <br/>
            <p>
            Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
            </p>
           </>
        );
      default:
        return null;
    }
  };

  return (
    showModal && (
      <div className="cookie-modal">
        <div className="cookie-modal-content">
          <div className="tabs">
            <button
              className={activeTab === 'Consent' ? 'active' : ''}
              onClick={() => setActiveTab('Consent')}
            >
              Consent
            </button>
            <button
              className={activeTab === 'Details' ? 'active' : ''}
              onClick={() => setActiveTab('Details')}
            >
              Details
            </button>
            <button
              className={activeTab === 'About' ? 'active' : ''}
              onClick={() => setActiveTab('About')}
            >
              About
            </button>
          </div>
          <div className="tab-content">{renderTabContent()}</div>
          <button className="accept-btn" onClick={handleAccept}>
            OK
          </button>
        </div>
      </div>
    )
  );
};

export default CookieModal;
