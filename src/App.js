// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login'; 
import Register from './components/Registration';
import Home from './components/Home'; 
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser2';
import ForgetPassword from './components/ForgetPassword';
import ConfirmPassword from './components/ConfirmPassword';
import ValidateOTP from './components/ValidateOTP';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NavigationBar" element={<NavigationBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/confirmpassword" element={<ConfirmPassword/>}/>
          <Route path="/validateotp" element={<ValidateOTP/>}/>
          {/* Uncomment the line below if you have a component for UserList */}
          {/* <Route path="/listuser" element={<UserList />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

