import React, { useState } from "react";
import axios from "axios";
import BG from './assets/Fundingrequest.jpg';
import { useNavigate } from "react-router-dom";

const RequestFundingForm = () => {
  const [petOwnerName, setPetOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [petExpensesPerMonth, setPetExpensesPerMonth] = useState("");
  const [reasonForFunding, setReasonForFunding] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("petOwnerName", petOwnerName);
    formData.append("email", email);
    formData.append("mobileNumber", mobileNumber);
    formData.append("petName", petName);
    formData.append("petType", petType);
    formData.append("petBreed", petBreed);
    formData.append("petAge", petAge);
    formData.append("image", petImage);
    formData.append("petExpensesPerMonth", petExpensesPerMonth);
    formData.append("reasonForFunding", reasonForFunding);
    formData.append("donationAmount", donationAmount);

    try {
      const response = await axios.post("http://localhost:9035/petex/save", formData);
      if (response.status === 200) {
        alert("Report saved successfully!");
        // setPetOwnerName("");
        // setEmail("");
        // setMobileNumber("");
        // setPetName("");
        // setPetType("");
        // setPetBreed("");
        // setPetAge("");
        // setPetImage(null);
        // setPetExpensesPerMonth("");
        // setReasonForFunding("");
        // setPetImage("");
        // setDonationAmount("");
        navigate("/usernavbar");
      } else {
        throw new Error("Error saving report.");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving report. Please try again.");
    }
  };

  return (
  //   <div
  //   style={{
  //     backgroundimage: "url('./petfundingimage.jpg')",

  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     minHeight: "100vh",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   }}
  // >





<div style={{backgroundImage:`url(${BG})`, backgroundSize:"cover", width:"100%", position:"absolute"}}>
  <form
      onSubmit={handleSubmit}
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "2rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        color:"white"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "White" }}>
        <strong>Request Funding for Your Pet</strong>
      </h2>
      <div style={{ display: "flex", flexDirection: "column", width: "100%",
    
    // Media queries for responsiveness
    "@media (max-width: 600px)": {
      fontSize: "0.9rem",
    },
    "@media (max-width: 400px)": {
      fontSize: "0.8rem",
    },

    
    
    }}>
        <label htmlFor="petOwnerName" style={{ fontWeight: "bold" }}>
          <strong>Pet Owner Name:</strong>
        </label>
        <input
          type="text"
          id="petOwnerName"
          name="petOwnerName"
          value={petOwnerName}
          onChange={(event) => setPetOwnerName(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="email" style={{ fontWeight: "bold" }}>
          <strong>Email:</strong>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}onChange={(event) => setEmail(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="mobileNumber" style={{ fontWeight: "bold" }}>
          <strong>Mobile Number:</strong>
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          pattern="[0-9]{10}"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
            
          
          }}
        />

        <label htmlFor="petName" style={{ fontWeight: "bold" }}>
          <strong>Pet Name:</strong>
        </label>
        <input
          type="text"
          id="petName"
          name="petName"
          value={petName}
          onChange={(event) => setPetName(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },

            
            
            
          }}
        />

        <label htmlFor="petType" style={{ fontWeight: "bold" }}>
          <strong>Pet Type:</strong>
        </label>
        <input
          type="text"
          id="petType"
          name="petType"
          value={petType}
          onChange={(event) => setPetType(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="petBreed" style={{ fontWeight: "bold" }}>
          <strong>Pet Breed:</strong>
        </label>
        <input
          type="text"
          id="petBreed"
          name="petBreed"
          value={petBreed}
          onChange={(event) => setPetBreed(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="petAge" style={{ fontWeight: "bold" }}>
          <strong>Pet Age:</strong>
        </label>
        <input
          type="number"
          id="petAge"
          name="petAge"
          min="0"
          max="100"
          value={petAge}
          onChange={(event) => setPetAge(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="petImage" style={{ fontWeight: "bold" }}>
          <strong>Pet Image:</strong>
        </label>
        <input
          type="file"
          id="petImage"
          name="image"
          accept="image/*"
          onChange={(event) => setPetImage(event.target.files[0])}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="petExpensesPerMonth" style={{fontWeight: "bold" }}>
          <strong>Pet Expenses/Month:</strong>
        </label>
        <input
          type="number"
          id="petExpensesPerMonth"
          name="petExpensesPerMonth"
          step="0.01"
          value={petExpensesPerMonth}
          onChange={(event) => setPetExpensesPerMonth(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />

        <label htmlFor="reasonForFunding" style={{ fontWeight: "bold" }}>
          <strong>Reason for Funding:</strong>
        </label>
        <textarea
          id="reasonForFunding"
          name="reasonForFunding"
          rows="4"
          cols="50"
          value={reasonForFunding}
          onChange={(event) => setReasonForFunding(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />
        <label htmlFor="donationAmount" style={{fontWeight: "bold" }}>
          <strong>Donation Amount:</strong>
        </label>
        <input
          type="number"
          id="donationAmount"
          name="donationAmount"
          step="0.01"
          value={donationAmount}
          onChange={(event) => setDonationAmount(event.target.value)}
          required
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",

            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (max-width: 400px)": {
              fontSize: "0.8rem",
            },
          }}
        />
        <br />
      </div>
      <button
        type="submit"
        style={{
          padding: "0.5rem",
          fontSize: "1.2rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          "@media (max-width: 600px)": {
            fontSize: "0.9rem",
          },
          "@media (max-width: 400px)": {
            fontSize: "0.8rem",
          },
        }}
      >
        <strong>Submit</strong>
      </button>
    </form>
    </div>
  );
};

export default RequestFundingForm;