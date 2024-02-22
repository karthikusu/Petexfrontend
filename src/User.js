import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


export default function User(){

    const [patient, setpatient] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9000/api/users/getAlluser");
                setpatient(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount


    
    
const deleteDataById = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/api/users/delete/${userId}`, {
        method: 'DELETE',
        
      });
  

      if (response.ok) {
        alert(`Record with ID ${userId} deleted successfully`);
        // Reload the page after 2 seconds
        setTimeout(() => {
            window.location.reload();
        }, 200);
    } else {
        console.error(`Failed to delete record with ID ${userId}`);
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
                    <th style={{color:"black",  backgroundColor:"yellowgreen"}} scope="col">SNO</th>
                    <th style={{color:"black",  backgroundColor:"yellowgreen"}} scope="col">PETTYPE</th>
                    <th style={{color:"black",  backgroundColor:"yellowgreen"}}scope="col">PETNAME</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">SPECIES</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">AGE</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">GENDER</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">WEIGHT</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">HEIGHT</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">COLOR</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">DISEASE</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">VACCINATED</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">FULLNAME</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">EMAIL</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}} scope="col">PASSWORD</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">PHONENUMBER</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">CITY</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">DELETE</th>
                    <th style={{color:"black", backgroundColor:"yellowgreen"}}scope="col">Update</th>


                </tr>
                </thead>
                <tbody>
                 {patient.map((data, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td style={{color:"skyblue"}} key={`${index}-patientname`}>{data.petType}</td>
                                                    <td key={`${index}-referaldoctorName`}>{data.petname}</td>
                                                    <td key={`${index}-hospitalname`}>{data.species}</td>
                                                    <td key={`${index}-bookingdate`}>{data.age}</td>
                                                    <td key={`${index}-slotime`}>{data.gender}</td>
                                                    <td key={`${index}-typeofServices`}>{data.vaccinated}</td>
                                                    <td key={`${index}-typeofServices`}>{data.weight}</td>
                                                    <td key={`${index}-typeofServices`}>{data.height}</td>
                                                    <td key={`${index}-typeofServices`}>{data.color}</td>
                                                    <td key={`${index}-typeofServices`}>{data.disease}</td>

                                                    <td key={`${index}-typeofServices`}>{data.fullname}</td>
                                                    <td key={`${index}-typeofServices`}>{data.email}</td>
                                                    <td key={`${index}-typeofServices`}>{data.pwd}</td>
                                                    <td key={`${index}-typeofServices`}>{data.phno}</td>

                                                    <td key={`${index}-typeofServices`}>{data.city}</td>
                                                    <td><button style={{borderRadius:"9px",backgroundColor:"seagreen", marginBottom:"10px"}} type="submit"onClick={()=>deleteDataById(data.userId)} >Delete</button></td>
                                                    <Link to={`/update/${User.id}`} ><button style={{borderRadius:"6px", backgroundColor:"blue", marginTop:"8px"}}>Update</button></Link> {/* Button to navigate to update */}


                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                
                   


</>
);
}