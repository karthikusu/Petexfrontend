// ParentComponent.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetDog from './GetDog';
import Cart from './Cart';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GetDog addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
      </Switch>
    </Router>
  );
};

export default ParentComponent;
