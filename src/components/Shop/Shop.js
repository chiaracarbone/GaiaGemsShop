import React, { Component } from 'react';
import Stones from '../Products/Stones/Stones';
import Jewelry from '../Products/Jewelry/Jewelry';
import "./Shop.css";

export default class Shop extends Component {
  render() {
    return (
      <div className="shop-class">
        <h3 className="heading-shop">Shop</h3> 
          <Jewelry />
          <Stones />
      </div>
    );
  }
}
