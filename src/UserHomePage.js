// DoctorProfile.js

import React, { useState, useEffect } from 'react';
import { Button, Divider, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import Services from './UserServices';
import DrAppointment from './UserDoctorDetailsBooking';
import Daycare from './Daycare';
import img from './assets/rabit.mp4';
import db from './assets/Dogbeds.jpg';
import dt from './assets/healthcare.jpeg';
import toys from './assets/kong.jpg';
import cloths from './assets/petcloths.jpg';
import BG2 from './Loginbg.png';
import History from './History';
import Training from './Training22';
import Assistance from './UserAssistance';
import UserPets from './UserPets';
import UserItems from './UserItems';
import VaccinationForm from './VaccinationForm';

export const DoctorProfile = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setLoggedIn(true);
    } else {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        setLoggedIn(true);
      }
    }

  const intervalId = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'UserItems':
        return <UserItems />;
      case 'UserPets':
        return <UserPets />;
      case 'Assistance':
        return <Assistance />;
      case 'Services':
        return <Services />;
      case 'Appointment':
        return <DrAppointment />;
      case 'Daycare':
        return <Daycare />;
      case 'Training':
        return <Training />;
      case 'History':
        return <History />;
      // case 'VaccinationForm':
      //   return <VaccinationForm />;
      default:
        return null;
    }
  };

  const doUserLogIn = async () => {
    const usernameValue = email;
    const pwdValue = pwd;
    try {
      const response = await fetch('http://localhost:9000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: usernameValue, pwd: pwdValue }),
      });

      if (!response.ok) {
        throw new Error('Login failed: Unexpected response');
      }

      const userData = await response.json();

      if (userData && userData.email && userData.fullname) {
        alert('Login successful!');
        setCurrentUser(userData);
        setLoggedIn(true);
        localStorage.setItem('currentUser', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');
        return true;
      } else {
        console.error('Login failed: Unexpected response data', userData);
        alert('Login failed: Unexpected response data');
        return false;
      }
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const doUserLogOut = async () => {
    try {
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
      setLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div style={{ background: "linear-gradiant(rgb(161, 75, 227),rgb(161, 227, 213))" }}>
      <div className="header">
      </div>
      {loggedIn ? (
        <>
         <div style={{ display: 'flex', flexDirection: 'row', height: "auto", width:"auto" }}>

  <div className="sidebar" style={{ background: "rgb(89, 163, 181)", borderRadius: "0px", width: "15%", padding: "20px",  height:"auto",  }}>
    <ul style={{ listStyleType: 'none', padding: "0px", margin: "0px" }}>
      <h2 style={{ marginTop: "5%" }}>Welcome!</h2>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('Home')} style={{ textDecoration: "none", color: "black" }}>Home</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('UserItems')} style={{ textDecoration: "none", color: "black" }}>Items</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('UserPets')} style={{ textDecoration: "none", color: "black" }}>Pet Types</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('Assistance')} style={{ textDecoration: "none", color: "black" }}>Assistance</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('Services')} style={{ textDecoration: "none", color: "black" }}>Services</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('Appointment')} style={{ textDecoration: "none", color: "black" }}>Book Appointment</a></li>
      <li style={{ marginTop: "20%" }}><a href="/vaccinationform" onClick={() => handleOptionClick('VaccinationForm')} style={{ textDecoration: "none", color: "black" }}>Vaccination</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('Daycare')} style={{ textDecoration: "none", color: "black" }}>Daycare</a></li>
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('Training')} style={{ textDecoration: "none", color: "black" }}>Training</a></li>

      {/* <li style={{ marginTop: "20%" }}><a href="/reportlostform" onClick={() => handleOptionClick('ReportLost')} style={{ textDecoration: "none", color: "black" }}>Report Lost</a></li> */}
      <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('History')} style={{ textDecoration: "none", color: "black" }}>History</a></li>
      <div className="form_buttons">
        <Button
          onClick={doUserLogOut}
          type="primary"
          className="form_button"
          color={'#208AEC'}
          size="large"
          style={{ marginTop: "10%" }}
        >
          Log Out
        </Button>
      </div>
    </ul>
  </div>
  <div>
  <div>
  {(selectedOption === null || selectedOption === 'Home') && (
    <div style={{ backgroundColor: "rgb(173, 132, 145)", borderRadius: "8px", width: "345%", padding: "20px", height:"110vh" }}>
      <h2 className="heading">{`Hello ${currentUser.fullname}!`}</h2>
      <p>{`Your ID:${currentUser.userId}`}</p>
      <p style={{marginLeft:"70%"}}>Date & Time : {currentTime.toLocaleString()}</p>
      <Divider />
    </div>
  )}
</div>

</div>

        <div>
            {renderSelectedOption()}</div>
          </div>
        </>
      ) : (
        <div style={{backgroundImage: `url(${BG2})`, height:"100vh", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
        <div className="container" style={{ width:"350px", height:"380px", marginLeft:"10%",borderRadius:"8px", marginTop:"8%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)", position:"fixed"}}>
          <h2 className="heading" style={{color:"white"}}>{'User Login'}</h2>
          <Divider />
          <div className="form_wrapper">
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="enter email"
              size="large"
              className="form_input"
            />
            <Input
              value={pwd}
              onChange={(event) => setPwd(event.target.value)}
              placeholder="Password"
              size="large"
              type="password"
              className="form_input"
              style={{marginTop:"2%"}}
            />
          </div>
          <div className="form_buttons">
            <Button
              onClick={doUserLogIn}
              type="primary"
              className="form_button"
              color={'#208AEC'}
              size="large"
              style={{marginTop:"5%"}}
            >
              Log In
            </Button>
            <a href="/forgetpassword" style={{textDecoration:"none", color:"white"}}>Forget Password ?</a>
            <p style={{color:"white",marginTop:"2%"}}>Don't Have An Account ?</p>
            <a href="/userregister" style={{textDecoration:"none", color:"white",marginTop:"2%"}}>Register Here</a>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
