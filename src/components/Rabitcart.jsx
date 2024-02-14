import React from "react";
import NavigationBar from './NavigationBar';

function Rabitcart({ cartItems }) {
  return (
    <div>
      <NavigationBar />
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rabitcart;
