import React from "react";
import { Link } from "react-router-dom";
import Home from "./components/Home";

function Aheader(props) {
    return (
        <div className='flex shopping-card' style={{backgroundColor : "darkmagenta"}}>
            <Link to="Home"style={{ color : "white"}}><div>Home</div></Link>
            <div onClick={() => props.handleShow(false)} style={{ color : "white"}} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)} style={{ color : "white"}}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Aheader;