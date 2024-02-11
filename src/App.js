import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Assuming you have a NavigationBar component
import Login from './components/Login'; 
import Register from './components/Registration';
import Home from './components/Home'; // Assuming Home.jsx is in the same directory

function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
      
        <Route path="/"  element={<Home/>}/>
        <Route path="/NavigationBar" element={<NavigationBar/>}/> 
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          {/*<Route path="/doctormodule" element={<DoctorModule />}/> */}
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
