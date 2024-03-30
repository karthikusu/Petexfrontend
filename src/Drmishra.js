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
  const navigate=useNavigate();
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
      const response = await axios.post('http://localhost:9009/api/v1/save', pojoData);
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
    {/* <Sidebar/> */}
      <div className="DoctorProfileCard_card__EWnQO">
        <div className="DoctorProfileCard_profilePicBox__TG4pX">
          <img
                  src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                  style={{height:"auto", width:"50%", marginLeft:"20%"}}
          />
          <img
            src="https://img.freepik.com/premium-vector/pet-clinic-logo-design_626969-91.jpg"
            alt="Pet Doctor"
            width={60}
            height={60}
            loading="lazy"
            fetchpriority="low"
            className="Vj lazy DoctorProfileCard_apolloLogo__RXK6M"
          />
        </div>
        <div style={{marginLeft:"20%"}}>
          <div>
            <h1 >Doctor Mishra</h1>
          </div>
          <div>
            <h2 style={{ marginRight: "90%" }}>Veternary MD</h2>
            <div>
              <h3>15+ years experience</h3>
              <div>
                <img
                  src="https://images.apollo247.in/images/doctor-profile/recommended.svg?tr=w-50,q-80,f-webp,dpr-1,c-at_max"
                  alt="recommendation"
                  width={20}
                  height={20}
                  loading="lazy"
                  fetchpriority="low"
                  className="Vj lazy"
                />
                <h3 className="vd sd DoctorProfileCard_rating__fAnjp Kd Nd">Recommended by 100%</h3>
              </div>
            </div>
          </div>
          <div className="DoctorProfileCard_infoText__WPFu4">
            <div className="DoctorProfileCard_infoImage__YqxdW">
              <img
                src="https://images.apollo247.in/images/doctor-profile/education-light.svg?tr=w-60,q-80,f-webp,dpr-1,c-at_max"
                alt="education"
                width={24}
                height={24}
                loading="lazy"
                fetchpriority="low"
                className="Vj lazy"
              />
            </div>
            <h3 className="vd sd Gd Pd">MBBS; &nbsp;MCh (Vetonary)</h3>
          </div>
          <div className="DoctorProfileCard_infoText__WPFu4 DoctorProfileCard_languages__b2jER">
            <div className="DoctorProfileCard_infoImage__YqxdW">
              <img
                src="https://images.apollo247.in/images/doctor-profile/languages.svg?tr=w-45,q-80,f-webp,dpr-1,c-at_max"
                alt="language"
                width={18}
                height={18}
                loading="lazy"
                fetchpriority="low"
                className="Vj lazy"
              />
            </div>
            <h3 className="vd sd Gd Pd">English, Hindi,Telugu</h3>
          </div>
          <div className="DoctorProfileCard_addressBox__OUwET">
            <div className="DoctorProfileCard_infoImage__YqxdW">
              <img
                src="https://images.apollo247.in/images/doctor-profile/profile-location.svg?tr=w-60,q-80,f-webp,dpr-1,c-at_max"
                alt="location"
                width={24}
                height={24}
                loading="lazy"
                fetchpriority="low"
                className="Vj lazy"
              />
            </div>
            <div className="DoctorProfileCard_addressInfo__LQMf5">
              <div className="DoctorProfileCard_row__ChdwW">
                <h6 className="vd sd DoctorProfileCard_clinicName__Y4amb Gd Nd">Pet Hospitals Jubilee Hills</h6>
              </div>
              <h6>Pet Hospitals Jubilee Hills, Rd Number 72,</h6> 
                <h6>Opposite Bharatiya Vidya Bhavan School, Film Nagar Telangana </h6>
            </div>
          </div>
          <div className="DoctorProfileCard_recommendation__XSQno DoctorProfileCard_showOnMobile__4HL53">
            <img
              src="https://icons.veryicon.com/png/o/healthcate-medical/at-icon-library/popular-recommendation.png"
              alt="recommendation"
              width={20}
              height={20}
              loading="lazy"
              fetchpriority="low"
              className="Vj Uj"
            />
            <h3 className="vd sd DoctorProfileCard_rating__fAnjp Hd Nd">Recommended by 100%</h3>
          </div>
        </div>
      </div>
<br/>
     <div className="opconslut" style={{ border: "1px solid", width: "50%", marginLeft: "20%", display: "inline-block" }}>
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
