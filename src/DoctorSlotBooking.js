// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// import './Drpriya.css';
// function PetInfoForm1() {
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [unavailableSlots, setUnavailableSlots] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [allTimeSlots] = useState([
//     "10:00 AM", "10:20 AM", "10:40 AM",
//     "11:00 AM", "11:20 AM", "11:40 AM",
//     "12:00 PM", "12:20 PM", "12:40 PM",
//     "2:00 PM", "2:20 PM", "2:40 PM",
//     "3:00 PM", "3:20 PM", "3:40 PM",
//     "4:00 PM", "4:20 PM", "4:40 PM",
//     "5:00 PM", "5:20 PM"
//   ]);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const [petName, setPetName] = useState("");
//   const [petBreed, setPetBreed] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userMobileNumber, setUserMobileNumber] = useState("");
//   const [petDescription, setPetDescription] = useState("");
//   const navigate=useNavigate();
//   useEffect(() => {
//     async function fetchBookedSlotsdata() {
//       try {
//         const response = await axios.get("http://localhost:9009/api/v1/checkAvailability", {
//           params: { date: selectedDate }
//         });

//         const availableSlots = response.data;
//         setUnavailableSlots(availableSlots);

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     if (selectedDate) {
//       fetchBookedSlotsdata();
//     }
//   }, [selectedDate]);

//   const handleSlotClick = (clickedTime) => {
//     if (
//       !formSubmitted &&
//       !unavailableSlots.includes(clickedTime) &&
//       !bookedSlots.some(
//         (slot) => slot.time === clickedTime && slot.date === selectedDate
//       )
//     ) {
//       setSelectedTimeSlot(clickedTime);
//     }
//   };

//   const handleDateChange = (e) => {
//     e.preventDefault();
//     const selectedDate = e.target.value;
//     const currentDate = new Date().toISOString().split('T')[0];

//     if (selectedDate >= currentDate) {
//       setSelectedDate(selectedDate);
//     } else {
//       alert("Please select a future date");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     const pojoData = {
//       bookingDate: selectedDate,
//       bookingTime: selectedTimeSlot,
//       petName: petName,
//       petBreed: petBreed,
//       userEmail: userEmail,
//       userMobileNumber: userMobileNumber,
//       typeOfService: e.target.typeOfService.value,
//       petDescription: petDescription,
//     };

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:9009/api/v1/save', pojoData);
//       const res = response.data;

//       setBookedSlots((prevBookedSlots) => [...prevBookedSlots, res]);
//       setFormSubmitted(true);
//       setLoading(false);
//       e.target.reset();

//       if (res.statusCode === "OK") {
//         setUnavailableSlots([]);
//         setBookedSlots([]);
//        navigate('/Payment',{state:{pojoData}});
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setLoading(false);
//     }
//   };

//   const validateForm = () => {
//     if (!petName || !petBreed || !userEmail || !userMobileNumber || !petDescription) {
//       alert("All fields are required");
//       return false;
//     }

//     if (!validateEmail(userEmail)) {
//       alert("Invalid email format");
//       return false;
//     }

//     if (!validateMobileNumber(userMobileNumber)) {
//       alert("Invalid mobile number format");
//       return false;
//     }

//     return true;
//   };

//   const validateEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const validateMobileNumber = (mobileNumber) => {
//     const re = /^\d{10}$/;
//     return re.test(mobileNumber);
//   };


//   return (
//     <>
//      <div className="opconslut" style={{ border: "1px solid", width: "50%",  display: "inline-block" }}>
//         <form className="form-container" onSubmit={handleSubmit}>
//           <div className="form-group booking-date-container">
//             <label htmlFor="bookingDate">Booking Date:</label>
//             <input
//               type="date"
//               id="bookingDate"
//               name="bookingDate"
//               onChange={handleDateChange}
//             />
//           </div>

//          {allTimeSlots.map((time, index) => {
//             const isUnavailable =
//               unavailableSlots.includes(time) &&
//               bookedSlots.some(
//                 (slot) => slot.date === selectedDate && slot.time === time
//               );

//             return (
//               <label
//                 key={index}
//                 className={`time-slot ${
//                   isUnavailable
//                     ? "unavailable"
//                     : selectedTimeSlot === time
//                     ? "selected"
//                     : ""
//                 }`}
//               >
//                 <input
//                   type="radio"
//                   className="option-input radio"
//                   name="timeSlot"
//                   onChange={() => handleSlotClick(time)}
//                   disabled={isUnavailable}
//                   checked={selectedTimeSlot === time}
//                 />
//                 {time}
//               </label>
//             );
//           })}

//           <div className="form-group">
//             <label htmlFor="petName">Pet Name:</label>
//             <input type="text" id="petName" name="petName" onChange={(e) => setPetName(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="petBreed">Pet Breed:</label>
//             <input type="text" id="petBreed" name="petBreed" onChange={(e) => setPetBreed(e.target.value)} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="userEmail">User Email:</label>
//             <input type="email" id="userEmail" name="userEmail" onChange={(e) => setUserEmail(e.target.value)} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="userMobileNumber">User Mobile Number:</label>
//             <input type="tel" id="userMobileNumber" name="userMobileNumber" onChange={(e) => setUserMobileNumber(e.target.value)} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="typeOfService">Type of Service:</label>
//             <select id="typeOfService" name="typeOfService">
//               <option value="service">Select Consulting</option>
//               <option value="Online Consulting">Online Consulting</option>
//               <option value="Physical Consulting">Physical Consulting</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="petDescription">Pet Description:</label>
//             <textarea
//               id="petDescription"
//               name="petDescription"
//               defaultValue={""}
//               onChange={(e) => setPetDescription(e.target.value)}
//             />
//           </div>

//           <button type="submit" disabled={loading || formSubmitted || !selectedTimeSlot}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


// export default PetInfoForm1;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
import './Drpriya.css';

function PetInfoForm1() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [unavailableSlots, setUnavailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [allTimeSlots] = useState([
    "10:00 AM", "10:20 AM", "10:40 AM",
    "11:00 AM", "11:20 AM", "11:40 AM",
    "12:00 PM", "12:20 PM", "12:40 PM",
    "2:00 PM", "2:20 PM", "2:40 PM",
    "3:00 PM", "3:20 PM", "3:40 PM",
    "4:00 PM", "4:20 PM", "4:40 PM",
    "5:00 PM", "5:20 PM"
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchBookedSlotsdata() {
      try {
        const response = await axios.get("http://localhost:9009/api/v1/checkAvailability", {
          params: { date: selectedDate }
        });

        const availableSlots = response.data;
        setUnavailableSlots(availableSlots);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (selectedDate) {
      fetchBookedSlotsdata();
    }
  }, [selectedDate]);

  const handleSlotClick = (clickedTime) => {
    if (
      !formSubmitted &&
      !unavailableSlots.includes(clickedTime) &&
      !bookedSlots.some(
        (slot) => slot.time === clickedTime && slot.date === selectedDate
      )
    ) {
      setSelectedTimeSlot(clickedTime);
    }
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split('T')[0];

    if (selectedDate >= currentDate) {
      setSelectedDate(selectedDate);
    } else {
      alert("Please select a future date");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const pojoData = {
      bookingDate: selectedDate,
      bookingTime: selectedTimeSlot,
      petName: petName,
      petBreed: petBreed,
      userEmail: userEmail,
      userMobileNumber: userMobileNumber,
      typeOfService: e.target.typeOfService.value,
      petDescription: petDescription,
    };

    try {
      setLoading(true);
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (!userDetails || !userDetails.userId) {
          throw new Error('User details not found');
      }
  
      const userId = userDetails.userId;
      const response = await axios.post(`http://localhost:9009/api/v1/save/${userId}`, pojoData);
      const res = response.data;

      setBookedSlots((prevBookedSlots) => [...prevBookedSlots, res]);
      setFormSubmitted(true);
      setLoading(false);
      e.target.reset();

      if (res.statusCode === "OK") {
        setUnavailableSlots([]);
        setBookedSlots([]);
       navigate('/Payment',{state:{pojoData}});
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!petName || !petBreed || !userEmail || !userMobileNumber || !petDescription) {
      alert("All fields are required");
      return false;
    }

    if (!validateEmail(userEmail)) {
      alert("Invalid email format");
      return false;
    }

    if (!validateMobileNumber(userMobileNumber)) {
      alert("Invalid mobile number format");
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const re = /^\d{10}$/;
    return re.test(mobileNumber);
  };

  return (
    <>
     <div className="opconslut" style={{ border: "1px solid", width: "50%",  display: "inline-block" }}>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group booking-date-container">
            <label htmlFor="bookingDate">Booking Date:</label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              onChange={handleDateChange}
            />
          </div>

         {allTimeSlots.map((time, index) => {
            const isUnavailable =
              unavailableSlots.includes(time) &&
              bookedSlots.some(
                (slot) => slot.date === selectedDate && slot.time === time
              );

            return (
              <label
                key={index}
                className={`time-slot ${
                  isUnavailable
                    ? "unavailable"
                    : selectedTimeSlot === time
                    ? "selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  className="option-input radio"
                  name="timeSlot"
                  onChange={() => handleSlotClick(time)}
                  disabled={isUnavailable}
                  checked={selectedTimeSlot === time}
                />
                {time}
              </label>
            );
          })}

          <div className="form-group">
            <label htmlFor="petName">Pet Name:</label>
            <input type="text" id="petName" name="petName" onChange={(e) => setPetName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="petBreed">Pet Breed:</label>
            <input type="text" id="petBreed" name="petBreed" onChange={(e) => setPetBreed(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="userEmail">User Email:</label>
            <input type="email" id="userEmail" name="userEmail" onChange={(e) => setUserEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="userMobileNumber">User Mobile Number:</label>
            <input type="tel" id="userMobileNumber" name="userMobileNumber" onChange={(e) => setUserMobileNumber(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="typeOfService">Type of Service:</label>
            <select id="typeOfService" name="typeOfService">
              <option value="service">Select Consulting</option>
              <option value="Online Consulting">Online Consulting</option>
              <option value="Physical Consulting">Physical Consulting</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="petDescription">Pet Description:</label>
            <textarea
              id="petDescription"
              name="petDescription"
              defaultValue={""}
              onChange={(e) => setPetDescription(e.target.value)}
            />
          </div>

          <button type="submit" disabled={loading || formSubmitted || !selectedTimeSlot}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}


export default PetInfoForm1;
