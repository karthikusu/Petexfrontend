import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Sidebar from './Sidebar';
// import './History.css';

function History() {
    const [adoptions, setAdoptions] = useState([]);

    useEffect(() => {
        fetchAdoptions();
    }, []);

    const fetchAdoptions = async () => {
        try {
            const response = await axios.get('http://localhost:9008/petex/orders');
            setAdoptions(response.data);
        } catch (error) {
            console.error('Error fetching adoptions:', error);
        }
    };

    return (
        <>
        {/* <Sidebar/> */}
        <div style={{ marginLeft : "0%"}}>
            <h2 style={{ textAlign : "center"}}>List of Adoptions</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >Pet Name</th>
                        <th>User Name</th>
                        <th>Email Address</th>
                        <th>Password</th>
                        <th>Contact Number</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {adoptions.map(adoption => (
                        <tr key={adoption.Id}>
                            <td>{adoption.Id}</td>
                            <td>{adoption.petname}</td>
                            <td>{adoption.userName}</td>
                            <td>{adoption.emailaddress}</td>
                            <td>{adoption.password}</td>
                            <td>{adoption.contactNumber}</td>
                            <td>{adoption.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default History;
