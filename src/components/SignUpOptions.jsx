import React from 'react'
import { Link } from 'react-router-dom'

export const SignUpOptions = () => {
  return (
    <>
  <div style={{textAlign:"center", background:'linear-gradient(rgb(255, 227, 255), rgb(232, 255, 239),rgb(153, 213, 255)', height:"100vh", position:"fixed", width:"100%"}}>
    <div style={{marginTop:"100px", textAlign:"center", backgroundColor:"transparent", width:"400px", height:"250px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)", marginLeft:"35%", position:"fixed", borderRadius:"8px"}}>
        <h3 style={{marginTop:"60px"}}>Do you want to SignUp as ?</h3>
        <p>
        <Link to="/userregister" style={{textDecoration:"none", color:"black"}}>User</Link></p>
        <p>
        <Link to="/vendorregister" style={{textDecoration:"none", color:"black"}}>Vendor</Link></p>
        <p>
        <Link to="/doctorregistration" style={{textDecoration:"none", color:"black"}}>Doctor</Link></p>
        
    </div>
  </div>
    </>
  )
}
