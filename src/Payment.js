import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderConfirmationPDF from './OrderPdfGenerator';
import { saveAs } from 'file-saver';
import { Form, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: localStorage.getItem('name') || '',
    quantity: localStorage.getItem('quantity') || '',
    price: localStorage.getItem('price') || '',
    fullname: localStorage.getItem('fullname') || '',
    email: localStorage.getItem('email') || '',
    phno: localStorage.getItem('phno') || '',
    city: localStorage.getItem('city') || '',
    houseNumber: '',
    landmark: '',
    village: '',
    pincode: '',
    state: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    upiId: '',
  });

  const [productIds, setProductIds] = useState([]);
  // const sendEmailWithPDF = (email, pdfData) => {
  //   const serviceId = 'service_bdcibp6';
  //   const templateId = 'template_lfl9csr';
  //   const userId = 'quw8O7Rvy-DNGbCXG';

  //   const pdf = new jsPDF();
  //   // Generate PDF content here...
    

  //   const pdfBase64 = pdf.output('datauristring');

  //   emailjs.send(serviceId, templateId, {
  //     to_email: email,
  //     attachment: pdfBase64,
  //   }, userId)
  //     .then((response) => {
  //       console.log('Email sent successfully:', response);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error);
  //     });
  // };

  const navigate = useNavigate();
  useEffect(() => {
    const storedProductIds = JSON.parse(localStorage.getItem('productIds')) || [];
    setProductIds(storedProductIds);

    const priceDetails = JSON.parse(localStorage.getItem('priceDetails'));
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    
    
    if (userDetails && priceDetails) {
        // Assuming only one item is being ordered
        const item = priceDetails[0]; // Assuming only one item is being ordered
        setFormData((prevFormData) => ({
            ...prevFormData,
            fullname: userDetails.fullname || '',
            email: userDetails.email || '',
            phno: userDetails.phno || '',
            city: userDetails.city || '',
            name: item.name || '',
            price: item.price || '',
            quantity: item.quantity || '',
        }));
    }

    
}, []);


// Retrieve userDetails from localStorage
const userDetails = JSON.parse(localStorage.getItem('userDetails'));

// Retrieve userId from userDetails
const userId = userDetails ? userDetails.userId : null;

// Check if userId is available
if (userId) {
  // Proceed with your logic using userId
} else {
  // Handle the case where userId is not available
  console.error('User ID not found');
}
const productId = localStorage.getItem('productId');

const [showPDF, setShowPDF] = useState(false);

const sendEmailWithPDF = (email, pdfData) => {
  const serviceId = 'service_bdcibp6';
  const templateId = 'template_lfl9csr';
  const userId = 'quw8O7Rvy-DNGbCXG';

  // Send email with PDF attachment
  emailjs
    .send(serviceId, templateId, {
      to_email: email,
      attachment: pdfData, // Pass the PDF data directly
    }, userId)
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send order data to backend

    const response = await axios.post(`http://localhost:9011/petex/save/${userId}`, formData, {
      params: { productIds: productIds.join(',') } // Send productIds as request parameter
    });
    console.log('Order placed successfully:', response.data);
    navigate("/usernavbar");
    console.log('Order placed successfully:', response.data);

    // Save order details in local storage
    localStorage.setItem('orderDetails', JSON.stringify(formData));

    // Display saved order details in console
    const savedOrderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    console.log('Saved order details:', savedOrderDetails);
    console.log('Product ID:', productIds);
    console.log("User ID: " , userId)

    const pdf = new jsPDF();


pdf.setFont("helvetica");
pdf.setFontSize(16); 

const headingText = "PETEX ORDER CONFIRMATION"; 
const fontSize = 25; // Font size for the heading
const fontHeight = fontSize * 1.15; // Approximate font height for Helvetica font
const textWidth = pdf.getStringUnitWidth(headingText) * fontSize / pdf.internal.scaleFactor;
const startX = (pdf.internal.pageSize.width - textWidth) / 2;

// Add the heading text with bold and underline style
pdf.text(headingText, startX, 20, { font: 'helvetica', fontStyle: 'bold', fontSize: fontSize, textColor: [0, 0, 0], underline: true });

    
let yPos = 40; 
    
    // Add Product Information section
    pdf.text('Product Information', 10, yPos);
    pdf.line(10, yPos + 2, 200, yPos + 2); // Underline
    yPos += 10;
    
    // Add Product Information details
    pdf.text(`Product Name: ${formData.name}`, 10, yPos);
    yPos += 10;
    pdf.text(`Quantity: ${formData.quantity}`, 10, yPos);
    yPos += 10;
    pdf.text(`Price: ${formData.price}`, 10, yPos);
    yPos += 10;
    
    // Add Shipping Information section
    yPos += 10;
    pdf.text('Shipping Information', 10, yPos);
    pdf.line(10, yPos + 2, 200, yPos + 2); // Underline
    yPos += 10;
    
    // Add Shipping Information details
    pdf.text(`Full Name: ${formData.fullname}`, 10, yPos);
    yPos += 10;
    pdf.text(`Email: ${formData.email}`, 10, yPos);
    yPos += 10;
    pdf.text(`Phone Number: ${formData.phno}`, 10, yPos);
    yPos += 10;
    pdf.text(`City: ${formData.city}`, 10, yPos);
    yPos += 10;
    pdf.text(`House Number: ${formData.houseNumber}`, 10, yPos);
    yPos += 10;
    pdf.text(`Landmark: ${formData.landmark}`, 10, yPos);
    yPos += 10;
    pdf.text(`Village: ${formData.village}`, 10, yPos);
    yPos += 10;
    pdf.text(`Pincode: ${formData.pincode}`, 10, yPos);
    yPos += 10;
    pdf.text(`State: ${formData.state}`, 10, yPos);
    yPos += 10;
    
    // Add Billing Information section
    yPos += 10;
    pdf.text('Billing Information', 10, yPos);
    pdf.line(10, yPos + 2, 200, yPos + 2); // Underline
    yPos += 10;
    
    // Add Billing Information details
    pdf.text(`Payment Method: ${formData.paymentMethod}`, 10, yPos);
    yPos += 10;
    if (formData.paymentMethod !== 'upi') {
        pdf.text(`Card Number: ${formData.cardNumber}`, 10, yPos);
        yPos += 10;
        pdf.text(`Expiration Date: ${formData.expirationDate}`, 10, yPos);
        yPos += 10;
        pdf.text(`CVV: ${formData.cvv}`, 10, yPos);
        yPos += 10;
    } else {
        pdf.text(`UPI ID: ${formData.upiId}`, 10, yPos);
        yPos += 10;
    }
    
// Add border around the entire page with margin
const margin = 6; // Adjust margin size as needed
pdf.setDrawColor(0); // Set border color to black (RGB: 0, 0, 0)
pdf.setLineWidth(0.3); // Set border width to 1
const pageWidth = pdf.internal.pageSize.width;
const pageHeight = pdf.internal.pageSize.height;
pdf.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin, 'S'); // Draw a rectangle as border with margin


