// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Navbar = () => {
//   return (
//     <Nav>
//       <Logo>
//         <Link to="/" style={{color:"white", fontSize:"25px", marginLeft:"50px"}}>Home</Link>
//       </Logo>
//       <Menu>
//         <MenuItem>
//           <Link to="/userprofilelogin" style={{color:"white", fontSize:"25px",marginRight:"50px"}}>Login</Link>
//           {/* <Link to="/cart" style={{color:"white", fontSize:"25px",marginRight:"50px"}}>Cart</Link> */}

//         </MenuItem>
//       </Menu>
//     </Nav>
//   );
// };

// const Nav = styled.nav`
// background: rgb(31, 26, 58);
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 30px;
// `;

// const Logo = styled.div`
//   a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 20px;
//   }
// `;

// const Menu = styled.ul`
//   list-style-type: none;
//   display: flex;
// `;

// const MenuItem = styled.li`
//   margin-left: 20px;

//   a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 16px;
//   }
// `;

// export default Navbar;

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
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li style={{ color: "white" , fontSize:"20px"}}>Home</li>
                    </Link>

                    <Link to="/userprofilelogin" style={{color:"white", fontSize:"20px",marginLeft:"60%", textDecoration:"none"}}>Login</Link>

                    
       
                    Date & Time : {currentTime.toLocaleString()}
                    
                </ul>
            </div>
        </>
    )
}

export default Navbar;
