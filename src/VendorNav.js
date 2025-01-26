import React from "react";
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';


function Navbar() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
    
      return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="sticky-navbar" >
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                    width: "100%",
                    height: "10vh",
                    color: "white",
                    backgroundColor: "rgb(106, 110, 168)",
                    borderRadius: "0px", // Adding border radius
                    padding: "0 20px", // Adding padding for better spacing
                    justifyContent: "space-between", // Aligning items evenly
                    alignItems: "center" // Aligning items vertically
                }}>
                    <Link to="/vendordashboard" style={{textDecoration:"none"}}>
                        <li style={{ color: "white" }}>Home</li>
                    </Link>
                    
       
                    Date & Time : {currentTime.toLocaleString()}
                    
                </ul>
            </div>
        </>
    )
}

export default Navbar;
