import { useEffect, useState } from 'react';
import './CartList.css';
import { Link } from 'react-router-dom';


function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])
    return (
        <div className="cart-container">
          {CART?.map((cartItem, cartindex) => (
            <div className="cart-item" key={cartindex}>
              <img src={cartItem.url} alt={cartItem.name} />
              <span className="item-name">{cartItem.name}</span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span className="quantity">{cartItem.quantity}</span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
              <span>Rs. {cartItem.price * cartItem.quantity}</span>
            </div>
          ))}
          <p className="total-price">
            Total<span> Rs. {CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}</span>
          </p>
          <Link to="/Payment"><button className="proceed-button">Proceed to Pay</button></Link>
        </div>
      );
}

export default CartList;