import React, { useState, useEffect } from 'react';
import { getCartDetails } from './AuthContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import Sidebar from './CommonNav';

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = getCartDetails();
      if (data) {
        const updatedData = data.map(item => ({
          ...item,
          quantity: item.quantity || 1 
        }));
        setCartDetails(updatedData);
        calculateTotalPrice(updatedData);
      }
    };
  
    fetchData();
  }, []);
  
  const calculateTotalPrice = (cartItems) => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    const gst = subtotal * 0.18; 
    const discount = subtotal * 0.05; 
    const total = (subtotal + gst - discount).toFixed(2); 
    setTotalPrice(total); 
  };

  const increaseQuantity = (index) => {
    const updatedCartDetails = [...cartDetails];
    updatedCartDetails[index].quantity++;
    setCartDetails(updatedCartDetails);
    calculateTotalPrice(updatedCartDetails);
  };

  const decreaseQuantity = (index) => {
    const updatedCartDetails = [...cartDetails];
    if (updatedCartDetails[index].quantity > 0) {
      updatedCartDetails[index].quantity--;
      if (updatedCartDetails[index].quantity === 0) {
        updatedCartDetails.splice(index, 1); 
      }
      setCartDetails(updatedCartDetails);
      calculateTotalPrice(updatedCartDetails);
    }
  };

  const removeItem = (index) => {
    const updatedCartDetails = [...cartDetails];
    updatedCartDetails.splice(index, 1);
    setCartDetails(updatedCartDetails);
    calculateTotalPrice(updatedCartDetails);
  };

  const handleCheckout = () => {
    alert('Address Added Successfully');
  };

  return (
    <>
      <Sidebar/>
      <div className="cart-containerX">
        <ul>
          {cartDetails.map((item, index) => (
            <li key={index} className="cart-itemuser">
              <div>
                <img src={`data:image/jpeg;base64,${item.image}`} alt='' />
              </div>
              <div className="cart-item-details" >
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => increaseQuantity(index)}>+</button>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <button onClick={() => removeItem(index)} className="remove-buttonuser" style={{width:"100px", marginLeft:"2%"}}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-item-total">
          <p>Subtotal: {totalPrice}</p>
          <p>GST (18%): {(totalPrice * 0.18).toFixed(2)}</p>
          <p>Discount (5%): {(totalPrice * 0.05).toFixed(2)}</p>
          <p>Total Price (incl. GST and discount): {(totalPrice - totalPrice * 0.05 + totalPrice * 0.18).toFixed(2)}</p>
        </div>
        <div className="cart-checkout">
          <Link to="/useraddress"><button onClick={handleCheckout}>Checkout</button></Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
