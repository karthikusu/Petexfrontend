import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function User(){

    const [patient, setpatient] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9001/petex/getAll");
                setpatient(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    
const deleteDataById = async (vendorId) => {
    try {
      const response = await fetch(`http://localhost:9001/petex/delete/${vendorId}`, {
        method: 'DELETE',
        
      });
  

      if (response.ok) {
        alert(`Record with ID ${vendorId} deleted successfully`);
        // Reload the page after 2 seconds
        setTimeout(() => {
            window.location.reload();
        }, 200);
    } else {
        console.error(`Failed to delete record with ID ${vendorId}`);
    }
    } catch (error) {
      console.error('Error deleting record:', error);
      throw error;
    }
  };
return(
    <>       
        <div className="container" style={{marginLeft:"0px", marginTop:"0%"}}>
        <div className="table-responsive">
        <table className="table table-striped table-hover">
        <thead>
        <tr>              
    
        <th style={{ color: "black" }} scope="col">USER_ID</th>
        <th style={{ color: "black" }} scope="col">ESTABLISHMENT_NAME</th>
        <th style={{ color: "black" }} scope="col">CONTACT_PERSON</th>
        <th style={{ color: "black" }} scope="col">ADDRESS</th>
        <th style={{ color: "black" }} scope="col">MOBILE_NUMBER</th>
        <th style={{ color: "black" }} scope="col">ALTERNATIVE_MOBILE_NUMBER</th>
        <th style={{ color: "black" }} scope="col">EMAIL</th>
        <th style={{ color: "black" }} scope="col">PWD</th>
        <th style={{ color: "black" }} scope="col">CONFIRM_PWD</th>
        <th style={{ color: "black" }} scope="col">URL</th>
        <th style={{ color: "black" }} scope="col">TYPE_OF_VENDOR</th>
        <th style={{ color: "black" }} scope="col">FEATURED_LISTINGS</th>
        <th style={{ color: "black" }} scope="col">PAYMENT_MODES</th>
        <th style={{ color: "black" }} scope="col">ESTABLISHMENT_SINCE</th>
        <th style={{ color: "black" }} scope="col">SOCIAL_MEDIA</th>
        <th style={{ color: "black" }} scope="col">OTP</th>
        <th style={{ color: "black" }} scope="col">ACTION</th>
    </tr>
</thead>                                  
<tbody>
{patient.map((data, index) => (
<tr key={index}>
    <th scope="row">{index + 1}</th>
    <td key={`${index}-ESTABLISHMENT_NAME`}>{data.establishmentName}</td>
    <td key={`${index}-CONTACT_PERSON`}>{data.contactperson}</td>
    <td key={`${index}-ADDRESS`}>{data.address}</td>
    <td key={`${index}-MOBILE_NUMBER`}>{data.phno}</td>
    <td key={`${index}-ALTERNATIVE_MOBILE_NUMBER`}>{data.ALTERNATIVE_MOBILE_NUMBER}</td>
    <td key={`${index}-EMAIL`}>{data.email}</td>
    <td key={`${index}-PWD`}>{data.pwd}</td>
    <td key={`${index}-CONFIRM_PWD`}>{data.confirmPwd}</td>
    <td key={`${index}-URL`}>{data.url}</td>
    <td key={`${index}-TYPE_OF_VENDOR`}>{data.typeofvendor}</td>
    <td key={`${index}-FEATURED_LISTINGS`}>{data.featuredListings}</td>
    <td key={`${index}-PAYMENT_MODES`}>{data.paymentmodes}</td>
    <td key={`${index}-ESTABLISHMENT_SINCE`}>{data.estsince}</td>
    <td key={`${index}-SOCIAL_MEDIA`}>{data.socialmedia}</td>
    <td key={`${index}-OTP`}>{data.OTP}</td>
    <td><button type="submit" onClick={() => deleteDataById(data.vendorId)}>Delete</button></td>
     </tr>
    ))}
   </tbody>
  </table>
 </div>
</div>
</>
);
}