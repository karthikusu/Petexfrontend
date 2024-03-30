import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [uplNumber, setUplNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const paymentData = {
        paymentMethod,
        cardNumber,
        uplNumber,
        expirationDate,
        cvv
      };
  
      const response = await axios.post('http://localhost:9031/payments/save', paymentData);
  
      console.log(response.data);
  
      setSuccess(true);
      setLoading(false);
      setError(null); 
      toast.success('Ordered successfully!'); 
      // window.location.assign(""); 
      toast.info(`Payment Method: ${paymentMethod === 'upi' ? 'UPI' : 'Card'}. Details: ${paymentMethod === 'upi' ? uplNumber : cardNumber}`);
  
    } catch (error) {
      console.error(error);
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className='backbody' style={{backgroundColor:"rgb(92, 144, 181)", position:"absolute", width:"100%"}}>
        <div style={{marginTop:"2%", padding: '20px', width: '70%', backgroundColor: "transparent", borderRadius: '8px', boxShadow: '0 4px 8px rgb(0, 0, 0)', marginLeft: '15%' , marginBlock:"5%"}}>
          <style>
            {`
              .payment-container table {
                width: 70%;
              }
              
              .payment-container td {
                padding: 10px 0;
              }
              
              .payment-container input[type="text"],
              .payment-container input[type="number"],
              .payment-container input[type="date"],
              .payment-container input[type="time"] {
                width: 70%;
                padding: 8px;
                border: 1px solid #1c79d6;
                border-radius: 4px;
              }
              
              .payment-container input[type="radio"] {
                margin-right: 10px;
              }
              
              .payment-container button {
                padding: 10px 20px;
                border: 2px solid;
                border-radius: 4px;
                background-color: #007bff;
                color: #fff;
                cursor: pointer;
              }
              
              .payment-container button:hover {
                background-color: #0056b3;
              }
              
              @media (max-width: 768px) {
                .payment-container {
                  width: 80%;
                }
              }
              
              .payment-container .error {
                font-size: 1.2rem;
                color: red;
              }
              
              .card-type-details .error {
                font-size: 1.5rem;
                color: red;
              } 
            `}
          </style>
        
          <h2 style={{ textAlign: 'center', color: 'black' }}>Payment Details</h2>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='paymentMethod'>
              <Form.Label style={{fontSize: '1.2rem', color:"black" }}>Select Payment Method</Form.Label> <br/>
              <Form.Control
                as='select'
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
                style={{ color:"black" }}>
                <option value='' disabled> <br/>
                  Select Payment Method
                </option>
                <option value='credit_card' >Credit Card</option>
                <option value='debit_card'>Debit Card</option>
                <option value='upi'>UPI</option>
                <option value='razorpay'>Razorpay</option>
              </Form.Control>
            </Form.Group> <br/>
            {paymentMethod === 'upi' && (
              <Form.Group controlId='upiId'>
                <Form.Label style={{fontSize: '1.2rem',  color:"black" }}>UPI ID</Form.Label> <br/>
                <Form.Control
                  type='text'
                  placeholder='Enter UPI ID'
                  value={uplNumber}
                  onChange={(e) => setUplNumber(e.target.value)}
                  required
                  />
              </Form.Group> 
            )}
            {paymentMethod !== 'upi' && (
              <Form.Group controlId='cardNumber'>
                <Form.Label style={{ fontSize: '1.2rem', color:"black" }}>Card Number</Form.Label> <br/>
                <Form.Control
                  type='text'
                  placeholder='Enter card number'
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                  style={{ color:"black" }}/>
              </Form.Group>
            )} <br/>
            {paymentMethod !== 'upi' && (
              <div>
                <Form.Group controlId='expirationDate'>
                  <Form.Label style={{  fontSize: '1.2rem' , color:"black"}}>Expiry Date</Form.Label><br/>
                  <Form.Control 
                    type='text' 
                    placeholder='MM/YY' 
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    style={{ color:"black" }}
                  />
                </Form.Group> <br/>
                <Form.Group controlId='cvv'>
                  <Form.Label style={{  fontSize: '1.2rem', color:"black" }}>CVV</Form.Label> <br/>
                  <Form.Control 
                    type='text' 
                    placeholder='Enter CVV' 
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    style={{ color:"black" }}
                  />
                </Form.Group>
              </div>
            )} <br/>
            <div style={{ textAlign: 'center' }}>
              <Button className='mt-4' variant='primary' type='submit' disabled={loading}>
                {loading ? 'Processing...' : 'Submit Payment'}
              </Button>
            </div> <br/>
            {error && <Alert variant='danger' style={{color: 'red', marginLeft: '26%'}}>{error}</Alert>} {/* Display error alert */}
            {success && <Alert variant='success' style={{color: 'green', marginLeft: '35%'}}>Payment successful!</Alert>} 
          </Form>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Payment;
