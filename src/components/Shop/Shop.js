import React, { Component } from 'react';
import Stones from '../Products/Stones/Stones';
import Jewelrys from '../Products/Jewelry/Jewelrys';
import "./Shop.css";


export default class Shop extends Component {
  render() {
    return (
      <div className="shop-class">
          <h3 className="heading-shop">Shop</h3>
          <div className="shop-body"> 
          <Jewelrys />
          <Stones />
          </div>
      </div>
    );
  }
}
