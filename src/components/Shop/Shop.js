import React, { Component } from 'react';
import ProductListStones from '../Products/Stones/ProductListStones';
//import Jewelry from '../Products/Jewelry/Jewelry';
import "./Shop.css";
import ProductList from '../Products/Jewelry/ProductList';

export default class Shop extends Component {
  render() {
    return (
      <div className="shop-class">
        <h3 className="heading-shop">Shop</h3> 
          <ProductList />
          <ProductListStones />
      </div>
    );
  }
}
