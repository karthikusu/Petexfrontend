import React from "react";
import Navpet from "./Navpet";
import { Link } from "react-router-dom";

function Services(){
    return(

        <>
        <Navpet/>

        <div>
            <img src="https://images.pexels.com/photos/14084426/pexels-photo-14084426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width : "100%", borderRadius : "1rem", marginTop : "1%"}} alt=".."/>
        </div>
        </>
    )
}
export default Services;