import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9003/petex/login', { email, password });
      if (response.status === 200) {
        window.alert('Successfully Login');
        navigate('/admindashboard'); // Redirect to dashboard or home page
      } else {
        
        setError('Invalid email or password');
      }
    } catch (error) {
      window.alert('Login Failed! Check email and password!');
      setError('Error logging in');
    }
  };

  return (
    <>
      <section className='section-admin' style={{ backgroundImage:"url('https://c4.wallpaperflare.com/wallpaper/981/204/987/simple-background-wallpaper-preview.jpg')",backgroundSize:"cover", height:"100vh", width:"100%", position:"fixed" }}>
        <div className="box-signup" style={{ width: "35%" }}>
          <div className="container-driver" style={{ marginLeft: "20%" }}>
            <div className="form-driver" >
              <div className="inputBox" >
                <form onSubmit={handleSubmit}
                  style={{ height: "300px", width: "400px", borderColor: " black", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)", borderRadius: "8px", backgroundColor: "transparent", marginTop: "40%", marginLeft: "100%" }}>
                  <h2 style={{ color: "wheat", marginLeft: "0%" }}> ADMIN LOGIN</h2> <br />
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      style={{ height: "5vh", width: "80%", marginLeft: "10%", marginTop: "-20%" }}
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="password"
                      name="pwd"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ height: "5vh", width: "80%", marginTop: "20px", marginLeft: "10%" }}
                    />
                  </div>
                  <div className="inputBox" style={{ marginLeft: "10%", width: "30%" }}>
                    <p style={{ marginLeft: "-8%", marginRight: "-150%" }}><Link to="/forgetadmin"
                      style={{ textDecoration: "none", color: "black", cursor: "pointer" }}>Forgot Password?</Link></p> <br />
                    <input type="submit" value="Login"
                      style={{ height: "35px", width: "100%", borderRadius: "6px", backgroundColor: "red", borderColor: "transparent", cursor: "pointer", marginTop:"-10%" }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adminlogin;
