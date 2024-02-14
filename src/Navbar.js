import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(

        <>
        <div>
        <ul style={{ display : "flex", listStyle : "none", width : "96%",height : "10vh", color : "white", backgroundColor : "blueviolet"}}>
            <Link to="Home1"><li style={{ marginRight : "10rem", marginTop : "7%", color : "white"}}>Home</li></Link>
            <li style={{ marginRight : "10rem", marginTop : "1%"}}>Aboutus</li>
            <Link to="/Login"><li style={{ marginRight : "10rem", color : "white", marginTop: "10%"}}>Login</li></Link>
            
        
        </ul>
        </div>
        </>
    )
}
export default Navbar;