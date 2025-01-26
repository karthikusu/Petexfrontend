import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    // Existing state values...
    paymentMethod: 'creditCard',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    upiId: '',
  });

  // Existing useEffect and other code...

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send order data to backend...
      const productIds = JSON.parse(localStorage.getItem('productIds'));

      const response = await axios.post(`http://localhost:9011/petex/save/${productIds}`, formData);
      console.log('Order placed successfully:', response.data);
      // const orderId = response.data.orderId;

      // Generate PDF...
      const pdf = new jsPDF();
      pdf.setFont("helvetica");
      pdf.setFontSize(16); 
      // Add PDF content...
      
      // Save the PDF...
      pdf.save('payment_details.pdf');
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));

      // Send email with PDF attachment...
      const pdfBase64 = pdf.output('datauristring');
      sendEmailWithPDF(userDetails.email, pdfBase64);

    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error placing order:', error);
    }
  };

  const sendEmailWithPDF = (email, pdfData) => {
    const serviceId = 'service_bdcibp6';
    const templateId = 'template_lfl9csr';
    const userId = 'quw8O7Rvy-DNGbCXG';

    emailjs
      .send(serviceId, templateId, {
        to_email: email,
        attachment: pdfData,
      }, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px',marginLeft:"15%", width:"60%" }}>
      {/* Existing form fields... */}

      {/* Billing Information */}
      <h2 style={{ textAlign: 'center', padding: '10px', color: 'rgb(56, 10, 105)', borderBottom: '2px solid rgb(56, 10, 105)', }}>Billing Information</h2>
      <div style={{ marginBottom: '15px',marginLeft:"10%" }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Payment Method:</label>
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={{ borderRadius: '5px', padding: '5px', width:"90%" , border:"transparent" }} required>
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
