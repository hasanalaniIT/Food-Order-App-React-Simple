import classes from './Cart.module.css';
import React from 'react';
const cartitems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
  (item) => <li>{item.name}</li>
);
const Cart = () => {
  return (
    <div>
      cartitems
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;
