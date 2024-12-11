import React, { useState, useEffect } from "react";
import "./CookieModal.css";

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Consent");
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: false,
    preferences: false,
    statistics: false,
    marketing: false,
    unclassified: false,
  });

  useEffect(() => {
    // Check if cookies are already accepted
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    setShowModal(false);
  };

  const handleDeny = () => {
    setShowModal(false);
  };

  const handleTogglePreference = (key) => {
    setCookiePreferences((prevPreferences) => ({
      ...prevPreferences,
      [key]: !prevPreferences[key],
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Consent":
        return (
          <>
            <strong>This website uses cookies</strong>
            <p>
              We use cookies to personalise content and ads, to provide social
              media features and to analyse our traffic. We also share
              information about your use of our site with our social media,
              advertising and analytics partners who may combine it with other
              information that you’ve provided to them or that they’ve collected
              from your use of their services.
            </p>
          </>
        );
      case "Details":
        return (
          <div>
            {Object.keys(cookiePreferences).map((key) => (
              <div key={key} className="cookie-category">
                <div className="cookie-category-text">
                  <strong>{capitalizeFirstLetter(key)}</strong>
                  <p>{getCookieDescription(key)}</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={cookiePreferences[key]}
                    onChange={() => handleTogglePreference(key)}
                    disabled={key === "necessary"}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            ))}
          </div>
        );
      case "About":
        return (
          <>
            <strong>What are Cookies?</strong>
            <p>
              Cookies are small text files that can be used by websites to make
              a user's experience more efficient.
            </p>
            <br />
  
            <strong>Legal Requirements</strong>
            <p>
              The law states that we can store cookies on your device if they
              are strictly necessary for the operation of this site. For all
              other types of cookies we need your permission.
            </p>
            <br />
  
            <strong>Types of Cookies Used</strong>
            <p>
              This site uses different types of cookies. Some cookies are placed
              by third party services that appear on our pages.
            </p>
            <br />
  
            <strong>Change or Withdraw Consent</strong>
            <p>
              You can at any time change or withdraw your consent from the
              Cookie Declaration on our website.
            </p>
            <br />
  
            <strong>Privacy Policy</strong>
            <p>
              Learn more about who we are, how you can contact us, and how we
              process personal data in our Privacy Policy.
            </p>
          </>
        );
      default:
        return null;
    }
  };
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getCookieDescription = (key) => {
    switch (key) {
      case "necessary":
        return "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.";
      case "preferences":
        return "Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.";
      case "statistics":
        return "Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.";
      case "marketing":
        return "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.";
      case "unclassified":
        return "Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.";
      default:
        return "";
    }
  };

  return (
    showModal && (
      <div className="cookie-modal">
        <div className="cookie-modal-content">
          <div className="tabs">
            <button
              className={activeTab === "Consent" ? "active" : ""}
              onClick={() => setActiveTab("Consent")}
            >
              Consent
            </button>
            <button
              className={activeTab === "Details" ? "active" : ""}
              onClick={() => setActiveTab("Details")}
            >
              Details
            </button>
            <button
              className={activeTab === "About" ? "active" : ""}
              onClick={() => setActiveTab("About")}
            >
              About
            </button>
          </div>
          <div className="tab-content">{renderTabContent()}</div>

          {/* Button Container for Centered Alignment */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
  className="accept-btn"
  onClick={handleDeny}
  style={{
    marginRight: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#e0e0e0",
    border: "none",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#d0d0d0"; // Darken background on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#e0e0e0"; // Revert background when not hovering
  }}
>
  Deny
</button>

<button
  className="accept-btn"
  onClick={handleAccept}
  style={{
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#0056b3"; // Darken background on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#007bff"; // Revert background when not hovering
  }}
>
  OK
</button>

          </div>
        </div>
      </div>
    )
  );
};

export default CookieModal;
