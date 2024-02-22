import './Items.css';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';
import { useState } from 'react';


function Items() {
  

  const [product, setProduct] = useState([
    {
      url: 'https://www.pngitem.com/pimgs/m/672-6720137_cesar-dog-food-beef-hd-png-download.png',
      name: 'T-Bone Steak flavor',
      category: 'Classic Loaf',
      seller: 'Ceser',
      price: 500
    },
    {
      url: 'https://www.kroger.com/product/images/large/front/1002310013764',
      name: 'Wood-Grilled Chiken Flavor',
      category: 'Filets',
      seller: 'Ceser',
      price: 2000
    },
    {
      url: 'https://media.karousell.com/media/photos/products/2023/1/11/cesar_dog_food_wet_food_100g_1673419146_19de6b0b_progressive.jpg',
      name: 'LAMB',
      category: 'Classic',
      seller: 'Ceser',
      price: 3000
    },
    {
      url: 'https://media.karousell.com/media/photos/products/2023/10/17/cesar_dog_food_100g_190_1697542535_c32c32ad_progressive.jpg',
      name: 'Beef and Liver',
      category: 'Classic',
      seller: 'Ceser',
      price: 4000
    },
    {
      url: 'https://storage.googleapis.com/images-bks-prd-1385851.bks.prd.v8.commerce.mi9cloud.com/product-images/detail/1f8edf66-29a1-4298-9892-377d70cc0338.jpeg',
      name: 'Grilled Steak',
      category: 'Egg Flavor',
      seller: 'Ceser',
      price: 2000
    },
    {
      url: 'https://www.cesar.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf2476/files/migrate-product-files/images/jgjirrqntw9zxtqfnsdk.png',
      name: 'Sirloin',
      category: 'Classic loaf in sauce',
      seller: 'Ceser',
      price: 1000
    },
    
    {
      url: 'https://kitcat.com.sg/wp-content/uploads/2017/02/Dry-Food-Mini-Fish-Medley-375x400.jpg',
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
      url: 'https://mlo1wbhvgmgt.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://pethero.co.za/wp-content/uploads/2022/10/kit-Cat-dry-pick-of-the-ocean-1-2.jpg',
      name: 'PICK OF THE OCEAN',
      category: 'Classic 34',
      seller: 'KIT CAT',
      price: 2000
    },
    
    {
      url: 'https://cdn.shopify.com/s/files/1/1481/0762/products/kitcatfilet.jpg?v=1671267514&width=400',
      name: 'FILLET O FLAKES',
      category: 'Classic 35',
      seller: 'KIT CAT',
      price: 1000
    },
    
    {
      url: 'https://www.feedmeplease.com/images/pdimg/2737/1.webp',
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
      
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default Items;