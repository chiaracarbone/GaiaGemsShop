import React, { Component } from 'react';
import {ProductConsumer} from '../../../../context';
import './StonesProduct.css';

export default class StonesProduct extends Component {

  render() {
    return (
      <ProductConsumer>
       {value => {
          return value.detailsStones.map(({id, image, info, name,price}) => {
          return ( 
                  <div className="details-stones" key={id}>
                      <img alt='details-stones-img' src={image} />
                      <div className="details-stones-box">
                        <h2>{name}</h2>
                          <div className="details-stones-price">{price}</div>
                         <div className="details-stones-info">{info}</div>
                      </div>
                     
                 </div> 
                ) ;
          });
        }}
      </ProductConsumer>
    );
  }
}