// Save the PDF
pdf.save('payment_details.pdf');

    
    // Save the PDF
    pdf.save('payment_details.pdf');
    
    
    const pdfBase64 = pdf.output('datauristring');

    // Send email with PDF attachment
    sendEmailWithPDF(userDetails.email, pdfBase64);


  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error placing order:', error);
    // Optionally, display an error message to the user
  }
};


  // Render PDF if showPDF is tr

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px',marginLeft:"15%", width:"60%" }}>
      <h2 style={{ 
  textAlign: 'center', 
  padding: '10px', 
  color: 'rgb(56, 10, 105)', 
  borderBottom: '2px solid rgb(56, 10, 105)',
  }}>Order Details</h2>

      {/* Product Information */}
      <div style={{ marginBottom: '15px', marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Product Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px' , width:"90%" , border:"transparent"}} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
  
      {/* Shipping Information */}
      <h2 style={{ 
  textAlign: 'center', 
  padding: '10px', 
  color: 'rgb(56, 10, 105)', 
  borderBottom: '2px solid rgb(56, 10, 105)',
  }}>Shipping Information</h2>
      <div style={{ marginBottom: '15px' ,marginLeft:"10%"}}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
        <input type="tel" name="phno" value={formData.phno} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>House Number:</label>
        <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Landmark:</label>
        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Village:</label>
        <input type="text" name="village" value={formData.village} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Pincode:</label>
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
      </div>
  
      {/* Billing Information */}
      <h2 style={{ 
  textAlign: 'center', 
  padding: '10px', 
  color: 'rgb(56, 10, 105)', 
  borderBottom: '2px solid rgb(56, 10, 105)',
  }}>Billing Information</h2>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Payment Method:</label>
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required>
          {/* <option value="Select">Select Payment Method</option> */}
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>
      {formData.paymentMethod !== 'upi' && (
        <>
          <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Card Number:</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px' , width:"90%" , border:"transparent"}} required />
          </div>
          <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Expiration Date (MM/YY):</label>
            <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
          </div>
          <div style={{ marginBottom: '15px' ,marginLeft:"10%" }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>CVV:</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
          </div>
        </>
      )}
      {formData.paymentMethod === 'upi' && (
        <div style={{ marginBottom: '15px',marginLeft:"10%"  }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>UPI ID:</label>
          <input type="text" name="upiId" value={formData.upiId} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required />
        </div>
      )}
  
      <button type="submit" style={{ borderRadius: '5px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Place Order</button>
    </form>
  );
  
};

export default OrderForm;



