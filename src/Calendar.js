import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navpet from "./Navpet";
import './Calendar.css'; // Assuming you have a CSS file for styling

const Calendar = ({ bookSlot, isSlotAvailable }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const navigate = useNavigate();

    // Function to handle date selection
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime('');
    };

    // Function to handle time selection
    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    // Function to book appointment
    const handleBookAppointment = () => {
        if (selectedTime) {
            bookSlot(selectedDate.toISOString().slice(0, 10), selectedTime);
            setBookingSuccess(true);
            setSelectedTime('');
            window.alert('Appointment booked successfully! Give few more details')
            navigate('/Drappointment/Booklogin'); // Redirect to home after successful booking
        }
    };

    // Function to generate time slots from 9 AM to 9 PM
    const generateTimeSlots = () => {
        const timeSlots = [];
        const startDate = new Date(selectedDate);
        startDate.setHours(9, 0, 0, 0); // Start at 9 AM

        const endDate = new Date(selectedDate);
        endDate.setHours(21, 0, 0, 0); // End at 9 PM

        const currentTime = new Date();
        while (startDate < endDate) {
            const slotTime = new Date(startDate);
            const disabled = startDate <= currentTime || !isSlotAvailable(selectedDate.toISOString().slice(0, 10), slotTime.toTimeString().slice(0, 5));
            const selected = slotTime.toTimeString().slice(0, 5) === selectedTime;
            timeSlots.push(
                <button
                    key={slotTime}
                    onClick={() => handleTimeSelection(slotTime.toTimeString().slice(0, 5))}
                    disabled={disabled || selected}
                    className={selected ? 'selected' : ''}
                >
                    {slotTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </button>
            );
            startDate.setHours(startDate.getHours() + 1); // Increment by 1 hour
        }
        return timeSlots;
    };

    // Logic to render date selection and time slots
    return (

        
        <div className="calendar-container">
            <Navpet/>
            <h2>Select Date:</h2>
            <input
                type="date"
                value={selectedDate.toISOString().slice(0, 10)} // Format date as YYYY-MM-DD
                onChange={(e) => handleDateChange(new Date(e.target.value))}
            />
            <h2>Select Time Slot:</h2>
            <div className="time-slots">
                {generateTimeSlots()}
            </div>
            <button onClick={handleBookAppointment} disabled={!selectedTime}>Book Appointment</button>
            {bookingSuccess && (
                <div className="success-message">
                    Appointment booked successfully!
                </div>
            )}
        </div>
    );
};

export default Calendar;
