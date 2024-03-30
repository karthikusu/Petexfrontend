import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartItemsstile.css';

const Items = () => {
  const items = [
    {
      brand: 'WHITECRAFT',
      name: 'Medium 30 L Laptop Backpack',
      color: 'Black',
      price: 199,
      discount: 90,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'AEROPOSTALE',
      name: 'Small 16 L Backpack Cooper',
      color: 'Grey',
      price: 749,
      discount: 70,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'SAFARI',
      name: '23.5 L Backpack',
      color: 'Black',
      price: 359,
      discount: 81,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'PROVOGUE',
      name: 'Medium 25 L Backpack',
      color: 'Black',
      price: 199,
      discount: 77,
      image: 'https://via.placeholder.com/150',
    },
    // Add more items here if needed
    {
      brand: 'BRAND 5',
      name: 'Product 5',
      color: 'Blue',
      price: 99,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 6',
      name: 'Product 6',
      color: 'Red',
      price: 149,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 7',
      name: 'Product 7',
      color: 'Green',
      price: 299,
      discount: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 8',
      name: 'Product 8',
      color: 'Yellow',
      price: 199,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 9',
      name: 'Product 9',
      color: 'Orange',
      price: 159,
      discount: 30,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 10',
      name: 'Product 10',
      color: 'Pink',
      price: 249,
      discount: 35,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 11',
      name: 'Product 11',
      color: 'Purple',
      price: 179,
      discount: 18,
      image: 'https://via.placeholder.com/150',
    },
    {
      brand: 'BRAND 12',
      name: 'Product 12',
      color: 'Brown',
      price: 399,
      discount: 40,
      image: 'https://via.placeholder.com/150',
    },
  ];

  // Function to chunk the items array into arrays of 4 items each
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // Chunk the items array into arrays of 4 items each
  const chunkedItems = chunkArray(items, 3);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="items-container">
      {chunkedItems.map((row, rowIndex) => (
        <div key={rowIndex} className="items-row">
          {row.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-brand">{item.brand}</p>
                <p className="item-name">{item.name}</p>
                <p className="item-color">Color: {item.color}</p>
                <p className="item-price">
                  <span className="item-price-original">${item.price}</span>
                  <span className="item-price-discount">${item.price - (item.price * item.discount) / 100}</span>
                </p>
              </div>
              <button className="item-add-to-cart">Add to Cart</button>
            </div>
            
          ))}
           
        </div>
      ))}
    </div>
  );
};

export default Items;
