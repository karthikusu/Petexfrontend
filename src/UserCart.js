import React, { useState, useEffect } from 'react';
import { getCartDetails } from './AuthContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

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
    let totalSubtotal = 0; // Change the variable name to avoid conflict
    const priceDetails = cartItems.map(item => {
      const subtotal = item.price * item.quantity;
      totalSubtotal += subtotal; // Update totalSubtotal for each item
      return {
        name: item.name,
        quantity: item.quantity, // Include quantity
        price: subtotal, // Include subtotal
      };
    });
  
    const gst = totalSubtotal * 0.18; 
    const discount = totalSubtotal * 0.05; 
    const total = (totalSubtotal + gst - discount).toFixed(2); 
  
    // Update priceDetails with the new subtotal
    localStorage.setItem('priceDetails', JSON.stringify(priceDetails));
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
    // Retrieve product IDs from cart items in local storage
    const storedProductIds = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Extract product IDs from cart items
    const productIds = storedProductIds.map(item => item.productId);
    
    const userId = localStorage.getItem('userId');
    // Store product IDs in local storage (optional, since they're already stored)
    localStorage.setItem('productIds', JSON.stringify(productIds));
  
    // Log the product IDs in the console
    console.log('Product IDs:', productIds , userId);
  
    // Proceed to checkout or any other logic
    alert('Add Shipping Address To Confirm The Order Placement');
      // Extract product IDs from cart items
  // const productIds = storedProductIds.map(item => item.productId);
  
  // Navigate to the payment page and pass userId and productIds as state
  navigate("/payment", { state: { userId, productIds } });
  };
  

  return (
    <>
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
          <button onClick={handleCheckout}>Checkout</button>
          {/* Redirect to the user address page on checkout */}
          {/* <Link to="/Payment">Add Shipping Address</Link> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
