import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NavigationBar from './RabitNavBar';
import DW from '../assets/Dogwinter.jpeg';
import DJ from '../assets/dogjacket.jpg';
import DB from '../assets/Dogbeds.jpg';
import RC from '../assets/rabitcloths.jpg';
import RabitNavBar from "./RabitNavBar";

function RabitModules(){
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };   
return (
<html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <RabitNavBar/>
        <div className='sellercard' >
            <div className='card' style={{  height:"350px",width:"250px", borderColor:"black" }}>
                <img src={DJ} alt="Cat" style={{height:"200px", width:"200px"}} />
                    <div className='card-info'>
                        <b>Jackets</b>
                        <p>Warm and stylish jackets for all seasons. Perfect for outdoor activities.</p>
                        <button onClick={() => addToCart({ name: 'Jackets', image: DJ })}>Add to Cart</button>
                    </div>
            </div>
            <div className='card' style={{  height:"350px",width:"250px", borderColor:"black" }}>
                <img src={DW} alt="Cat" style={{height:"200px", width:"200px"}}/>
                    <div className='card-info'>
                        <b>Winter collection</b>
                        <p>Stay cozy with our winter collection. Includes sweaters, scarves, and hats.</p>
                        <button>Add to Cart</button>
                    </div>
            </div>
            <div className='card' style={{  height:"350px",width:"250px", borderColor:"black" }}>
                <img src={DB} alt="Cat" style={{height:"200px", width:"200px"}}/>
                    <div className='card-info'>
                        <b>Beds and bedsheets</b>
                        <p>Soft and comfortable bedsheets and bedding sets for a good night's sleep.</p>
                        <button>Add to Cart</button>
                    </div>
            </div>
            <div className='card' style={{  height:"350px",width:"250px", borderColor:"black" }}>
                <img src={RC} alt="Cat" style={{height:"200px", width:"200px"}}/>
                    <div className='card-info'>
                        <b>Clothes</b>
                        <p>Stylish and trendy clothes for every occasion. Find your perfect outfit today!</p>
                        <button>Add to Cart</button>
                    </div>
            </div>
        </div>

    </body>
</html>
    );
};

export default RabitModules;