import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Jewelry.css';
import {ProductConsumer} from '../../../context';

export default class Jewelry extends Component {
  render() {
    const {id, name, price, image} = this.props.product;
    return (
       <ProductConsumer> 
        {value => (
          <div onClick={() => value.handleDetail(id)}>               
            <Link to='/JewelryProduct'>
            <img alt='necklace' src={image} />
            <footer>{name}<h5>{price}</h5></footer>
            </Link> 
          </div>)}
       </ProductConsumer> 
    );
  }
}
