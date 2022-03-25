import React from 'react';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';
const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * .1).toFixed(2));
  let grandTotal = total + tax + shipping;
  return (
    <div>
              <h2 className='order-summery-header'>order summery</h2>
        <div>
          <p>Selected items: <span>{cart.length} </span></p>
        <p>Total Price: $<span>{total}</span></p>
          <p>Total Shipping Charge: $<span>{shipping}</span></p>
          <p>Tax: $<span>{tax} </span></p>
          <h4>Grand Total: $<span>{grandTotal} </span></h4>
        </div>
        <div>
          <button className='order-summery-button btn1'>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
          <button className='order-summery-button btn2'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    </div>
  );
};

export default Cart;