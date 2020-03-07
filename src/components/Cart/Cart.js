import React from 'react';
import './Cart.css';
import { ProductConsumer } from '../../context';
import Counter from "../Counter";

export default function CartWrapper() {
  return (
    <ProductConsumer>
      {props => <Cart {...props} />}
    </ProductConsumer>
  );
}



function Cart({cart}) {
  const totalPrice = cart.reduce((amount, {count = 1, price}) => amount += (count * price), 0);


  return <div>
      <div className="cart-head">
        <span className="cart-img"></span>
        <span className="cart-product">Product</span>
        <span className="cart-amount">Amount</span>  
        <span className="cart-price">Price</span>
        <span className="cart-delete"></span>    
      </div>
      <div style={{display: 'flex', flexFlow: 'column nowrap'}}>
          {cart.map(item => <CartItem {...item} /> )}
      </div> 
      <span className="total-price">Total: {totalPrice}€</span>
  </div>
};

function CartItem({id, image, name, price, count=1}) {

  return <ProductConsumer>
    {({removeFromCart, addCountToItem}) => {
      return  <div className="cart-list">
          <img src={image} alt='cart item'/>
          <span className="cart-list-name">{name}</span>
          <span className="cart-list-amount">
            <Counter count={count} onChange={count => addCountToItem({id, count})}/>
          </span>
          <span className="cart-list-total">{price * count}€</span>
          <span className="cart-list-delete">
            <i className="fas fa-times" onClick={() => removeFromCart(id)}></i>
          </span>

      </div>
    }}
  </ProductConsumer>
};

