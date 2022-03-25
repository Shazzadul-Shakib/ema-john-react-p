import React from 'react';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';
const Cart = ({cart}) => {
  return (
    <div>
              <h2 className='order-summery-header'>order summery</h2>
        <div>
          <p>Selected items: <span>{cart.length} </span></p>
          <p>Total Price: $<span>0</span></p>
          <p>Total Shipping Charge: $<span>0</span></p>
          <p>Tax: $<span>0</span></p>
          <h4>Grand Total: $<span>0</span></h4>
        </div>
        <div>
          <button className='order-summery-button btn1'>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
          <button className='order-summery-button btn2'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    </div>
  );
};

export default Cart;