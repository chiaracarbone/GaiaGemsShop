import React, { Component } from 'react';
import {ProductConsumer} from '../../../../context';
import './JewelryProduct.css';

export default class JewelryProduct extends Component {

  render() {
    return (
      <ProductConsumer>
       {value => {
          return value.detailsJewelry.map(({id, image, info, name,price}) => {
          return ( 
                  <div className="details-jewelry" key={id}>
                      <img alt='details-jewelry-img' src={image} />
                      <div className="details-jewelry-box">
                        <h2>{name}</h2>
                          <div className="details-jewelry-price">{price}</div>
                         <div className="details-jewelry-info">{info}</div>
                      </div>
                     
                 </div> 
                ) ;
          });
        }}
      </ProductConsumer>
    );
  }
}
