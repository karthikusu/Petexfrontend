import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div>
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                    width: "100%",
                    height: "10vh",
                    color: "white",
                    backgroundColor: "darkmagenta",
                    borderRadius: "10px", 
                    padding: "0 20px", 
                    justifyContent: "space-between",
                    alignItems: "center" 
                }}>
                    <Link to="Home1">
                        <li style={{ color: "black" }}>Home</li>
                    </Link>
                    <li>Aboutus</li>
                    <Link to="/userlogin">
                        <li style={{ color: "black" }}>Login</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
