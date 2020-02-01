import React, { Component } from 'react';
import Stones from './Stones';
import {ProductConsumer} from '../../../context';
import './ProductListStones.css';

export default class ProductListStone extends Component {

    render() {
         return (
             <React.Fragment>
                 <h3 className="stones-heading">Stones</h3>
                 <div className='stones-class'>
                <ProductConsumer>
            {value => {
                 return value.stonesList.map( product =>{
                  return <Stones key={product.id} product={product} />;
                     })
                 }}
                </ProductConsumer>
                </div>
             </React.Fragment>
         );
    }
}    