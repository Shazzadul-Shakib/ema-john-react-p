import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Card = ({ product,hadleAddToCart }) => {
  const { name, img, price, seller, ratings } = product;
  

  return (
    <div className='card'>
      <div className='card-details'>
      <img src={img} alt="" />
      <div>
        <h4>{name} </h4>
        <p>Price: ${price} </p>
      </div>
      <div>
        <p><small>Manufacturer : {seller }</small></p>
        <p><small>Rating: {ratings} </small></p>
      </div>
      </div>
      <button onClick={
        () => hadleAddToCart(product)
        }>Add to cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Card;