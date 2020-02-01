import React, { Component } from 'react';
import "./Stones.css";
import {Link} from "react-router-dom";
import {ProductConsumer} from '../../../context';

export default class Stones extends Component {
  render() {
    const {id, name, price, image} = this.props.product;
    return (
       <ProductConsumer> 
        {value => (
          <div onClick={() => value.handleDetailJew(id)}>               
            <Link to='/StonesProduct'>
            <img alt='necklace' src={image} />
            <footer>{name}<h5>{price}</h5></footer>
            </Link> 
          </div>)}
       </ProductConsumer> 
    );
  }
}
