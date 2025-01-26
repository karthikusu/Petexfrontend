import React from 'react';
// import './PrivacyPolicy.css'; // Import CSS file for styling

const PrivacyPolicy = () => {
  return (
    <>
    <style>
        {
            `
          

.privacy-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.privacy-content {
  display: flex;
  flex-direction: column;
}

.centered-text {
  text-align: center;
  margin-bottom: 20px;
}

.two-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.column {
  flex: 1;
  margin-right: 20px;
}

.column:last-child {
  margin-right: 0;
}

@media (max-width: 768px) {
  .two-column {
    flex-direction: column;
  }

  .column {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

            `
        }
    </style>
    <div className="privacy-container">
      <main className="privacy-content">
        <div className="centered-text">
          <h1>Privacy Policy</h1>
          <p>
          At Petex, we are committed to protecting the privacy and security of our users' personal information. We understand the importance of safeguarding your data and ensuring its confidentiality. Our privacy policy outlines how we collect, use, and protect your personal information when you interact with our website and services. Rest assured, your privacy is our top priority, and we strive to maintain the highest standards of data protection in accordance with applicable laws and regulations.
          </p>
        </div>
        <div className="two-column">
          <div className="column">
            <div><h2>Collection of Personal Information</h2>
            <p>
              When you use our website or services, we may collect certain personal information such as your name, email address, phone number, and address. This information is collected to facilitate the adoption process, provide pet services, and ensure the health and safety of your pets.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Protection of Personal Information</h2>
            <p>
              We employ industry-standard security measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Retention of Personal Information</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p></div>
          </div>
          <div className="column" style={{marginTop:"1%"}}>
            <div><h2>Use of Personal Information</h2>
            <p>
              We use the collected information to offer personalized services, process adoption requests, provide pet care advice, and improve our website and services. Your information may also be used to communicate with you about new offers, promotions, or important updates.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Disclosure to Third Parties</h2>
            <p>
              We may share your personal information with trusted third parties such as veterinary clinics, pet shelters, or delivery services to fulfill your requests and provide quality services. However, we do not sell or rent your personal information to third parties for marketing purposes.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Changes to Privacy Policy</h2>
            <p>
              We reserve the right to update or modify this privacy policy at any time. Any changes will be communicated to you through our website or via email.
            </p></div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default PrivacyPolicy;
