import React from 'react';
// import './TermsAndConditions.css'; // Import CSS file for styling

const TermsAndConditions = () => {
  return (
    <>
    <style>
        {
            `
           

.terms-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.terms-content {
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
    <div className="terms-container">
      <main className="terms-content">
        <div className="centered-text">
          <h1>Terms and Conditions</h1>
          <p>
            By accessing and using the Petex website, you agree to comply with the following terms and conditions:
          </p>
          <p>
            Petex is dedicated to providing a safe and enjoyable experience for all users. By using our website, you agree to abide by our terms, which include respecting the rights of other users, refraining from abusive or inappropriate behavior, and complying with all applicable laws and regulations. We reserve the right to suspend or terminate your account if you violate these terms or engage in any conduct that we deem harmful to our community. Additionally, please be aware that the information provided on our website is for informational purposes only and should not be considered as professional advice. We encourage you to consult with qualified professionals for any specific concerns regarding pet care, adoption, or related matters.
          </p>
        </div>
        <div className="two-column">
          <div className="column">
            {/* <div><h2>Acceptance of Terms</h2>
            <p>
              These terms and conditions govern your use of the Petex website and all services provided therein. By accessing or using the website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not access or use the website.
            </p></div> */}
            <div style={{width:"80%"}}><h2>Use of Services</h2>
            <p>
              Our website and services are intended for individuals who are at least 18 years old or the legal age in their jurisdiction. By using our services, you represent that you meet these requirements. You may use our services only for lawful purposes and in accordance with these terms and conditions.
            </p></div>
            <div style={{width:"80%", marginLeft:"1%"}}><h2>User Accounts</h2>
            <p>
              In order to access certain features of the website or use certain services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Prohibited Activities</h2>
            <p>
              You agree not to engage in any of the following prohibited activities: 
              <ul>
                <li>Violating any applicable laws, regulations, or third-party rights</li>
                <li>Using the website or services for any illegal or unauthorized purpose</li>
                <li>Interfering with or disrupting the integrity or performance of the website or services</li>
                <li>Attempting to gain unauthorized access to the website or services or to any user accounts</li>
              </ul>
            </p></div>
          </div>
          <div className="column" style={{marginTop:"1%"}}>
            <div><h2>Intellectual Property</h2>
            <p>
              All content and materials on the Petex website, including logos, graphics, and text, are owned or licensed by us and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Limitation of Liability</h2>
            <p>
              Petex shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or services. This includes damages for loss of profits, goodwill, use, data, or other intangible losses.
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Governing Law and Jurisdiction</h2>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the laws of [Your Country]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
            </p></div>
            <div style={{marginLeft:"2%"}}><h2>Changes to Terms and Conditions</h2>
            <p>
              We reserve the right to update or modify these terms and conditions at any time without prior notice. Any changes will be effective immediately upon posting on the website. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.
            </p></div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default TermsAndConditions;
