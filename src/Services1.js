import React, { useState } from 'react';
import Calendar from './Calendar'; // Assuming you have a Calendar component
// import './Service.css'; // Assuming you have a CSS file for styling

const Services1 = () => {
    // State to manage booked slots
    const [bookedSlots, setBookedSlots] = useState([]);

    // Function to handle booking a slot
    const bookSlot = (date, time) => {
        const newBookedSlot = { date, time };
        setBookedSlots([...bookedSlots, newBookedSlot]);
    };

    // Function to check if a slot is available
    const isSlotAvailable = (date, time) => {
        const slot = bookedSlots.find(slot => slot.date === date && slot.time === time);
        return !slot;
    };

    return (
        <div className="service-container">
            <h1>Doctor Appointment Booking</h1>
            <Calendar
                bookSlot={bookSlot}
                isSlotAvailable={isSlotAvailable}
            />
        </div>
    );
};

export default Services1;
