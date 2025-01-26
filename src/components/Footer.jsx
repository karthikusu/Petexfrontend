import React, { useState } from 'react';
import FooterStyle from './footerstyle.css';
import x from '../assets/x.png';
import fb from '../assets/fb.png';
import whatsap  from '../assets/whatsap.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import linkedin from '../assets/linkedin.png';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    // Here you can implement the logic for subscribing the user
    // For now, let's just set subscribed to true
    setSubscribed(true);
    // You can also add logic to refresh the footer section here
  };

  return (
    <div className="footer">
      <div className="footer-container" style={{marginLeft:"10%"}}>
        {/* Quick Links */}
        <div className="footer-column">
          <h3 style={{color:"white", marginTop: "20px"}}>LEARN MORE</h3>
          <ul >
            <li><a href="/contactus" style={{textDecoration:"none", color:"white"}}>Contact Us</a></li>
            <li><a href="/terms" style={{textDecoration:"none", color:"white"}}>Terms and Conditions</a></li>
            {/* <li><a href="#" style={{textDecoration:"none", color:"white"}}>Promotion Cashback</a></li> */}
            {/* <li><a href="#" style={{textDecoration:"none", color:"white"}}>Track your order</a></li> */}
            <li><a href="/privacyandpolicy" style={{textDecoration:"none", color:"white"}}>Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{color:"white", marginTop: "20px"}}>EXPLORE</h3>
          <ul >
          <li><a href="/aboutus" style={{textDecoration:"none", color:"white"}}>About Us</a></li>
          <li><a href="/experiencecenter" style={{textDecoration:"none", color:"white"}}>Experience Center</a></li>
          <li><a href="/knowledgecenter" style={{textDecoration:"none", color:"white"}}>Knowledge Center</a></li>
          {/* <li><a href="#" style={{textDecoration:"none", color:"white"}}>In the news</a></li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{color:"white", marginTop: "20px"}}>SERVICES</h3>
          <ul >
            <li><a href="/userprofilelogin" style={{textDecoration:"none", color:"white"}}>Pet Grooming</a></li>
            <li><a href="/userprofilelogin" style={{textDecoration:"none", color:"white"}}>Vet Consultation</a></li>
            <li><a href="/userprofilelogin" style={{textDecoration:"none", color:"white"}}>Training</a></li>
          </ul>
        </div> 
      </div>

      <div className='row' style={{ marginLeft: "57%" }}>
  <div className='col-md-6'>
    <div>
      <h6 style={{ color: 'white', marginLeft: '-500px', marginTop: '10px' }}>
        SUBSCRIBE TO GET UPDATES
      </h6>
      <input
  type="text"
  placeholder="Enter your email"
  style={{ height: '30px', width: '80%', maxWidth: '250px', marginLeft: '-500px', marginTop: '10px' }}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
      <button
        type='submit'
        style={{ backgroundColor: 'red', borderRadius: '5px', marginLeft: '10px', borderColor: 'transparent' }}
        onClick={handleSubscription}
      >
        Send
      </button>
      {subscribed && <p style={{ color: 'white', marginLeft: '-500px' }}>You are successfully subscribed!</p>}
      <p style={{ color: 'white', marginLeft: '-500px' }}>Reach us: support@petex.com</p>
    </div>
  </div>
  <div className='col-md-6'>
  <div>
    <h3 style={{ color: "white", marginLeft: "-250px", fontStyle: "italic" }}>CONNECT WITH US</h3>
    {/* Replace "#" with the actual URLs of your social media pages */}
    <a href="https://www.whatsapp.com"><img src={whatsap} alt="Whatsapp" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "-250px" }} /></a>
    <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
    <a href="https://www.facebook.com"><img src={fb} alt="Facebook" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
    <a href="https://twitter.com"><img src={x} alt="Twitter" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
    <a href="https://www.linkedin.com"><img src={linkedin} alt="linkedin" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
    <a href="https://www.youtube.com"><img src={youtube} alt="youtube" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
    <p style={{ color: "white", marginLeft: "-250px", marginTop:"10px" }}>&copy; 2024 Petex.com. All rights reserved.</p>
  </div>
</div>

</div>


    </div>
  
  );
}

export default Footer;
