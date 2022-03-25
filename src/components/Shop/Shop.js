
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css';


const Shop = () => {
  // fetch data 
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

// state to upate cart by handler
  const [cart, setCart] = useState([]);

// passing event handler to unidirectional flow
const hadleAddToCart=(product)=> {
  const newCart = [...cart, product];//...cart == previous array of cart & added another product by event handler
  setCart(newCart);
  }
  
  return (
    <div className='shop-details'>
      <div className="products-cards">
        {
          products.map(product => <Card
            key={product.id}
            product={product}
            hadleAddToCart={hadleAddToCart}
          ></Card>)
        }
      </div>
      <div className="order-summery">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;