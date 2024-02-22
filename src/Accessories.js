import './Accessories.css';
import Aheader from './Aheader';
import AproductList from './AproductList';
import AcartList from './AcartList';
import { useState } from 'react';


function Accessories() {

  const [product, setProduct] = useState([
    {
      url: 'https://m.media-amazon.com/images/I/41ImkbDKA5L.jpg',
      name: 'T-Bone Steak flavor',
      category: 'Classic Loaf',
      seller: 'Ceser',
      price: 500
    },
    {
      url: 'https://petsonbroadway.com/cdn/shop/products/frontrangepurplesage_large.png?v=1674927998',
      name: 'Wood-Grilled Chiken Flavor',
      category: 'Filets',
      seller: 'Ceser',
      price: 2000
    },
    {
      url: 'https://img.fruugo.com/product/5/48/958335485_max.jpg',
      name: 'LAMB',
      category: 'Classic',
      seller: 'Ceser',
      price: 3000
    },
    {
      url: 'https://d3bx7vtjzzbn3r.cloudfront.net/product-media/EX8/900/900/Ruffwear-30821-Hi-and-Light-Harness-Sage-Green.jpg',
      name: 'Beef and Liver',
      category: 'Classic',
      seller: 'Ceser',
      price: 4000
    },
    {
      url: 'https://arquivet.com/3223-large_default/nudo-algodon-25g15cm.jpg',
      name: 'Grilled Steak',
      category: 'Egg Flavor',
      seller: 'Ceser',
      price: 2000
    },
    {
      url: 'https://cdn11.bigcommerce.com/s-zut1msomd6/products/33094/images/224636/OVER-UNDER-MENS-WATER_DOG_COLLAR-4013-RED-MAIN__88416.1668723122.386.513.jpg?c=1',
      name: 'Sirloin',
      category: 'Classic loaf in sauce',
      seller: 'Ceser',
      price: 1000
    },
    
    {
      url: 'https://ae01.alicdn.com/kf/HTB1K1aOasfrK1Rjy0Fmq6xhEXXaw/1pcs-Pets-Dogs-Pet-Supplies-Pet-Dog-Puppy-Cotton-Chew-Knot-Toy-Durable-Braided-Bone-Rope.jpg',
      name: 'MiNI FISH MEDLEY',
      category: 'Classic 31',
      seller: 'Kit Cat',
      price: 3000
    },
    
    {
      url: 'https://pethouseksa.com/cdn/shop/products/kitcatclassic32.jpg?v=1671267244',
      name: 'MINI VEGITABLE MEDLEY',
      category: 'Classic 32',
      seller: 'KIT CAT',
      price: 500
    },
    
    {
      url: 'https://mlo1wbhvgmgt.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://pethero.co.za/wp-content/uploads/2022/10/kit-Cat-dry-salmon-1-2.jpg',
      name: 'SIGNATURE SALMON',
      category: 'CLASSIC 33',
      seller: 'KIT CAT',
      price: 2000
    },
    
    {
      url: 'https://i5.walmartimages.com/asr/b9c64cbc-7ccf-481c-93cb-c4cd056db1c1.d760c3e0e26d1769c073f6e2d48a585b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      name: 'PICK OF THE OCEAN',
      category: 'Classic 34',
      seller: 'KIT CAT',
      price: 2000
    },
    
    {
      url: 'https://ae01.alicdn.com/kf/S3c0c0696883740039cde86f1fda8ee26N/Pet-Christmas-Pet-Bow-Tie-Pet-Supplies-Cat-and-Dog-Bow-Tie-Pet-Accessories-Bow-Tie.jpg',
      name: 'FILLET O FLAKES',
      category: 'Classic 35',
      seller: 'KIT CAT',
      price: 1000
    },
    
    {
      url: '',
      name: 'CHICKEN CUISINE',
      category: 'Classic 36',
      seller: 'KIT CAT',
      price: 4000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      
      <Aheader count={cart.length}
        handleShow={handleShow} ></Aheader>

      {
        showCart ?
          <AcartList cart={cart} ></AcartList> :
          <AproductList product={product} addToCart={addToCart} ></AproductList>
      }


    </div>
  );
}

export default Accessories;