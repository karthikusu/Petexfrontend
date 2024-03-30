// Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, totalAmount }) => {
  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Discount: {item.discount}</p>
            <p>After Discount Price: {item.afterdiscountprice}</p>
          </div>
        ))}
        <p>Total Amount: {totalAmount}</p>
      </div>
      <Link to="/checkout">
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', marginTop: '10px' }}>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
