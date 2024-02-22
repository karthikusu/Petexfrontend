import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const Payment= () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
    
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
    
      console.log(token);
      setLoading(false);
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default Payment;
