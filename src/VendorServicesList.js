import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListofServices = () => {
    const [serviceType, setServiceType] = useState('');
    const [dayCareData, setDayCareData] = useState([]);
    const [vendorDetails, setVendorDetails] = useState(null);
    const [bookingDetails, setBookingDetails] = useState([]);
    const [showBookingDetails, setShowBookingDetails] = useState(false);

    useEffect(() => {
        const storedVendorDetails = JSON.parse(localStorage.getItem('vendorDetails'));
        setVendorDetails(storedVendorDetails);
    }, []);

    const fetchDayCareData = async () => {
        try {
            const response = await axios.get(`http://localhost:9039/api/daycare/daycares/${serviceType}/${vendorDetails.vendorId}`);
            const dayCareDataWithBookings = await Promise.all(
                response.data.map(async (dayCare) => {
                    const bookingResponse = await axios.get(`http://localhost:9036/book/daycare/${dayCare.daycareId}`);
                    const bookingCount = bookingResponse.data.length || 0;
                    return { ...dayCare, bookingCount };
                })
            );
            setDayCareData(dayCareDataWithBookings);
        } catch (error) {
            console.error('Error fetching day care data:', error);
        }
    };

    const handleViewBookings = async (daycareId) => {
        try {
            const response = await axios.get(`http://localhost:9036/book/daycare/${daycareId}`);
            setBookingDetails(response.data);
            setShowBookingDetails(true);
        } catch (error) {
            console.error('Error fetching booking details:', error);
        }
    };

    const handleCloseBookingDetails = () => {
        setBookingDetails([]);
        setShowBookingDetails(false);
    };

    const handleChange = (e) => {
        setServiceType(e.target.value);
    };

    const handleButtonClick = () => {
        if (serviceType && vendorDetails) {
            fetchDayCareData();
        }
    };

    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px' }}>
            <h1 style={{ textAlign: 'center', color: '#4a86e8' }}>Day Care Page</h1>
            {vendorDetails && (
                <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <h2 style={{ color: '#4a86e8' }}>Vendor Details</h2>
                    <p style={{ marginBottom: '5px' }}><strong>Name:</strong> {vendorDetails.contactperson}</p>
                    <p style={{ marginBottom: '5px' }}><strong>Email:</strong> {vendorDetails.email}</p>
                    <p style={{ marginBottom: '5px' }}><strong>Phone:</strong> {vendorDetails.phno}</p>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <label style={{ marginRight: '10px' }}>
                    Service Type:
                    <select
                        name="serviceType"
                        value={serviceType}
                        onChange={handleChange}
                        style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ddd', width: '200px' }}
                    >
                        <option value="">Select</option>
                        <option value="Daycare">Daycare</option>
                        <option value="Grooming">Grooming</option>
                        <option value="Breeding">Breeding</option>
                        <option value="Nutrition">Nutrition</option>
                        <option value="Housing and Boarding">Housing and Boarding</option>
                        <option value="Training">Training</option>
                    </select>
                </label>
                <button
                    onClick={handleButtonClick}
                    style={{ padding: '5px 20px', backgroundColor: '#4a86e8', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Fetch Data
                </button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Pet Type</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Service Cost</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Location</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Description</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Booking Count</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>View Bookings</th>
                    </tr>
                </thead>
                <tbody>
                    {dayCareData.map((dayCare) => (
                        <tr key={dayCare.daycareId}>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{dayCare.petType}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{dayCare.serviceCost}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{dayCare.location}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{dayCare.description}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{dayCare.bookingCount}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                                <button onClick={() => handleViewBookings(dayCare.daycareId)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showBookingDetails && (
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ textAlign: 'center' }}>Booking Details</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Booking ID</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>From Date</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>To Date</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Address</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}><button onClick={handleCloseBookingDetails}>Close</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingDetails.map((booking) => (
                                <tr key={booking.bookId}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{booking.bookId}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{booking.formDate}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{booking.toDate}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{booking.address}</td>
                                  
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ListofServices;
